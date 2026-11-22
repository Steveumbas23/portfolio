import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
    description: "Help shoppers browse basketball footwear and find products that fit their playing needs and personal style.",
  },
  {
    number: "02",
    title: "Catalog navigation",
    description: "Organize the shop and basketball category pages so shoppers can move between product groups and listings.",
  },
  {
    number: "03",
    title: "Product presentation",
    description: "Give product imagery, details, and available options a clear place on the product detail page.",
  },
  {
    number: "04",
    title: "Shopping interactions",
    description: "Make filters, pagination, color and size selection, wishlist, and cart actions easy to locate in the interface.",
  },
];

const roleItems = [
  "Information architecture",
  "User flow planning",
  "Wireframing",
  "UI design",
  "Design system and components",
  "Design refinement",
];

const documentedPages = [
  { number: "01", title: "Home", detail: "A campaign-led entry point introducing COURTLINE and basketball footwear." },
  { number: "02", title: "Shop", detail: "A product browsing page with filters and pagination, as listed in the project description." },
  { number: "03", title: "Basketball Category", detail: "A category view for browsing basketball shoes." },
  { number: "04", title: "Product Detail", detail: "A product view with details, color and size options, wishlist, and cart interactions." },
];

const colors = [
  { name: "Courtline Black", value: "#080808" },
  { name: "Lime Accent", value: "#D6FF3F" },
  { name: "White", value: "#FFFFFF" },
  { name: "Cool Gray", value: "#BFC1BF" },
];

