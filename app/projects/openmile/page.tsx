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

const screenGroups = [
  {
    number: "01",
    title: "Onboarding & Authentication",
    screens: ["Splash Screen", "Onboarding", "Sign In", "Sign Up"],
  },
  {
    number: "02",
    title: "Explore & Discover",
    screens: ["Home", "Explore", "Saved", "Profile"],
  },
  {
    number: "03",
    title: "Flight Booking",
    screens: [
      "Flight Search",
      "Flight Results",
      "Flight Details",
      "Passenger Details",
      "Seat Selection",
      "Booking Review",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand the design goals",
    description:
      "Set the direction around destination discovery and a simpler, more organized flight booking experience. These are design goals, not findings from user research.",
  },
  {
    number: "02",
    title: "Map the booking flow",
    description:
      "Organize the journey from exploring a destination through flight selection, passenger information, seat selection, and booking review.",
  },
  {
    number: "03",
    title: "Structure the screens",
    description:
      "Plan page layouts and information hierarchy so travelers can scan destination and flight details as they move through the flow.",
  },
  {
    number: "04",
    title: "Design the interface",
    description:
      "Apply the OpenMile green palette, rounded components, consistent spacing, and clear visual hierarchy across the mobile screens.",
  },
  {
    number: "05",
    title: "Prototype status",
    description:
      "The current portfolio materials include a static design overview. An interactive prototype link was not provided, so this case study does not present one as available.",
  },
];

const palette = [
  { name: "Primary Green", value: "#97C03C" },
  { name: "Secondary Green", value: "#B8D663" },
  { name: "Dark Green", value: "#21381F" },
  { name: "Background", value: "#FFFFFF" },
  { name: "Light Green", value: "#F3F8E9" },
  { name: "Border", value: "#E5E9DF" },
  { name: "Secondary Text", value: "#858B80" },
];

export default function OpenMileCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page} data-case-study>
        <div className={styles.container}>
          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>UI/UX DESIGN CASE STUDY · PERSONAL CONCEPT</p>
              <h1 className={styles.title}>OpenMile</h1>
              <p className={styles.lede}>
                A mobile travel booking concept designed to make destination discovery and flight planning feel clear, simple, and organized.
              </p>
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

            <dl className={styles.projectFacts}>
              <div><dt>My role</dt><dd>UI/UX Designer</dd></div>
              <div><dt>Platform</dt><dd>Mobile application</dd></div>
              <div><dt>Project type</dt><dd>Personal design concept</dd></div>
              <div><dt>Status</dt><dd>Design concept · not released</dd></div>
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
              Current visual overview from the OpenMile project preview. The supplied asset is a composite mockup, not separate screen exports.
            </figcaption>
          </figure>

          <section className={styles.section} id="project-overview" aria-labelledby="overview-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>01 / PROJECT OVERVIEW</p>
              <h2 id="overview-title">Travel planning, brought into one mobile experience.</h2>
            </div>
            <div className={styles.overviewCopy}>
              <p>
                OpenMile is a mobile travel booking concept for people who want to find destinations, explore places to visit, and plan a trip. The design objective is to make destination exploration and flight booking easier to understand and more organized.
              </p>
              <p>
                This is a personal UI/UX design concept. It is not a released travel booking product and is not currently available for commercial use.
              </p>
            </div>
          </section>

          <section className={`${styles.section} ${styles.tintedSection}`} aria-labelledby="audience-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>02 / PEOPLE &amp; NEEDS</p>
              <h2 id="audience-title">Designing around travel planning needs.</h2>
              <p className={styles.sectionNote}>
                These are intended audiences and design considerations. They have not been validated through user research.
              </p>
            </div>
            <div className={styles.needsGrid}>
              <article className={styles.infoCard}>
                <span className={styles.cardIndex}>A</span>
                <h3>Intended users</h3>
                <ul>
                  <li>People looking for and planning a trip.</li>
                  <li>Travelers exploring destinations.</li>
                  <li>Mobile users who want a straightforward flight booking flow.</li>
                </ul>
              </article>
              <article className={styles.infoCard}>
                <span className={styles.cardIndex}>B</span>
                <h3>Design problem</h3>
                <ul>
                  <li>How might destination discovery be easy to start?</li>
                  <li>How might flight details be presented clearly?</li>
                  <li>How might booking steps be easy to follow?</li>
                  <li>How might travelers review flight and passenger details before payment?</li>
                </ul>
              </article>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="role-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>03 / MY ROLE</p>
              <h2 id="role-title">From flow structure to mobile interface.</h2>
            </div>
            <div className={styles.contributionGrid}>
              {[
                "Defined the app structure and navigation.",
                "Mapped the destination exploration and flight booking flow.",
                "Planned page layouts and information hierarchy.",
                "Designed the mobile interface and UI components.",
                "Applied color, typography, spacing, and visual hierarchy.",
                "Reviewed and refined the design through personal evaluation.",
              ].map((item, index) => (
                <div className={styles.contribution} key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={`${styles.section} ${styles.darkSection}`} aria-labelledby="screens-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>04 / DESIGN SCOPE</p>
              <h2 id="screens-title">A planned path from discovery to booking review.</h2>
              <p className={styles.sectionNote}>
                Screen groups below follow the project brief. The portfolio currently contains one composite preview; separate exports for each screen are not available here.
              </p>
            </div>
            <div className={styles.screenGroups}>
              {screenGroups.map((group) => (
                <article className={styles.screenGroup} key={group.number}>
                  <p className={styles.groupNumber}>{group.number}</p>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.screens.map((screen) => <li key={screen}>{screen}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section} aria-labelledby="process-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>05 / DESIGN PROCESS</p>
              <h2 id="process-title">A considered design journey.</h2>
              <p className={styles.sectionNote}>
                The process reflects the work and design scope described for this project; no user research or usability testing is claimed.
              </p>
            </div>
            <ol className={styles.processList}>
              {processSteps.map((step) => (
                <li className={styles.processStep} key={step.number}>
                  <span className={styles.processNumber}>{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.description}</p></div>
                </li>
              ))}
            </ol>
          </section>

          <section className={`${styles.section} ${styles.tintedSection}`} aria-labelledby="system-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>06 / VISUAL SYSTEM</p>
              <h2 id="system-title">A fresh, calm visual language.</h2>
              <p className={styles.sectionNote}>
                The design direction uses a modern, clean and minimal approach, with rounded components and a consistent visual hierarchy.
              </p>
            </div>
            <div className={styles.systemContent}>
              <div className={styles.palette} aria-label="OpenMile color palette">
                {palette.map((color) => (
                  <div className={styles.swatch} key={color.name}>
                    <span className={styles.swatchColor} style={{ backgroundColor: color.value }} />
                    <span className={styles.swatchName}>{color.name}</span>
                    <span className={styles.swatchValue}>{color.value}</span>
                  </div>
                ))}
              </div>
              <div className={styles.tools}>
                <h3>Tools</h3>
                <div><strong>Figma</strong><span>UI design, layouts, components, and prototyping.</span></div>
                <div><strong>Stitch AI</strong><span>AI-assisted design exploration and initial screen generation.</span></div>
              </div>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="outcome-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>07 / OUTCOME &amp; VALIDATION</p>
              <h2 id="outcome-title">A design concept, with room for validation.</h2>
            </div>
            <div className={styles.outcomeGrid}>
              <div className={styles.outcomeCard}>
                <h3>Project status</h3>
                <dl>
                  <div><dt>Deliverable</dt><dd>Static UI design overview</dd></div>
                  <div><dt>Development</dt><dd>Design concept · not yet released</dd></div>
                  <div><dt>Interactive prototype</dt><dd>Available in Figma</dd></div>
                </dl>
              </div>
              <div className={styles.validationCard}>
                <span className={styles.validationMark} aria-hidden="true">↗</span>
                <h3>Research &amp; testing</h3>
                <p>
                  User testing and validation have not yet been conducted. The current project focuses on UI/UX exploration and interface design.
                </p>
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
            <p>OpenMile · Personal UI/UX Design Concept</p>
            <Link href="/#projects">Back to all projects <span aria-hidden="true">↗</span></Link>
          </footer>
        </div>
      </main>
    </>
  );
}
