"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Certificates", href: "/#certificates", id: "certificates" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const markerLine = 120;
        let currentSection = links[0].id;

        for (const { id } of links) {
          const section = document.getElementById(id);
          if (section && section.getBoundingClientRect().top <= markerLine) {
            currentSection = id;
          }
        }

        // Keep the final section active when the page cannot scroll any farther.
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
          currentSection = links[links.length - 1].id;
        }

        setActiveSection(currentSection);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`${styles.header} site-nav-enter`}>
      <nav className={styles.navbar} aria-label="Main navigation">
        <Link className={styles.logo} href="/#home">Steve Umbas</Link>
        <ul
          id="navbar-links"
          className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}
        >
          {links.map(({ label, href, id }) => (
            <li key={label}>
              <Link
                className={`${styles.link} ${activeSection === id ? styles.linkActive : ""}`}
                href={href}
                aria-current={activeSection === id ? "location" : undefined}
                onClick={() => {
                  setActiveSection(id);
                  closeMenu();
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className={styles.cta} href="/#contact">LET’S TALK</Link>
        <button
          className={styles.menuToggle}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="navbar-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
