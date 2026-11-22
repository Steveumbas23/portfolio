import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Barlow_Condensed, Inter, Rajdhani } from "next/font/google";
import Navbar from "../../components/Navbar";
import styles from "./page.module.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-aprilia-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-aprilia-body",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-aprilia-stat",
});

export const metadata: Metadata = {
  title: "Aprilia Racing — The MotoGP Experience | Steve Umbas",
  description:
    "A personal UI/UX website concept exploring a modern digital experience for Aprilia Racing and the MotoGP world.",
};

const responsibilities = [
  "Defined the website structure and navigation.",
  "Planned the content hierarchy and page flow.",
  "Developed wireframes and page layouts.",
  "Designed high-fidelity website interfaces.",
  "Built reusable UI components with variants and hover states.",
  "Created an interactive prototype using Smart Animate.",
];

const contentAreas = [
  {
    number: "01",
    title: "Home / Hero Section",
    detail: "A high-impact RS-GP introduction with primary calls to action.",
  },
  {
    number: "02",
    title: "Motorcycle / RS-GP",
    detail:
      "A visual presentation of the Aprilia racing motorcycle, including overview, livery, and aerodynamics.",
  },
  {
    number: "03",
    title: "Technical Specifications",
    detail:
      "A dedicated area for clear, easy-to-scan motorcycle specifications.",
  },
  {
    number: "04",
    title: "Gallery & Videos",
    detail: "A media-led section for racing and motorcycle imagery.",
  },
  {
    number: "05",
    title: "Racing Division Contact",
    detail: "A contact area for the racing division.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Design Direction",
    description:
      "Defined a motorsport-inspired visual identity using a dark interface, bold accents, and racing imagery.",
  },
  {
    number: "02",
    title: "Information Architecture",
    description:
      "Organized the motorcycle, specifications, media, and contact content into a clear website structure.",
  },
  {
    number: "03",
    title: "Layout Planning",
    description: "Planned page layouts and content hierarchy for each section.",
  },
  {
    number: "04",
    title: "UI Design",
    description:
      "Designed the high-fidelity interface around the RS-GP hero, specifications, gallery, and racing division contact content.",
  },
  {
    number: "05",
    title: "Prototyping",
    description:
      "Built an interactive prototype in Figma with component variants, hover states, and Smart Animate.",
  },
];

const palette = [
  { name: "Main dark", value: "#121212" },
  { name: "Surface dark", value: "#1C1B1B" },
  { name: "Accent red", value: "#E32636" },
  { name: "Accent stroke", value: "#FF5A65" },
  { name: "Main text", value: "#FFFFFF" },
  { name: "Soft text", value: "#F5F5F5" },
  { name: "Main border", value: "#3E3E41" },
];

const tools = [
  { name: "Figma", description: "UI/UX design and interactive prototyping." },
  {
    name: "Auto Layout",
    description: "Structure flexible interface groups with consistent spacing.",
  },
  {
    name: "Component variants",
    description:
      "Organized reusable UI components with default and hover states.",
  },
  {
    name: "Constraints",
    description: "Defined how elements align and resize within each section.",
  },
  {
    name: "Smart Animate",
    description:
      "Created hover transitions between component variants for the interactive prototype.",
  },
];

