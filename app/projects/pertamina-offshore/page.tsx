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
      "Structure company, operations, services, and sustainability content so visitors can scan the landing page in a clear sequence.",
  },
  {
    number: "02",
    title: "Make navigation easy to scan",
    description:
      "Keep the main sections visible in the header and make the consultation action easy to find.",
  },
  {
    number: "03",
    title: "Build a clear visual hierarchy",
    description:
      "Give the offshore hero, supporting metrics, and company information distinct roles within the page.",
  },
  {
    number: "04",
    title: "Present a professional energy-sector identity",
    description:
      "Balance industrial imagery, restrained color, and readable content for a corporate offshore energy concept.",
  },
];

const roleItems = [
  "Information architecture",
  "User flow planning",
  "Wireframing",
  "High-fidelity UI design",
  "Reusable component design",
  "Design refinement",
];

const pageSections = [
  { number: "01", title: "Navigation", description: "Header links for Home, About Us, Operations, Services, Sustainability, and Contact, with a Request Consultation action." },
  { number: "02", title: "Hero", description: "Offshore imagery, an energy-future headline, supporting copy, and two exploration actions." },
  { number: "03", title: "At-a-glance metrics", description: "A horizontal band of operational and company summary metrics." },
  { number: "04", title: "About & operational excellence", description: "An introductory company section with supporting offshore imagery and operational themes." },
  { number: "05", title: "Capability themes", description: "Content cards for operational excellence, safety, technology, and sustainability." },
];

const processSteps = [
  {
    number: "01",
    title: "Understanding",
    description:
      "Set the design direction for a corporate offshore energy landing page. These are project goals, not findings from user research.",
  },
  {
    number: "02",
    title: "Information Architecture",
    description:
      "Group the visible content into navigation, hero, metrics, company introduction, and operational capability themes.",
  },
  {
    number: "03",
    title: "Wireframing",
    description:
      "Lay out the navigation, hero, metrics strip, and information blocks before applying visual styling.",
  },
  {
    number: "04",
    title: "UI Design",
    description:
      "Develop the layout into a high-fidelity desktop landing page with offshore imagery, corporate colors, and clear content grouping.",
  },
  {
    number: "05",
    title: "Refinement",
    description:
      "Refine spacing, type hierarchy, image placement, and action emphasis across the presented page sections.",
  },
  {
    number: "06",
    title: "Interactive prototyping",
    description:
      "A Figma prototype link is available from the case study hero. No usability evaluation results are claimed.",
  },
];

const palette = [
  { name: "Deep navy", value: "#0D2A4A" },
  { name: "Offshore blue", value: "#164C6D" },
  { name: "Action red", value: "#EF342D" },
  { name: "White", value: "#FFFFFF" },
  { name: "Soft gray", value: "#F3F5F7" },
  { name: "Text charcoal", value: "#252A30" },
];

