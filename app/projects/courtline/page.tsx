import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "COURTLINE UI/UX Case Study | Steve Umbas",
  description:
    "A personal e-commerce website design concept for finding basketball shoes, with a dark interface and lime accent.",
};

const challenges = [
  {
    number: "01",
    title: "Product discovery",
    description:
      "Help shoppers browse basketball footwear and find shoes that fit their playing needs and personal style, from new arrivals to best sellers.",
  },
  {
    number: "02",
    title: "Catalog navigation",
    description:
      "Organize the shop into clear categories (Indoor Court, Outdoor Court, Performance, and Basketball Lifestyle), so shoppers can move between product groups quickly.",
  },
  {
    number: "03",
    title: "Product presentation",
    description:
      "Give each shoe a clear card with its type, name, price, and image, so shoppers can compare options at a glance.",
  },
  {
    number: "04",
    title: "Shopping interactions",
    description:
      "Make filters, wishlist, and add-to-cart actions easy to locate, so shoppers can narrow the list and act without extra steps.",
  },
];

const roleItems = [
  {
    title: "Information architecture",
    description:
      "Defined the store structure and page order, from hero and new arrivals to categories and best sellers.",
  },
  {
    title: "User flow planning",
    description:
      "Planned how shoppers move from browsing and filtering shoes to adding items to the cart or favorites.",
  },
  {
    title: "Screen layout planning",
    description:
      "Laid out the page to set content order and hierarchy before visual styling.",
  },
  {
    title: "UI design",
    description:
      "Designed a high-fidelity e-commerce interface with bold imagery and clear product cards.",
  },
  {
    title: "Reusable component design",
    description:
      "Built reusable components such as product cards, add-to-cart and favorite buttons, ratings, and navigation.",
  },
  {
    title: "Design refinement",
    description:
      "Refined spacing, type hierarchy, and image placement across the page.",
  },
];

const designProcess = [
  {
    step: "01",
    title: "Store Structure",
    description:
      "Organized the storefront around new arrivals, filters, categories, and best sellers.",
  },
  {
    step: "02",
    title: "Product Discovery",
    description:
      "Planned how shoppers browse basketball footwear, narrow the catalog, and compare products.",
  },
  {
    step: "03",
    title: "Layout Planning",
    description:
      "Laid out the page in a low-fidelity structure to set content order and hierarchy before visual styling.",
  },
  {
    step: "04",
    title: "UI Design",
    description:
      "Applied the COURTLINE black and lime direction to navigation, product cards, and shopping actions.",
  },
  {
    step: "05",
    title: "Prototyping",
    description:
      "Linked the interface in Figma to demonstrate the main shopping interactions.",
  },
];

