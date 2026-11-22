import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Pertamina Offshore UI/UX Case Study | Steve Umbas",
  description:
    "A personal website design concept for an offshore energy landing page, developed from wireframe to high-fidelity UI.",
};

const designChallenges = [
  {
    number: "01",
    title: "Organize dense information",
    description:
      "Structure company, operations, services, and safety content into a clear sequence, so visitors can scan the page section by section.",
  },
  {
    number: "02",
    title: "Make navigation easy to scan",
    description:
      'Keep the main sections visible in the header and make the "Request Consultation" action easy to find at every point on the page.',
  },
  {
    number: "03",
    title: "Build a clear visual hierarchy",
    description:
      "Give the hero, supporting metrics, and company information distinct roles, so the most important message is read first.",
  },
  {
    number: "04",
    title: "Present a professional energy-sector identity",
    description:
      "Balance industrial imagery, a restrained navy and gold palette, and readable content to build trust for a corporate offshore energy brand.",
  },
];

const roleItems = [
  {
    title: "Information architecture",
    description:
      "Defined the landing page structure and section order, from hero to contact.",
  },
  {
    title: "Page flow planning",
    description:
      "Planned how visitors move through company, capability, safety, and contact content.",
  },
  {
    title: "Wireframing",
    description:
      "Built a structural wireframe to set layout and content hierarchy before visual design.",
  },
  {
    title: "High-fidelity UI design",
    description:
      "Developed the wireframe into a polished interface with a navy and gold visual identity.",
  },
  {
    title: "Reusable component design",
    description:
      "Built reusable components with variants and hover states, including buttons, cards, and navigation.",
  },
  {
    title: "Interactive prototyping",
    description:
      "Created an interactive prototype in Figma using Smart Animate.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Design Direction",
    description:
      "Set the direction for a corporate offshore energy landing page that feels professional, trustworthy, and easy to scan.",
  },
  {
    number: "02",
    title: "Information Architecture",
    description:
      "Grouped the content into navigation, hero, metrics, company introduction, capabilities, safety, operating areas, and contact.",
  },
  {
    number: "03",
    title: "Wireframing",
    description:
      "Laid out the navigation, hero, metrics strip, and content blocks before applying visual styling.",
  },
  {
    number: "04",
    title: "UI Design",
    description:
      "Developed the wireframe into a high-fidelity landing page with offshore imagery, a navy and gold palette, and clear content grouping.",
  },
  {
    number: "05",
    title: "Refinement",
    description:
      "Refined spacing, type hierarchy, image placement, and action emphasis across all sections.",
  },
  {
    number: "06",
    title: "Interactive prototyping",
    description:
      "Built an interactive prototype in Figma with component variants, hover states, and Smart Animate.",
  },
];

const palette = [
  { name: "Deep navy", value: "#092C50" },
  { name: "Accent gold", value: "#B79D64" },
  { name: "White", value: "#FFFFFF" },
  { name: "Soft background", value: "#F8F9FC" },
  { name: "Status green", value: "#00A859" },
  { name: "Action red", value: "#E52529" },
  { name: "Slate text", value: "#64748B" },
  { name: "Border gray", value: "#CBD5E1" },
];

