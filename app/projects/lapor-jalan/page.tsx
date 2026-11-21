import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "LaporJalan Full Stack & GIS Case Study | Steve Umbas",
  description:
    "A full-stack road damage reporting system built with React, Laravel, MySQL, and a Leaflet-based GIS workflow.",
};

const stack = [
  "React.js", "TypeScript", "Vite", "Laravel", "PHP", "MySQL", "Sanctum", "Leaflet", "React-Leaflet", "OpenStreetMap", "Nominatim", "Apache-compatible .htaccess",
];

const features = [
  {
    group: "PUBLIC REPORTING",
    title: "Landing page",
    description: "Introduces the road reporting service and directs visitors to the report and location workflows.",
    evidence: "Frontend source",
  },
  {
    group: "PUBLIC REPORTING",
    title: "Road damage report",
    description: "Authenticated users submit an address, map-selected coordinates, a description, and a road photo.",
    evidence: "Form + API validation",
  },
  {
    group: "LOCATION & STATUS",
    title: "Map location selection",
    description: "A Leaflet map accepts a clicked location and requests a readable address from Nominatim reverse geocoding.",
    evidence: "React-Leaflet source",
  },
  {
    group: "LOCATION & STATUS",
    title: "Report status lookup",
    description: "Users can review their reports, status, address, description, and available report or admin photos.",
    evidence: "Authenticated report list",
  },
  {
    group: "ADMIN WORKSPACE",
    title: "Report management dashboard",
    description: "Admins review reports, see summary counts, and inspect report locations and details.",
    evidence: "Dashboard source",
  },
  {
    group: "ADMIN WORKSPACE",
    title: "Status and follow-up photo",
    description: "Admins can move reports between pending, in progress, and completed, and attach an admin follow-up photo.",
    evidence: "Policy + update API",
  },
];

const reportFields = [
  "user_id → users.id (delete cascade)",
  "full_name and email snapshot",
  "address and latitude / longitude",
  "photo path and optional data / MIME fields",
  "admin_photo path and optional data / MIME fields",
  "description and status",
  "created_at / updated_at",
];

const implementationNotes = [
  {
    title: "Connect the SPA and backend",
    challenge: "Frontend routes and backend endpoints must share the same API contract and session context.",
    approach: "The React client calls Laravel /api routes; Sanctum, CSRF helpers, credentialed requests, and a Vite development proxy support that boundary.",
  },
  {
    title: "Turn a map selection into report data",
    challenge: "A pin needs both coordinates and a human-readable location before it can become a report.",
    approach: "Map clicks provide latitude and longitude; Nominatim reverse geocoding supplies an address, and the API validates and stores both values.",
  },
  {
    title: "Persist report imagery compatibly",
    challenge: "Uploaded photos need to remain retrievable across storage-path and database-column variations.",
    approach: "The backend stores files on the public disk and keeps paths; optional image data and MIME columns provide a database fallback when available.",
  },
  {
    title: "Protect report operations by role",
    challenge: "Public users and admins need different access to report records and updates.",
    approach: "Policies scope regular users to their own reports and restrict report updates and deletion to admins.",
  },
];

