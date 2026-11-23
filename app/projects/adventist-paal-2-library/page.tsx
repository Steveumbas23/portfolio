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
  {
    name: "Splash",
    detail: "App identity screen shown in the supplied mockup.",
  },
  {
    name: "Login",
    detail: "Welcome and login form shown in the supplied mockup.",
  },
  {
    name: "Home / New Arrivals",
    detail:
      "Library home with service shortcuts and new books shown in the supplied mockup.",
  },
  {
    name: "Previously Borrowed",
    detail: "Borrow history card shown on the mobile home mockup.",
  },
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
      "Give students, teachers, guests, and library administrators clear and separate entry points, so each role sees only the tasks that matter to them.",
  },
  {
    number: "02",
    title: "Make book discovery understandable",
    description:
      "Organize the collection, new arrivals, and book details so readers know where to browse and what information is available for each book.",
  },
  {
    number: "03",
    title: "Represent library transactions clearly",
    description:
      "Give borrowing, returns, and history recognizable places in the mobile app, with titles and due dates easy to find.",
  },
  {
    number: "04",
    title: "Keep administration tasks distinct",
    description:
      "Separate the admin tools for books, accounts, borrowing, statistics, and fines from the reader app, so management work stays organized on the desktop platform.",
  },
];

const roleAreas = [
  "UI/UX design for a school library service",
  "Mobile user experience and screen hierarchy",
  "Separate desktop admin experience",
  "Visual interface direction and reusable UI patterns",
];

