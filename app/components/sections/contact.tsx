import { Lexend } from "next/font/google";
import styles from "./contact.module.css";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });

const locationUrl = "https://maps.app.goo.gl/ppJjy5qEQZpVDs1D7";

function ContactIcon({ type }: { type: "phone" | "email" | "linkedin" | "github" }) {
  const paths = {
    phone: <><path d="M6.6 3.8 9 3.3l1.5 3.6-1.8 1.5a14.3 14.3 0 0 0 3 3l1.5-1.8 3.6 1.5-.5 2.4a2 2 0 0 1-2.2 1.6A12.8 12.8 0 0 1 3.8 6a2 2 0 0 1 1.6-2.2Z" /></>,
    email: <><rect x="3" y="4" width="14" height="12" rx="1.5" /><path d="m4 5 6 5 6-5" /></>,
    linkedin: <><rect x="3" y="3" width="14" height="14" rx="1.5" /><path d="M6 8v6M6 6v.1M9.5 14v-3.3a2 2 0 0 1 4 0V14M9.5 9v5" /></>,
    github: <><path d="M10 2.8a7.2 7.2 0 0 0-2.3 14c.4.1.5-.2.5-.4v-1.4c-2 .4-2.5-.8-2.5-.8-.3-.8-.8-1-.8-1-.7-.5.1-.5.1-.5.7 0 1.1.7 1.1.7.6 1.1 1.6.8 2 .6.1-.5.3-.8.5-1-1.6-.2-3.2-.8-3.2-3.6 0-.8.3-1.4.7-1.9-.1-.2-.3-.9.1-1.9 0 0 .6-.2 2 .7a7 7 0 0 1 3.6 0c1.4-.9 2-.7 2-.7.4 1 .2 1.7.1 1.9.5.5.7 1.1.7 1.9 0 2.8-1.6 3.4-3.2 3.6.3.2.5.7.5 1.3v2c0 .2.1.5.5.4A7.2 7.2 0 0 0 10 2.8Z" /></>,
  };

  return <svg className={styles.icon} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>;
}

const contacts = [
  { label: "Phone", value: "Phone number", href: "#contact", type: "phone" as const },
  { label: "Email", value: "Email address", href: "#contact", type: "email" as const },
  { label: "LinkedIn", value: "LinkedIn Profile", href: "https://www.linkedin.com/in/steve-umbas-855aa9392/?isSelfProfile=true", type: "linkedin" as const },
  { label: "GitHub", value: "GitHub Profile", href: "https://github.com/Steveumbas23", type: "github" as const },
];

export default function ContactSection() {
  return (
    <section id="contact" className={`${styles.contact} ${lexend.variable}`} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <div className={styles.columns}>
          <div className={styles.contactColumn}>
            <h2 className={styles.heading} id="contact-heading">CONTACT</h2>
            <ul className={styles.contactList}>
              {contacts.map((contact) => (
                <li key={contact.label}>
                  <a className={styles.contactLink} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined}>
                    <span className={styles.iconWrap}><ContactIcon type={contact.type} /></span>
                    <span className={styles.contactText}><span className={styles.label}>{contact.label}</span><span className={styles.value}>{contact.value}</span></span>
                    <span className={styles.arrow} aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.locationColumn}>
            <h2 className={styles.heading}>HOW TO FIND ME</h2>
            <a className={styles.mapLink} href={locationUrl} target="_blank" rel="noreferrer" aria-label="Open my location in Google Maps">
              <iframe className={styles.map} src={`https://maps.google.com/maps?q=${encodeURIComponent(locationUrl)}&output=embed`} title="Google Maps location" loading="lazy" referrerPolicy="no-referrer-when-downgrade" tabIndex={-1} />
              <span className={styles.mapAction}>OPEN IN GOOGLE MAPS <span aria-hidden="true">↗</span></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
