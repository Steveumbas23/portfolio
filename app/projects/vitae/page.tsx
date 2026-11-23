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
    screens: ["Splash", "Onboarding", "Sign In", "Sign Up"],
  },
  {
    number: "02",
    title: "Daily Activity",
    screens: ["Home Dashboard", "Activity", "Progress", "Profile"],
  },
  {
    number: "03",
    title: "Food & Nutrition",
    screens: ["Food Scanner", "Nutrition Facts", "Daily Nutrition"],
  },
];

const designProcess = [
  {
    step: "01",
    title: "Design Direction",
    description:
      "Set the direction around activity tracking, food nutrition, and building awareness of healthy habits.",
  },
  {
    step: "02",
    title: "User Flow",
    description:
      "Organized the main navigation between the dashboard, activity, nutrition, progress, and profile areas, with a focused path from food scanning to nutrition details.",
  },
  {
    step: "03",
    title: "Screen Layout Planning",
    description:
      "Arranged information and controls for each mobile screen, keeping activity summaries and nutrition details easy to scan.",
  },
  {
    step: "04",
    title: "UI Design",
    description:
      "Applied the VITAE visual identity through a bright green accent, rounded cards, a clear type hierarchy, and simple progress visuals.",
  },
  {
    step: "05",
    title: "Prototyping",
    description:
      "Built an interactive prototype in Figma with Smart Animate transitions and component states.",
  },
];

const palette = [
  { name: "Primary green", role: "Primary", color: "#9ED02E" },
  { name: "Deep green", role: "Secondary", color: "#394B11" },
  { name: "Soft green", role: "Accent tint", color: "#E4F2C4" },
  { name: "Soft background", role: "Background", color: "#F4F2F5" },
  { name: "White", role: "Surface", color: "#FFFFFF" },
  { name: "Black", role: "Primary text", color: "#000000" },
  { name: "Gray text", role: "Secondary text", color: "#7F7E7F" },
  { name: "Border gray", role: "Border", color: "#CDCBCE" },
];

const roleItems = [
  {
    title: "Information architecture",
    description:
      "Defined the app structure and main sections: home, activity, nutrition, scanner, progress, and profile.",
  },
  {
    title: "User flow planning",
    description:
      "Planned how users move from sign in to daily summaries, food scanning, and progress tracking.",
  },
  {
    title: "Screen layout planning",
    description:
      "Laid out each mobile screen to set content order and hierarchy before visual styling.",
  },
  {
    title: "Mobile UI design",
    description:
      "Designed high-fidelity mobile screens with a green wellness visual identity.",
  },
  {
    title: "Reusable component design",
    description:
      "Built reusable components such as the navigation bar, with default and active states.",
  },
  {
    title: "Interactive prototyping",
    description:
      "Created an interactive prototype in Figma using Smart Animate.",
  },
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
    title: "Component variants",
    description:
      "Organized reusable UI components with default and active states.",
  },
  {
    title: "Interactive prototyping",
    description:
      "Linked the mobile screens into a clickable prototype to show the main user flow.",
  },
];

