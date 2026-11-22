"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { Project } from "./project";
import styles from "./project-modal.module.css";

type ProjectModalProps = {
  project: Project;
  fontClassName: string;
  isClosing: boolean;
  onClose: () => void;
};

export default function ProjectModal({ project, fontClassName, isClosing, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const titleId = `project-dialog-title-${project.id}`;
  const descriptionId = `project-dialog-description-${project.id}`;
  const modalTitle = project.modalTitle ?? project.name;
  const galleryImages = project.galleryImages;
  const category = project.category ?? project.details.category;

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, [project.id]);

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key !== "Tab") return;

    const focusableElements = event.currentTarget.querySelectorAll<HTMLElement>(
      'button:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (!firstElement || !lastElement) return;
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  return (
    <div
      className={`${styles.overlay} ${fontClassName} ${isClosing ? styles.closing : ""}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onKeyDown={handleKeyDown}
      >
        <button
          className={styles.closeButton}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          ref={closeButtonRef}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
        <header className={styles.projectHeader}>
          <p className={styles.eyebrow}>PROJECT PREVIEW</p>
          <p className={styles.category}>{category}</p>
          <h2 className={styles.title} id={titleId}>{modalTitle}</h2>
          <p className={styles.summary} id={descriptionId}>{project.description}</p>
        </header>

        <figure className={`${styles.visual} ${galleryImages ? styles.carousel : ""}`}>
          {galleryImages ? (
            <>
              <Image
                className={styles.carouselImage}
                src={galleryImages[galleryIndex].src}
                alt={galleryImages[galleryIndex].alt}
                fill
                sizes="(max-width: 760px) 92vw, 860px"
                priority
              />
              <button
                className={`${styles.carouselArrow} ${styles.previousArrow}`}
                type="button"
                aria-label="Show previous poster"
                onClick={() => setGalleryIndex((index) => (index - 1 + galleryImages.length) % galleryImages.length)}
              >
                <span aria-hidden="true">‹</span>
              </button>
              <button
                className={`${styles.carouselArrow} ${styles.nextArrow}`}
                type="button"
                aria-label="Show next poster"
                onClick={() => setGalleryIndex((index) => (index + 1) % galleryImages.length)}
              >
                <span aria-hidden="true">›</span>
              </button>
              <figcaption className={styles.carouselCounter} aria-live="polite">
                {galleryIndex + 1} / {galleryImages.length}
              </figcaption>
            </>
          ) : (
            <Image
              className={styles.modalImage}
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 760px) 92vw, 860px"
              priority
            />
          )}
        </figure>

        <div className={styles.previewContent}>
          <section className={styles.previewSection} aria-labelledby={`${titleId}-role`}>
            <h3 className={styles.sectionTitle} id={`${titleId}-role`}>My Role</h3>
            {project.focusAreas && project.focusAreas.length > 0 ? (
              <ul className={styles.tags}>
                {project.focusAreas.map((area) => <li className={styles.tag} key={area}>{area}</li>)}
              </ul>
            ) : (
              <p className={styles.copy}>Role details are not listed for this project.</p>
            )}
          </section>
          <section className={styles.previewSection} aria-labelledby={`${titleId}-tools`}>
            <h3 className={styles.sectionTitle} id={`${titleId}-tools`}>Tools &amp; Technologies</h3>
            <ul className={styles.tags}>
              {project.technologies.map((technology) => (
                <li className={styles.tag} key={technology}>{technology}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}
