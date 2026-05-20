"use client";

import { useEffect, useRef, useState } from "react";
import Particles from "./Particles";

const ROLES = ["Full Stack Developer", "Security Expert", "AI Engineer", "DevOps Engineer"];

const techStack = [
  { name: "Laravel" },
  { name: "FastAPI" },
  { name: "React/Next.js" },
  { name: "Kotlin" },
  { name: "Gemini AI" },
  { name: "React Native" },
  { name: "Docker" },
  { name: "SAP" },
];

const BADGE_STYLE = "text-blue-300 bg-blue-500/10 border-blue-500/20";

function useTypewriter(words: string[]) {
  const [display, setDisplay] = useState("");
  const [phase, setPhase] = useState<"typing" | "paused" | "deleting">("typing");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const word = words[idx];
    if (phase === "typing") {
      if (display === word) {
        const t = setTimeout(() => setPhase("paused"), 2200);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), 80);
      return () => clearTimeout(t);
    }
    if (phase === "paused") {
      const t = setTimeout(() => setPhase("deleting"), 200);
      return () => clearTimeout(t);
    }
    if (phase === "deleting") {
      if (display === "") {
        setIdx((i) => (i + 1) % words.length);
        setPhase("typing");
        return;
      }
      const t = setTimeout(() => setDisplay(display.slice(0, -1)), 42);
      return () => clearTimeout(t);
    }
  }, [display, phase, idx, words]);

  return display;
}

function MagneticButton({ className, style, href, children, target, rel }: {
  className: string; style: React.CSSProperties; href: string;
  children: React.ReactNode; target?: string; rel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.28;
      const y = (e.clientY - r.top - r.height / 2) * 0.28;
      el.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onLeave = () => { el.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)'; el.style.transform = ''; };
    const onEnter = () => { el.style.transition = 'transform 0.1s ease'; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mouseenter', onEnter);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('mouseenter', onEnter);
    };
  }, []);
  return <a ref={ref} href={href} className={className} style={style} target={target} rel={rel}>{children}</a>;
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
      style={{ backgroundColor: "#050d1a" }}
    >
      {/* Canvas particles */}
      <Particles />

      {/* Ambient blobs — animated */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div
          className="absolute -top-56 -left-56 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)",
            animation: "gradientFloat 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-56 -right-56 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 70%)",
            animation: "gradientFloat 12s ease-in-out infinite",
            animationDelay: "-4s",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(56,189,248,0.03) 0%, transparent 60%)",
            animation: "gradientFloat 15s ease-in-out infinite",
            animationDelay: "-7s",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge — fades in first */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            background: "rgba(34,197,94,0.08)",
            border: "1px solid rgba(34,197,94,0.25)",
            color: "#4ade80",
            opacity: 0,
            animation: "slideInUp 0.5s ease 0.1s both",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Disponible para proyectos · Panamá
        </div>

        {/* Avatar with orbit rings */}
        <div
          className="relative inline-flex items-center justify-center mb-8"
          style={{ opacity: 0, animation: "scaleIn 0.6s ease 0.25s both" }}
        >
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center pulse-glow z-10"
            style={{ background: "linear-gradient(135deg, #1e3a8a, #1e1b4b)", border: "2px solid rgba(99,102,241,0.45)" }}
          >
            <span className="text-4xl font-black gradient-text select-none">JS</span>
          </div>
          <div className="absolute rounded-full spin-slow"
            style={{ inset: "-16px", border: "1px solid rgba(59,130,246,0.22)" }} />
          <div className="absolute rounded-full spin-reverse"
            style={{ inset: "-30px", border: "1px solid rgba(139,92,246,0.12)" }} />
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-black tracking-tight mb-3 leading-none"
          style={{ opacity: 0, animation: "slideInUp 0.6s ease 0.4s both" }}
        >
          <span className="text-white">José </span>
          <span className="gradient-text">Serrano</span>
        </h1>

        {/* Typewriter role */}
        <div
          className="h-9 md:h-11 flex items-center justify-center mb-2"
          style={{ opacity: 0, animation: "slideInUp 0.5s ease 0.55s both" }}
        >
          <p className="text-xl md:text-2xl font-semibold text-slate-200">
            {role}
            <span
              className="inline-block w-0.5 h-[1em] ml-1 align-text-bottom"
              style={{ background: "#3b82f6", animation: "blink 0.85s step-start infinite" }}
            />
          </p>
        </div>

        <p
          className="text-slate-500 text-sm mb-10 max-w-lg mx-auto"
          style={{ opacity: 0, animation: "slideInUp 0.5s ease 0.65s both" }}
        >
          +20 años construyendo soluciones tecnológicas robustas en Panamá
        </p>

        {/* Tech badges — staggered, unified style */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {techStack.map((t, i) => (
            <span
              key={t.name}
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 hover:scale-110 hover:shadow-md cursor-default ${BADGE_STYLE}`}
              style={{ opacity: 0, animation: `slideInUp 0.4s ease ${0.75 + i * 0.07}s both` }}
            >
              {t.name}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-wrap justify-center gap-3"
          style={{ opacity: 0, animation: "slideInUp 0.6s ease 1.4s both" }}
        >
          <MagneticButton
            href="#proyectos"
            className="px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30"
            style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
          >
            Ver Proyectos
          </MagneticButton>
          <a
            href="#contacto"
            className="px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 text-slate-300 hover:text-white"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            Contactar
          </a>
          <MagneticButton
            href="https://wa.me/50764300121"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2 text-green-400 hover:text-green-300"
            style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.28)" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </MagneticButton>
          <MagneticButton
            href="https://www.linkedin.com/in/jose-serrano-21406650/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2 text-blue-400 hover:text-blue-300"
            style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.28)" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </MagneticButton>
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
