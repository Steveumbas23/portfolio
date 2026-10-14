"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import styles from "./certificates.module.css";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  image?: string;
  verifiedUrl?: string;
};

export default function CertificateGallery({ certificates }: { certificates: Certificate[] }) {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!activeCertificate) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeCertificate]);

  function closePreview() {
    setActiveCertificate(null);
    setIsZoomed(false);
    requestAnimationFrame(() => openerRef.current?.focus());
  }

  function openPreview(certificate: Certificate, opener: HTMLButtonElement) {
    openerRef.current = opener;
    setIsZoomed(false);
    setActiveCertificate(certificate);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      closePreview();
      return;
    }

    if (event.key === "Tab") {
      const focusable = event.currentTarget.querySelectorAll<HTMLElement>("button:not(:disabled), a[href]");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
  }

  return (
    <>
      <ul className={styles.grid} data-reveal-stagger>
        {certificates.map((certificate) => (
          <li className={styles.item} key={certificate.id}>
            <button
              className={styles.certificatePreview}
              type="button"
              aria-label={`Preview ${certificate.title}`}
              onClick={(event) => openPreview(certificate, event.currentTarget)}
            >
              {certificate.image ? (
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={styles.thumbnail}
                />
              ) : (
                <div className={styles.placeholder}>
                  <span className={styles.placeholderTitle}>{certificate.title}</span>
                  <span className={styles.placeholderNote}>CERTIFICATE PREVIEW UNAVAILABLE</span>
                </div>
              )}
            </button>
            <div className={styles.itemDetails}>
              <h2 className={styles.certificateTitle}>{certificate.title}</h2>
              <p className={styles.issuer}>{certificate.issuer}</p>
              {certificate.year && <p className={styles.year}>{certificate.year}</p>}
              {certificate.verifiedUrl ? (
                <a className={styles.viewAction} href={certificate.verifiedUrl} target="_blank" rel="noreferrer">
                  View Certificate <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <button
                  className={styles.viewAction}
                  type="button"
                  onClick={(event) => openPreview(certificate, event.currentTarget)}
                >
                  View Certificate <span aria-hidden="true">↗</span>
                </button>
              )}
              {!certificate.image && !certificate.verifiedUrl && (
                <p className={styles.unavailableNote}>Certificate file or verified link not available.</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      {activeCertificate && (
        <div
          className={styles.overlay}
          onClick={(event) => {
            if (event.target === event.currentTarget) closePreview();
          }}
          onKeyDown={handleKeyDown}
        >
          <section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="certificate-dialog-title">
            <header className={styles.dialogHeader}>
              <div>
                <p className={styles.dialogIssuer}>{activeCertificate.issuer}{activeCertificate.year ? ` · ${activeCertificate.year}` : ""}</p>
                <h2 className={styles.dialogTitle} id="certificate-dialog-title">{activeCertificate.title}</h2>
              </div>
              <button
                className={styles.closeButton}
                ref={closeButtonRef}
                type="button"
                onClick={closePreview}
                aria-label="Close certificate preview"
              >
                ×
              </button>
            </header>
            <div className={`${styles.imageViewport} ${isZoomed ? styles.imageViewportZoomed : ""}`}>
              {activeCertificate.image ? (
                <button
                  className={styles.zoomButton}
                  type="button"
                  onClick={() => setIsZoomed((zoomed) => !zoomed)}
                  aria-pressed={isZoomed}
                  aria-label={isZoomed ? "Fit certificate to preview" : "Zoom certificate"}
                >
                  <Image
                    src={activeCertificate.image}
                    alt={`${activeCertificate.title} certificate`}
                    width={1600}
                    height={1200}
                    unoptimized
                    className={`${styles.certificateImage} ${isZoomed ? styles.certificateImageZoomed : ""}`}
                  />
                </button>
              ) : (
                <div className={styles.modalUnavailable}>
                  <p className={styles.unavailableEyebrow}>PREVIEW UNAVAILABLE</p>
                  <p>{activeCertificate.title}</p>
                  <span>No certificate image or verified certificate link is available in the project.</span>
                </div>
              )}
            </div>
            {activeCertificate.verifiedUrl && (
              <footer className={styles.dialogFooter}>
                <a className={styles.verifyLink} href={activeCertificate.verifiedUrl} target="_blank" rel="noreferrer">
                  Verify certificate with {activeCertificate.issuer} <span aria-hidden="true">↗</span>
                </a>
              </footer>
            )}
          </section>
        </div>
      )}
    </>
  );
}
