"use client";

import Image from "next/image";
import { Archivo_Narrow, Lexend } from "next/font/google";
import styles from "./home.module.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-archivo-narrow",
});

export default function HomeSection() {
  function handleResumeClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    const resumeButton = document.getElementById("resume");
    if (!resumeButton) return;

    resumeButton.classList.remove("resume-highlight");
    void resumeButton.offsetWidth;
    resumeButton.classList.add("resume-highlight");
    resumeButton.scrollIntoView({ behavior: "smooth", block: "center" });
    window.history.replaceState(null, "", "#resume");
  }

  return (
    <section
      id="home"
      className={`${styles.home} ${lexend.variable} ${archivoNarrow.variable}`}
      aria-labelledby="home-heading"
    >
      <div className={`${styles.content} home-content-enter`}>
        <p className={styles.eyebrow}>PORTFOLIO</p>
        <h1 className={styles.heading} id="home-heading">
          <span>I’M STEVE,</span>
          <span className={styles.roleBlock}>A UI/UX DESIGNER</span>
          <span className={styles.roleBlock}>&amp; CREATIVE</span>
          <span className={styles.roleBlock}>THINKER</span>
        </h1>
        <p className={styles.intro}>
          I&apos;m an Informatics graduate passionate about UI/UX design and
          digital product development. I enjoy creating intuitive user
          interfaces and meaningful user experiences through user-centered
          design, wireframing, and prototyping. Skilled in Figma and frontend
          development, I&apos;m eager to learn and create user-friendly digital
          solutions.
        </p>
        <div className={styles.actions}>
          <a className={styles.button} href="#projects">
            VIEW WORK
          </a>
          <a
            className={styles.button}
            href="#resume"
            onClick={handleResumeClick}
          >
            RESUME
          </a>
        </div>
      </div>

      <div className={`${styles.portrait} home-portrait-enter`}>
        <Image
          className={styles.image}
          src="/images/steve.webp"
          alt="Steve Umbas"
          width={3180}
          height={3156}
          priority
          sizes="(max-width: 700px) 92vw, (max-width: 1024px) 48vw, 43vw"
        />
      </div>
      <span className={styles.index} aria-hidden="true">
        01 / 05
      </span>
    </section>
  );
}
