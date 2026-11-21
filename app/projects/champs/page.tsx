import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "CHAMPS UI/UX Design Case Study | Steve Umbas",
  description:
    "A personal boxing and fight training website concept, documented as a UI/UX design case study.",
};

const pageSections = [
  { number: "01", name: "Home", note: "Brand introduction and hero" },
  { number: "02", name: "About", note: "Club introduction" },
  { number: "03", name: "Service", note: "Training services" },
  { number: "04", name: "Choose Us", note: "Reasons to train with CHAMPS" },
  { number: "05", name: "Project", note: "Featured projects" },
  { number: "06", name: "Learn More", note: "Additional information" },
  { number: "07", name: "Testimoni", note: "Testimonial section" },
  { number: "08", name: "Footer", note: "Closing information and contact" },
];

export default function ChampsCaseStudyPage() {
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
              <h1 className={styles.title}>CHAMPS</h1>
              <p className={styles.lede}>
                A boxing and fight training website concept built around a bold club identity and a clear introduction to its training offer.
              </p>
              <a className={styles.heroLink} href="#overview">
                Explore the case study <span aria-hidden="true">↓</span>
              </a>
            </div>

            <dl className={styles.projectFacts}>
              <div><dt>My role</dt><dd>UI/UX Designer</dd></div>
              <div><dt>Platform</dt><dd>Website design</dd></div>
              <div><dt>Project type</dt><dd>Personal concept</dd></div>
              <div><dt>Status</dt><dd>UI design · not a functional website</dd></div>
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
              Existing desktop overview from the portfolio. It is a composite mockup; individual section exports are not currently available in the repository.
            </figcaption>
          </figure>

          <section className={styles.section} id="overview" aria-labelledby="overview-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>01 / PROJECT OVERVIEW</p>
              <h2 id="overview-title">A digital front door for a fight training club.</h2>
            </div>
            <div className={styles.copy}>
              <p>
                CHAMPS is a personal website design concept for a boxing and fight training club. The concept introduces the club, presents training services, and brings supporting information together in one desktop landing page.
              </p>
              <p>
                This case study documents a UI design concept. It does not represent a developed or launched website, and the available project material does not include user research or usability testing results.
              </p>
            </div>
          </section>

          <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="challenges-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>02 / DESIGN CHALLENGES</p>
              <h2 id="challenges-title">Making a long page feel focused and easy to scan.</h2>
              <p className={styles.sectionNote}>
                These are interface design considerations visible in the supplied concept, not findings from user research.
              </p>
            </div>
            <div className={styles.challengeList}>
              <article className={styles.challenge}>
                <span>01</span><div><h3>Establish a strong first impression</h3><p>Use the boxing imagery and “Fight like a champion” headline to set the club’s tone at the start of the page.</p></div>
              </article>
              <article className={styles.challenge}>
                <span>02</span><div><h3>Organize varied content</h3><p>Present club information, services, reasons to choose the club, featured projects, and testimonials within one page structure.</p></div>
              </article>
              <article className={styles.challenge}>
                <span>03</span><div><h3>Keep calls to action visible</h3><p>Give visitors a clear way to continue toward training information and contact details as they move through the page.</p></div>
              </article>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="role-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>03 / MY ROLE</p>
              <h2 id="role-title">UI/UX Designer</h2>
            </div>
            <div className={styles.roleContent}>
              <p className={styles.copy}>
                I worked on the website interface concept and its visual presentation. The available source supports documenting the page structure and visual direction; further process artifacts are not included here.
              </p>
              <div className={styles.roleTags} aria-label="Documented project scope">
                <span>Website UI design</span><span>Page structure</span><span>Visual direction</span>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.darkSection}`} aria-labelledby="structure-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>04 / PAGE STRUCTURE</p>
              <h2 id="structure-title">One landing page, from introduction to contact.</h2>
              <p className={styles.sectionNote}>
                The sequence below follows the section names supplied for the Figma frame. Individual section screenshots are not available in this workspace.
              </p>
            </div>
            <ol className={styles.sectionMap}>
              {pageSections.map((section) => (
                <li key={section.number}>
                  <span>{section.number}</span>
                  <div><h3>{section.name}</h3><p>{section.note}</p></div>
                </li>
              ))}
            </ol>
          </section>

          <section className={styles.section} aria-labelledby="final-design-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>05 / FINAL DESIGN</p>
              <h2 id="final-design-title">Desktop concept overview.</h2>
            </div>
            <div className={styles.designAvailability}>
              <p>
                The available portfolio asset is one composite preview. Separate, straight-on screenshots for Home, About, Service, Choose Us, Project, Learn More, Testimoni, and Footer have not been exported into this repository.
              </p>
              <p>
                The preview above preserves the supplied image as-is. It is not presented as a set of per-section captures.
              </p>
              <a
                className={styles.figmaLink}
                href="https://www.figma.com/design/HZRnpm2906EucECtEL3qIK/Motion-Studio?node-id=1-405"
                target="_blank"
                rel="noreferrer"
              >
                Open the Figma design file <span aria-hidden="true">↗</span>
              </a>
              <a
                className={styles.figmaLink}
                href="https://www.figma.com/proto/HZRnpm2906EucECtEL3qIK/Motion-Studio?node-id=0-1&p=f&t=HWc1jAiGZulmMsLP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&fuid=1441746115386135378"
                target="_blank"
                rel="noreferrer"
              >
                Open the Figma prototype <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>

          <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="system-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>06 / DESIGN SYSTEM</p>
              <h2 id="system-title">The source supports a visual direction, not a full system inventory.</h2>
            </div>
            <div className={styles.copy}>
              <p>
                The supplied preview shows a dark, high-contrast boxing identity with red accents and fight photography. Exact color values, typeface names, spacing tokens, icon specifications, and reusable component documentation have not been verified from the Figma source, so they are not listed as design system specifications here.
              </p>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="motion-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>07 / MOTION &amp; RESPONSIVE DESIGN</p>
              <h2 id="motion-title">Source status and what is documented.</h2>
            </div>
            <div className={styles.statusList}>
              <article>
                <h3>Layer placement</h3>
                <p>The hero headline and “READY FOR YOUR NEXT LESSON?” text sit outside the canvas as starting positions for an animation, as confirmed by the designer.</p>
              </article>
              <article>
                <h3>Motion data</h3>
                <p>The frame’s keyframe animation data is empty. The available evidence confirms intended starting positions, but does not document a completed animation or prototype interaction.</p>
              </article>
              <article>
                <h3>Responsive layouts</h3>
                <p>No mobile or tablet frame has been identified in the materials available in this repository.</p>
              </article>
            </div>
          </section>

          <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="reflection-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>08 / OUTCOME &amp; REFLECTION</p>
              <h2 id="reflection-title">A visual concept, ready for a more complete handoff.</h2>
            </div>
            <div className={styles.copy}>
              <p>
                The available deliverable communicates a desktop landing page direction for CHAMPS and its main content areas. It remains a UI design concept; there is no evidence here of a functional website, user evaluation, or measured outcome.
              </p>
              <p>
                A useful next step would be to make the section exports and design specifications available, then review the layout across breakpoints and validate the content hierarchy with users.
              </p>
            </div>
          </section>

          <footer className={styles.footer}>
            <p>CHAMPS · Personal UI/UX Design Concept</p>
            <Link href="/#projects">Back to all projects <span aria-hidden="true">↗</span></Link>
          </footer>
        </div>
      </main>
    </>
  );
}
