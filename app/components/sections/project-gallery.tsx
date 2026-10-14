"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import ProjectModal from "./project-modal";
import type { Project } from "./project";
import styles from "./project.module.css";

export default function ProjectGallery({
  projects,
  fontClassName,
}: {
  projects: Project[];
  fontClassName: string;
}) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  useEffect(() => () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  }, []);

  function openProject(project: Project, event: MouseEvent<HTMLButtonElement>) {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    openerRef.current = event.currentTarget;
    setIsClosing(false);
    setActiveProject(project);
  }

  function closeProject() {
    if (isClosing) return;
    setIsClosing(true);
    closeTimerRef.current = setTimeout(() => {
      setActiveProject(null);
      setIsClosing(false);
      openerRef.current?.focus();
      closeTimerRef.current = null;
    }, 180);
  }

  return (
    <>
      <div className={styles.columns} data-reveal-stagger>
        {projects.map((project, index) => (
          <article className={`${styles.project} ${styles[project.id] ?? ""}`} id={project.id} key={project.id}>
            <div className={styles.imageFrame}>
              <Image
                className={styles.image}
                src={project.image}
                alt={project.imageAlt}
                width={799}
                height={700}
                sizes="(max-width: 760px) 100vw, (max-width: 1100px) 44vw, 33vw"
              />
            </div>
            <div className={styles.projectBody}>
              <p className={styles.projectIndex}>SELECTED PROJECT · {String(index + 1).padStart(2, "0")}</p>
              {project.category && <p className={styles.projectCategory}>{project.category}</p>}
              <h3 className={styles.projectTitle}>{project.name}</h3>
              <p className={styles.description}>{project.description}</p>
              {project.technologies.length > 0 && (
                <ul className={styles.technologies} aria-label={`${project.name} technologies`}>
                  {project.technologies.map((technology) => (
                    <li className={styles.technology} key={technology}>{technology}</li>
                  ))}
                </ul>
              )}
              <div className={styles.projectActions}>
                <button
                  className={styles.projectLink}
                  type="button"
                  onClick={(event) => openProject(project, event)}
                  aria-haspopup="dialog"
                >
                  Explore Project <span aria-hidden="true">↗</span>
                </button>
                {project.externalUrl && (
                  <a
                    className={styles.externalProjectLink}
                    href={project.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.externalLinkLabel ?? "Open Project"} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      {activeProject && portalRoot && createPortal(
        <ProjectModal
          project={activeProject}
          fontClassName={fontClassName}
          isClosing={isClosing}
          onClose={closeProject}
        />,
        portalRoot,
      )}
    </>
  );
}
