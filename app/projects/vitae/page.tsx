import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "VITAE UI/UX Case Study | Steve Umbas",
  description:
    "A UI/UX design case study for VITAE, a personal mobile health and wellness app concept.",
};

const screenGroups = [
  {
    number: "01",
    title: "Onboarding & Authentication",
    screens: ["Onboarding", "Sign In"],
  },
  {
    number: "02",
    title: "Daily Activity",
    screens: ["Home Dashboard", "Activity", "Progress", "Profile"],
  },
  {
    number: "03",
    title: "Food & Nutrition",
    screens: ["Food Scanner", "Nutrition Facts"],
  },
];

const designProcess = [
  {
    step: "01",
    title: "Understanding",
    description:
      "Set the design direction around activity tracking, food nutrition information, and building awareness of healthy habits. These are project goals, not user research findings.",
  },
  {
    step: "02",
    title: "User Flow",
    description:
      "Organize the main navigation between the dashboard, activity, nutrition, progress, and profile areas, with a focused path for checking food information.",
  },
  {
    step: "03",
    title: "Wireframing",
    description:
      "Arrange information and controls for the mobile screens, keeping activity summaries and nutrition details easy to scan.",
  },
  {
    step: "04",
    title: "UI Design",
    description:
      "Apply the VITAE visual direction through a bright green accent, rounded cards, clear type hierarchy, and simple progress visuals.",
  },
  {
    step: "05",
    title: "Prototyping",
    description:
      "An interactive Figma prototype is available. It demonstrates the design flow and can be opened from the case study controls.",
  },
];

const palette = [
  { name: "Leaf green", color: "#8DBB2E" },
  { name: "Deep green", color: "#315B28" },
  { name: "Soft green", color: "#EAF2D9" },
  { name: "White", color: "#FFFFFF" },
  { name: "Warm gray", color: "#F3F3F1" },
  { name: "Charcoal", color: "#252821" },
];

const roleItems = [
  "Information architecture",
  "User flow planning",
  "Wireframing and screen layout",
  "Mobile UI design",
  "Reusable component design",
  "Prototype exploration and design refinement",
];

