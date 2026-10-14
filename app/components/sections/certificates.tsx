import { Lexend } from "next/font/google";
import CertificateGallery, { type Certificate } from "./certificate-gallery";
import styles from "./certificates.module.css";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

const certificates: Certificate[] = [
  {
    id: "web-development-bootcamp",
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    year: "2026",
    image: "/images/full-stack.jpg",
    verifiedUrl: "https://www.udemy.com/certificate/UC-98d6a168-f71e-4765-8ca9-939e2f90dc0e/",
  },
  {
    id: "figma-components",
    title: "Figma Pro Pt. 1: Auto Layouts, Grids & Components",
    issuer: "Skillshare / Coursera",
    year: "2026",
    image: "/images/figma.png",
    verifiedUrl: "https://www.coursera.org/account/accomplishments/verify/VRLP6N859QE3",
  },
  {
    id: "adobe-photoshop",
    title: "Adobe Certified Professional — Visual Design Using Adobe Photoshop",
    issuer: "Adobe / Certiport",
    year: "2026",
    image: "/images/adobe.png",
    verifiedUrl: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&format=pdf&id=428",
  },
  {
    id: "canva-linkedin",
    title: "Graphic design: pop your Linkedin with 3D effect using Canva",
    issuer: "Coursera",
    year: "2026",
    image: "/images/GraphicDesign_coursera_sertifikat.jpg",
    verifiedUrl: "https://www.coursera.org/account/accomplishments/verify/V25XY0I3OPWD",
  },
];

export default function CertificatesSection() {
  return (
    <section
      className={`${styles.page} ${lexend.variable}`}
      id="certificates"
      aria-labelledby="certificates-heading"
    >
      <div className={styles.inner}>
        <header className={styles.intro} data-reveal>
          <p className={styles.eyebrow}>CERTIFICATIONS &amp; LEARNING</p>
          <h2 className={styles.heading} id="certificates-heading">
            Professional Certifications
          </h2>
          <p className={styles.description}>
            A collection of certifications and courses that reflect my
            commitment to continuously developing my technical and creative
            skills.
          </p>
        </header>
        <CertificateGallery certificates={certificates} />
      </div>
    </section>
  );
}
