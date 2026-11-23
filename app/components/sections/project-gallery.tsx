"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import type { Project } from "./project";
import styles from "./project.module.css";

const ProjectModal = dynamic(() => import("./project-modal"));

export default function ProjectGallery({
  projects,
  fontClassName,
}: {
  projects: Project[];
  fontClassName: string;
}) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
            <button
              className={styles.imageFrame}
              type="button"
              onClick={(event) => openProject(project, event)}
              aria-label={`Preview ${project.name}`}
              aria-haspopup="dialog"
            >
              <Image
                className={styles.image}
                src={project.image}
                alt={project.imageAlt}
                width={799}
                height={700}
                sizes="(max-width: 760px) 100vw, (max-width: 1100px) 44vw, 33vw"
              />
            </button>
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
                {project.caseStudyUrl ? (
                  <Link className={styles.projectLink} href={project.caseStudyUrl} scroll={false}>
                    Read Case Study <span aria-hidden="true">↗</span>
                  </Link>
                ) : (
                  <button
                    className={styles.projectLink}
                    type="button"
                    onClick={(event) => openProject(project, event)}
                    aria-haspopup="dialog"
                  >
                    Explore Project <span aria-hidden="true">↗</span>
                  </button>
                )}
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
      {activeProject && createPortal(
        <ProjectModal
          key={activeProject.id}
          project={activeProject}
          fontClassName={fontClassName}
          isClosing={isClosing}
          onClose={closeProject}
        />,
        document.body,
      )}
    </>
  );
}
