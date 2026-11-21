import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Adventist Paal 2 Library UI/UX Case Study | Steve Umbas",
  description:
    "A school library service UI concept spanning a mobile experience and a separate desktop admin platform.",
};

const visibleMobileScreens = [
  { name: "Splash", detail: "App identity screen shown in the supplied mockup." },
  { name: "Login", detail: "Welcome and login form shown in the supplied mockup." },
  { name: "Home / New Arrivals", detail: "Library home with service shortcuts and new books shown in the supplied mockup." },
  { name: "Previously Borrowed", detail: "Borrow history card shown on the mobile home mockup." },
];

const mobileScope = [
  "Student, teacher, and guest registration",
  "Book collection and book details",
  "Borrowing and returns",
  "History, FAQ, and profile",
];

const adminScope = [
  "Admin login and profile",
  "Book and account management",
  "Borrowing management and fines",
  "Statistics overview",
];

const designChallenges = [
  {
    number: "01",
    title: "Different audiences, different entry points",
    description:
      "The design scope includes students, teachers, guests, and library administrators. Their access and tasks need clear separation in the experience.",
  },
  {
    number: "02",
    title: "Make book discovery understandable",
    description:
      "Organize the collection, new arrivals, and book details so library users can understand where to browse and what information is available.",
  },
  {
    number: "03",
    title: "Represent library transactions clearly",
    description:
      "Borrowing, returns, and history need recognizable places in the mobile service concept.",
  },
  {
    number: "04",
    title: "Keep administration tasks distinct",
    description:
      "The desktop admin scope covers books, accounts, borrowing, statistics, and fines, separate from the mobile reader experience.",
  },
];

const roleAreas = [
  "UI/UX design for a school library service",
  "Mobile user experience and screen hierarchy",
  "Separate desktop admin experience",
  "Visual interface direction and reusable UI patterns",
];

const systemColors = [
  { name: "Library blue", value: "#002BA6" },
  { name: "White", value: "#FFFFFF" },
  { name: "Approx. pale neutral", value: "#F4F6FA" },
  { name: "Approx. dark neutral", value: "#303642" },
];