export default function PertaminaOffshoreCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page} data-case-study>
        <div className={styles.container}>
          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>UI/UX DESIGN CASE STUDY · PERSONAL CONCEPT</p>
              <h1 className={styles.title}>Pertamina <span>Offshore</span></h1>
              <p className={styles.lede}>
                A corporate landing page design concept for offshore energy, developed from a structural wireframe into a high-fidelity visual direction.
              </p>
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
            <dl className={styles.projectFacts}>
              <div><dt>My role</dt><dd>UI/UX Designer</dd></div>
              <div><dt>Platform</dt><dd>Website / landing page</dd></div>
              <div><dt>Project type</dt><dd>Personal design concept</dd></div>
              <div><dt>Tools</dt><dd>Figma</dd></div>
              <div><dt>Status</dt><dd>Design concept · not released</dd></div>
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
              Desktop wireframe and corresponding final visual design for this personal concept, not an official Pertamina website.
            </figcaption>
          </figure>

          <section className={styles.section} id="overview" aria-labelledby="overview-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>01 / PROJECT OVERVIEW</p>
              <h2 id="overview-title">A clearer landing page for offshore operations.</h2>
            </div>
            <div className={styles.copy}>
              <p>
                This personal website design concept explores a landing page for an offshore energy organization. The goal is to introduce offshore operations and guide visitors through company, service, and sustainability information.
              </p>
              <div className={styles.audienceNote}>
                <span>Intended audience</span>
                <p>
                  Visitors and industry stakeholders seeking a high-level introduction to offshore operations, services, and company priorities. This is a design assumption based on the content shown, not a research-validated audience profile.
                </p>
              </div>
              <p className={styles.conceptNote}>
                The concept is not an official Pertamina website and has not been developed or launched as a production site.
              </p>
            </div>
          </section>

          <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="challenges-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>02 / PROBLEMS &amp; DESIGN CHALLENGES</p>
              <h2 id="challenges-title">Make complex information feel approachable.</h2>
              <p className={styles.sectionNote}>Design challenges for the concept, not conclusions from user research.</p>
            </div>
            <div className={styles.challengeList}>
              {designChallenges.map((item) => (
                <article className={styles.challenge} key={item.number}>
                  <span>{item.number}</span><div><h3>{item.title}</h3><p>{item.description}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section} aria-labelledby="role-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>03 / MY ROLE</p>
              <h2 id="role-title">From page structure to visual refinement.</h2>
              <p className={styles.sectionNote}>Role: UI/UX Designer</p>
            </div>
            <div className={styles.roleContent}>
            <ol className={styles.roleGrid}>
              {roleItems.map((item, index) => (
                <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
              ))}
            </ol>
            <p className={styles.sectionNote}>Tool: Figma.</p>
            </div>
          </section>

          <section className={`${styles.section} ${styles.darkSection}`} aria-labelledby="process-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>04 / DESIGN PROCESS</p>
              <h2 id="process-title">From wireframing to the final visual story.</h2>
              <p className={styles.sectionNote}>The project materials support a wireframe-to-UI process. No research or testing activities are inferred beyond the supplied design materials.</p>
            </div>
            <div className={styles.processContent}>
              <h3>Wireframing</h3>
              <div className={styles.wireframeNotes}>
                <article><span>01</span><h3>Establish the page hierarchy</h3><p>The wireframe places the navigation and hero first, then uses a metrics band and a company introduction to continue the story.</p></article>
                <article><span>02</span><h3>Keep content groups distinct</h3><p>Operational themes are organized into smaller content areas below the introductory section.</p></article>
                <article><span>03</span><h3>Preserve the comparison</h3><p>The wireframe and final visual design are shown together in the supplied project asset above.</p></article>
              </div>
              <h3>UI design: desktop page structure</h3>
              <p className={styles.processNote}>The available final UI is the right-hand desktop design in the original comparison board above.</p>
              <div className={styles.pageSections}>
                {pageSections.map((item) => (
                  <article className={styles.pageSection} key={item.number}>
                    <span>{item.number}</span><div><h3>{item.title}</h3><p>{item.description}</p></div>
                  </article>
                ))}
              </div>
              <h3>Design stages</h3>
              <ol className={styles.processList}>
                {processSteps.map((item) => (
                  <li className={styles.processStep} key={item.number}>
                    <span>{item.number}</span><div><h3>{item.title}</h3><p>{item.description}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="system-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>05 / DESIGN SYSTEM</p>
              <h2 id="system-title">A restrained, image-led corporate visual direction.</h2>
              <p className={styles.sectionNote}>
                Color values are approximate samples from the supplied final UI image. The original token and type specifications were not provided.
              </p>
            </div>
            <div className={styles.systemContent}>
              <div className={styles.palette} aria-label="Approximate colors sampled from the final design image">
                {palette.map((color) => (
                  <div className={styles.swatch} key={color.name}>
                    <span className={styles.swatchColor} style={{ backgroundColor: color.value }} />
                    <span className={styles.swatchName}>{color.name}</span>
                    <span className={styles.swatchValue}>{color.value}</span>
                  </div>
                ))}
              </div>
              <div className={styles.systemNotes}>
                <article><h3>Typography</h3><p>Clean sans-serif hierarchy is visible in the mockup; the exact typeface was not specified.</p></article>
                <article><h3>Spacing &amp; layout</h3><p>A wide desktop content area, generous hero space, and separated content bands structure the page.</p></article>
                <article><h3>Components</h3><p>Header navigation, primary and secondary actions, a metric strip, and feature information groups are visible.</p></article>
                <article><h3>Tool</h3><p>Figma is listed for the project. No development framework or production build is claimed.</p></article>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="validation-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>06 / VALIDATION</p>
              <h2 id="validation-title">Validation and delivery status.</h2>
              <p className={styles.sectionNote}>
                No mobile or tablet design export was included with the project assets.
              </p>
            </div>
            <div className={styles.validationContent}>
            <div className={styles.responsiveNote}>
              <p>
                The case study page itself adapts to smaller screens. The original project board only shows a desktop landing page, so a mobile navigation, stacked hero, and rearranged metrics are not presented as completed design screens.
              </p>
              <div className={styles.deviceLabels}><span>Desktop design · available</span><span>Tablet layout · not supplied</span><span>Mobile layout · not supplied</span></div>
            </div>
            <div className={styles.outcomeGrid}>
              <article className={styles.outcomeCard}>
                <h3>Project status</h3>
                <dl>
                  <div><dt>Deliverable</dt><dd>Desktop wireframe and high-fidelity UI board</dd></div>
                  <div><dt>Type</dt><dd>Personal website design concept</dd></div>
                  <div><dt>Interactive prototype</dt><dd>Available in Figma</dd></div>
                  <div><dt>Development</dt><dd>Not developed or launched</dd></div>
                </dl>
              </article>
              <article className={styles.reflectionCard}>
                <h3>Reflection</h3>
                <p>
                  The paired wireframe and visual design show how content order, imagery, color, and hierarchy shape the landing page. A useful next step would be to validate navigation clarity and develop responsive design screens before implementation.
                </p>
              </article>
            </div>
            <p className={styles.testingNote}>
              User testing and validation have not yet been conducted. This case study reports no participant feedback, usability scores, or research outcomes.
            </p>
            </div>
          </section>

          <footer className={styles.footer}>
            <p>Pertamina Offshore · Personal Website Design Concept</p>
            <Link href="/#projects">Back to all projects <span aria-hidden="true">↗</span></Link>
          </footer>
        </div>
      </main>
    </>
  );
}