const designStages = [
  {
    step: "01",
    title: "Research",
    description:
      "No user research findings are documented in the available project materials.",
  },
  {
    step: "02",
    title: "User flow",
    description:
      "A sequence or user-flow diagram was not supplied, so the case study does not infer screen order from the feature list.",
  },
  {
    step: "03",
    title: "Wireframing",
    description:
      "No wireframe image is available locally. The supplied mockup is a styled mobile UI collage.",
  },
  {
    step: "04",
    title: "Interface design",
    description:
      "The available mobile collage shows selected screens; desktop admin features are listed in the brief but have no local mockup.",
  },
  {
    step: "05",
    title: "Prototyping",
    description:
      "A Figma prototype link is available from the case study hero. Its full contents were not accessible during this review.",
  },
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
          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                UI/UX DESIGN CASE STUDY · SCHOOL LIBRARY SERVICE
              </p>
              <h1 className={styles.title}>
                Adventist <span>Paal 2 Library</span>
              </h1>
              <p className={styles.lede}>
                A school library system concept with a mobile app for readers to
                borrow and return books, and a desktop platform for
                administrators to manage the collection.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.sectionLink} href="#overview">
                  Explore the case study <span aria-hidden="true">↓</span>
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
            </div>
            <dl className={styles.facts}>
              <div>
                <dt>Role</dt>
                <dd>UI/UX Designer</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>School library system</dd>
              </div>
              <div>
                <dt>Platforms</dt>
                <dd>Mobile app + desktop admin</dd>
              </div>
              <div>
                <dt>Project status</dt>
                <dd>Design phase · prototype ready</dd>
              </div>
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
              The only local library visual asset is this mobile mockup collage.
              It shows selected screens, not the full screen inventory.
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
                A school library service across two platforms.
              </h2>
            </div>
            <div className={styles.copy}>
              <p>
                Adventist Paal 2 Library is a school library system concept. The
                mobile app helps students and library visitors browse new
                arrivals, borrow and return books, and review what they have
                borrowed before. The desktop admin platform is designed for
                library management tasks.
              </p>
              <div className={styles.keyScreens}>
                <strong>Key Pages</strong>
                <ul>
                  {["Login", "Home", "Book Collection", "FAQ", "Profile"].map(
                    (section) => (
                      <li key={section}>{section}</li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.blueSection}`}
            aria-labelledby="challenges-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>
                02 / PROBLEMS &amp; DESIGN CHALLENGES
              </p>
              <h2 id="challenges-title">
                Make the library experience clear for each role.
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
              <h2 id="role-title">UI/UX Designer</h2>
              <p className={styles.sectionNote}>
                Contribution details beyond the role and platform scope were not
                separately documented in the local assets.
              </p>
            </div>
            <div className={styles.roleContent}>
              <ul className={styles.roleList}>
                {roleAreas.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{item}</strong>
                    </div>
                  </li>
                ))}
              </ul>
              <p className={styles.sectionNote}>
                A Figma design and prototype link is provided; its detailed
                contents were not accessible in the available project review.
              </p>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.darkSection}`}
            aria-labelledby="process-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>04 / DESIGN PROCESS</p>
              <h2 id="process-title">
                From available screens to a broader library service concept.
              </h2>
            </div>
            <div className={styles.processContent}>
              <h3 className={styles.processHeading}>Available mobile screens</h3>
              <p className={styles.processNote}>
                The local collage shows selected screens. The wider mobile scope
                from the brief is listed separately below.
              </p>
              <div className={styles.screenGrid}>
                {visibleMobileScreens.map((item, index) => (
                  <article className={styles.screenCard} key={item.name}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.name}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
                <div className={styles.scopeCard}>
                  <p className={styles.scopeLabel}>
                    ADDITIONAL MOBILE SCOPE FROM PROJECT BRIEF · NOT SHOWN AS
                    SEPARATE LOCAL SCREENS
                  </p>
                  <ul>
                    {mobileScope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <h3 className={styles.processHeading}>Design stages</h3>
              <p className={styles.processNote}>
                The stages summarize the documented scope and available project
                evidence. No research or usability outcomes are claimed.
              </p>
              <ol className={styles.processList}>
                {designStages.map((item) => (
                  <li className={styles.processStep} key={item.step}>
                    <span>{item.step}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <h3 className={styles.processHeading}>Desktop admin scope</h3>
              <p className={styles.processNote}>
                No desktop admin mockup or screenshot is available in the local
                repository. These features are scope stated in the brief, not
                verified completed screens.
              </p>
              <ul className={styles.adminScope}>
                {adminScope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h3 className={styles.processHeading}>Platform considerations</h3>
              <div className={styles.platformGrid}>
                <article>
                  <span>01 / MOBILE</span>
                  <h3>Readers and visitors</h3>
                  <p>
                    The local mockup shows phone-sized screens for library
                    entry, login, book discovery, and borrowed-book information.
                  </p>
                </article>
                <article>
                  <span>02 / DESKTOP ADMIN</span>
                  <h3>Library management</h3>
                  <p>
                    The brief describes a distinct desktop admin platform. Its
                    screenshots and responsive behavior are not available
                    locally.
                  </p>
                </article>
                <p className={styles.platformNote}>
                  These are two platform experiences, not desktop and mobile
                  breakpoints of one responsive screen design.
                </p>
              </div>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.blueSection}`}
            aria-labelledby="system-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>05 / DESIGN SYSTEM</p>
              <h2 id="system-title">A blue-and-white library identity.</h2>
              <p className={styles.sectionNote}>
                The blue value follows the provided brief. Neutral values are
                approximate samples; a published token sheet was not available.
              </p>
            </div>
            <div className={styles.systemContent}>
              <div
                className={styles.palette}
                aria-label="Colors from the project brief"
              >
                {systemColors.map((color) => (
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
              <div className={styles.systemNotes}>
                <article>
                  <h3>Typography</h3>
                  <p>
                    The raster mockup does not expose font metadata. Inter or
                    Poppins cannot be verified from the available image.
                  </p>
                </article>
                <article>
                  <h3>UI patterns</h3>
                  <p>
                    Visible patterns include a blue header, white content cards,
                    service shortcuts, book covers, and a bottom navigation bar.
                  </p>
                </article>
                <article>
                  <h3>Spacing &amp; components</h3>
                  <p>
                    Exact spacing, grid, and component tokens are not supplied
                    as a separate design-system asset.
                  </p>
                </article>
                <article>
                  <h3>Tools</h3>
                  <p>
                    The project links to a Figma design file. Its contents were
                    not accessible through the available viewer during this
                    review.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.neutralSection}`}
            aria-labelledby="outcome-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>06 / VALIDATION</p>
              <h2 id="outcome-title">
                A library interface concept, not a launched system.
              </h2>
            </div>
            <div className={styles.validationContent}>
              <div className={styles.outcomeGrid}>
                <article className={styles.outcomeCard}>
                  <h3>Project status</h3>
                  <dl>
                    <div>
                      <dt>Role</dt>
                      <dd>UI/UX Designer</dd>
                    </div>
                    <div>
                      <dt>Mobile visuals</dt>
                      <dd>Selected screens in one composite mockup</dd>
                    </div>
                    <div>
                      <dt>Desktop admin</dt>
                      <dd>Scope listed; visual assets not found locally</dd>
                    </div>
                    <div>
                      <dt>Release</dt>
                      <dd>No launch or school deployment is claimed</dd>
                    </div>
                  </dl>
                </article>
                <article className={styles.reflectionCard}>
                  <h3>Reflection</h3>
                  <p>
                    The project context covers both reader-facing tasks and
                    administration. Separate screen exports, the source flow,
                    and the desktop admin visuals would make it possible to
                    document the end-to-end service more fully.
                  </p>
                </article>
                <article className={styles.reflectionCard}>
                  <h3>Research &amp; testing</h3>
                  <p>
                    No user-testing records, participant feedback, or
                    validation results were found in the repository. This case
                    study makes no claims about testing outcomes.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
            <p>Adventist Paal 2 Library · UI/UX Design Concept</p>
          </footer>
        </div>
      </main>
    </>
  );
}
