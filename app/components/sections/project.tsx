import { Archivo_Narrow, Lexend } from "next/font/google";
import ProjectGallery from "./project-gallery";
import styles from "./project.module.css";

export type Project = {
  id: string;
  name: string;
  modalTitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  galleryImages?: { src: string; alt: string }[];
  externalUrl?: string;
  externalLinkLabel?: string;
  technologies: string[];
  focusAreas?: string[];
  category?: string;
  details: {
    category: string;
    summary: string;
    overview: string;
    features: string[];
    technicalDetails: string[];
    technologies: string[];
  };
};

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-archivo-narrow",
});

const projects: Project[] = [
  {
    id: "lucit",
    name: "LUCIT — Lung and Colon Cancer Detection Using Interpretable Transfer Learning",
    description:
      "An AI-powered web application for lung and colon cancer classification using histopathological images and Explainable AI.",
    image: "/images/lucit.png",
    imageAlt: "LUCIT cancer detection application displayed on a desktop monitor",
    technologies: ["React", "Python", "Flask", "Supabase", "TypeScript", "TensorFlow", "Keras", "Gemini API"],
    details: {
      category: "AI & Healthcare",
      summary: "Histopathology image classification and segmentation with interpretable results.",
      overview:
        "LUCIT uses transfer learning to classify lung and colon histopathology images. Segmentation, analysis history, and Explainable AI help users explore results, with further explanations from a Gemini-powered chatbot.",
      features: [
        "Classifies supported lung and colon tissue images.",
        "Segmentation helps users examine relevant image regions.",
        "Keeps a history of classification and segmentation results.",
        "Explainable AI and a Gemini-powered chatbot support result interpretation.",
      ],
      technicalDetails: [
        "Transfer learning experiments evaluated ResNet50, EfficientNetB3, VGG16, and MobileNetV2 on the LC25000 dataset across two scenarios.",
        "EfficientNetB3 achieved the best reported accuracy at 99.28%; results varied between models and scenarios.",
      ],
      technologies: ["React", "Python", "Flask", "Supabase", "TypeScript", "TensorFlow", "Keras", "Gemini API"],
    },
  },
  {
    id: "dayone",
    name: "DayOne — AI Fitness & Weight Tracker",
    modalTitle: "DayOne — AI-Powered Health and Fitness Tracker",
    description:
      "A fitness web application for tracking BMI, monitoring weight progress, setting goals, and receiving personalized guidance from an AI Coach.",
    image: "/images/dayone.png",
    imageAlt: "DayOne fitness and weight tracking application displayed on a phone",
    technologies: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "Supabase", "PostgreSQL", "Gemini API"],
    details: {
      category: "Fitness & Wellness",
      summary: "A fitness tracker for BMI analysis, daily activity, goals, and Gemini-powered guidance.",
      overview:
        "DayOne helps users manage their fitness journey with BMI analysis, daily activity tracking, goals, and progress monitoring. Its Gemini-powered AI Coach uses BMI and fitness goals to offer general workout and nutrition guidance.",
      features: [
        "Calculates BMI from user-provided height and weight.",
        "Gemini AI Coach uses BMI and fitness goals to generate personalized guidance.",
        "Offers workout and nutrition suggestions for general fitness planning.",
        "Supports daily activity tracking and progress reviews over time.",
        "Lets users set fitness goals, including a target weight.",
      ],
      technicalDetails: [
        "The Gemini API powers an LLM-based AI Coach, using BMI information and selected fitness goals as context.",
        "AI-generated recommendations are general fitness and nutrition guidance, not medical advice.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "Supabase", "PostgreSQL", "Gemini API"],
    },
  },
  {
    id: "lapor-jalan",
    name: "Lapor Jalan — Location-Based Road Reporting",
    modalTitle: "LaporJalan — Road Damage Reporting and Management System",
    description:
      "A web application for reporting damaged roads using location-based data to help users document road conditions and identify problem areas.",
    image: "/images/laporjalan.png",
    imageAlt: "Lapor Jalan road reporting application displayed on a laptop",
    technologies: ["React", "Laravel", "PHP", "MySQL"],
    details: {
      category: "Road Reporting & Management",
      summary: "A public reporting website paired with a desktop dashboard for reviewing and managing road damage reports.",
      overview:
        "LaporJalan connects the public with administrators. Residents submit road damage reports through a public website, while administrators review submissions and follow up through a desktop dashboard.",
      technologies: ["React", "Laravel", "PHP", "MySQL"],
      features: [
        "Public landing page introducing the road reporting platform.",
        "Road reporting form accepts a photo, damage description, and map-selected location for administrator review.",
        "Desktop admin dashboard displays submitted reports with their photos, descriptions, and locations.",
        "Administrators can review reports, update their status, and keep records for monitoring follow-up.",
      ],
      technicalDetails: [
        "Workflow: a user submits a report with a photo, description, and location; an administrator reviews it, marks it as being processed, then marks it complete after the road is repaired.",
      ],
    },
  },
  {
    id: "vitae",
    name: "Vitae — Health & Wellness App",
    category: "UI/UX Design",
    description:
      "Merancang konsep aplikasi kesehatan yang membantu pengguna memantau aktivitas harian, mengelola asupan nutrisi, dan melihat perkembangan kesehatan melalui antarmuka yang intuitif dan modern.",
    image: "/images/vitae.png",
    imageAlt: "Vitae health and wellness app mockup",
    externalUrl: "https://www.figma.com/design/olWjJ86dqbQhQEhPsETanl/Vitae?node-id=0-1&t=pXCdblWiBJGkFHna-1",
    externalLinkLabel: "Open Figma Project",
    technologies: ["UI/UX", "Figma", "Auto Layout", "Components", "Prototyping"],
    details: {
      category: "UI/UX Design",
      summary: "Konsep aplikasi kesehatan untuk aktivitas, nutrisi, dan perkembangan kesehatan.",
      overview:
        "Merancang konsep aplikasi kesehatan yang membantu pengguna memantau aktivitas harian, mengelola asupan nutrisi, dan melihat perkembangan kesehatan melalui antarmuka yang intuitif dan modern.",
      technologies: ["UI/UX Design", "Figma", "Auto Layout", "Components", "Prototyping"],
      features: [
        "Intuitive, modern health app experience",
        "Daily activity monitoring concept",
        "Nutrition intake management concept",
        "Health progress overview concept",
      ],
      technicalDetails: [],
    },
  },
  {
    id: "poster",
    name: "Poster Design",
    category: "Graphic Design",
    description:
      "A collection of creative poster designs exploring typography, colors, and visual composition.",
    image: "/images/poster.jpg",
    imageAlt: "A collection of graphic poster designs",
    galleryImages: [
      { src: "/images/Sprite.jpg", alt: "Sprite poster design" },
      { src: "/images/Frappuccino.jpg", alt: "Frappuccino poster design" },
      { src: "/images/Three Sips.jpg", alt: "Three Sips poster design" },
      { src: "/images/Oreo Milkshake.jpg", alt: "Oreo Milkshake poster design" },
      { src: "/images/mie goreng matcha.jpg", alt: "Mie Goreng poster design" },
      { src: "/images/Nasi Goreng.jpg", alt: "Nasi Goreng poster design" },
      { src: "/images/Hot Dog.jpg", alt: "Hot Dog poster design" },
      { src: "/images/Dumplings Momos.jpg", alt: "Dumplings Momos poster design" },
    ],
    externalUrl: "https://www.figma.com/design/EMajMGGOoecfhFHx6z6az4/Poster?node-id=0-1&t=8IJasUVQ4maUORFz-1",
    externalLinkLabel: "Open Figma Project",
    technologies: ["Figma"],
    details: {
      category: "Graphic Design",
      summary: "A collection of creative poster designs.",
      overview:
        "A collection of poster designs exploring typography, color, and visual composition through bold graphic layouts.",
      features: [
        "Explores expressive typography and color palettes.",
        "Uses visual composition to create distinct poster layouts.",
      ],
      technicalDetails: [],
      technologies: ["Figma"],
    },
  },
  {
    id: "courtline",
    name: "COURTLINE — Basketball Shoe E-Commerce UI/UX",
    category: "UI/UX Design",
    description:
      "A premium basketball shoe shopping experience designed with a bold dark interface, lime green accents, and intuitive product browsing.",
    image: "/images/courtline.jpg",
    imageAlt: "COURTLINE basketball shoe e-commerce interface design",
    externalUrl: "https://www.figma.com/design/pcYu2eNAFluHyCA0JxxVhU/Untitled?node-id=0-1&t=L9XTPYlotvHZhnjj-1",
    externalLinkLabel: "Open Figma Project",
    technologies: ["Figma", "UI/UX", "Auto Layout", "Components"],
    focusAreas: ["UI Design", "UX Design", "Design Systems", "Component Design", "Interactive Prototyping"],
    details: {
      category: "UI/UX Design",
      summary: "A modern, intuitive, and premium online shopping experience for basketball shoes.",
      overview:
        "COURTLINE is a basketball shoe e-commerce UI/UX design project focused on creating a modern, intuitive, and premium online shopping experience. It features a bold dark interface, lime green accents, consistent typography, and structured product browsing. The project includes a homepage, shop page, basketball category page, and product detail page, with product cards, filters, pagination, color and size selection, wishlist, and shopping cart interactions.",
      features: [
        "Homepage, shop page, basketball category page, and product detail page.",
        "Product cards, filters, and pagination support product discovery.",
        "Color and size selection, wishlist, and shopping cart interactions.",
      ],
      technicalDetails: [],
      technologies: ["Figma", "UI/UX", "Auto Layout", "Components"],
    },
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className={`${styles.projects} ${lexend.variable} ${archivoNarrow.variable}`}
      aria-labelledby="projects-heading"
    >
      <div className={styles.inner}>
        <header className={styles.header} data-reveal>
          <h2 className={styles.heading} id="projects-heading">COOL THINGS I MADE</h2>
          <span className={styles.headerMark} aria-hidden="true">✳</span>
        </header>
        <ProjectGallery
          projects={projects}
          fontClassName={`${lexend.variable} ${archivoNarrow.variable}`}
        />
      </div>
    </section>
  );
}
