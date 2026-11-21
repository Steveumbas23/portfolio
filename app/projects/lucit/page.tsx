import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "LUCIT Full Stack & AI Case Study | Steve Umbas",
  description:
    "A research-based histopathology decision support system integrating a React and Flask application with deep learning and generative AI.",
};

const stack = [
  "React.js", "TypeScript", "Python", "Flask", "TensorFlow", "Keras", "Supabase", "Gemini 2.5 Flash", "Apache",
];

const architectureNodes = [
  { number: "01", title: "Web client", detail: "React.js · TypeScript", kind: "client" },
  { number: "02", title: "Application API", detail: "Python · Flask", kind: "api" },
  { number: "03", title: "Model inference", detail: "EfficientNetB3 · U-Net · Grad-CAM", kind: "models" },
];

const featureGroups = [
  {
    title: "Access & input",
    items: [
      ["Authentication", "User sign-in for access to the analysis workspace."],
      ["Image upload", "Submit a histopathology image for analysis."],
    ],
  },
  {
    title: "Model analysis",
    items: [
      ["Classification", "Predict one of five LC25000 tissue categories."],
      ["Grad-CAM visualization", "Show image regions that contribute to a classification prediction."],
      ["Segmentation", "Generate a binary cancer and non-cancer area mask with U-Net."],
      ["Prediction results", "Review predicted category and its confidence score."],
    ],
  },
  {
    title: "History & AI assistance",
    items: [
      ["Analysis history", "Revisit saved analysis records and their results."],
      ["AI-generated explanation", "Request a natural-language explanation through Gemini."],
      ["Contextual AI chatbot", "Ask follow-up questions using the selected analysis as context."],
    ],
  },
];

const classificationMetrics = [
  { label: "Accuracy", value: 99.28 },
  { label: "Precision", value: 99.28 },
  { label: "Recall", value: 99.28 },
  { label: "F1-score", value: 99.28 },
];

const segmentationMetrics = [
  { label: "Dice score", value: 94.0 },
  { label: "IoU", value: 88.67 },
  { label: "Pixel accuracy", value: 96.75 },
];

