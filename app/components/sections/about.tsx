import Image from "next/image";
import styles from "./about.module.css";

const skills = ["UI/UX DESIGN", "WEB DEVELOPMENT", "FIGMA", "FRONT-END"];

const technologies = [
  {
    name: "React",
    category: "FRONTEND",
    icon: "/images/logo-reactjs.png",
    description: "Building reusable interfaces with component-based UI.",
  },
  {
    name: "JavaScript",
    category: "LANGUAGE",
    icon: "/images/logo-javascript.png",
    description: "Adding interactive behavior to modern web experiences.",
  },
  {
    name: "TypeScript",
    category: "LANGUAGE",
    icon: "/images/logo-typescript.png",
    description: "Writing reliable JavaScript with clear types.",
  },
  {
    name: "Tailwind CSS",
    category: "STYLING",
    icon: "/images/logo-tailwind.png",
    description: "Styling responsive layouts with utility classes.",
  },
  {
    name: "Laravel",
    category: "BACKEND",
    icon: "/images/logo-laravel.png",
    description: "Developing structured web applications with PHP.",
  },
  {
    name: "PHP",
    category: "LANGUAGE",
    icon: "/images/logo-php.png",
    description: "Creating server-side features for web applications.",
  },
  {
    name: "Python",
    category: "LANGUAGE",
    icon: "/images/logo-python.png",
    description: "Building practical tools and application features.",
  },
  {
    name: "Flask",
    category: "BACKEND",
    icon: "/images/logo-flask.png",
    description: "Creating lightweight web services with Python.",
  },
  {
    name: "PostgreSQL",
    category: "DATABASE",
    icon: "/images/logo-posgre.png",
    description: "Managing relational data with a robust SQL database.",
  },
  {
    name: "MySQL",
    category: "DATABASE",
    icon: "/images/logo-mysql.png",
    description: "Storing and querying structured application data.",
  },
  {
    name: "Supabase",
    category: "PLATFORM",
    icon: "/images/logo-supabase.png",
    description: "Working with hosted database and backend services.",
  },
  {
    name: "GitHub",
    category: "TOOLS",
    icon: "/images/logo-github.png",
    description: "Tracking code and collaborating through version control.",
  },
];

const technologyLayers = [
  { label: "SUB LAYER — FRONTEND", technologies: technologies.slice(0, 4) },
  { label: "SUB LAYER — BACKEND", technologies: technologies.slice(4, 8) },
  { label: "SUB LAYER — DATABASE & TOOLS", technologies: technologies.slice(8, 12) },
];

const capabilityGroups = [
  {
    number: "02",
    title: "AI & MACHINE LEARNING",
    technologies: [
      { name: "TensorFlow", category: "AI & ML", icon: "/images/logo-tensorflow.png", description: "Building and training machine learning models." },
      { name: "Keras", category: "AI & ML", icon: "/images/logo-keras.png", description: "Developing deep learning models with a high-level API." },
      { name: "Gemini", category: "GENERATIVE AI", icon: "/images/logo-gemini.png", description: "Exploring ideas and workflows with generative AI." },
    ],
  },
  {
    number: "03",
    title: "DESIGN",
    technologies: [
      { name: "Figma", category: "UI/UX DESIGN", icon: "/images/logo-figma.png", description: "Designing interfaces and interactive prototypes." },
      { name: "Canva", category: "GRAPHIC DESIGN", icon: "/images/logo-canva.png", description: "Creating visual assets and presentation materials." },
    ],
  },
  {
    number: "04",
    title: "PRODUCTIVITY",
    technologies: [
      { name: "MS Word", category: "DOCUMENTS", icon: "/images/logo-word.png", description: "Preparing and formatting documents." },
      { name: "MS Excel", category: "SPREADSHEETS", icon: "/images/logo-excel.png", description: "Organizing information and working with data." },
    ],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-heading">
      <div className={styles.sectionInner}>
        <div className={styles.aboutInner} data-reveal>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>WHO AM I?</p>
            <h2 className={styles.name} id="about-heading">
              I’m Steve
            </h2>
            <p className={styles.bio}>
              I&apos;m an Informatics graduate passionate about software
              development, AI, and UI/UX design. I enjoy turning ideas into
              functional digital solutions by combining technical skills,
              creative thinking, and user-centered design.
            </p>

            <ul className={styles.skills} aria-label="Skills">
              {skills.map((skill) => (
                <li className={styles.skill} key={skill}>
                  {skill}
                </li>
              ))}
            </ul>

            <a id="resume" className={styles.resume} href="/resume.pdf" download>
              DOWNLOAD RESUME <span>[PDF]</span>
              <span className={styles.arrow} aria-hidden="true">↗</span>
            </a>
          </div>

          <div className={styles.portrait}>
            <Image
              className={styles.image}
              src="/images/Steve1.png"
              alt="Portrait of Steve"
              width={720}
              height={900}
              sizes="(max-width: 700px) 84vw, (max-width: 1024px) 40vw, 520px"
              priority
            />
          </div>
        </div>

        <div className={styles.capabilities} aria-labelledby="capabilities-heading">
          <div className={styles.capabilitiesHeading} data-reveal>
            <p className={styles.capabilitiesEyebrow}>WHAT I WORK WITH</p>
            <h2 className={styles.capabilitiesTitle} id="capabilities-heading">
              SYSTEM CAPABILITIES
            </h2>
          </div>
          <div className={styles.layer}>
            <h3 className={styles.layerTitle}><span>01</span> — DEVELOPMENT</h3>
            {technologyLayers.map((layer) => (
              <div className={styles.subLayer} key={layer.label}>
                <h4 className={styles.subLayerTitle}>{layer.label}</h4>
                <ul className={styles.technologyGrid} aria-label={layer.label} data-reveal-stagger>
                  {layer.technologies.map((technology) => (
                    <li className={styles.technologyCard} key={technology.name}>
                      <div className={styles.cardTop}>
                        <Image
                          className={styles.technologyIcon}
                          src={technology.icon}
                          alt=""
                          width={48}
                          height={48}
                        />
                        <span className={styles.category}>{technology.category}</span>
                      </div>
                      <h5 className={styles.technologyName}>{technology.name}</h5>
                      <p className={styles.technologyDescription}>
                        {technology.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.capabilityContinuation}>
            {capabilityGroups.map((group, index) => (
              <section
                className={`${styles.capabilityGroup} ${index === 0 ? styles.aiGroup : ""}`}
                key={group.number}
                aria-labelledby={`capability-${group.number}`}
              >
                <h3 className={styles.layerTitle} id={`capability-${group.number}`}>
                  <span>{group.number}</span> — {group.title}
                </h3>
                <ul className={styles.continuationGrid} aria-label={group.title} data-reveal-stagger>
                  {group.technologies.map((technology) => (
                    <li className={styles.technologyCard} key={technology.name}>
                      <div className={styles.cardTop}>
                        <Image
                          className={styles.technologyIcon}
                          src={technology.icon}
                          alt=""
                          width={48}
                          height={48}
                        />
                        <span className={styles.category}>{technology.category}</span>
                      </div>
                      <h4 className={styles.technologyName}>{technology.name}</h4>
                      <p className={styles.technologyDescription}>
                        {technology.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
