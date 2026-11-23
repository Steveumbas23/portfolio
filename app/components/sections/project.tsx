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
  caseStudyUrl?: string;
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
    name: "LUCIT — Intelligent Histopathology Decision Support",
    category: "Full Stack Development & AI",
    description:
      "A research-based decision support web application integrating histopathology classification, segmentation, explainability, and AI-generated explanations.",
    image: "/images/lucit.png",
    imageAlt: "LUCIT cancer detection application displayed on a desktop monitor",
    caseStudyUrl: "/projects/lucit",
    technologies: ["React", "TypeScript", "Python", "Flask", "TensorFlow", "Keras", "Supabase", "Gemini API"],
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
    image: "/images/preview dayone.png",
    imageAlt: "DayOne landing page and health tracking screens shown in a multi-device preview collage",
    caseStudyUrl: "/projects/dayone",
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
        "Stores a gain, lose, or maintain goal type alongside the user's health profile.",
      ],
      technicalDetails: [
        "The Gemini API powers an LLM-based AI Coach, using BMI information and selected fitness goals as context.",
        "AI-generated recommendations are general fitness and nutrition guidance, not medical advice.",
      ],
      technologies: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "Supabase", "PostgreSQL", "Gemini API"],
    },
  },
  {
    id: "openmile",
    name: "OpenMile — Travel Booking App",
    category: "UI/UX Design",
    description:
      "A travel booking app concept for flight search, destination discovery, and trip bookings.",
    image: "/images/preview openMile.png",
    imageAlt: "OpenMile travel booking app concept with flight search and destination screens",
    caseStudyUrl: "/projects/openmile",
    externalUrl: "https://www.figma.com/proto/QRPxkMJE0rFr4v7Ryjf0fU/OpenMile?t=bfzF0I2XYI9qGHPA-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=0-1&starting-point-node-id=4%3A238&fuid=1441746115386135378",
    externalLinkLabel: "View Prototype",
    technologies: [
      "UI/UX Design",
      "Figma",
      "Prototyping",
      "Auto Layout",
      "Component Variants",
      "Responsive Design",
      "Layout Grid & Constraints",
    ],
    details: {
      category: "UI/UX Design",
      summary: "A travel booking app concept for flights and destination discovery.",
      overview:
        "OpenMile presents a mobile travel experience with flight seat selection, destination discovery, and accommodation browsing.",
      features: [
        "Flight search and seat selection screens.",
        "Destination discovery and nearby travel inspiration.",
        "Accommodation browsing concept.",
      ],
      technicalDetails: [],
      technologies: [
        "UI/UX Design",
        "Figma",
        "Prototyping",
        "Auto Layout",
        "Component Variants",
        "Responsive Design",
        "Layout Grid & Constraints",
      ],
    },
  },
  {
    id: "aprilia",
    name: "Aprilia Racing — The MotoGP Experience",
    category: "UI/UX Design",
    description:
      "A motorsport website concept showcasing Aprilia Racing's RS-GP motorcycle, technical specifications, and racing imagery.",
    image: "/images/preview aprilia.png",
    imageAlt: "Aprilia Racing website concept featuring an RS-GP motorcycle, specifications, and racing gallery",
    caseStudyUrl: "/projects/aprilia",
    externalUrl: "https://www.figma.com/proto/N0FdntZ3gG1JCF4dRP8CMh/Website-Motor-GP-Aprilia?node-id=0-1&p=f&t=XtRkWswgago5qiQA-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A5&fuid=1441746115386135378",
    externalLinkLabel: "View Prototype",
    technologies: [
      "UI/UX Design",
      "Figma",
      "Prototyping",
      "Auto Layout",
      "Component Variants",
      "Responsive Design",
      "Layout Grid & Constraints",
    ],
    details: {
      category: "UI/UX Design",
      summary: "A motorsport website concept for presenting Aprilia Racing and the RS-GP.",
      overview:
        "The concept pairs a bold black and red visual direction with an RS-GP hero presentation, motorcycle specifications, racing imagery, and a contact section for the racing division.",
      features: [
        "RS-GP motorcycle hero section with calls to explore the machine and watch racing.",
        "Technical specifications and motorcycle overview sections.",
        "Racing image and video gallery concept.",
        "Contact section for the racing division.",
      ],
      technicalDetails: [],
      technologies: [
        "UI/UX Design",
        "Figma",
        "Prototyping",
        "Auto Layout",
        "Component Variants",
        "Responsive Design",
        "Layout Grid & Constraints",
      ],
    },
  },
  {
    id: "adventist-paal-2-library",
    name: "Adventist Paal 2 Library",
    category: "UI/UX Design",
    description:
      "A mobile library app concept for browsing new arrivals, viewing borrowed books, and accessing library services.",
    image: "/images/preview ibrary.png",
    imageAlt: "Adventist Paal 2 Library mobile app screens",
    caseStudyUrl: "/projects/adventist-paal-2-library",
    externalUrl: "https://www.figma.com/proto/7FvkikOv8vM8iaa7FzYlZ3/SAD-LIBRARY-PROJECT?node-id=128-365&p=f&t=EwVoqRQxpOXYb9TK-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=128%3A365",
    externalLinkLabel: "View Prototype",
    technologies: [
      "UI/UX Design",
      "Figma",
      "User Flow",
      "Interactive Prototyping",
      "Components & Variants",
      "Design System",
      "Mobile Interface Design",
    ],
    details: {
      category: "UI/UX Design",
      summary: "A mobile app concept for the Adventist Paal 2 Library.",
      overview:
        "The app concept includes a library welcome and login screen, new book arrivals, and a previously borrowed books view.",
      features: [
        "Library sign-in screen.",
        "New arrivals and book browsing screens.",
        "Previously borrowed books view.",
      ],
      technicalDetails: [],
      technologies: [
        "UI/UX Design",
        "Figma",
        "User Flow",
        "Interactive Prototyping",
        "Components & Variants",
        "Design System",
        "Mobile Interface Design",
      ],
    },
  },
  {
    id: "champs",
    name: "Champs — Boxing Club Website",
    category: "UI/UX Design",
    description:
      "A boxing club website concept presenting training programs, featured projects, and club information.",
    image: "/images/preview champs.png",
    imageAlt: "Champs boxing club website design shown across desktop screens",
    caseStudyUrl: "/projects/champs",
    externalUrl: "https://www.figma.com/proto/HZRnpm2906EucECtEL3qIK/Motion-Studio?node-id=0-1&p=f&t=HWc1jAiGZulmMsLP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&fuid=1441746115386135378",
    externalLinkLabel: "View Prototype",
    technologies: [
      "UI/UX Design",
      "Landing Page Design",
      "Scroll Animation",
      "Prototyping",
    ],
    details: {
      category: "UI/UX Design",
      summary: "A website concept for a boxing and training club.",
      overview:
        "The Champs website design introduces the club, presents training programs and featured work, and provides contact information.",
      features: [
        "Club introduction and training program sections.",
        "Featured projects and club information.",
        "Contact call to action.",
      ],
      technicalDetails: [],
      technologies: [
        "UI/UX Design",
        "Landing Page Design",
        "Scroll Animation",
        "Prototyping",
      ],
    },
  },
  {
    id: "pertamina",
    name: "Pertamina Offshore — Website UI/UX Design",
    category: "UI/UX Design",
    description:
      "A corporate website redesign concept for Pertamina's offshore energy operations.",
    image: "/images/preview pertamina.png",
    imageAlt: "Pertamina offshore energy website wireframe and visual redesign",
    caseStudyUrl: "/projects/pertamina-offshore",
    externalUrl: "https://www.figma.com/proto/YQWCVajSW78n3kodqsI6wP/Pertamina-Offshore-Corporate-Website-UI-UX?node-id=2-8&t=bfzF0I2XYI9qGHPA-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&fuid=1441746115386135378",
    externalLinkLabel: "View Prototype",
    technologies: [
      "UI/UX Design",
      "Figma",
      "Auto Layout",
      "Prototyping",
      "Wireframing",
      "Design System",
      "Usability Considerations",
      "Components & Variants",
    ],
    details: {
      category: "UI/UX Design",
      summary: "A corporate website redesign concept for offshore energy operations.",
      overview:
        "The design explores a transition from wireframes to a visual website for presenting offshore operations, company information, and sustainability content.",
      features: [
        "Homepage concept with offshore operations imagery.",
        "Company, operations, services, and sustainability sections.",
        "Operational statistics and consultation call to action.",
      ],
      technicalDetails: [],
      technologies: [
        "UI/UX Design",
        "Figma",
        "Auto Layout",
        "Prototyping",
        "Wireframing",
        "Design System",
        "Usability Considerations",
        "Components & Variants",
      ],
    },
  },
  {
    id: "lapor-jalan",
    name: "LaporJalan — Road Damage Reporting System",
    modalTitle: "LaporJalan — Road Damage Reporting and Management System",
    category: "Full Stack Development / GIS / DevOps",
    description:
      "A full-stack road reporting system with map-selected locations and an admin dashboard for managing report status and follow-up.",
    image: "/images/laporjalan.png",
    imageAlt: "Lapor Jalan road reporting application displayed on a laptop",
    caseStudyUrl: "/projects/lapor-jalan",
    technologies: ["React", "TypeScript", "Vite", "Laravel", "PHP", "MySQL", "Leaflet"],
    details: {
      category: "Road Reporting & Management",
      summary: "A public reporting website paired with a desktop dashboard for reviewing and managing road damage reports.",
      overview:
        "LaporJalan connects the public with administrators. Residents submit road damage reports through a public website, while administrators review submissions and follow up through a desktop dashboard.",
      technologies: ["React", "TypeScript", "Vite", "Laravel", "PHP", "MySQL", "React-Leaflet", "OpenStreetMap"],
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
    image: "/images/preview vitae.png",
    imageAlt: "Vitae health and wellness app mockup",
    caseStudyUrl: "/projects/vitae",
    externalUrl: "https://www.figma.com/proto/olWjJ86dqbQhQEhPsETanl/Vitae?node-id=0-1&p=f&t=bfzF0I2XYI9qGHPA-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=120%3A931&fuid=1441746115386135378",
    externalLinkLabel: "View Prototype",
    technologies: [
      "UI/UX Design",
      "Figma",
      "Auto Layout",
      "Components",
      "Component Variants",
      "Layout Grid & Constraints",
      "Prototyping",
    ],
    details: {
      category: "UI/UX Design",
      summary: "Konsep aplikasi kesehatan untuk aktivitas, nutrisi, dan perkembangan kesehatan.",
      overview:
        "Merancang konsep aplikasi kesehatan yang membantu pengguna memantau aktivitas harian, mengelola asupan nutrisi, dan melihat perkembangan kesehatan melalui antarmuka yang intuitif dan modern.",
      technologies: [
        "UI/UX Design",
        "Figma",
        "Auto Layout",
        "Components",
        "Component Variants",
        "Layout Grid & Constraints",
        "Prototyping",
      ],
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
    image: "/images/preview courtline.png",
    imageAlt: "COURTLINE basketball shoe e-commerce interface design",
    caseStudyUrl: "/projects/courtline",
    externalUrl: "https://www.figma.com/design/pcYu2eNAFluHyCA0JxxVhU/Untitled?node-id=0-1&t=L9XTPYlotvHZhnjj-1",
    externalLinkLabel: "Open Figma Project",
    technologies: [
      "UI/UX Design",
      "Figma",
      "Auto Layout",
      "Components",
      "Component Variants",
      "Layout Grid & Constraints",
      "Prototyping",
    ],
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
      technologies: [
        "UI/UX Design",
        "Figma",
        "Auto Layout",
        "Components",
        "Component Variants",
        "Layout Grid & Constraints",
        "Prototyping",
      ],
    },
  },
];

const projectOrder = [
  "openmile",
  "aprilia",
  "pertamina",
  "vitae",
  "courtline",
  "champs",
  "adventist-paal-2-library",
  "poster",
  "lucit",
  "dayone",
  "lapor-jalan",
];

const orderedProjects = [...projects].sort(
  (first, second) => projectOrder.indexOf(first.id) - projectOrder.indexOf(second.id),
);

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className={`${styles.projects} ${lexend.variable} ${archivoNarrow.variable}`}
      aria-labelledby="projects-heading"
    >
      <div className="content-container">
        <header className={styles.header} data-reveal>
          <h2 className={styles.heading} id="projects-heading">COOL THINGS I MADE</h2>
          <span className={styles.headerMark} aria-hidden="true">✳</span>
        </header>
        <ProjectGallery
          projects={orderedProjects}
          fontClassName={`${lexend.variable} ${archivoNarrow.variable}`}
        />
      </div>
    </section>
  );
}