export default function LucitCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page} data-case-study>
        <div className={styles.container}>
          <header className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>FULL STACK DEVELOPMENT · AI / ML CASE STUDY</p>
              <h1 className={styles.title}>LUCIT</h1>
              <p className={styles.subtitle}>Intelligent Histopathology Decision Support</p>
              <p className={styles.lede}>
                A research-based web application that brings histopathology image classification, cancer-region segmentation, and AI-assisted explanations into one analysis workflow.
              </p>
              <a className={styles.heroLink} href="#overview">
                Explore the system <span aria-hidden="true">↓</span>
              </a>
            </div>

            <dl className={styles.facts}>
              <div><dt>Role</dt><dd>Full Stack Developer &amp; AI/ML Developer</dd></div>
              <div><dt>Platform</dt><dd>Web application</dd></div>
              <div><dt>Category</dt><dd>Full Stack Development / Artificial Intelligence</dd></div>
              <div><dt>System scope</dt><dd>Research-based decision support</dd></div>
            </dl>
          </header>

          <figure className={styles.cover}>
            <Image
              src="/images/lucit.png"
              alt="LUCIT histopathology analysis web application displayed on a desktop monitor"
              width={799}
              height={700}
              priority
              sizes="(max-width: 760px) 100vw, 1120px"
            />
            <figcaption>Available LUCIT project cover from the portfolio. Feature-level application screenshots were not found in this repository.</figcaption>
          </figure>

          <section className={styles.section} id="overview" aria-labelledby="overview-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>01 / PROJECT OVERVIEW</p>
              <h2 id="overview-title">From tissue image to interpretable analysis.</h2>
            </div>
            <div className={styles.copy}>
              <p>
                LUCIT (Intelligent Histopathology Decision Support) combines a web application with deep learning models for lung and colon histopathology images. The system is described as supporting analysis through five-class classification, binary segmentation, and visual explanation of model predictions.
              </p>
              <p>
                It is a research-based decision support system. It is not clinically validated and is not a replacement for a doctor or professional diagnosis. The reported model metrics describe research evaluation, not measured performance in routine clinical use.
              </p>
              <ul className={styles.stackList} aria-label="Technology stack">
                {stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </section>

          <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="problem-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>02 / PROBLEM &amp; OBJECTIVES</p>
              <h2 id="problem-title">Make complex image analysis easier to inspect.</h2>
              <p className={styles.sectionNote}>Project objectives from the supplied brief; not user research findings.</p>
            </div>
            <div className={styles.objectives}>
              <article><span>01</span><div><h3>Classify tissue images</h3><p>Predict a category across the five lung and colon tissue classes used in the LC25000 experiments.</p></div></article>
              <article><span>02</span><div><h3>Locate relevant regions</h3><p>Pair class predictions with Grad-CAM visualization and a separate binary segmentation output.</p></div></article>
              <article><span>03</span><div><h3>Keep analysis context together</h3><p>Present predictions, confidence, processed images, and AI-generated explanations alongside saved analysis history.</p></div></article>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="architecture-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>03 / SYSTEM ARCHITECTURE</p>
              <h2 id="architecture-title">A web layer connected to model and data services.</h2>
              <p className={styles.sectionNote}>
                High-level view assembled from the project brief. The application source and deployment configuration are not included in this portfolio repository, so endpoint-level data flow could not be independently verified.
              </p>
            </div>
            <div className={styles.architecture} aria-label="High-level LUCIT system architecture">
              <div className={styles.architectureFlow}>
                {architectureNodes.map((node, index) => (
                  <div className={styles.architectureStep} key={node.number}>
                    <article className={`${styles.archNode} ${styles[node.kind]}`}>
                      <span>{node.number}</span><h3>{node.title}</h3><p>{node.detail}</p>
                    </article>
                    {index < architectureNodes.length - 1 && <span className={styles.flowArrow} aria-hidden="true">→</span>}
                  </div>
                ))}
              </div>
              <div className={styles.serviceConnectors}>
                <p className={styles.serviceHeading}>Connected application services</p>
                <div className={styles.serviceNode}><span>GENERATIVE AI</span><strong>Gemini 2.5 Flash</strong><small>Analysis explanation · contextual chatbot</small></div>
                <div className={styles.serviceNode}><span>DATA &amp; STORAGE</span><strong>Supabase</strong><small>Analysis history · records · processed images</small></div>
              </div>
              <p className={styles.architectureCaption}>The brief identifies these components and responsibilities; specific request paths and storage schema are not documented here.</p>
            </div>
          </section>

          <section className={`${styles.section} ${styles.darkSection}`} aria-labelledby="process-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>04 / DEVELOPMENT PROCESS</p>
              <h2 id="process-title">Engineering across the application stack.</h2>
              <p className={styles.sectionNote}>Scope summarized from the project details supplied for this case study.</p>
            </div>
            <ol className={styles.processList}>
              <li><span>01</span><div><h3>Frontend application</h3><p>Build the web interface with React.js and TypeScript for image input, analysis results, history, and AI assistance.</p></div></li>
              <li><span>02</span><div><h3>Backend API</h3><p>Use Python and Flask as the application backend for connecting frontend workflows with analysis services.</p></div></li>
              <li><span>03</span><div><h3>Deep learning integration</h3><p>Integrate EfficientNetB3 classification, U-Net segmentation, and Grad-CAM visualization into the analysis experience.</p></div></li>
              <li><span>04</span><div><h3>Persistence and AI assistance</h3><p>Connect Supabase for analysis history and processed artifacts, and Gemini 2.5 Flash for generated explanations and contextual chat.</p></div></li>
            </ol>
          </section>

          <section className={styles.section} aria-labelledby="models-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>05 / DATASET &amp; MODEL DEVELOPMENT</p>
              <h2 id="models-title">Two model tasks, evaluated separately.</h2>
              <p className={styles.sectionNote}>Experiment details and scores below are reported in the supplied research summary.</p>
            </div>
            <div className={styles.modelContent}>
              <article className={styles.datasetCard}>
                <div><p className={styles.cardLabel}>DATASET</p><h3>LC25000</h3><p>25,000 images · 20,000 training · 5,000 testing</p></div>
                <ul className={styles.classList} aria-label="Five LC25000 classes">
                  <li>colon_aca</li><li>colon_n</li><li>lung_aca</li><li>lung_n</li><li>lung_scc</li>
                </ul>
              </article>
              <div className={styles.modelGrid}>
                <article className={styles.modelCard}>
                  <p className={styles.cardLabel}>CLASSIFICATION</p>
                  <h3>EfficientNetB3 + RMSprop</h3>
                  <p>Transfer learning without fine-tuning · input 224 × 224</p>
                  <div className={styles.experimentNote}><strong>Compared:</strong> ResNet50, EfficientNetB3, MobileNetV2, VGG16<br /><strong>Optimizers:</strong> Adamax, SGD, RMSprop</div>
                </article>
                <article className={styles.modelCard}>
                  <p className={styles.cardLabel}>SEGMENTATION</p>
                  <h3>U-Net</h3>
                  <p>Binary cancer / non-cancer masks · input and mask 256 × 256</p>
                  <div className={styles.experimentNote}><strong>Mask preprocessing:</strong> LAB, adaptive thresholding, morphological opening and closing<br /><strong>Training:</strong> Adamax · Combo Loss (BCE + Dice + Focal)</div>
                </article>
              </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="features-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>06 / CORE FEATURES</p>
              <h2 id="features-title">The analysis workflow, grouped by task.</h2>
              <p className={styles.sectionNote}>Feature descriptions follow the supplied project brief. Feature-level screenshots were not available in the repository.</p>
            </div>
            <div className={styles.featureGroups}>
              {featureGroups.map((group, index) => (
                <article className={styles.featureGroup} key={group.title}>
                  <p className={styles.groupIndex}>GROUP 0{index + 1}</p><h3>{group.title}</h3>
                  <ul>{group.items.map(([title, detail]) => <li key={title}><strong>{title}</strong><span>{detail}</span></li>)}</ul>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section} aria-labelledby="ai-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>07 / AI INTEGRATION</p>
              <h2 id="ai-title">Model output and generated language have different roles.</h2>
            </div>
            <div className={styles.aiLayers}>
              <article><span className={styles.aiTag}>DEEP LEARNING</span><h3>EfficientNetB3</h3><p>Produces the five-class histopathology image prediction and confidence score.</p></article>
              <article><span className={styles.aiTag}>SEGMENTATION</span><h3>U-Net</h3><p>Produces a binary mask for cancer and non-cancer regions.</p></article>
              <article><span className={styles.aiTag}>EXPLAINABILITY</span><h3>Grad-CAM</h3><p>Highlights image regions that contribute to the classification model’s prediction.</p></article>
              <article className={styles.generativeLayer}><span className={styles.aiTag}>GENERATIVE AI</span><h3>Gemini 2.5 Flash</h3><p>Generates natural-language analysis explanations and chatbot responses based on the selected analysis context. Gemini’s text is separate from the model prediction and does not create the classification score or segmentation mask.</p></article>
            </div>
          </section>

          <section className={`${styles.section} ${styles.darkSection}`} aria-labelledby="history-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>08 / DATABASE &amp; HISTORY</p>
              <h2 id="history-title">Keep analysis records available for review.</h2>
            </div>
            <div className={styles.historyContent}>
              <p>According to the supplied project brief, Supabase supports stored analysis history, processed images, prediction details, confidence scores, and descriptions. The repository does not contain database schema, storage rules, or history/detail screenshots, so those implementation specifics cannot be shown here.</p>
              <ul><li>Analysis record</li><li>Processed image artifacts</li><li>Predicted category and confidence</li><li>Analysis description</li></ul>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="evaluation-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>09 / TESTING &amp; EVALUATION</p>
              <h2 id="evaluation-title">Research metrics, reported by model task.</h2>
              <p className={styles.sectionNote}>These are the supplied experiment results, not a clinical validation or an evaluation of real-world system use.</p>
            </div>
            <div className={styles.metricColumns}>
              <MetricCard title="Classification · EfficientNetB3 + RMSprop" metrics={classificationMetrics} note="ROC-AUC: approximately 1.00" />
              <MetricCard title="Segmentation · U-Net" metrics={segmentationMetrics} note="Binary cancer / non-cancer segmentation" />
            </div>
          </section>

          <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="deployment-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>10 / DEPLOYMENT</p>
              <h2 id="deployment-title">Apache is listed; deployment wiring is not in this repository.</h2>
            </div>
            <div className={styles.copy}>
              <p>The supplied stack identifies Apache as the deployment platform. This portfolio repository does not include LUCIT’s frontend build configuration, Flask server setup, Apache virtual host or proxy configuration, or deployment documentation, so the production request path and deployment steps cannot be verified here.</p>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="challenges-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>11 / ENGINEERING CHALLENGES</p>
              <h2 id="challenges-title">Different model inputs and outputs need a clear handoff.</h2>
              <p className={styles.sectionNote}>Technical areas described by the supplied methods; the repository does not contain implementation notes for individual fixes.</p>
            </div>
            <div className={styles.challengeList}>
              <article><span>01</span><div><h3>Connect model inference to the web workflow</h3><p>Coordinate a React and TypeScript client with a Python and Flask analysis backend.</p></div></article>
              <article><span>02</span><div><h3>Respect separate image dimensions</h3><p>Prepare classification inputs at 224 × 224 and segmentation inputs and masks at 256 × 256.</p></div></article>
              <article><span>03</span><div><h3>Present predictions with visual evidence</h3><p>Keep the classification result distinct from Grad-CAM attribution and the U-Net segmentation mask.</p></div></article>
              <article><span>04</span><div><h3>Separate model results from generated explanations</h3><p>Show Gemini responses as generated assistance, not as a model prediction or clinical conclusion.</p></div></article>
            </div>
          </section>

          <section className={`${styles.section} ${styles.softSection}`} aria-labelledby="outcome-title">
            <div className={styles.sectionIntro}>
              <p className={styles.kicker}>12 / OUTCOME &amp; REFLECTION</p>
              <h2 id="outcome-title">An integrated research system with clear limits.</h2>
            </div>
            <div className={styles.copy}>
              <p>LUCIT brings a full-stack analysis workflow together with classification, segmentation, explainability, persisted history, and generative AI assistance. The reported research metrics describe the supplied model evaluation; clinical validation and real-world performance are not established by those scores.</p>
              <p>Further engineering review would benefit from the application source, API contracts, Supabase schema and storage policies, deployment configuration, and original feature screenshots. Those materials would make the implementation details and operational behavior verifiable.</p>
            </div>
          </section>

          <footer className={styles.footer}>
            <p>LUCIT · Intelligent Histopathology Decision Support</p>
            <Link href="/#projects">Back to all projects <span aria-hidden="true">↗</span></Link>
          </footer>
        </div>
      </main>
    </>
  );
}

function MetricCard({
  title,
  metrics,
  note,
}: {
  title: string;
  metrics: { label: string; value: number }[];
  note: string;
}) {
  return (
    <article className={styles.metricCard}>
      <h3>{title}</h3>
      <div className={styles.metricList}>
        {metrics.map((metric) => (
          <div className={styles.metric} key={metric.label}>
            <div className={styles.metricHeading}><span>{metric.label}</span><strong>{metric.value.toFixed(2)}%</strong></div>
            <div className={styles.metricTrack} role="meter" aria-label={metric.label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={metric.value}>
              <span style={{ width: `${metric.value}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className={styles.metricNote}>{note}</p>
    </article>
  );
}
