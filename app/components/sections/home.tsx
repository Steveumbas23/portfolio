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
  return (
    <section
      className={`${styles.home} ${lexend.variable} ${archivoNarrow.variable}`}
      aria-labelledby="home-heading"
    >
      <div className={styles.content}>
        <p className={styles.eyebrow}>PORTFOLIO&nbsp; / &nbsp;UI/UX DESIGN</p>
        <h1 className={styles.heading} id="home-heading">
          <span>I’M STEVE,</span>
          <span className={styles.roleBlock}>A UI/UX</span>
          <span className={styles.roleBlock}>DESIGNER</span>
        </h1>
        <p className={styles.intro}>
          I&apos;m a UI/UX designer with a background in Informatics, passionate
          about creating clean, structured, and visually engaging digital
          experiences. I combine design thinking with technical knowledge to
          build interfaces that look great and work intuitively.
        </p>
        <div className={styles.actions}>
          <a className={styles.button} href="#projects">VIEW WORK</a>
          <a className={styles.button} href="#resume">RESUME</a>
        </div>
      </div>

      <div className={styles.portrait}>
        <Image
          className={styles.image}
          src="/images/Steve.png"
          alt="Steve Umbas"
          width={1590}
          height={1578}
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