export default function VitaeCaseStudyPage() {
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
              <h1 className={styles.title}>VITAE</h1>
              <p className={styles.lede}>
                A mobile health and wellness concept for tracking activity,
                understanding food nutrition, and seeing healthy habits over
                time.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.sectionLink} href="#overview">
                  Explore the case study <span aria-hidden="true">↓</span>
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
            </div>

            <dl className={styles.projectFacts}>
              <div>
                <dt>My role</dt>
                <dd>UI/UX Designer</dd>
              </div>
              <div>
                <dt>Platform</dt>
                <dd>Mobile app concept</dd>
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
              The available VITAE asset is a composite mockup showing selected
              mobile screens. Separate screen exports are not currently included
              in the portfolio.
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
                Everyday wellness, made easier to follow.
              </h2>
            </div>
            <div className={styles.copy}>
              <p>
                VITAE is a mobile wellness app concept for people who want to
                build healthier routines. It brings activity tracking, food
                nutrition, and progress views into one place, with clear daily
                summaries and a friendly &quot;Coach Vitae&quot; insight to keep
                users consistent.
              </p>
              <p>
                The project covers the main user journey, from signing in to
                checking daily nutrition and hydration, scanning food, and
                reviewing progress over time. It was built as a set of mobile
                screens with an interactive prototype.
              </p>
              <div className={styles.keyScreens}>
                <strong>Key screens</strong>
                <ul>
                  {[
                    "Sign in",
                    "Home",
                    "Activity",
                    "Nutrition",
                    "Food scanner",
                    "Progress",
                    "Profile",
                  ].map((screen) => (
                    <li key={screen}>{screen}</li>
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
                Make wellness information easier to understand.
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
                  <h3>Activity at a glance</h3>
                  <p>
                    Present daily movement and activity summaries in a
                    quick-to-scan layout, so users can see how their day is
                    going without digging through screens.
                  </p>
                </div>
              </article>
              <article className={styles.challenge}>
                <span>02</span>
                <div>
                  <h3>Understand food nutrition</h3>
                  <p>
                    Give users a clear path from food scanning to a readable
                    nutrition view, with calories and macros (protein, carbs,
                    fat) shown in a simple format.
                  </p>
                </div>
              </article>
              <article className={styles.challenge}>
                <span>03</span>
                <div>
                  <h3>See progress over time</h3>
                  <p>
                    Help users review their health and fitness habits through
                    simple progress summaries, so small improvements are easy to
                    notice.
                  </p>
                </div>
              </article>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="role-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>03 / MY ROLE</p>
              <h2 id="role-title">
                From app structure to interactive screens.
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
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.darkSection}`}
            aria-labelledby="screens-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>04 / DESIGN PROCESS</p>
              <h2 id="screens-title">
                From wellness goals to a clear mobile experience.
              </h2>
              <p className={styles.sectionNote}>
                The screens below cover the main user journey of the app.
              </p>
            </div>
            <div className={styles.processContent}>
              <div className={styles.screenGroups}>
                {screenGroups.map((group) => (
                  <article className={styles.screenGroup} key={group.number}>
                    <p className={styles.groupNumber}>{group.number}</p>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.screens.map((screen) => (
                        <li key={screen}>{screen}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <h3 className={styles.processHeading}>Design stages</h3>
              <p className={styles.processNote}>
                The process is presented as a design workflow. No user research
                or usability results are claimed.
              </p>
              <ol className={styles.processList}>
                {designProcess.map((item) => (
                  <li className={styles.processStep} key={item.step}>
                    <span>{item.step}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
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
                A light interface with a fresh green accent.
              </h2>
              <p className={styles.sectionNote}>
                Palette samples are approximate colors sampled from the supplied
                mockup, not a published VITAE token specification.
              </p>
            </div>
            <div className={styles.systemContent}>
              <div
                className={styles.palette}
                aria-label="Approximate colors sampled from the VITAE mockup"
              >
                {palette.map((color) => (
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
              <div className={styles.systemNotes}>
                <h3 className={styles.toolsHeading}>Tools &amp; techniques</h3>
                <div className={styles.techniqueGrid}>
                  {toolsAndTechniques.map((item) => (
                    <article className={styles.techniqueItem} key={item.title}>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.softSection}`}
            aria-labelledby="outcome-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>06 / VALIDATION</p>
              <h2 id="outcome-title">
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
                      <dd>Mobile UI screens and interactive prototype</dd>
                    </div>
                    <div>
                      <dt>Type</dt>
                      <dd>Personal project</dd>
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
                    VITAE brings activity, nutrition, and progress into a single
                    visual direction. Designing the home dashboard, food
                    scanner, and progress screens together showed how much clear
                    summaries and a consistent green accent help everyday health
                    information feel simple and approachable.
                  </p>
                </article>
                <article className={styles.reflectionCard}>
                  <h3>Research & testing</h3>
                  <p>
                    VITAE is currently focused on UI/UX exploration and
                    interface design. User testing is the next step, starting
                    with navigation clarity and the food scanning flow, then
                    refining the design based on the feedback.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
            <p>VITAE · Personal Mobile App Design Concept</p>
          </footer>
        </div>
      </main>
    </>
  );
}