export default function AdventistPaal2LibraryCaseStudyPage() {
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
              <p className={styles.eyebrow}>UI/UX DESIGN CASE STUDY · SCHOOL LIBRARY SERVICE</p>
              <h1 className={styles.title}>Adventist <span>Paal 2 Library</span></h1>
              <p className={styles.lede}>
                A library service interface concept with a mobile experience for readers and a separate desktop platform scope for administrators.
              </p>
              <a className={styles.sectionLink} href="#overview">
                Explore the case study <span aria-hidden="true">↓</span>
              </a>
              <a
                className={styles.figmaLink}
                href="https://www.figma.com/design/7FvkikOv8vM8iaa7FzYlZ3"
                target="_blank"
                rel="noreferrer"
              >
                Open Figma Project <span aria-hidden="true">↗</span>
              </a>
              <a
                className={styles.prototypeLink}
                href="https://www.figma.com/proto/7FvkikOv8vM8iaa7FzYlZ3/SAD-LIBRARY-PROJECT?node-id=128-365&p=f&t=EwVoqRQxpOXYb9TK-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=128%3A365"
                target="_blank"
                rel="noreferrer"
              >
                View Interactive Prototype <span aria-hidden="true">↗</span>
              </a>
            </div>
            <dl className={styles.facts}>
              <div><dt>Role</dt><dd>UI/UX Designer</dd></div>
              <div><dt>Category</dt><dd>School library system</dd></div>
              <div><dt>Platforms</dt><dd>Mobile experience + desktop admin</dd></div>
                  <div><dt>Project status</dt><dd>Design concept · prototype available</dd></div>
            </dl>
          </header>

          <figure className={styles.heroVisual}>
            <Image
              src="/images/preview ibrary.png"
              alt="Adventist Paal 2 Library mobile mockup showing splash, login, home with new arrivals, and a previously borrowed book"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 760px) 100vw, 1200px"
            />
            <figcaption>
              The only local library visual asset is this mobile mockup collage. It shows selected screens, not the full screen inventory.
            </figcaption>
          </figure>

          <section className={styles.section} id="overview" aria-labelledby="overview-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>01 / HERO &amp; OVERVIEW</p>
              <h2 id="overview-title">A school library service across two distinct platforms.</h2>
            </div>
            <div className={styles.copy}>
              <p>
                Adventist Paal 2 Library is a UI concept for a school library service. The mobile experience is scoped around readers and library visitors; the desktop admin experience is scoped around library management tasks.
              </p>
              <p>
                The mobile mockup locally available shows the library identity, login, a home screen with new arrivals, and a previously borrowed book. The desktop admin screens are listed in the project context but were not present among the local image assets.
              </p>
              <div className={styles.audienceNote}>
                <span>Intended audiences</span>
                <p>Students, teachers, and guests using the mobile library service, plus administrators using a separate desktop platform. This audience split follows the supplied project brief and is not a research finding.</p>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.blueSection}`} aria-labelledby="challenges-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>02 / DESIGN CHALLENGES</p>
              <h2 id="challenges-title">Make the library experience clear for each role.</h2>
              <p className={styles.sectionNote}>Design considerations based on the project scope, not user research.</p>
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
              <h2 id="role-title">UI/UX Designer</h2>
              <p className={styles.sectionNote}>Contribution details beyond the role and platform scope were not separately documented in the local assets.</p>
            </div>
            <ul className={styles.roleList}>
              {roleAreas.map((item, index) => (
                <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
              ))}
            </ul>
          </section>

          <section className={`${styles.section} ${styles.neutralSection}`} aria-labelledby="wireframe-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>04 / WIREFRAMES</p>
              <h2 id="wireframe-title">Wireframe files were not found in the repository.</h2>
            </div>
            <div className={styles.unavailablePanel}>
              <span className={styles.statusMark} aria-hidden="true">—</span>
              <div>
                <h3>No wireframe image is available locally</h3>
                <p>The provided mockup is a styled mobile UI collage. It does not show a wireframe-to-final comparison, so no wireframe is recreated or presented as original.</p>
              </div>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="flow-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>05 / USER FLOW</p>
              <h2 id="flow-title">The source flow diagram is not available.</h2>
              <p className={styles.sectionNote}>The case study does not infer screen order from the feature inventory.</p>
            </div>
            <div className={styles.unavailablePanel}>
              <span className={styles.statusMark} aria-hidden="true">—</span>
              <div>
                <h3>No flow artifact found</h3>
                <p>The project context lists service areas but does not include a documented sequence or user-flow diagram.</p>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.darkSection}`} aria-labelledby="mobile-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>06 / FINAL DESIGN · MOBILE</p>
              <h2 id="mobile-title">Screens visible in the supplied mockup.</h2>
              <p className={styles.sectionNote}>
                These are the screens identifiable in the local collage. The wider mobile scope from the brief is listed separately below.
              </p>
            </div>
            <div className={styles.screenGrid}>
              {visibleMobileScreens.map((item, index) => (
                <article className={styles.screenCard} key={item.name}>
                  <span>{String(index + 1).padStart(2, "0")}</span><h3>{item.name}</h3><p>{item.detail}</p>
                </article>
              ))}
              <div className={styles.scopeCard}>
                <p className={styles.scopeLabel}>ADDITIONAL MOBILE SCOPE FROM PROJECT BRIEF · NOT SHOWN AS SEPARATE LOCAL SCREENS</p>
                <ul>{mobileScope.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="admin-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>07 / FINAL DESIGN · DESKTOP ADMIN</p>
              <h2 id="admin-title">A separate desktop platform scope.</h2>
              <p className={styles.sectionNote}>No desktop admin mockup or screenshot is available in the local repository.</p>
            </div>
            <div className={styles.adminPanel}>
              <div className={styles.unavailablePanel}>
                <span className={styles.statusMark} aria-hidden="true">—</span>
                <div><h3>Desktop admin visuals not supplied</h3><p>The items below are scope stated in the brief, not verified completed screens.</p></div>
              </div>
              <ul className={styles.adminScope}>{adminScope.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </section>

          <section className={`${styles.section} ${styles.blueSection}`} aria-labelledby="system-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>08 / DESIGN SYSTEM &amp; UI GUIDELINES</p>
              <h2 id="system-title">A blue-and-white library identity.</h2>
              <p className={styles.sectionNote}>The blue value follows the provided brief. Neutral values are approximate samples; a published token sheet was not available.</p>
            </div>
            <div className={styles.systemContent}>
              <div className={styles.palette} aria-label="Colors from the project brief">
                {systemColors.map((color) => (
                  <div className={styles.swatch} key={color.name}>
                    <span className={styles.swatchColor} style={{ backgroundColor: color.value }} />
                    <span className={styles.swatchName}>{color.name}</span>
                    <span className={styles.swatchValue}>{color.value}</span>
                  </div>
                ))}
              </div>
              <div className={styles.systemNotes}>
                <article><h3>Typography</h3><p>The raster mockup does not expose font metadata. Inter or Poppins cannot be verified from the available image.</p></article>
                <article><h3>UI patterns</h3><p>Visible patterns include a blue header, white content cards, service shortcuts, book covers, and a bottom navigation bar.</p></article>
                <article><h3>Spacing &amp; components</h3><p>Exact spacing, grid, and component tokens are not supplied as a separate design-system asset.</p></article>
                <article><h3>Tools</h3><p>The project links to a Figma design file. Its contents were not accessible through the available viewer during this review.</p></article>
              </div>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="platform-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>09 / PLATFORM CONSIDERATIONS</p>
              <h2 id="platform-title">Mobile reader experience and desktop administration are separate platforms.</h2>
            </div>
            <div className={styles.platformGrid}>
              <article><span>01 / MOBILE</span><h3>Readers and visitors</h3><p>The local mockup shows phone-sized screens for library entry, login, book discovery, and borrowed-book information.</p></article>
              <article><span>02 / DESKTOP ADMIN</span><h3>Library management</h3><p>The brief describes a distinct desktop admin platform. Its screenshots and responsive behavior are not available locally.</p></article>
              <p className={styles.platformNote}>These are two platform experiences, not desktop and mobile breakpoints of one responsive screen design.</p>
            </div>
          </section>

          <section className={`${styles.section} ${styles.neutralSection}`} aria-labelledby="outcome-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>10 / OUTCOME &amp; REFLECTION</p>
              <h2 id="outcome-title">A library interface concept, not a launched system.</h2>
            </div>
            <div className={styles.outcomeGrid}>
              <article className={styles.outcomeCard}>
                <h3>Project status</h3>
                <dl>
                  <div><dt>Role</dt><dd>UI/UX Designer</dd></div>
                  <div><dt>Mobile visuals</dt><dd>Selected screens in one composite mockup</dd></div>
                  <div><dt>Desktop admin</dt><dd>Scope listed; visual assets not found locally</dd></div>
                  <div><dt>Release</dt><dd>No launch or school deployment is claimed</dd></div>
                </dl>
              </article>
              <article className={styles.reflectionCard}>
                <h3>Reflection</h3>
                <p>The project context covers both reader-facing tasks and administration. Separate screen exports, the source flow, and the desktop admin visuals would make it possible to document the end-to-end service more fully.</p>
              </article>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="testing-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>11 / TESTING</p>
              <h2 id="testing-title">Testing status is not documented in the available materials.</h2>
            </div>
            <p className={styles.testingNote}>
              No user-testing records, participant feedback, or validation results were found in the repository. This case study makes no claims about testing outcomes.
            </p>
          </section>

          <footer className={styles.footer}>
            <p>Adventist Paal 2 Library · UI/UX Design Concept</p>
            <Link href="/#projects">Back to all projects <span aria-hidden="true">↗</span></Link>
          </footer>
        </div>
      </main>
    </>
  );
}