export default function LaporJalanCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page} data-case-study>
        <div className={styles.container}>
          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>FULL STACK DEVELOPMENT · GIS · DEVOPS</p>
              <h1 className={styles.title} data-fit="wide">LaporJalan</h1>
              <p className={styles.subtitle}>Road Damage Reporting System</p>
              <p className={styles.lede}>
                A web application for submitting road damage reports with geographic coordinates, then reviewing and managing those reports through an authenticated admin dashboard.
              </p>
              <a className={styles.heroLink} href="#overview">
                Explore the system <span aria-hidden="true">↓</span>
              </a>
            </div>

            <dl className={styles.facts}>
              <div><dt>Role</dt><dd>Full Stack Developer</dd></div>
              <div><dt>Platform</dt><dd>Web application</dd></div>
              <div><dt>Category</dt><dd>Full Stack · GIS · DevOps</dd></div>
              <div><dt>Application</dt><dd>Public reporting + admin dashboard</dd></div>
            </dl>
          </header>

          <figure className={styles.cover}>
            <Image
              src="/images/laporjalan.png"
              alt="LaporJalan road information and reporting web app shown on a laptop"
              width={799}
              height={700}
              priority
              sizes="(max-width: 760px) 100vw, 1120px"
            />
            <figcaption>Portfolio cover image for LaporJalan. Separate screenshots of the report form and admin dashboard were not present in the available assets.</figcaption>
          </figure>

          <section className={styles.section} id="overview" aria-labelledby="overview-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>01 / PROJECT OVERVIEW</p>
              <h2 id="overview-title">A structured path from road report to admin follow-up.</h2>
            </div>
            <div className={styles.copy}>
              <p>
                LaporJalan connects a public reporting interface with a Laravel API and an admin dashboard. A user submits a road photo, description, address, and map-selected coordinates. Admins can review reports, update their status, and attach a follow-up photo.
              </p>
              <p>
                The implementation uses React.js and TypeScript with Vite, Laravel and PHP, MySQL for the configured local environment, and Leaflet-based location selection. The repository includes Apache-compatible rewrite rules; its production web-server setup is not included.
              </p>
              <ul className={styles.stackList} aria-label="Verified technologies and services">
                {stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </section>

          <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="problem-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>02 / PROBLEM &amp; OBJECTIVES</p>
              <h2 id="problem-title">Make location and follow-up part of the report.</h2>
              <p className={styles.sectionNote}>Project objectives, not user research findings.</p>
            </div>
            <div className={styles.objectives}>
              <article><span>01</span><div><h3>Structure the report</h3><p>Collect a road photo, description, address, and coordinates in a validated report submission.</p></div></article>
              <article><span>02</span><div><h3>Keep reports traceable</h3><p>Associate each report with its submitting user and a clear status that can be followed over time.</p></div></article>
              <article><span>03</span><div><h3>Support administrative action</h3><p>Give admins a dashboard to inspect report details, change status, and attach a follow-up photo.</p></div></article>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="architecture-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>03 / SYSTEM ARCHITECTURE</p>
              <h2 id="architecture-title">A React client, Laravel API, and relational report data.</h2>
              <p className={styles.sectionNote}>Diagram reflects the frontend, API routes, database config, and GIS integrations found in the source.</p>
            </div>
            <div className={styles.architecture} aria-label="LaporJalan system architecture">
              <div className={styles.flow}>
                <article className={styles.archNode}><span>01 · CLIENT</span><h3>React.js + TypeScript</h3><p>Vite SPA · React-Leaflet</p></article>
                <span className={styles.arrow} aria-hidden="true">→</span>
                <article className={`${styles.archNode} ${styles.apiNode}`}><span>02 · APPLICATION</span><h3>Laravel API</h3><p>PHP · Sanctum · policies</p></article>
                <span className={styles.arrow} aria-hidden="true">→</span>
                <article className={`${styles.archNode} ${styles.databaseNode}`}><span>03 · DATA</span><h3>MySQL</h3><p>Users · reports · image records</p></article>
              </div>
              <div className={styles.gisBranch}>
                <span className={styles.branchStem} aria-hidden="true" />
                <div className={styles.gisNode}><span>MAP TILES</span><strong>OpenStreetMap</strong><small>Leaflet tile layer</small></div>
                <div className={styles.gisNode}><span>ADDRESS LOOKUP</span><strong>Nominatim</strong><small>Reverse geocoding from map coordinates</small></div>
              </div>
              <p className={styles.architectureCaption}>The browser map uses OpenStreetMap tiles and Nominatim directly. The report API validates and persists latitude, longitude, address, photo, description, owner, and status.</p>
            </div>
          </section>

          <section className={`${styles.section} ${styles.darkSection}`} aria-labelledby="process-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>04 / DEVELOPMENT PROCESS</p>
              <h2 id="process-title">Engineering the public and admin workflows.</h2>
            </div>
            <ol className={styles.processList}>
              <li><span>01</span><div><h3>Build the React SPA</h3><p>Use TypeScript and Vite for the landing, authentication, map-based reporting, status lookup, and dashboard interfaces.</p></div></li>
              <li><span>02</span><div><h3>Expose Laravel API operations</h3><p>Laravel handles registration, sign-in, report creation and retrieval, admin updates, deletion, and protected file responses.</p></div></li>
              <li><span>03</span><div><h3>Connect geographic input</h3><p>React-Leaflet captures a map click; Nominatim reverse geocoding resolves an address while the report retains numeric coordinates.</p></div></li>
              <li><span>04</span><div><h3>Persist and authorize reports</h3><p>MySQL stores users and reports; Laravel validation and policies enforce required fields and role-based access.</p></div></li>
              <li><span>05</span><div><h3>Prepare static frontend artifacts</h3><p>The Vite build emits a dist directory. A built SPA entry and assets are also present under backend/public, but a tracked synchronization or CI script was not found.</p></div></li>
            </ol>
          </section>

          <section className={styles.section} aria-labelledby="features-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>05 / CORE FEATURES</p>
              <h2 id="features-title">Public reporting and administrative follow-up.</h2>
              <p className={styles.sectionNote}>Feature descriptions are grounded in the React components, Laravel routes, controllers, and policies.</p>
            </div>
            <div className={styles.featureGrid}>
              {features.map((feature) => (
                <article className={styles.featureCard} key={feature.title}>
                  <p>{feature.group}</p><h3>{feature.title}</h3><div>{feature.description}</div><span>{feature.evidence}</span>
                </article>
              ))}
            </div>
          </section>

          <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="gis-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>06 / GIS INTEGRATION</p>
              <h2 id="gis-title">Coordinates connect map selection to report records.</h2>
            </div>
            <div className={styles.gisContent}>
              <div className={styles.gisFlow}>
                <span>Map click</span><b aria-hidden="true">→</b><span>Latitude / longitude</span><b aria-hidden="true">→</b><span>Nominatim address lookup</span><b aria-hidden="true">→</b><span>Validated report</span>
              </div>
              <p>The reporting map uses React-Leaflet and OpenStreetMap tiles. Clicking the map creates a marker and sends its coordinates to the Nominatim reverse endpoint to resolve an address. Laravel validates latitude and longitude ranges and stores both values with the report. The dashboard also plots report coordinates on an OpenStreetMap tile layer.</p>
              <p className={styles.gisCaveat}>No separate map screenshot or exported location visualization was found in the portfolio assets, so this section documents the source workflow without fabricating a map image.</p>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="database-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>07 / DATABASE &amp; BACKEND</p>
              <h2 id="database-title">Users own reports; admins manage the lifecycle.</h2>
            </div>
            <div className={styles.databaseContent}>
              <div className={styles.relationDiagram}>
                <article><span>TABLE</span><h3>users</h3><p>id · full_name · email · role</p></article>
                <div className={styles.relation}><b>1</b><span>owns</span><b>many</b></div>
                <article className={styles.reportTable}><span>TABLE</span><h3>reports</h3><p>user_id · address · coordinates · report data · status</p></article>
              </div>
              <ul className={styles.fieldList}>{reportFields.map((field) => <li key={field}>{field}</li>)}</ul>
              <div className={styles.backendNote}>
                <p><strong>Create:</strong> Authenticated users submit an image (required, max 4 MB), address, valid latitude/longitude, and description. New reports start as <code>pending</code>.</p>
                <p><strong>Read:</strong> Users receive their own reports; admins can view all reports.</p>
                <p><strong>Update / delete:</strong> Admin-only policy. Status values are <code>pending</code>, <code>process</code>, and <code>done</code>.</p>
                <p><strong>Image compatibility:</strong> Files are stored on Laravel’s public disk; optional image data and MIME columns support database fallback reads.</p>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.darkSection}`} aria-labelledby="devops-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>08 / DEPLOYMENT &amp; DEVOPS</p>
              <h2 id="devops-title">Deployment evidence in the repository.</h2>
              <p className={styles.sectionNote}>The installed domain is listed in application origin configuration; that alone does not verify production deployment.</p>
            </div>
            <div className={styles.devopsContent}>
              <div className={styles.artifactFlow}>
                <article><span>BUILD COMMAND</span><strong>Vite production build</strong><small>Frontend script: tsc -b &amp;&amp; vite build</small></article>
                <b aria-hidden="true">→</b>
                <article><span>BUILD OUTPUT</span><strong>frontend/dist</strong><small>Compiled SPA entry and hashed assets</small></article>
              </div>
              <div className={styles.artifactState}>
                <article><span>STATIC FILES FOUND</span><strong>backend/public</strong><small>SPA entry, assets, and Laravel public entry</small></article>
                <article><span>REWRITE RULES FOUND</span><strong>.htaccess</strong><small>Frontend SPA fallback and Laravel API routing rules</small></article>
                <article><span>DOMAIN CONFIGURED</span><strong>laporjalan.online</strong><small>Listed in CORS and Sanctum stateful domains</small></article>
              </div>
              <div className={styles.unverified}>
                <span>NOT FOUND IN THE REPOSITORY</span>
                <p>Jenkinsfile or pipeline definition · GitHub webhook configuration · Apache virtual host / server deployment config · documented artifact synchronization command.</p>
                <p>The project brief names Jenkins and GitHub Webhook, but this repository does not provide evidence to describe an automated CI/CD pipeline as implemented.</p>
              </div>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="challenges-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>09 / CHALLENGES &amp; SOLUTIONS</p>
              <h2 id="challenges-title">Engineering choices visible in the implementation.</h2>
            </div>
            <div className={styles.challengeList}>
              {implementationNotes.map((item, index) => (
                <article key={item.title}>
                  <span>0{index + 1}</span>
                  <div><h3>{item.title}</h3><p><strong>Challenge:</strong> {item.challenge}</p><p><strong>Implemented approach:</strong> {item.approach}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="outcome-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>10 / OUTCOME &amp; REFLECTION</p>
              <h2 id="outcome-title">A full-stack workflow with location and role-aware reporting.</h2>
            </div>
            <div className={styles.copy}>
              <p>The source repository contains a complete reporting path across a React/Vite client, Laravel API, MySQL-selected environment, Leaflet map, and admin controls. Users can submit and review their reports; admins can manage status and follow-up imagery.</p>
              <p>The project also includes backend feature tests for authorization, request validation, and image storage compatibility. The portfolio repository does not include usage metrics or user research, so none are claimed here.</p>
              <p>Next steps for a verifiable DevOps story would be to add the actual Jenkins pipeline, webhook trigger configuration, Apache host configuration, and documented build artifact handoff to the repository.</p>
            </div>
          </section>

          <footer className={styles.footer}>
            <p>LaporJalan · Road Damage Reporting System</p>
            <Link href="/#projects">Back to all projects <span aria-hidden="true">↗</span></Link>
          </footer>
        </div>
      </main>
    </>
  );
}
