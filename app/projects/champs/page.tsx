import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "CHAMPS UI/UX Design Case Study | Steve Umbas",
  description:
    "A personal boxing and fight training website concept, documented as a UI/UX design case study.",
};

const pageSections = [
  { number: "01", name: "Home", note: "Brand introduction and hero." },
  { number: "02", name: "About", note: "An introduction to the club." },
  { number: "03", name: "Services", note: "The training services on offer." },
  {
    number: "04",
    name: "Why Choose Us",
    note: "Reasons to train with CHAMPS.",
  },
  { number: "05", name: "Projects", note: "Featured projects." },
  { number: "06", name: "Learn More", note: "Additional information." },
  {
    number: "07",
    name: "Testimonials",
    note: "What members say about the club.",
  },
  {
    number: "08",
    name: "Footer",
    note: "Closing information and contact details.",
  },
];

const designPalette = [
  { name: "Near black", color: "#0B0B0B" },
  { name: "CHAMPS red", color: "#C6261B" },
  { name: "White", color: "#FFFFFF" },
  { name: "Soft gray", color: "#F5F5F5" },
  { name: "Mid gray", color: "#747474" },
  { name: "Charcoal", color: "#292929" },
];

const toolsAndTechniques = [
  {
    title: "Figma",
    description: "UI/UX design and interactive prototyping.",
  },
  {
    title: "Auto Layout",
    description:
      "Structured flexible interface groups with consistent spacing.",
  },
  {
    title: "Grid Layout",
    description:
      "Organized interface elements using consistent columns, rows, and alignment.",
  },
  {
    title: "Component variants",
    description:
      "Organized reusable UI components such as buttons, navigation, and cards with default and active states.",
  },
  {
    title: "Smart Animate",
    description:
      "Created transitions between component variants for the interactive prototype.",
  },
];

const roleItems = [
  {
    title: "Information architecture",
    description:
      "Defined the page structure and section order: Home, About, Location, and Contact.",
  },
  {
    title: "Screen layout planning",
    description:
      "Laid out the page to set content order and hierarchy before visual styling.",
  },
  {
    title: "UI design",
    description:
      "Designed a high-fidelity website interface with bold boxing imagery and a strong club identity.",
  },
  {
    title: "Visual direction",
    description:
      'Shaped the overall look and feel, from the "Fight like a champion" headline to the calls to action.',
  },
];