const colors = [
  { name: "Courtline Black", value: "#080808" },
  { name: "Lime Accent", value: "#D2F545" },
  { name: "White", value: "#FFFFFF" },
  { name: "Soft Background", value: "#F5F5F5" },
  { name: "Dark Surface", value: "#1C1C1C" },
  { name: "Border Dark", value: "#3A3A3A" },
  { name: "Gray", value: "#A3A3A3" },
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
      "Organized reusable UI components such as buttons, navigation, and cards with default and active states.",
  },
  {
    title: "Smart Animate",
    description:
      "Created transitions between component variants for the interactive prototype.",
  },
];
export default function CourtlineCaseStudyPage() {
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
              <h1 className={styles.title} data-fit="wide">
                COURTLINE
              </h1>
              <p className={styles.lede}>
                A basketball shoe e-commerce concept designed to make product
                discovery feel bold, focused, and easy to navigate.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.sectionLink} href="#overview">
                  Explore the case study <span aria-hidden="true">↓</span>
                </a>
                <a
                  className={styles.prototypeLink}
                  href="https://www.figma.com/proto/pcYu2eNAFluHyCA0JxxVhU/Untitled?node-id=0-1&scaling=scale-down&content-scaling=fixed"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Interactive Prototype <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <dl className={styles.facts}>
              <div>
                <dt>MY Role</dt>
                <dd>UI/UX Designer</dd>
              </div>
              <div>
                <dt>Platform</dt>
                <dd>E-commerce website concept</dd>
              </div>
              <div>
                <dt>Project type</dt>
                <dd>Personal project</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Design phase · UI complete</dd>
              </div>
            </dl>
          </header>

          <figure className={styles.visualBoard}>
            <Image
              src="/images/preview courtline.png"
              alt="COURTLINE desktop e-commerce design collage showing home, category, shop, and product detail screens"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 760px) 100vw, 1200px"
            />
            <figcaption>
              The available COURTLINE board combines several desktop UI screens
              in one mockup. It is the only local COURTLINE image asset.
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
                A focused storefront for basketball footwear.
              </h2>
            </div>
            <div className={styles.copy}>
              <p>
                COURTLINE is an e-commerce website concept for basketball shoes.
                It helps shoppers find the right pair for playing or style
                through category browsing, product filters, and clear product
                cards that show type, name, and price at a glance.
              </p>
              <p>
                The New Arrivals page brings these together in one flow, from a
                bold hero to categories, a filtered product grid, and best
                sellers with ratings.
              </p>
              <div className={styles.keyScreens}>
                <strong>Key sections</strong>
                <ul>
                  {[
                    "Hero",
                    "New arrivals",
                    "Filters",
                    "Shop by category",
                    "Best sellers",
                  ].map((section) => (
                    <li key={section}>{section}</li>
                  ))}
                </ul>
              </div>
              <p className={styles.disclaimer}>
                <em>
                  Unofficial concept. Not affiliated with Nike, adidas, Under
                  Armour, Jordan, or New Balance.
                </em>
              </p>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.limeSection}`}
            aria-labelledby="challenges-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>
                02 / PROBLEMS &amp; DESIGN CHALLENGES
              </p>
              <h2 id="challenges-title">
                Make product discovery work at game speed.
              </h2>
              <p className={styles.sectionNote}>
                These challenges are design assumptions for this concept, not
                findings from formal user research.
              </p>
            </div>
            <div className={styles.challengeList}>
              {challenges.map((item) => (
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
                From store structure to a polished interface.
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
            className={`${styles.section} ${styles.limeSection}`}
            aria-labelledby="process-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>04 / DESIGN PROCESS</p>
              <h2 id="process-title">
                From page structure to a shopping interface.
              </h2>
              <p className={styles.sectionNote}>
                The page structure and the final interface follow the same
                layout, so the visual changes are easy to compare.
              </p>
            </div>
            <div className={styles.processContent}>
              <h3 className={styles.processHeading}>Design stages</h3>

              <ol className={styles.processList}>
                {designProcess.map((item) => (
                  <li key={item.step}>
                    <span>{item.step}</span>
                    <div>
                      <h4>{item.title}</h4>
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
                Dark, athletic, and deliberately high contrast.
              </h2>
              <p className={styles.sectionNote}>
                Colors and typography are taken directly from the website
                design.
              </p>
            </div>
            <div className={styles.systemContent}>
              <div className={styles.palette} aria-label="COURTLINE colors">
                {colors.map((color) => (
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
                <h3>Tools &amp; techniques</h3>
                <div className={styles.toolsList}>
                  {toolsAndTechniques.map((item) => (
                    <article className={styles.toolItem} key={item.title}>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.darkSection}`}
            aria-labelledby="validation-title"
          >
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>06 / VALIDATION</p>
              <h2 id="validation-title">
                Designed with users in mind, ready to be tested.
              </h2>
            </div>
            <div className={styles.validationContent}>
              <div className={styles.responsiveContent}>
                <div className={styles.deviceStatus}></div>
              </div>
              <div className={styles.outcomeGrid}>
                <article className={styles.outcomeCard}>
                  <h3>Project status</h3>
                  <dl>
                    <div>
                      <dt>Deliverable</dt>
                      <dd>Website UI design + interactive prototype</dd>
                    </div>
                    <div>
                      <dt>Type</dt>
                      <dd>Personal project</dd>
                    </div>
                    <div>
                      <dt>Pages</dt>
                      <dd>Home, Shop, Basketball Category, Product Detail</dd>
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
                    The design pairs a distinctive dark-and-lime identity with
                    the clear structure of a product storefront. Building the
                    page from reusable components, such as product cards,
                    buttons, and navigation, helped keep the shopping interface
                    consistent from the hero to the product grid.
                  </p>
                </article>
                <article className={styles.reflectionCard}>
                  <h3>Research &amp; testing</h3>
                  <p>
                    COURTLINE is currently focused on UI/UX exploration and
                    interface design. User testing is the next step, starting
                    with product filtering and the add-to-cart flow, followed by
                    responsive layouts for tablet and mobile.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
            <p>COURTLINE · Personal E-commerce Design Concept</p>
          </footer>
        </div>
      </main>
    </>
  );
}
