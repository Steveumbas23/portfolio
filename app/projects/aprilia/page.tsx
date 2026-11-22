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
  "Defined website structure and navigation.",
  "Planned content hierarchy and user flow.",
  "Developed wireframes and page layouts.",
  "Designed high-fidelity website interfaces.",
  "Created reusable UI components and design system.",
  "Refined the visual experience through personal evaluation.",
];

const contentAreas = [
  { number: "01", title: "Home / Hero Section", detail: "A high-impact RS-GP introduction and primary calls to action." },
  { number: "02", title: "Motorcycle / RS-GP", detail: "A visual presentation of the Aprilia racing motorcycle." },
  { number: "03", title: "Technical Specifications", detail: "A dedicated area for motorcycle specification details." },
  { number: "04", title: "Gallery & Videos", detail: "A media-led section for racing and motorcycle imagery." },
  { number: "05", title: "Racing Division Contact", detail: "A contact area for the racing division." },
];

const processSteps = [
  {
    number: "01",
    title: "Design Direction",
    description: "Define a motorsport-inspired visual identity using the supplied dark interface, red accents, and racing imagery.",
  },
  {
    number: "02",
    title: "Information Architecture",
    description: "Organize the motorcycle, specifications, media, and contact content into a clear website structure.",
  },
  {
    number: "03",
    title: "Wireframing",
    description: "Plan page layouts and content hierarchy. A separate Aprilia wireframe export is not included in the available project assets.",
  },
  {
    number: "04",
    title: "UI Design",
    description: "Develop the high-fidelity website interface around the RS-GP hero, specifications, gallery, and racing division contact content.",
  },
  {
    number: "05",
    title: "Prototyping",
    description: "An interactive Figma prototype is available to explore the website concept. It represents a design prototype, not a released or functional Aprilia website.",
  },
];

const palette = [
  { name: "Primary background", value: "#1C1B1B" },
  { name: "Main dark", value: "#080808" },
  { name: "Accent red", value: "#E32636" },
  { name: "Accent stroke", value: "#FF5A65" },
  { name: "Main text", value: "#FFFFFF" },
  { name: "Main border", value: "#353333" },
];

const typeStyles = [
  { name: "Barlow Condensed ExtraBold", role: "Headings", className: "headingSample", sample: "RACE PROVEN" },
  { name: "Inter", role: "Body", className: "bodySample", sample: "A focused digital experience for motorsport." },
  { name: "Rajdhani", role: "Statistics", className: "statSample", sample: "RS-GP  /  2024" },
];