export default function ChampsCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page} data-case-study>
        <div className={styles.container}>
          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                UI/UX DESIGN CASE STUDY · PERSONAL CONCEPT
              </p>
              <h1 className={styles.title}>CHAMPS</h1>
              <p className={styles.lede}>
                A boxing and fight training website concept built around a bold
                club identity and a clear introduction to its training offer.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.heroLink} href="#overview">
                  Explore the case study <span aria-hidden="true">↓</span>
                </a>
                <a
                  className={styles.prototypeLink}
                  href="https://www.figma.com/proto/HZRnpm2906EucECtEL3qIK/Motion-Studio?node-id=0-1&p=f&t=HWc1jAiGZulmMsLP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&fuid=1441746115386135378"
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
                <dd>Website concept</dd>
              </div>
              <div>
                <dt>Project type</dt>
                <dd>Personal project</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Design phase · UI complete</dd>
              </div>
            </dl>
          </header>

          <figure className={styles.heroVisual}>
            <Image
              src="/images/preview champs.png"
              alt="CHAMPS desktop website concept preview showing the boxing hero and surrounding page sections in a composite mockup"
              width={1200}
              height={720}
              priority
              sizes="(max-width: 760px) 100vw, 1120px"
            />
            <figcaption>
              Existing desktop overview from the portfolio. It is a composite
              mockup; individual section exports are not currently available in
              the repository.
            </figcaption>
          </figure>

          <section
            className={styles.section}
            id="overview"
            aria-labelledby="overview-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>01 / PROJECT OVERVIEW</p>
              <h2 id="overview-title">
                A digital front door for a fight training club.
              </h2>
            </div>
            <div className={styles.copy}>
              <p>
                CHAMPS is a website concept for a boxing and fight training
                club. It introduces the club, presents its training services,
                and brings supporting information together in one clear,
                easy-to-scan landing page, with a bold visual identity that
                matches the energy of the sport.
              </p>
              <div className={styles.keyScreens}>
                <strong>Key sections</strong>
                <ul>
                  {["Home", "About", "Location", "Contact"].map((section) => (
                    <li key={section}>{section}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.softSection}`}
            aria-labelledby="challenges-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>
                02 / PROBLEMS &amp; DESIGN CHALLENGES
              </p>
              <h2 id="challenges-title">
                Making a long page feel focused and easy to scan.
              </h2>
              <p className={styles.sectionNote}>
                These challenges are design assumptions for this concept, not
                findings from formal user research.
              </p>
            </div>
            <div className={styles.challengeList}>
              <article className={styles.challenge}>
                <span>01</span>
                <div>
                  <h3>Establish a strong first impression</h3>
                  <p>
                    Use boxing imagery and the &quot;Fight like a champion&quot;
                    headline to set the club&apos;s tone from the very first
                    screen.
                  </p>
                </div>
              </article>
              <article className={styles.challenge}>
                <span>02</span>
                <div>
                  <h3>Organize varied content</h3>
                  <p>
                    Present club information, services, reasons to choose the
                    club, featured projects, and testimonials within one page
                    structure, so visitors can scan the page section by section.
                  </p>
                </div>
              </article>
              <article className={styles.challenge}>
                <span>03</span>
                <div>
                  <h3>Keep calls to action visible</h3>
                  <p>
                    Give visitors a clear way to continue toward training
                    information and contact details at every point on the page.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="role-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>03 / MY ROLE</p>
              <h2 id="role-title">From page structure to a bold interface.</h2>
            </div>
            <div className={styles.roleContent}>
              <ol className={styles.roleGrid}>
                {roleItems.map((item, index) => (
                  <li key={item.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className={styles.sectionNote}>Tools: Figma.</p>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.darkSection}`}
            aria-labelledby="structure-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>04 / DESIGN PROCESS</p>
              <h2 id="structure-title">
                One landing page, from introduction to contact.
              </h2>
              <p className={styles.sectionNote}>
                The sequence below follows the section names supplied for the
                Figma frame. Individual section screenshots are not available in
                this workspace.
              </p>
            </div>
            <div className={styles.processContent}>
              <h3 className={styles.processHeading}>Design stages</h3>
              <ol className={styles.processList}>
                {pageSections.map((section) => (
                  <li className={styles.processStep} key={section.number}>
                    <span>{section.number}</span>
                    <div>
                      <h3>{section.name}</h3>
                      <p>{section.note}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.softSection}`}
            aria-labelledby="system-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>05 / DESIGN SYSTEM</p>
              <h2 id="system-title">
                A bold black-and-red identity for CHAMPS.
              </h2>
              <p className={styles.sectionNote}>
                Colors and typography are taken directly from the website
                design.
              </p>
            </div>
            <div className={styles.systemContent}>
              <div
                className={styles.palette}
                aria-label="Approximate colors sampled from the CHAMPS preview"
              >
                {designPalette.map((color) => (
                  <div className={styles.swatch} key={color.name}>
                    <span
                      className={styles.swatchColor}
                      style={{ backgroundColor: color.color }}
                    />
                    <span className={styles.swatchName}>{color.name}</span>
                    <span className={styles.swatchValue}>{color.color}</span>
                  </div>
                ))}
              </div>
              <div className={styles.tools}>
                <h3>Tools &amp; techniques</h3>
                {toolsAndTechniques.map((item) => (
                  <div key={item.title}>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.softSection}`}
            aria-labelledby="motion-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>06 / VALIDATION</p>
              <h2 id="motion-title">
                Designed with users in mind, ready to be tested.
              </h2>
            </div>
            <div className={styles.validationContent}>
              <div className={styles.outcomeGrid}>
                <article className={styles.outcomeCard}>
                  <h3>Project status</h3>
                  <dl>
                    <div>
                      <dt>Deliverable</dt>
                      <dd>Landing page UI design + interactive prototype</dd>
                    </div>
                    <div>
                      <dt>Type</dt>
                      <dd>Personal project</dd>
                    </div>
                    <div>
                      <dt>Interactive prototype</dt>
                      <dd>Available in Figma</dd>
                    </div>
                    <div>
                      <dt>Development</dt>
                      <dd>Design phase · prototype ready</dd>
                    </div>
                  </dl>
                </article>
                <article className={styles.reflectionCard}>
                  <h3>Reflection</h3>
                  <p>
                    The design communicates a bold, high-energy direction for
                    CHAMPS and presents its main content areas in one clear
                    landing page, from the hero to the testimonials and contact
                    details.
                  </p>
                </article>
                <article className={styles.reflectionCard}>
                  <h3>Research &amp; testing</h3>
                  <p>
                    CHAMPS is currently focused on UI/UX exploration and
                    interface design. User testing is the next step, starting
                    with content hierarchy and calls to action, followed by
                    responsive layouts for tablet and mobile.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
            <p>CHAMPS · Personal UI/UX Design Concept</p>
          </footer>
        </div>
      </main>
    </>
  );
}
