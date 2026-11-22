import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "OpenMile UI/UX Case Study | Steve Umbas",
  description:
    "A UI/UX design case study for OpenMile, a mobile travel booking concept focused on destination discovery and flight booking.",
};

const processSteps = [
  {
    number: "01",
    title: "Design Goals",
    description:
      "Established the design direction around destination discovery and a simpler, more organized flight booking experience.",
  },
  {
    number: "02",
    title: "Map the User Flow",
    description:
      "Organized the journey from exploring destinations to selecting flights, entering passenger information, choosing seats, and reviewing booking details.",
  },
  {
    number: "03",
    title: "Define the Design System",
    description:
      "Established the visual foundation through the OpenMile color palette, typography, spacing, and reusable UI components.",
  },
  {
    number: "04",
    title: "Design the Interface",
    description:
      "Designed the mobile screens by applying consistent visual styles, rounded components, clear layouts, and information hierarchy.",
  },
  {
    number: "05",
    title: "Interactive prototyping",
    description:
      "Created an interactive Figma prototype to demonstrate the mobile travel and flight booking flows, allowing users to explore the intended experience.",
  },
];

const palette = [
  { name: "Primary Green", value: "#97C03C" },
  { name: "Secondary Green", value: "#B8D663" },
  { name: "Dark Green", value: "#21381F" },
  { name: "Light Green", value: "#F3F8E9" },
  { name: "Background", value: "#FFFFFF" },
  { name: "Secondary Text", value: "#5C7368	" },
];

