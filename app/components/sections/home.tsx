import Image from "next/image";
import { Lexend } from "next/font/google";
import styles from "./home.module.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export default function HomeSection() {
  return (
    <section
      id="home"
      className={`${styles.home} ${lexend.variable}`}
      aria-labelledby="home-heading"
    >
      <div className={styles.content}>
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
          <a className={styles.button} href="#resume">
            RESUME
          </a>
        </div>
      </div>

      <div className={styles.portrait}>
        <Image
          className={styles.image}
          src="/images/steve-hero.webp"
          alt="Steve Umbas"
          width={1200}
          height={1191}
          preload
          sizes="(max-width: 700px) 92vw, (max-width: 1024px) 48vw, 43vw"
        />
      </div>
      <span className={styles.index} aria-hidden="true">
        01 / 05
      </span>
    </section>
  );
}