export default function ApriliaCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main
        className={`${styles.page} ${barlow.variable} ${inter.variable} ${rajdhani.variable}`}
        data-case-study
      >
        <div className={styles.container}>
          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                UI/UX DESIGN CASE STUDY · PERSONAL CONCEPT
              </p>
              <p className={styles.heroSeries}>THE MOTOGP EXPERIENCE</p>
              <h1 className={styles.title}>Aprilia Racing</h1>
              <p className={styles.lede}>
                A modern digital concept introducing the team, its RS-GP
                motorcycle, racing technology, and the world of MotoGP.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.heroLink} href="#project-overview">
                  Explore the case study <span aria-hidden="true">↓</span>
                </a>
                <a
                  className={styles.prototypeLink}
                  href="https://www.figma.com/proto/N0FdntZ3gG1JCF4dRP8CMh/Website-Motor-GP-Aprilia?node-id=0-1&p=f&t=XtRkWswgago5qiQA-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A5&fuid=1441746115386135378"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Interactive Prototype <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <dl className={styles.projectFacts}>
              <div>
                <dt>My role</dt>
                <dd>UI/UX Designer</dd>
              </div>
              <div>
                <dt>Platform</dt>
                <dd>Interactive website concept</dd>
              </div>
              <div>
                <dt>Project type</dt>
                <dd>Personal project</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Interactive prototype ready</dd>
              </div>
            </dl>
          </header>

          <figure className={styles.heroVisual}>
            <Image
              src="/images/preview aprilia.png"
              alt="Aprilia Racing website concept shown as a composite preview with an RS-GP hero, specifications, and racing media"
              width={1200}
              height={750}
              priority
              sizes="(max-width: 760px) 100vw, 1200px"
            />
            <figcaption>
              Supplied composite preview of the Aprilia Racing website UI.
              Separate screen exports were not included in the project assets
              reviewed.
            </figcaption>
          </figure>

          <section
            className={styles.section}
            id="project-overview"
            aria-labelledby="overview-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>01 / PROJECT OVERVIEW</p>
              <h2 id="overview-title">
                Crafting a Modern &amp; Immersive Motorsport Experience.
              </h2>
            </div>
            <div className={styles.overviewCopy}>
              <p>
                Aprilia Racing: The MotoGP Experience is a website concept that
                introduces the team identity, the RS-GP motorcycle, its
                technology, and its performance through a modern, engaging
                interface. <br />
                Unofficial fan concept. Not affiliated with Aprilia or Dorna
                Sports.
              </p>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.tintedSection}`}
            aria-labelledby="challenges-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>
                02 / PROBLEMS &amp; DESIGN CHALLENGES
              </p>
              <h2 id="challenges-title">
                Designing for Speed, Clarity, and Immersion.
              </h2>
              <p className={styles.sectionNote}>
                The intended users and challenges below are design assumptions
                for this concept, not findings from formal user research.
              </p>
            </div>
            <div className={styles.needsGrid}>
              <article className={styles.infoCard}>
                <span className={styles.cardIndex}>A</span>
                <h3>Intended users</h3>
                <ul>
                  <li>
                    <strong>MotoGP enthusiasts</strong> who want to explore the
                    bike and its technology in depth.
                  </li>
                  <li>
                    <strong>Aprilia fans</strong> who want to connect with the
                    team identity and racing heritage.
                  </li>
                  <li>
                    <strong>Motorsport audiences</strong> who want a quick,
                    clear overview of the RS-GP.
                  </li>
                </ul>
              </article>
              <article className={styles.infoCard}>
                <span className={styles.cardIndex}>B</span>
                <h3>Design challenges</h3>
                <ul>
                  <li>
                    How might the racing identity be communicated visually?
                  </li>
                  <li>
                    How might motorcycle specifications be presented clearly?
                  </li>
                  <li>
                    How might racing content and media be easier to explore?
                  </li>
                  <li>
                    How might the experience feel immersive while remaining
                    intuitive?
                  </li>
                </ul>
              </article>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="role-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>03 / MY ROLE</p>
              <h2 id="role-title">
                From Visual Direction to Interactive Design.
              </h2>
            </div>
            <div className={styles.roleContent}>
              <div className={styles.contributionGrid}>
                {responsibilities.map((item, index) => (
                  <div className={styles.contribution} key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <p className={styles.roleTools}>
                <strong>Tools:</strong> Figma, Auto Layout, Components,
                Variants, Interactive Prototyping.
              </p>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.darkSection}`}
            aria-labelledby="process-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>04 / DESIGN PROCESS</p>
              <h2 id="process-title">
                From Motorsport Identity to Interactive Design.
              </h2>
              <p className={styles.sectionNote}>
                The sections below cover the main areas of the website concept.
              </p>
            </div>
            <div className={styles.processContent}>
              <div className={styles.contentAreas}>
                {contentAreas.map((area) => (
                  <article className={styles.contentArea} key={area.number}>
                    <span>{area.number}</span>
                    <div>
                      <h3>{area.title}</h3>
                      <p>{area.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
              <h3 className={styles.processHeading}>Design stages</h3>
              <ol className={styles.processList}>
                {processSteps.map((step) => (
                  <li className={styles.processStep} key={step.number}>
                    <span className={styles.processNumber}>{step.number}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.tintedSection}`}
            aria-labelledby="system-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>05 / DESIGN SYSTEM</p>
              <h2 id="system-title">
                Bold, Dynamic &amp; Motorsport-Inspired.
              </h2>
              <p className={styles.sectionNote}>
                The visual direction pairs a motorsport-inspired palette with
                practical design tools and methods.
              </p>
            </div>
            <div className={styles.systemContent}>
              <div>
                <h3 className={styles.subheading}>Color palette</h3>
                <div
                  className={styles.palette}
                  aria-label="Aprilia Racing concept color palette"
                >
                  {palette.map((color) => (
                    <div className={styles.swatch} key={color.name}>
                      <span
                        className={styles.swatchColor}
                        style={{ backgroundColor: color.value }}
                      />
                      <span className={styles.swatchName}>{color.name}</span>
                      <span className={styles.swatchValue}>{color.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className={styles.subheading}>Tools &amp; techniques</h3>
                <div className={styles.tools}>
                  {tools.map((tool) => (
                    <div key={tool.name}>
                      <strong>{tool.name}</strong>
                      <span>{tool.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            className={styles.section}
            aria-labelledby="validation-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>06 / VALIDATION</p>
              <h2 id="validation-title">
                Designed with users in mind, ready to be tested.
              </h2>
            </div>
            <div className={styles.validationContent}>
              <div className={styles.outcomeGrid}>
                <div className={styles.outcomeCard}>
                  <h3>Project status</h3>
                  <dl>
                    <div>
                      <dt>Status</dt>
                      <dd>Design phase · prototype ready</dd>
                    </div>
                    <div>
                      <dt>Deliverable</dt>
                      <dd>UI design + interactive prototype</dd>
                    </div>
                    <div>
                      <dt>Prototype</dt>
                      <dd>Interactive prototype available in Figma</dd>
                    </div>
                  </dl>
                </div>
                <div className={styles.validationCard}>
                  <span className={styles.validationMark} aria-hidden="true">
                    i
                  </span>
                  <h3>Research &amp; testing</h3>
                  <p>
                    Aprilia Racing: The MotoGP Experience is currently focused
                    on UI/UX exploration and interface design. User testing is
                    the next step, starting with the main navigation and the
                    RS-GP overview section to validate and refine the
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
            <p>Aprilia Racing · Personal UI/UX Design Concept</p>
          </footer>
        </div>
      </main>
    </>
  );
}
