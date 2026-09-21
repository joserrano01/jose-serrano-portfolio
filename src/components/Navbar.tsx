"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#ai-lab", label: t.nav.aiLab },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        {t.ui.skipToContent}
      </a>
      <div className="site-container header-inner">
        <a className="brand" href="#home" aria-label="José Serrano — Home">
          <span className="brand-mark">JS</span>
          <span className="brand-name">José Serrano</span>
        </a>

        <nav className="desktop-nav" aria-label={t.ui.primaryNavigation}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-control" aria-label={t.ui.language}>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              aria-label="English"
            >
              EN
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              onClick={() => setLang("es")}
              aria-pressed={lang === "es"}
              aria-label="Español"
            >
              ES
            </button>
          </div>

          <label className="theme-control">
            <span className="sr-only">{t.ui.selectTheme}</span>
            <select
              value={theme}
              onChange={(event) =>
                setTheme(event.target.value as "light" | "dark" | "system")
              }
              aria-label={t.ui.selectTheme}
            >
              <option value="system">{t.ui.system}</option>
              <option value="light">{t.ui.light}</option>
              <option value="dark">{t.ui.dark}</option>
            </select>
          </label>

          <Link className="resume-link desktop-resume" href={`/cv/${lang}`}>
            {t.hero.cta.resume}
          </Link>

          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t.ui.closeMenu : t.ui.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label={t.ui.primaryNavigation}
          data-open="true"
        >
          <div className="site-container mobile-nav-inner">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <Link href={`/cv/${lang}`} onClick={() => setMenuOpen(false)}>
              {t.hero.cta.resume}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
