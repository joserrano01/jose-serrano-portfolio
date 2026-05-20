"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#educacion", label: "Educación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-blue-500/5 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="text-xl font-bold gradient-text transition-all hover:scale-105">
          JS
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate-300 hover:text-blue-400 transition-colors nav-link-underline pb-1 block"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 transition-transform active:scale-95"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu with premium transition */}
      <div
        className={`md:hidden bg-[#0a1628]/98 backdrop-blur-md px-6 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          menuOpen
            ? "max-h-[350px] opacity-100 py-4 border-t border-blue-500/10 shadow-lg"
            : "max-h-0 opacity-0 py-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-3">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block text-slate-300 hover:text-blue-400 transition-colors py-1 nav-link-underline inline-block"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
