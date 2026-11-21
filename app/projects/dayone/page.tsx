import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "DayOne Full Stack Case Study | Steve Umbas",
  description:
    "A full stack engineering case study covering DayOne's Next.js frontend, FastAPI backend, Supabase data layer, and Gemini API integration.",
};

const featureAreas = [
  {
    number: "01",
    title: "Landing page",
    description:
      "Introduces DayOne and its health and fitness tracking experience. The supplied preview includes the landing interface.",
  },
  {
    number: "02",
    title: "Dashboard & progress",
    description:
      "Combines an overview with progress data. The API exposes a dashboard overview and progress analytics derived from daily records.",
  },
  {
    number: "03",
    title: "BMI analysis",
    description:
      "Accepts height and weight, calculates BMI in the backend, assigns a category, and stores a BMI log and profile values.",
  },
  {
    number: "04",
    title: "Daily tracking",
    description:
      "Records daily weight, calories, water intake, workout completion, exercise items, and nutrition items.",
  },
  {
    number: "05",
    title: "Fitness goals & plans",
    description:
      "Stores a goal type (gain, lose, or maintain) and generated workout and nutrition plans. A numeric target-weight field was not found in the data model.",
  },
  {
    number: "06",
    title: "AI Coach",
    description:
      "Accepts a message through the API, uses user and tracking context to prepare a response, and stores chat sessions and messages.",
  },
];

const tables = [
  { name: "users", role: "Account identity; parent record for user-owned data." },
  { name: "user_profiles", role: "Age, gender, height, current weight, BMI, and goal type." },
  { name: "bmi_logs", role: "BMI measurements, category, and generated insight history." },
  { name: "ai_plans", role: "Workout and nutrition plan payloads linked to a BMI log." },
  { name: "daily_logs", role: "Daily weight, calories, water, and workout progress." },
  { name: "daily_workouts / daily_nutrition", role: "Exercise and meal entries associated with a daily log." },
  { name: "user_progress_summary / user_streaks", role: "Aggregated progress and activity streak data." },
  { name: "chat_sessions / chat_messages", role: "AI Coach conversation history." },
];

