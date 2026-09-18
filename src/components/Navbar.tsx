"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#expertise", label: t.nav.expertise },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#ai-lab", label: t.nav.aiLab },
    { href: "#certifications", label: t.nav.certifications },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  const toggleLang = () => setLang(lang === "en" ? "es" : "en");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-blue-500/5 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-lg font-bold gradient-text transition-all hover:scale-105 tracking-tight">
          JS
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex gap-5">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-xs font-medium text-slate-400 hover:text-blue-400 transition-colors nav-link-underline pb-1 block tracking-wide uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all hover:scale-105"
            style={{
              background: "rgba(59,130,246,0.08)",
              border: "1px solid rgba(59,130,246,0.2)",
              color: "#60a5fa",
            }}
          >
            <span style={{ opacity: lang === "en" ? 1 : 0.4 }}>EN</span>
            <span style={{ color: "#334155" }}>|</span>
            <span style={{ opacity: lang === "es" ? 1 : 0.4 }}>ES</span>
          </button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-slate-300 transition-transform active:scale-95"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-[#0a1628]/98 backdrop-blur-md px-6 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          menuOpen
            ? "max-h-[420px] opacity-100 py-4 border-t border-blue-500/10 shadow-lg"
            : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-3">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block text-slate-300 hover:text-blue-400 transition-colors py-1 nav-link-underline inline-block text-sm"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => { toggleLang(); setMenuOpen(false); }}
              className="mt-2 flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold tracking-wider"
              style={{
                background: "rgba(59,130,246,0.08)",
                border: "1px solid rgba(59,130,246,0.2)",
                color: "#60a5fa",
              }}
            >
              {lang === "en" ? "Switch to Español" : "Switch to English"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