export default function CourtlineCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page} data-case-study>
        <div className={styles.container}>
          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>UI/UX DESIGN CASE STUDY · PERSONAL CONCEPT</p>
              <h1 className={styles.title} data-fit="wide">COURTLINE</h1>
              <p className={styles.lede}>
                A basketball shoe e-commerce concept designed to make product discovery feel bold, focused, and easy to navigate.
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
              <div><dt>Role</dt><dd>UI/UX Designer</dd></div>
              <div><dt>Platform</dt><dd>Website / e-commerce</dd></div>
              <div><dt>Industry</dt><dd>Sports / basketball</dd></div>
              <div><dt>Project type</dt><dd>Personal design concept</dd></div>
              <div><dt>Tools</dt><dd>Figma · Auto Layout</dd></div>
              <div><dt>Status</dt><dd>UI concept · not released</dd></div>
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
              The available COURTLINE board combines several desktop UI screens in one mockup. It is the only local COURTLINE image asset.
            </figcaption>
          </figure>

          <section className={styles.section} id="overview" aria-labelledby="overview-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>01 / PROJECT OVERVIEW</p>
              <h2 id="overview-title">A focused storefront for basketball footwear.</h2>
            </div>
            <div className={styles.copy}>
              <p>
                COURTLINE is a personal e-commerce website design concept for basketball shoes. It aims to help shoppers discover footwear for playing and style through clear category browsing and product details.
              </p>
              <div className={styles.audienceNote}>
                <span>Intended audience</span>
                <p>
                  Basketball players and shoppers interested in basketball footwear, including people choosing shoes for their playing needs or personal style. This is a design assumption, not a research-validated audience profile.
                </p>
              </div>
              <p className={styles.conceptNote}>
                COURTLINE is a design concept. The website is not described as developed, launched, or available for purchase.
              </p>
            </div>
          </section>

          <section className={`${styles.section} ${styles.limeSection}`} aria-labelledby="challenges-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>02 / PROBLEMS &amp; DESIGN CHALLENGES</p>
              <h2 id="challenges-title">Make product discovery work at game speed.</h2>
              <p className={styles.sectionNote}>These are design challenges for the concept, not findings from user research.</p>
            </div>
            <div className={styles.challengeList}>
              {challenges.map((item) => (
                <article className={styles.challenge} key={item.number}>
                  <span>{item.number}</span><div><h3>{item.title}</h3><p>{item.description}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section} aria-labelledby="role-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>03 / MY ROLE</p>
              <h2 id="role-title">Structuring the store and shaping its interface.</h2>
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

          <section className={`${styles.section} ${styles.limeSection}`} aria-labelledby="process-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>04 / DESIGN PROCESS</p>
              <h2 id="process-title">From page structure to a shopping interface.</h2>
              <p className={styles.sectionNote}>
                The supplied board includes a low-fidelity layout and visual UI. No separate wireframe export or original user-flow diagram was found.
              </p>
            </div>
            <div className={styles.processContent}>
              <h3>Wireframing &amp; UI design</h3>
              <div className={styles.wireframeDetails}>
                <article><span>01</span><h3>Page structure</h3><p>The wireframe view establishes header navigation, a prominent hero area, product discovery content, and a product detail layout.</p></article>
                <article><span>02</span><h3>Visual development</h3><p>The paired final UI introduces product imagery, the dark canvas, and the lime accent while retaining the overall page structure.</p></article>
                <p className={styles.assetNote}>The paired wireframe-to-UI comparison is visible in the project board above. The wireframe is not recreated or presented as a separate source file.</p>
              </div>
              <h3>User flow considerations</h3>
              <p className={styles.processNote}>No original user-flow diagram was found. These interactions are listed in the existing project description; their exact order is not represented as a verified flow.</p>
              <div className={styles.interactionList}>
                {["Browse products", "Filter and paginate listings", "Open product details", "Choose color and size", "Use wishlist or cart actions"].map((item, index) => (
                  <div className={styles.interaction} key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>
                ))}
              </div>
              <h3>Final design: documented pages</h3>
              <p className={styles.processNote}>Page names come from the existing project description. Separate screen exports are not available in local assets.</p>
              <div className={styles.pageGrid}>
                {documentedPages.map((item) => (
                  <article className={styles.pageCard} key={item.number}>
                    <span>{item.number}</span><h3>{item.title}</h3><p>{item.detail}</p>
                  </article>
                ))}
                <p className={styles.assetNote}>Wishlist and cart are documented as interactions. No separate wishlist or cart page is listed or shown in the available board.</p>
              </div>
              <h3>Research &amp; interactive prototyping</h3>
              <p className={styles.processNote}>No user research or usability findings are documented. A Figma prototype link is available from the case study hero.</p>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="system-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>05 / DESIGN SYSTEM</p>
              <h2 id="system-title">Dark, athletic, and deliberately high contrast.</h2>
              <p className={styles.sectionNote}>
                COURTLINE&apos;s brief specifies black and lime. Supporting swatches are approximate observations from the supplied mockup, not confirmed design tokens.
              </p>
            </div>
            <div className={styles.systemContent}>
              <div className={styles.palette} aria-label="COURTLINE colors">
                {colors.map((color) => (
                  <div className={styles.swatch} key={color.name}>
                    <span className={styles.swatchColor} style={{ backgroundColor: color.value }} />
                    <span className={styles.swatchName}>{color.name}</span>
                    <span className={styles.swatchValue}>{color.value}</span>
                  </div>
                ))}
              </div>
              <div className={styles.systemNotes}>
                <article><h3>Typography</h3><p>The mockup uses compact navigation and bold display headings. The exact font family and type scale are not recorded in local project data.</p></article>
                <article><h3>Spacing &amp; grid</h3><p>Desktop layouts use broad content areas and separated product groups. Exact spacing tokens and grid measurements were not supplied.</p></article>
                <article><h3>Components</h3><p>Product cards, filters, pagination, color and size selectors, wishlist and cart actions are listed in the project description.</p></article>
                <article><h3>Buttons &amp; tokens</h3><p>The lime accent is used for visible actions. No separate token sheet or component library export was found.</p></article>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.darkSection}`} aria-labelledby="validation-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>06 / VALIDATION</p>
              <h2 id="validation-title">Validation and responsive status.</h2>
              <p className={styles.sectionNote}>No tablet or mobile design screens were found among the local COURTLINE assets.</p>
            </div>
            <div className={styles.validationContent}>
            <div className={styles.responsiveContent}>
              <p>The case study layout adapts for smaller viewports. The COURTLINE source board shows desktop designs only; it does not present a completed mobile or tablet storefront.</p>
              <div className={styles.deviceStatus}><span>Desktop · shown</span><span>Tablet · not supplied</span><span>Mobile · not supplied</span></div>
            </div>
            <div className={styles.outcomeGrid}>
              <article className={styles.outcomeCard}>
                <h3>Project status</h3>
                <dl>
                  <div><dt>Type</dt><dd>Personal e-commerce website design concept</dd></div>
                  <div><dt>Pages listed</dt><dd>Home, Shop, Basketball Category, Product Detail</dd></div>
                  <div><dt>Prototype</dt><dd>Figma prototype link available</dd></div>
                  <div><dt>Development</dt><dd>Not claimed as developed or launched</dd></div>
                </dl>
              </article>
              <article className={styles.reflectionCard}>
                <h3>Reflection</h3>
                <p>
                  The design pairs a distinctive dark-and-lime identity with the structure of a product storefront. The next useful artifacts would be the source flow, responsive layouts, and a documented component/token sheet so the design decisions can be reviewed in more detail.
                </p>
              </article>
            </div>
            <p className={styles.testingNote}>
              No user testing or validation results were included in the available project materials. This case study does not claim participant feedback, usability scores, or research outcomes.
            </p>
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