export default function DayOneCaseStudyPage() {
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
              <p className={styles.eyebrow}>FULL STACK DEVELOPMENT · AI INTEGRATION</p>
              <h1 className={styles.title}>DayOne</h1>
              <p className={styles.lede}>
                An AI-powered fitness and weight management platform built around a connected web client, API, and persistent health tracking data.
              </p>
              <a className={styles.heroLink} href="#overview">
                Explore the case study <span aria-hidden="true">↓</span>
              </a>
              <span className={styles.status}>Web application · portfolio project</span>
            </div>

            <dl className={styles.projectFacts}>
              <div><dt>My role</dt><dd>Full Stack Developer</dd></div>
              <div><dt>Platform</dt><dd>Web application</dd></div>
              <div><dt>Category</dt><dd>Full Stack · AI Integration</dd></div>
              <div><dt>Stack</dt><dd>Next.js · FastAPI · Supabase · Gemini API</dd></div>
            </dl>
          </header>

          <figure className={styles.heroVisual}>
            <Image
              src="/images/preview dayone.png"
              alt="DayOne interface preview collage showing its landing page and health tracking screens across device sizes"
              width={1920}
              height={1080}
              priority
              sizes="(max-width: 760px) 100vw, 1200px"
            />
            <figcaption>
              Original portfolio preview collage. Separate, feature-specific screen exports were not available in the repository.
            </figcaption>
          </figure>

          <section className={styles.section} id="overview" aria-labelledby="overview-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>01 / PROJECT OVERVIEW</p>
              <h2 id="overview-title">A connected system for everyday health tracking.</h2>
            </div>
            <div className={styles.bodyCopy}>
              <p>
                DayOne brings BMI analysis, daily health logs, weight progress, workout and nutrition plans, and an AI Coach into one web application. The engineering work connects a typed Next.js client to a Python API and a Supabase-hosted PostgreSQL data layer.
              </p>
              <p>
                This case study documents the implementation found in the repository. It describes a software project and its integrations; it does not claim that the product was launched or validated with user testing.
              </p>
            </div>
          </section>

          <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="problem-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>02 / PROBLEM &amp; OBJECTIVES</p>
              <h2 id="problem-title">Make personal tracking structured and useful.</h2>
              <p className={styles.sectionNote}>Project objectives inferred from the implemented feature set, not user research findings.</p>
            </div>
            <div className={styles.objectiveGrid}>
              <article className={styles.infoCard}>
                <span className={styles.cardIndex}>01</span>
                <h3>The challenge</h3>
                <p>Health habits and measurements can be difficult to follow over time when daily activity, weight, and guidance are kept in separate places.</p>
              </article>
              <article className={styles.infoCard}>
                <span className={styles.cardIndex}>02</span>
                <h3>Development objectives</h3>
                <ul>
                  <li>Connect profile and BMI information to daily records.</li>
                  <li>Provide a consistent API for dashboard and tracking views.</li>
                  <li>Offer contextual fitness guidance through Gemini API.</li>
                </ul>
              </article>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="architecture-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>03 / SYSTEM ARCHITECTURE</p>
              <h2 id="architecture-title">A web client, an API boundary, and connected services.</h2>
              <p className={styles.sectionNote}>Simplified from the frontend clients, FastAPI routes/services, and persistence models in the source repository.</p>
            </div>
            <div className={styles.architecture} role="img" aria-label="Architecture flow from Next.js and TypeScript frontend to FastAPI backend, which communicates with Supabase PostgreSQL and the Gemini API">
              <div className={styles.archNode}>
                <span className={styles.nodeType}>CLIENT</span>
                <strong>Next.js</strong>
                <span>React · TypeScript</span>
                <small>Pages and feature clients</small>
              </div>
              <span className={styles.archArrow} aria-hidden="true">→<small>HTTP API</small></span>
              <div className={`${styles.archNode} ${styles.apiNode}`}>
                <span className={styles.nodeType}>APPLICATION API</span>
                <strong>FastAPI</strong>
                <span>Python · async services</span>
                <small>Auth · BMI · tracking · coach</small>
              </div>
              <div className={styles.serviceLinks} aria-hidden="true"><span>Persistence</span><span>Generation request</span></div>
              <div className={styles.archServices}>
                <div className={styles.serviceNode}><span className={styles.nodeType}>DATA</span><strong>Supabase</strong><span>PostgreSQL</span></div>
                <div className={styles.serviceNode}><span className={styles.nodeType}>AI SERVICE</span><strong>Gemini API</strong><span>generateContent</span></div>
              </div>
            </div>
            <p className={styles.archNote}>The frontend calls backend endpoints. The backend applies business rules, persists records through SQLAlchemy, and calls Gemini server-side using a configured API key.</p>
          </section>

          <section className={`${styles.section} ${styles.darkSection}`} aria-labelledby="process-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>04 / DEVELOPMENT PROCESS</p>
              <h2 id="process-title">Building the feature path from interface to data.</h2>
            </div>
            <div className={styles.processList}>
              <article><span>01</span><div><h3>Frontend</h3><p>Next.js App Router and TypeScript organize the landing page, dashboard views, and feature-specific clients for BMI, daily tracking, dashboard data, and AI Coach.</p></div></article>
              <article><span>02</span><div><h3>Backend API</h3><p>FastAPI routes delegate to service classes for authentication, BMI analysis, dashboard overview, daily tracking, and coach conversations.</p></div></article>
              <article><span>03</span><div><h3>Persistence</h3><p>Async SQLAlchemy models map application data to PostgreSQL tables. User-owned records link back to the account, while daily workouts and meals link to daily logs.</p></div></article>
              <article><span>04</span><div><h3>AI integration</h3><p>The backend sends prepared prompts to the Gemini generateContent API. BMI calculations remain deterministic backend logic; Gemini generates supporting insight and conversational guidance.</p></div></article>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="features-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>05 / CORE FEATURES</p>
              <h2 id="features-title">Feature coverage across the product.</h2>
              <p className={styles.sectionNote}>Feature descriptions are based on the checked-in frontend and backend implementation.</p>
            </div>
            <div className={styles.featureGrid}>
              {featureAreas.map((feature) => (
                <article className={styles.featureCard} key={feature.number}>
                  <span>{feature.number}</span><h3>{feature.title}</h3><p>{feature.description}</p>
                </article>
              ))}
            </div>
            <p className={styles.assetNote}>The repository preview is a single composite image. Individual screenshots for each feature are not available to show here.</p>
          </section>

          <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="ai-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>06 / AI INTEGRATION</p>
              <h2 id="ai-title">Gemini API as a service, with application context around it.</h2>
            </div>
            <div className={styles.aiContent}>
              <div className={styles.aiFlow}>
                <div><span>01</span><strong>User input</strong><small>Message or BMI context</small></div>
                <b aria-hidden="true">↓</b>
                <div><span>02</span><strong>FastAPI service</strong><small>Builds prompt and context</small></div>
                <b aria-hidden="true">↓</b>
                <div><span>03</span><strong>Gemini API</strong><small>generateContent request</small></div>
                <b aria-hidden="true">↓</b>
                <div><span>04</span><strong>Response &amp; history</strong><small>Returned to client; chat is persisted</small></div>
              </div>
              <div className={styles.bodyCopy}>
                <p>The Gemini service sends prompts from the backend to Google’s Generative Language API. AI Coach requests use the user’s message and, where relevant, profile or tracking context; conversation sessions and messages have dedicated persistence models.</p>
                <p>The BMI value and category are calculated by backend logic. Gemini is used for generated insights and guidance, with fallback handling in the BMI insight path. DayOne integrates an existing model through an API; it does not train or build its own AI model.</p>
              </div>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="data-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>07 / DATABASE &amp; BACKEND</p>
              <h2 id="data-title">Relational records keep the tracking history connected.</h2>
              <p className={styles.sectionNote}>The schema is shown at a high level from the SQLAlchemy models.</p>
            </div>
            <div className={styles.dataPanel}>
              <div className={styles.relationship} aria-label="Database relationships: users connect to profiles, BMI logs, daily logs, analytics, and chat sessions; BMI logs connect to AI plans; daily logs connect to workouts and nutrition and may reference an AI plan; chat sessions connect to messages.">
                <div><span>users</span><i>→</i><span>user_profiles</span></div>
                <div><span>users</span><i>→</i><span>bmi_logs</span><i>→</i><span>ai_plans</span></div>
                <div><span>users</span><i>→</i><span>daily_logs</span><i>→</i><span>daily_workouts · daily_nutrition</span></div>
                <div><span>daily_logs</span><i>→</i><span>ai_plans <small>(optional reference)</small></span></div>
                <div><span>users</span><i>→</i><span>user_progress_summary · user_streaks</span></div>
                <div><span>users</span><i>→</i><span>chat_sessions</span><i>→</i><span>chat_messages</span></div>
              </div>
              <ul className={styles.tableList}>
                {tables.map((table) => <li key={table.name}><strong>{table.name}</strong><span>{table.role}</span></li>)}
              </ul>
            </div>
            <p className={styles.archNote}>The backend obtains a database session per request and uses async SQLAlchemy. Supabase provides the PostgreSQL database and auth configuration; the API owns the application data flow described above.</p>
          </section>

          <section className={`${styles.section} ${styles.darkSection}`} aria-labelledby="challenges-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>08 / CHALLENGES &amp; APPROACH</p>
              <h2 id="challenges-title">Keeping calculations, records, and generated guidance in sync.</h2>
            </div>
            <div className={styles.challengeGrid}>
              <article><h3>Frontend to backend contract</h3><p>Feature clients call domain-specific API routes, while Pydantic schemas define request and response shapes.</p></article>
              <article><h3>Health data over time</h3><p>Profile values, BMI history, and daily logs are stored separately so current profile data and historical entries have distinct records.</p></article>
              <article><h3>Reliable BMI behavior</h3><p>The backend calculates BMI and assigns a category before persisting the result; generated insight is a separate step with fallback text handling.</p></article>
              <article><h3>External AI dependency</h3><p>Gemini calls are made from the backend with a configured key and timeout. Errors are translated into application-level handling rather than exposing credentials to the browser.</p></article>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="reflection-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>09 / OUTCOME &amp; REFLECTION</p>
              <h2 id="reflection-title">A full stack implementation to build on.</h2>
            </div>
            <div className={styles.bodyCopy}>
              <p>The repository contains an integrated web client, API services, relational persistence, tracking and analytics flows, and Gemini-powered guidance. This project provided hands-on work across frontend and backend boundaries, database modeling, and a third-party AI API.</p>
              <p>Potential next steps include adding automated end-to-end coverage for critical user flows, documenting API contracts and deployment configuration, and reviewing generated health guidance for clarity and safe product boundaries. No user testing results or launch metrics were found in the project materials.</p>
            </div>
          </section>

          <footer className={styles.footer}>
            <p>DayOne · Full Stack Development &amp; AI Integration</p>
            <Link href="/#projects">Back to projects ↑</Link>
          </footer>
        </div>
      </main>
    </>
  );
}