export default function PertaminaOffshoreCaseStudyPage() {
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
              <h1 className={styles.title}>
                Pertamina <span>Offshore</span>
              </h1>
              <p className={styles.lede}>
                A corporate landing page concept for offshore energy, developed
                from a structural wireframe into a high-fidelity interface with
                an interactive prototype.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.sectionLink} href="#overview">
                  Explore the case study <span aria-hidden="true">↓</span>
                </a>
                <a
                  className={styles.prototypeLink}
                  href="https://www.figma.com/proto/YQWCVajSW78n3kodqsI6wP/Pertamina-Offshore-Corporate-Website-UI-UX?node-id=2-8&t=bfzF0I2XYI9qGHPA-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&fuid=1441746115386135378"
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
                <dd>Interactive landing page concept</dd>
              </div>
              <div>
                <dt>Project type</dt>
                <dd>Personal project</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Design phase · prototype ready</dd>
              </div>
            </dl>
          </header>

          <figure className={styles.comparisonBoard}>
            <Image
              src="/images/wireframe.png"
              alt="Pertamina Offshore desktop wireframe and matching high-fidelity website design shown side by side"
              width={595}
              height={842}
              priority
              sizes="(max-width: 760px) 100vw, 1200px"
            />
            <figcaption>
              Desktop wireframe and corresponding final visual design for this
              personal concept, not an official Pertamina website.
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
                A clearer landing page for offshore operations.
              </h2>
            </div>
            <div className={styles.copy}>
              <p>
                Pertamina Offshore is a corporate landing page concept that
                introduces offshore energy operations through a clear,
                structured layout. It guides visitors through the company
                profile, core capabilities, safety commitments, and contact
                information, with a design that feels professional, trustworthy,
                and easy to scan.
              </p>
              <p>
                The project started as a structural wireframe and was developed
                into a high-fidelity interface with an interactive prototype.
              </p>
              <div className={styles.keySections}>
                <strong>Key sections</strong>
                <ul>
                  {[
                    "Hero",
                    "Company overview",
                    "Offshore capabilities",
                    "Safety & performance",
                    "Operating areas",
                    "Contact",
                  ].map((section) => (
                    <li key={section}>{section}</li>
                  ))}
                </ul>
              </div>
              <p>
                <em>Unofficial concept. Not affiliated with PT Pertamina.</em>
              </p>
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
                Make complex information feel approachable.
              </h2>
              <p className={styles.sectionNote}>
                These challenges are design assumptions for this concept, not
                findings from formal user research.
              </p>
            </div>
            <div className={styles.challengeList}>
              {designChallenges.map((item) => (
                <article className={styles.challenge} key={item.number}>
                  <span>{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section} aria-labelledby="role-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>03 / MY ROLE</p>
              <h2 id="role-title">
                From page structure to interactive design.
              </h2>
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
              <p className={styles.sectionNote}>
                Tools: Figma, Auto Layout, Components, Variants, Interactive
                Prototyping.
              </p>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.darkSection}`}
            aria-labelledby="process-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>04 / DESIGN PROCESS</p>
              <h2 id="process-title">From wireframe to final visual design.</h2>
              <p className={styles.sectionNote}>
                The wireframe and the final design share the same structure, so
                the changes between them are easy to compare.
              </p>
            </div>
            <div className={styles.processContent}>
              <h3>Wireframing</h3>
              <div className={styles.wireframeNotes}>
                <article>
                  <span>01</span>
                  <h3>Establish the page hierarchy</h3>
                  <p>
                    The wireframe places the navigation and hero first, then
                    continues with a metrics band and a company introduction.
                  </p>
                </article>
                <article>
                  <span>02</span>
                  <h3>Keep content groups distinct</h3>
                  <p>
                    Operational themes are organized into smaller content areas,
                    so each topic can be read on its own.
                  </p>
                </article>
                <article>
                  <span>03</span>
                  <h3>Preserve the comparison</h3>
                  <p>
                    The wireframe and the final design use the same page
                    structure, which makes the visual changes easy to compare
                    side by side.
                  </p>
                </article>
              </div>
              <h3>Design stages</h3>
              <ol className={styles.processList}>
                {processSteps.map((item) => (
                  <li className={styles.processStep} key={item.number}>
                    <span>{item.number}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="system-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>05 / DESIGN SYSTEM</p>
              <h2 id="system-title">
                A restrained, image-led corporate visual direction.
              </h2>
              <p className={styles.sectionNote}>
                Colors and typography are taken directly from the website
                design.
              </p>
            </div>
            <div className={styles.systemContent}>
              <div
                className={styles.palette}
                aria-label="Approximate colors sampled from the final design image"
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
              <div className={styles.tools}>
                <h3 className={styles.subheading}>Tools &amp; techniques</h3>
                <div>
                  <strong>Figma</strong>
                  <span>UI/UX design and interactive prototyping.</span>
                </div>
                <div>
                  <strong>Auto Layout</strong>
                  <span>
                    Structured flexible interface groups with consistent
                    spacing.
                  </span>
                </div>
                <div>
                  <strong>Component variants</strong>
                  <span>
                    Organized reusable UI components with default and hover
                    states.
                  </span>
                </div>
                <div>
                  <strong>Constraints</strong>
                  <span>
                    Defined how elements align and resize within each section.
                  </span>
                </div>
                <div>
                  <strong>Smart Animate</strong>
                  <span>
                    Created hover transitions between component variants for the
                    interactive prototype.
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.softSection}`}
            aria-labelledby="validation-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>06 / VALIDATION</p>
              <h2 id="validation-title">
                Designed with users in mind, ready to be tested.
              </h2>
            </div>
            <div className={styles.validationContent}>
              <div className={styles.responsiveNote}>
                <div className={styles.deviceLabels}></div>
              </div>
              <div className={styles.outcomeGrid}>
                <article className={styles.outcomeCard}>
                  <h3>Project status</h3>
                  <dl>
                    <div>
                      <dt>Deliverable</dt>
                      <dd>
                        Wireframe, high-fidelity UI design, and interactive
                        prototype
                      </dd>
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
                    The paired wireframe and visual design show how content
                    order, imagery, color, and hierarchy shape the landing page.
                    Moving from a structural layout to a polished interface made
                    it clear how much the page hierarchy guides a visitor from
                    the hero to the contact section.
                  </p>
                </article>
                <article className={styles.reflectionCard}>
                  <h3>Research &amp; testing</h3>
                  <p>
                    Pertamina Offshore is currently focused on UI/UX exploration
                    and interface design. User testing is the next step,
                    starting with navigation clarity and the &quot;Request
                    Consultation&quot; flow, followed by responsive layouts for
                    tablet and mobile.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
            <p>Pertamina Offshore · Personal Website Design Concept</p>
          </footer>
        </div>
      </main>
    </>
  );
}
