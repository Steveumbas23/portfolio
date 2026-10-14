import { Lexend } from "next/font/google";
import styles from "./contact.module.css";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

const locationUrl = "https://maps.app.goo.gl/ppJjy5qEQZpVDs1D7";

const contacts = [
  { label: "+62 858-2381-2483", href: "tel:+6285823812483", icon: "/images/telphone.png" },
  { label: "umbasteve10@gmail.com", href: "mailto:umbasteve10@gmail.com", icon: "/images/gmail.png" },
  { label: "linkedin.com/in/steve-umbas-855aa9392/", href: "https://linkedin.com/in/steve-umbas-855aa9392/", icon: "/images/linkedin.png" },
  { label: "github.com/Steveumbas23", href: "https://github.com/Steveumbas23", icon: "/images/github.png" },
];

export default function ContactSection() {
  return (
    <section id="contact" className={`${styles.contact} ${lexend.variable}`} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.contactColumn} data-reveal>
            <h2 className={styles.heading} id="contact-heading">CONTACT</h2>
            <p className={styles.description}>Get in touch with me through any of the following channels.</p>
            <ul className={styles.contactList}>
              {contacts.map((contact) => (
                <li key={contact.label}>
                  <a className={styles.contactLink} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined}>
                    <span className={styles.iconWrap}><img className={styles.icon} src={contact.icon} alt="" /></span>
                    <span className={styles.label}>{contact.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.locationColumn} data-reveal>
            <h2 className={styles.heading}>HOW TO FIND ME</h2>
            <a className={styles.mapLink} href={locationUrl} target="_blank" rel="noreferrer" aria-label="Open my location in Google Maps">
              <iframe className={styles.map} src={`https://maps.google.com/maps?q=${encodeURIComponent(locationUrl)}&output=embed`} title="Google Maps location" loading="lazy" referrerPolicy="no-referrer-when-downgrade" tabIndex={-1} />
              <span className={styles.mapMarker} aria-hidden="true"><span /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