export default function VitaeCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page} data-case-study>
        <div className={styles.container}>
          <Link className={styles.backLink} href="/#projects">
            <span aria-hidden="true">←</span> Back to selected projects
          </Link>

          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>UI/UX DESIGN CASE STUDY · PERSONAL CONCEPT</p>
              <h1 className={styles.title}>VITAE</h1>
              <p className={styles.lede}>
                A mobile health and wellness concept for tracking activity, understanding food nutrition, and seeing healthy habits over time.
              </p>
              <a className={styles.sectionLink} href="#overview">
                Explore the case study <span aria-hidden="true">↓</span>
              </a>
              <a
                className={styles.figmaLink}
                href="https://www.figma.com/design/olWjJ86dqbQhQEhPsETanl/Vitae?node-id=0-1&t=pXCdblWiBJGkFHna-1"
                target="_blank"
                rel="noreferrer"
              >
                Open Figma Project <span aria-hidden="true">↗</span>
              </a>
              <a
                className={styles.prototypeLink}
                href="https://www.figma.com/proto/olWjJ86dqbQhQEhPsETanl/Vitae?node-id=0-1&p=f&t=bfzF0I2XYI9qGHPA-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=120%3A931&fuid=1441746115386135378"
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
              <div><dt>Status</dt><dd>Concept · not commercially released</dd></div>
              <div><dt>Tools</dt><dd>Figma · Stitch AI</dd></div>
            </dl>
          </header>

          <figure className={styles.heroVisual}>
            <Image
              src="/images/preview vitae.png"
              alt="VITAE mobile app concept mockup with onboarding, sign-in, activity tracking, and nutrition dashboard screens"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 760px) 100vw, 1200px"
            />
            <figcaption>
              The available VITAE asset is a composite mockup showing selected mobile screens. Separate screen exports are not currently included in the portfolio.
            </figcaption>
          </figure>

          <section className={styles.section} id="overview" aria-labelledby="overview-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>01 / OVERVIEW</p>
              <h2 id="overview-title">Everyday wellness, made easier to follow.</h2>
            </div>
            <div className={styles.copy}>
              <p>
                VITAE is a personal mobile app design concept for people who want to build healthier routines. It brings activity tracking, food nutrition information, and progress views into one wellness experience.
              </p>
              <p>
                The design goal is to help users check everyday health information and follow their habits through clear summaries and approachable mobile screens.
              </p>
              <div className={styles.audienceNote}>
                <span>Intended audience</span>
                <p>
                  Individuals interested in healthier lifestyles who want to monitor activity, understand nutrition, and manage their fitness progress. This audience is a design direction, not a research-validated user segment.
                </p>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="challenges-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>02 / PROBLEM &amp; DESIGN CHALLENGES</p>
              <h2 id="challenges-title">Make wellness information easier to understand.</h2>
              <p className={styles.sectionNote}>
                These are design challenges that shaped the concept, not findings from user research.
              </p>
            </div>
            <div className={styles.challengeList}>
              <article className={styles.challenge}>
                <span>01</span><div><h3>Activity at a glance</h3><p>Present daily movement and activity summaries in a way that is quick to scan.</p></div>
              </article>
              <article className={styles.challenge}>
                <span>02</span><div><h3>Understand food nutrition</h3><p>Give users a clear path from food scanning to a readable nutrition facts view.</p></div>
              </article>
              <article className={styles.challenge}>
                <span>03</span><div><h3>See progress over time</h3><p>Help users review their health and fitness habits through simple progress summaries.</p></div>
              </article>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="role-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>03 / MY ROLE</p>
              <h2 id="role-title">Shaping the experience from structure to screens.</h2>
              <p className={styles.sectionNote}>Role: UI/UX Designer</p>
            </div>
            <ol className={styles.roleGrid}>
              {roleItems.map((item, index) => (
                <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
              ))}
            </ol>
          </section>

          <section className={`${styles.section} ${styles.darkSection}`} aria-labelledby="screens-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>04 / FEATURES &amp; SCREENS</p>
              <h2 id="screens-title">A mobile experience across activity and nutrition.</h2>
              <p className={styles.sectionNote}>
                Screen names below follow the project information provided. The single supplied mockup is shown above; individual screens are not duplicated or recreated here.
              </p>
            </div>
            <div className={styles.screenGroups}>
              {screenGroups.map((group) => (
                <article className={styles.screenGroup} key={group.number}>
                  <p className={styles.groupNumber}>{group.number}</p>
                  <h3>{group.title}</h3>
                  <ul>{group.screens.map((screen) => <li key={screen}>{screen}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section} aria-labelledby="process-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>05 / DESIGN PROCESS</p>
              <h2 id="process-title">From wellness goals to a clear mobile interface.</h2>
              <p className={styles.sectionNote}>
                The process is presented as a design workflow. No user research or usability results are claimed.
              </p>
            </div>
            <ol className={styles.processList}>
              {designProcess.map((item) => (
                <li className={styles.processStep} key={item.step}>
                  <span>{item.step}</span><div><h3>{item.title}</h3><p>{item.description}</p></div>
                </li>
              ))}
            </ol>
          </section>

          <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="system-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>06 / DESIGN SYSTEM</p>
              <h2 id="system-title">A light interface with a fresh green accent.</h2>
              <p className={styles.sectionNote}>
                Palette samples are approximate colors sampled from the supplied mockup, not a published VITAE token specification.
              </p>
            </div>
            <div className={styles.systemContent}>
              <div className={styles.palette} aria-label="Approximate colors sampled from the VITAE mockup">
                {palette.map((color) => (
                  <div className={styles.swatch} key={color.name}>
                    <span className={styles.swatchColor} style={{ backgroundColor: color.color }} />
                    <span className={styles.swatchName}>{color.name}</span>
                    <span className={styles.swatchValue}>{color.color}</span>
                  </div>
                ))}
              </div>
              <div className={styles.systemNotes}>
                <article><h3>Typography</h3><p>Bold, high-contrast headings pair with compact labels and readable supporting text. The original font specification was not included.</p></article>
                <article><h3>Spacing &amp; components</h3><p>Rounded cards, clear content grouping, prominent action buttons, and ring-style activity summaries are visible in the supplied mockup.</p></article>
                <article><h3>Tools</h3><p>Figma for interface design and components; Stitch AI for AI-assisted design exploration.</p></article>
              </div>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="flow-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>07 / USER FLOW</p>
              <h2 id="flow-title">Two paths through the wellness experience.</h2>
              <p className={styles.sectionNote}>
                High-level flows derived from the screen list in the project brief. Exact interaction details should be confirmed against the Figma file.
              </p>
            </div>
            <div className={styles.flowCards}>
              <article className={styles.flowCard}>
                <p className={styles.flowLabel}>GENERAL NAVIGATION</p>
                <div className={styles.flow}>
                  {["Onboarding", "Sign In", "Home Dashboard", "Activity / Nutrition / Progress", "Profile"].map((step, index) => (
                    <div className={styles.flowStep} key={step}>
                      <span>{step}</span>{index < 4 && <b aria-hidden="true">→</b>}
                    </div>
                  ))}
                </div>
              </article>
              <article className={styles.flowCard}>
                <p className={styles.flowLabel}>FOOD SCANNING</p>
                <div className={styles.flow}>
                  {["Open Food Scanner", "Scan Food", "Review Nutrition Facts"].map((step, index) => (
                    <div className={styles.flowStep} key={step}>
                      <span>{step}</span>{index < 2 && <b aria-hidden="true">→</b>}
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </section>

          <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="outcome-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>08 / OUTCOME &amp; REFLECTION</p>
              <h2 id="outcome-title">A design concept ready for further validation.</h2>
            </div>
            <div className={styles.outcomeGrid}>
              <article className={styles.outcomeCard}>
                <h3>Project status</h3>
                <dl>
                  <div><dt>Type</dt><dd>Personal mobile app design concept</dd></div>
                  <div><dt>Deliverable</dt><dd>Mobile UI screens and Figma design file</dd></div>
                  <div><dt>Release</dt><dd>Not released as a commercial application</dd></div>
                  <div><dt>Interactive prototype</dt><dd>Available in Figma</dd></div>
                </dl>
              </article>
              <article className={styles.reflectionCard}>
                <h3>Reflection</h3>
                <p>
                  VITAE brings activity, nutrition, and progress into a single visual direction. A next step would be to validate the navigation and information clarity with users, then refine the design based on observed feedback.
                </p>
                <a href="https://www.figma.com/design/olWjJ86dqbQhQEhPsETanl/Vitae?node-id=0-1&t=pXCdblWiBJGkFHna-1" target="_blank" rel="noreferrer">
                  Open Figma Design File <span aria-hidden="true">↗</span>
                </a>
              </article>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="testing-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>09 / TESTING</p>
              <h2 id="testing-title">Validation is a future step.</h2>
            </div>
            <p className={styles.testingNote}>
              User testing and validation have not yet been conducted. The current project focuses on UI/UX exploration and interface design.
            </p>
          </section>

          <footer className={styles.footer}>
            <p>VITAE · Personal Mobile App Design Concept</p>
            <Link href="/#projects">Back to all projects <span aria-hidden="true">↗</span></Link>
          </footer>
        </div>
      </main>
    </>
  );
}
