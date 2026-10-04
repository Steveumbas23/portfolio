"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Main navigation">
        <Link className={styles.logo} href="#home">Steve Umbas</Link>
        <ul
          id="navbar-links"
          className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}
        >
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link className={styles.link} href={href} onClick={closeMenu}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link className={styles.cta} href="#contact">LET’S TALK</Link>
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