export default function OpenMileCaseStudyPage() {
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
              <h1 className={styles.title}>OpenMile</h1>
              <p className={styles.lede}>
                A mobile travel booking concept designed to make destination
                discovery and flight planning feel clear, simple, and organized.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.heroLink} href="#project-overview">
                  Explore the case study <span aria-hidden="true">↓</span>
                </a>
                <a
                  className={styles.prototypeLink}
                  href="https://www.figma.com/proto/QRPxkMJE0rFr4v7Ryjf0fU/OpenMile?t=bfzF0I2XYI9qGHPA-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=0-1&starting-point-node-id=4%3A238&fuid=1441746115386135378"
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
                <dd>Mobile application</dd>
              </div>
              <div>
                <dt>Project type</dt>
                <dd>Personal design concept</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Design in Progress</dd>
              </div>
            </dl>
          </header>

          <figure className={styles.heroVisual}>
            <Image
              src="/images/preview openMile.png"
              alt="OpenMile travel app concept showing flight seat selection, destination discovery, and a stay discovery screen"
              width={1200}
              height={720}
              priority
              sizes="(max-width: 760px) 100vw, 1200px"
            />
            <figcaption>
              Current visual overview from the OpenMile project preview. The
              supplied asset is a composite mockup, not separate screen exports.
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
                Travel planning, brought into one mobile experience.
              </h2>
            </div>
            <div className={styles.overviewCopy}>
              <p>
                OpenMile is a mobile travel booking concept designed to help
                users discover destinations, explore places to visit, and plan
                their trips. The design focuses on creating a clear and
                intuitive experience for destination exploration and flight
                booking, with an organized flow that simplifies travel planning.
              </p>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.tintedSection}`}
            aria-labelledby="audience-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>
                02 / PROBLEMS &amp; DESIGN CHALLENGES
              </p>
              <h2 id="audience-title">
                Making travel planning simpler and more connected.
              </h2>
              <p className={styles.sectionNote}>
                Planning a trip involves multiple decisions, from discovering
                destinations to selecting flights and reviewing booking details.
                OpenMile explores how these steps can be organized into a clear
                and seamless mobile experience.
              </p>
            </div>
            <div className={styles.needsGrid}>
              <article className={styles.infoCard}>
                <span className={styles.cardIndex}>A</span>
                <h3>Intended users</h3>
                <ul>
                  <li>
                    Travelers looking for inspiration and destinations for their
                    next trip.
                  </li>
                  <li>
                    Users who want to explore attractions before deciding where
                    to go.
                  </li>
                  <li>
                    Mobile users who prefer a clear and convenient flight
                    booking experience.
                  </li>
                </ul>
              </article>
              <article className={styles.infoCard}>
                <span className={styles.cardIndex}>B</span>
                <h3>Key Design Challenges</h3>
                <ol className={styles.challengeList}>
                  <li>
                    <span>01.</span>
                    <div>
                      <h4>Destination Discovery</h4>
                      <p>
                        How can users discover destinations and explore relevant
                        places without feeling overwhelmed?
                      </p>
                    </div>
                  </li>
                  <li>
                    <span>02.</span>
                    <div>
                      <h4>Information Clarity</h4>
                      <p>
                        How can destination and flight information be structured
                        so users can easily understand and compare their
                        options?
                      </p>
                    </div>
                  </li>
                  <li>
                    <span>03.</span>
                    <div>
                      <h4>Booking Flow</h4>
                      <p>
                        How can the flight booking process be organized into
                        clear, manageable steps?
                      </p>
                    </div>
                  </li>
                  <li>
                    <span>04.</span>
                    <div>
                      <h4>Booking Review</h4>
                      <p>
                        How can users review flight selections and passenger
                        details with confidence before proceeding to payment?
                      </p>
                    </div>
                  </li>
                </ol>
              </article>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="role-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>03 / MY ROLE</p>
              <h2 id="role-title">
                From user flows to a cohesive mobile experience.
              </h2>
            </div>
            <div className={styles.roleContent}>
              <div className={styles.contributionGrid}>
                {[
                  {
                    title: "App Structure & Navigation",
                    description:
                      "Defined the app structure and organized its navigation.",
                  },
                  {
                    title: "User Flow",
                    description:
                      "Mapped the destination discovery and flight booking journeys.",
                  },
                  {
                    title: "Layout & Information Architecture",
                    description:
                      "Planned screen layouts and structured content for clear information hierarchy.",
                  },
                  {
                    title: "Design System",
                    description:
                      "Established visual foundations, including colors, typography, spacing, and reusable UI components.",
                  },
                  {
                    title: "UI Design",
                    description:
                      "Designed mobile interfaces by applying the established design system across the app screens.",
                  },
                  {
                    title: "Design Evaluation",
                    description:
                      "Reviewed the overall design and refined interface details through personal evaluation.",
                  },
                ].map((item, index) => (
                  <div className={styles.contribution} key={item.title}>
                    <span className={styles.contributionNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className={styles.contributionCopy}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className={styles.roleTools}>
                <strong>Tools &amp; Methods:</strong> Figma, Auto Layout,
                Component Variants, Layout Grids, and Interactive Prototyping.
              </p>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.darkSection}`}
            aria-labelledby="screens-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>04 / DESIGN PROCESS</p>
              <h2 id="screens-title">
                From travel planning needs to a booking flow.
              </h2>
            </div>
            <div className={styles.processContent}>
              <h3 className={styles.processHeading}>Design stages</h3>
              <p className={styles.processNote}>
                The process reflects the work and design scope described for
                this project; no user research or usability testing is claimed.
              </p>
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
              <h2 id="system-title">A fresh, calm visual language.</h2>
              <p className={styles.sectionNote}>
                The design direction uses a modern, clean and minimal approach,
                with rounded components and a consistent visual hierarchy.
              </p>
            </div>
            <div className={styles.systemContent}>
              <div
                className={styles.palette}
                aria-label="OpenMile color palette"
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
                <h3>Tools &amp; techniques</h3>
                <div>
                  <strong>Figma</strong>
                  <span>UI/UX design and interactive prototyping.</span>
                </div>
                <div>
                  <strong>Auto Layout</strong>
                  <span>
                    Structure flexible interface groups with consistent spacing.
                  </span>
                </div>
                <div>
                  <strong>Component variants</strong>
                  <span>Organize reusable UI component variations.</span>
                </div>
                <div>
                  <strong>Grid &amp; constraints</strong>
                  <span>
                    Align screen content and define how elements resize within
                    layouts.
                  </span>
                </div>
                <div>
                  <strong>Responsive design</strong>
                  <span>
                    Plan layouts to adapt across screen widths while keeping
                    content clear.
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="outcome-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>06 / VALIDATION</p>
              <h2 id="outcome-title">
                Designed with users in mind, ready to be tested.
              </h2>
            </div>
            <div className={styles.validationContent}>
              <div className={styles.outcomeGrid}>
                <div className={styles.outcomeCard}>
                  <h3>Project status</h3>
                  <dl>
                    <div>
                      <dt>Deliverable</dt>
                      <dd>UI design system + interactive prototype</dd>
                    </div>
                    <div>
                      <dt>Development</dt>
                      <dd>Design phase · prototype ready</dd>
                    </div>
                  </dl>
                </div>
                <div className={styles.validationCard}>
                  <span className={styles.validationMark} aria-hidden="true">
                    ↗
                  </span>
                  <h3>Research &amp; testing</h3>
                  <p>
                    OpenMile is currently focused on UI/UX exploration and
                    interface design. User testing is the next step, starting
                    with the flight search flow to validate and refine the
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
            <p>OpenMile · Personal UI/UX Design Concept</p>
          </footer>
        </div>
      </main>
    </>
  );
}
