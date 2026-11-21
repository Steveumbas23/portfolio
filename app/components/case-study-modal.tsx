"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import styles from "./case-study-modal.module.css";

export default function CaseStudyModal({ children }: { children: ReactNode }) {
  const router = useRouter();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const previousFocus = document.activeElement;
    closeButtonRef.current?.focus();

    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, []);

  function closeCaseStudy() {
    if (isClosing) return;
    setIsClosing(true);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    closeTimerRef.current = setTimeout(() => router.back(), reduceMotion ? 1 : 380);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeCaseStudy();
      return;
    }

    if (event.key !== "Tab") return;
    const focusableElements = event.currentTarget.querySelectorAll<HTMLElement>(
      'button:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])',
    );
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      className={`${styles.overlay} ${isClosing ? styles.closing : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Project case study"
      onClick={(event) => {
        if (event.target === event.currentTarget) closeCaseStudy();
      }}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.page}>{children}</div>
      <button
        ref={closeButtonRef}
        className={styles.closeButton}
        type="button"
        onClick={closeCaseStudy}
        aria-label="Close case study and return to projects"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
        <span>Close</span>
      </button>
    </div>
  );
}
