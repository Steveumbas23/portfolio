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
          <span aria-hidden="true">×</span>
        </button>
        <header className={styles.projectHeader}>
          <p className={styles.eyebrow}>PROJECT DETAILS</p>
          <p className={styles.category}>{project.details.category}</p>
          <h2 className={styles.title} id={titleId}>{modalTitle}</h2>
          <p className={styles.summary} id={descriptionId}>{project.details.summary}</p>
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

        <div className={styles.content}>
          <section className={styles.section} aria-labelledby={`${titleId}-overview`}>
            <h3 className={styles.sectionTitle} id={`${titleId}-overview`}>Overview</h3>
            <p className={styles.copy}>{project.details.overview}</p>
          </section>

          <section className={styles.section} aria-labelledby={`${titleId}-features`}>
            <h3 className={styles.sectionTitle} id={`${titleId}-features`}>Key Features</h3>
            <ul className={styles.list}>
              {project.details.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </section>

          {project.details.technicalDetails.length > 0 && (
            <section className={styles.section} aria-labelledby={`${titleId}-technical`}>
              <h3 className={styles.sectionTitle} id={`${titleId}-technical`}>Technical Details</h3>
              <ul className={styles.list}>
                {project.details.technicalDetails.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </section>
          )}

          <section className={styles.section} aria-labelledby={`${titleId}-technologies`}>
            <h3 className={styles.sectionTitle} id={`${titleId}-technologies`}>Technology Stack</h3>
            {project.details.technologies.length > 0 ? (
              <ul className={styles.tags}>
                {project.details.technologies.map((technology) => (
                  <li className={styles.tag} key={technology}>{technology}</li>
                ))}
              </ul>
            ) : (
              <p className={styles.copy}>No technologies are listed in the available project information.</p>
            )}
          </section>

          {project.focusAreas && project.focusAreas.length > 0 && (
            <section className={styles.section} aria-labelledby={`${titleId}-focus-areas`}>
              <h3 className={styles.sectionTitle} id={`${titleId}-focus-areas`}>Focus Areas</h3>
              <ul className={styles.tags}>
                {project.focusAreas.map((focusArea) => (
                  <li className={styles.tag} key={focusArea}>{focusArea}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

      </section>
    </div>
  );
}
