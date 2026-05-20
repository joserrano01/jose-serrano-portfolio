"use client";

import { useEffect, useRef, useState } from "react";

const CARD_BG = "rgba(12,30,56,0.65)";
const CARD_BORDER = "1px solid rgba(59,130,246,0.1)";

function tiltHandlers() {
  return {
    onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transition = 'transform 0.08s ease, box-shadow 0.08s ease';
      el.style.transform = `perspective(700px) rotateX(${-y * 14}deg) rotateY(${x * 14}deg) translateY(-6px) scale(1.015)`;
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    },
    onMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
      const el = e.currentTarget;
      el.style.transition = 'transform 0.55s cubic-bezier(0.23,1,0.32,1), box-shadow 0.55s ease';
      el.style.transform = '';
    },
  };
}

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

const pillars = [
  {
    title: "Resultados, No Promesas",
    body: "Cada proyecto que acepto llega a producción. Más de 20 años de track record con empresas reales — Farmacias Arrocha, Grupo Lee Chang, AXA — respaldan cada compromiso.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    title: "Análisis Rápido, Entrega Efectiva",
    body: "Identifico el problema real antes de escribir la primera línea. Ciclos de entrega cortos, sin sorpresas ni retrasos. Del levantamiento de requisitos al deploy en producción.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Arquitectura Segura desde el Día 1",
    body: "Maestría en Ciberseguridad + 20 años en infraestructura enterprise. La seguridad, escalabilidad y mantenibilidad no son opcionales — son el punto de partida.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const metrics = [
  { value: "28", label: "Sucursales Migradas", accent: false },
  { value: "300+", label: "Estaciones Impactadas", accent: false },
  { value: "20+", label: "Años en Producción", accent: false },
  { value: "0", label: "Proyectos Abandonados", accent: true },
];

export default function ValueProp() {
  const [cardsRef, cardsVisible] = useReveal(0.1);
  const [metricsRef, metricsVisible] = useReveal(0.15);

  return (
    <section id="valor" className="py-24" style={{ backgroundColor: "#050d1a" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge">Por Qué Elegirme</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Compromiso con los{" "}
            <span className="gradient-text">Resultados</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Three value pillar cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-14"
        >
          {pillars.map((card, i) => (
            <div
              key={card.title}
              className="rounded-2xl p-6 tilt-card"
              style={{
                background: `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(37,99,235,0.1) 0%, transparent 55%), ${CARD_BG}`,
                border: CARD_BORDER,
                backdropFilter: "blur(10px)",
                opacity: 0,
                animation: cardsVisible ? `slideInUp 0.55s ease ${i * 0.1}s both` : "none",
                transition: 'transform 0.55s cubic-bezier(0.23,1,0.32,1)',
                '--mx': '50%',
                '--my': '50%',
              } as React.CSSProperties}
              {...tiltHandlers()}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(37,99,235,0.15)", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.25)" }}
              >
                {card.icon}
              </div>
              <h4 className="font-bold text-white text-base mb-3 leading-snug">{card.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Horizontal divider with one-liner */}
        <div className="relative flex items-center justify-center mb-14">
          <div className="absolute inset-x-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(59,130,246,0.25), transparent)" }} />
          <p
            className="relative px-6 text-center text-sm md:text-base font-medium italic"
            style={{ background: "#050d1a", color: "#94a3b8" }}
          >
            "No mido mi trabajo en líneas de código. Lo mido en sistemas que funcionan, proyectos entregados y objetivos de negocio alcanzados."
          </p>
        </div>

        {/* Four metric highlights */}
        <div
          ref={metricsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="rounded-2xl p-5 text-center"
              style={{
                background: CARD_BG,
                border: CARD_BORDER,
                backdropFilter: "blur(8px)",
                opacity: 0,
                animation: metricsVisible ? `scaleIn 0.5s ease ${i * 0.1}s both` : "none",
              }}
            >
              <div
                className="text-3xl font-extrabold mb-1"
                style={{ color: m.accent ? "#4ade80" : undefined }}
              >
                {m.accent ? (
                  <span style={{ color: "#4ade80" }}>{m.value}</span>
                ) : (
                  <span className="gradient-text">{m.value}</span>
                )}
              </div>
              <div
                className="text-xs leading-snug"
                style={{ color: m.accent ? "#86efac" : "#64748b" }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
