"use client";

import { useLang } from "@/context/LangContext";
import { MagneticButton } from "@/components/ui/MagneticButton";

const LINKEDIN = "https://www.linkedin.com/in/jose-serrano-21406650/";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
      style={{ backgroundColor: "#050d1a" }}
    >
      {/* Subtle ambient blobs — toned down vs prior version */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div
          className="absolute -top-64 -left-64 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-64 -right-64 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Availability badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.2)",
            color: "#4ade80",
            opacity: 0,
            animation: "slideInUp 0.5s ease 0.1s both",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {h.badge}
        </div>

        {/* Avatar */}
        <div
          className="relative inline-flex items-center justify-center mb-8"
          style={{ opacity: 0, animation: "scaleIn 0.6s ease 0.25s both" }}
        >
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #1e3a8a, #1e1b4b)",
              border: "2px solid rgba(99,102,241,0.35)",
              boxShadow: "0 0 40px rgba(37,99,235,0.1)",
            }}
          >
            <span className="text-3xl font-black gradient-text select-none">JS</span>
          </div>
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-none"
          style={{ opacity: 0, animation: "slideInUp 0.6s ease 0.4s both" }}
        >
          <span className="text-white">José </span>
          <span className="gradient-text">Serrano</span>
        </h1>

        {/* Title — static, no typewriter */}
        <p
          className="text-xl md:text-2xl font-semibold text-slate-200 mb-2"
          style={{ opacity: 0, animation: "slideInUp 0.5s ease 0.52s both" }}
        >
          {h.title}
        </p>

        <p
          className="text-base md:text-lg text-blue-400 font-medium mb-4"
          style={{ opacity: 0, animation: "slideInUp 0.5s ease 0.6s both" }}
        >
          {h.subtitle}
        </p>

        <p
          className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-3 leading-relaxed"
          style={{ opacity: 0, animation: "slideInUp 0.5s ease 0.68s both" }}
        >
          {h.tagline}
        </p>

        <p
          className="text-slate-500 text-xs mb-8"
          style={{ opacity: 0, animation: "slideInUp 0.5s ease 0.75s both" }}
        >
          {h.consultingLabel}
        </p>

        {/* CTAs — 4 buttons */}
        <div
          className="flex flex-wrap justify-center gap-3"
          style={{ opacity: 0, animation: "slideInUp 0.6s ease 0.85s both" }}
        >
          <MagneticButton
            href="#experience"
            className="px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-premium hover:scale-[1.04] hover:-translate-y-0.5 active:scale-95"
            style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
          >
            {h.cta.experience}
          </MagneticButton>

          <MagneticButton
            href="#projects"
            className="px-6 py-3 rounded-xl font-semibold transition-premium hover:-translate-y-0.5 text-slate-300 hover:text-white hover:scale-[1.04] active:scale-95"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            {h.cta.projects}
          </MagneticButton>

          <MagneticButton
            href="/cv"
            className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2 text-sky-300 hover:text-sky-200 transition-premium hover:scale-[1.04] hover:-translate-y-0.5 active:scale-95"
            style={{ background: "rgba(56,189,248,0.07)", border: "1px solid rgba(56,189,248,0.2)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {h.cta.resume}
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2 text-green-400 hover:text-green-300 transition-premium hover:scale-[1.04] hover:-translate-y-0.5 active:scale-95"
            style={{ background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.22)" }}
          >
            {h.cta.contact}
          </MagneticButton>
        </div>

        {/* Social links */}
        <div
          className="flex justify-center gap-4 mt-6"
          style={{ opacity: 0, animation: "slideInUp 0.5s ease 1s both" }}
        >
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-0.5"
            style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", color: "#60a5fa" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          {/* TODO: Add GitHub URL when available */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-float" style={{ color: "#334155" }}>
        <span className="text-xs tracking-[0.2em] font-medium">SCROLL</span>
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, #475569, transparent)" }} />
      </div>
    </section>
  );
}