export default function ApriliaCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className={`${styles.page} ${barlow.variable} ${inter.variable} ${rajdhani.variable}`} data-case-study>
        <div className={styles.container}>
          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>UI/UX DESIGN CASE STUDY · PERSONAL CONCEPT</p>
              <p className={styles.heroSeries}>THE MOTOGP EXPERIENCE</p>
              <h1 className={styles.title}>Aprilia Racing</h1>
              <p className={styles.lede}>
                A modern digital concept introducing the team, its RS-GP motorcycle, racing technology, and the world of MotoGP.
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
              <div><dt>My role</dt><dd>UI/UX Designer</dd></div>
              <div><dt>Platform</dt><dd>Responsive website concept</dd></div>
              <div><dt>Project type</dt><dd>Personal design concept</dd></div>
              <div><dt>Status</dt><dd>Unofficial · not released</dd></div>
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
              Supplied composite preview of the Aprilia Racing website UI. Separate screen exports were not included in the project assets reviewed.
            </figcaption>
          </figure>

          <section className={styles.section} id="project-overview" aria-labelledby="overview-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>01 / PROJECT OVERVIEW</p>
              <h2 id="overview-title">Crafting a Modern &amp; Immersive Motorsport Experience.</h2>
            </div>
            <div className={styles.overviewCopy}>
              <p>
                Aprilia Racing — The MotoGP Experience is a website concept designed to introduce the team identity, RS-GP motorcycle, technology, performance, and the wider MotoGP world through a modern and engaging digital experience.
              </p>
              <p>
                This is a personal UI/UX design concept. It is not an official Aprilia website, a released product, or an implementation for the Aprilia Racing team.
              </p>
            </div>
          </section>

          <section className={`${styles.section} ${styles.tintedSection}`} aria-labelledby="challenges-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>02 / PROBLEMS &amp; DESIGN CHALLENGES</p>
              <h2 id="challenges-title">Designing Around the Motorsport Experience.</h2>
              <p className={styles.sectionNote}>
                Intended users and design challenges are assumptions for this concept, not findings from formal user research.
              </p>
            </div>
            <div className={styles.needsGrid}>
              <article className={styles.infoCard}>
                <span className={styles.cardIndex}>A</span>
                <h3>Intended users</h3>
                <ul>
                  <li>MotoGP enthusiasts.</li>
                  <li>Aprilia fans.</li>
                  <li>Motorsport audiences.</li>
                </ul>
              </article>
              <article className={styles.infoCard}>
                <span className={styles.cardIndex}>B</span>
                <h3>Design challenges</h3>
                <ul>
                  <li>How might the racing identity be communicated visually?</li>
                  <li>How might motorcycle specifications be presented clearly?</li>
                  <li>How might racing content and media be easier to explore?</li>
                  <li>How might the experience feel immersive while remaining intuitive?</li>
                </ul>
              </article>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="role-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>03 / MY ROLE</p>
              <h2 id="role-title">From Visual Direction to Digital Experience.</h2>
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
                <strong>Tools:</strong> Figma, Auto Layout, Components, Variants, Layout Grids, Interactive Prototyping.
              </p>
            </div>
          </section>

          <section className={`${styles.section} ${styles.darkSection}`} aria-labelledby="process-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>04 / DESIGN PROCESS</p>
              <h2 id="process-title">From Motorsport Identity to Digital Experience.</h2>
              <p className={styles.sectionNote}>
                The content areas below are limited to sections visible in the supplied composite preview. No rider or news pages are shown in the available asset.
              </p>
            </div>
            <div className={styles.processContent}>
              <div className={styles.contentAreas}>
                {contentAreas.map((area) => (
                  <article className={styles.contentArea} key={area.number}>
                    <span>{area.number}</span>
                    <div><h3>{area.title}</h3><p>{area.detail}</p></div>
                  </article>
                ))}
              </div>
              <h3 className={styles.processHeading}>Design stages</h3>
              <ol className={styles.processList}>
                {processSteps.map((step) => (
                  <li className={styles.processStep} key={step.number}>
                    <span className={styles.processNumber}>{step.number}</span>
                    <div><h3>{step.title}</h3><p>{step.description}</p></div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className={`${styles.section} ${styles.tintedSection}`} aria-labelledby="system-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>05 / DESIGN SYSTEM</p>
              <h2 id="system-title">Bold, Dynamic &amp; Motorsport-Inspired.</h2>
              <p className={styles.sectionNote}>
                Color values and type roles follow the supplied design direction and preview. Component examples reflect the visible interface language.
              </p>
            </div>
            <div className={styles.systemContent}>
              <div>
                <h3 className={styles.subheading}>Color palette</h3>
                <div className={styles.palette} aria-label="Aprilia Racing concept color palette">
                  {palette.map((color) => (
                    <div className={styles.swatch} key={color.name}>
                      <span className={styles.swatchColor} style={{ backgroundColor: color.value }} />
                      <span className={styles.swatchName}>{color.name}</span>
                      <span className={styles.swatchValue}>{color.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className={styles.subheading}>Typography</h3>
                <div className={styles.typeSamples}>
                  {typeStyles.map((item) => (
                    <div className={styles.typeRow} key={item.name}>
                      <div><strong>{item.name}</strong><span>{item.role}</span></div>
                      <p className={styles[item.className]}>{item.sample}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className={styles.subheading}>Interface components &amp; states</h3>
                <div className={styles.componentBoard}>
                  <div className={styles.buttonSamples}>
                    <div className={styles.buttonSample}>
                      <div className={styles.buttonStateSet}>
                        <span className={styles.primaryButton}>Explore <span aria-hidden="true">↗</span></span>
                        <span className={`${styles.primaryButton} ${styles.stateHover}`}>Explore <span aria-hidden="true">↗</span></span>
                        <span className={`${styles.primaryButton} ${styles.stateFocus}`}>Explore <span aria-hidden="true">↗</span></span>
                      </div>
                      <small>Primary · default / hover / focus</small>
                    </div>
                    <div className={styles.buttonSample}>
                      <div className={styles.buttonStateSet}>
                        <span className={styles.secondaryButton}>Watch <span aria-hidden="true">▶</span></span>
                        <span className={`${styles.secondaryButton} ${styles.stateHover}`}>Watch <span aria-hidden="true">▶</span></span>
                        <span className={`${styles.secondaryButton} ${styles.stateFocus}`}>Watch <span aria-hidden="true">▶</span></span>
                      </div>
                      <small>Secondary · default / hover / focus</small>
                    </div>
                  </div>
                  <div className={styles.componentExamples}>
                    <div className={styles.specExample}><span>01 / SPECIFICATION</span><strong>Race-developed engineering</strong></div>
                    <div className={styles.mediaExample}><span>RS-GP / GALLERY</span></div>
                    <div className={styles.borderExample}><span>Border</span><strong>#353333</strong><span className={styles.borderLine} /></div>
                  </div>
                </div>
              </div>

              <div className={styles.spacingGuide}>
                <h3 className={styles.subheading}>Spacing rhythm</h3>
                <p>Illustrative spacing scale for clear navigation, specification details, and media panels; exact Figma spacing tokens were not included in the available assets.</p>
                <div className={styles.spacingBars} aria-label="Spacing scale examples">
                  {[8, 16, 24, 32, 48].map((size) => (
                    <div key={size}><span style={{ width: `${size * 2}px` }} /><small>{size}px</small></div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="validation-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>06 / VALIDATION</p>
              <h2 id="validation-title">A Design Concept Ready for Further Exploration.</h2>
            </div>
            <div className={styles.validationContent}>
              <div className={styles.outcomeGrid}>
                <div className={styles.outcomeCard}>
                  <h3>Project status</h3>
                  <dl>
                    <div><dt>Status</dt><dd>Unofficial Website Concept · Not Released</dd></div>
                    <div><dt>Deliverable</dt><dd>Website UI Design</dd></div>
                    <div><dt>Prototype</dt><dd>Interactive prototype available in Figma</dd></div>
                  </dl>
                </div>
                <div className={styles.validationCard}>
                  <span className={styles.validationMark} aria-hidden="true">i</span>
                  <h3>Research &amp; testing</h3>
                  <p>
                    No formal user research or usability testing results are documented. The audience and design challenges are concept assumptions, and no validation outcomes are claimed.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
            <p>Aprilia Racing · Personal UI/UX Design Concept</p>
            <Link href="/#projects">Back to all projects <span aria-hidden="true">↗</span></Link>
          </footer>
        </div>
      </main>
    </>
  );
}
