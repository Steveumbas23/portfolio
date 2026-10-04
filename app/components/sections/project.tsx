import Image from "next/image";
import { Lexend } from "next/font/google";
import styles from "./project.module.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const projects = [
  {
    id: "lucit",
    name: "LUCIT — Lung & Colon Cancer Detection",
    description:
      "An AI-powered web application for lung and colon cancer classification using histopathological images and Explainable AI.",
    image: "/images/lucit.png",
    imageAlt: "LUCIT cancer detection application displayed on a desktop monitor",
  },
  {
    id: "dayone",
    name: "DayOne — AI Fitness & Weight Tracker",
    description:
      "A fitness web application for tracking BMI, monitoring weight progress, setting goals, and receiving personalized guidance from an AI Coach.",
    image: "/images/dayone.png",
    imageAlt: "DayOne fitness and weight tracking application displayed on a phone",
  },
  {
    id: "lapor-jalan",
    name: "Lapor Jalan — Location-Based Road Reporting",
    description:
      "A web application for reporting damaged roads using location-based data to help users document road conditions and identify problem areas.",
    image: "/images/laporjalan.png",
    imageAlt: "Lapor Jalan road reporting application displayed on a laptop",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className={`${styles.project} ${styles[project.id]}`} id={project.id}>
      <div className={styles.imageFrame}>
        <Image
          className={styles.image}
          src={project.image}
          alt={project.imageAlt}
          width={799}
          height={700}
          sizes="(max-width: 760px) 100vw, (max-width: 1100px) 44vw, 42vw"
        />
      </div>
      <h3 className={styles.projectTitle}>{project.name}</h3>
      <p className={styles.description}>{project.description}</p>
      <a className={styles.projectLink} href={`#${project.id}`}>
        Explore Project <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className={`${styles.projects} ${lexend.variable}`}
      aria-labelledby="projects-heading"
    >
      <div className={styles.inner}>
        <div className={styles.columns}>
          <h2 className={styles.heading} id="projects-heading">
            COOL THINGS I MADE
          </h2>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
