"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Liderazgo & Gestión",             pct: 95, category: "Gestión" },
  { name: "Optimización de Procesos",         pct: 95, category: "Gestión" },
  { name: "Cloud Computing (AWS / Azure)",    pct: 85, category: "Tecnología" },
  { name: "Seguridad Informática",            pct: 82, category: "Tecnología" },
  { name: "Innovación TI",                   pct: 88, category: "Tecnología" },
  { name: "React / Next.js",                 pct: 88, category: "Desarrollo" },
  { name: "Laravel / PHP",                   pct: 90, category: "Desarrollo" },
  { name: "FastAPI / Python",                pct: 86, category: "Desarrollo" },
  { name: "Kotlin (Android)",               pct: 80, category: "Desarrollo" },
  { name: "React Native (Mobile)",           pct: 78, category: "Desarrollo" },
  { name: "Gemini AI / LLM Integration",    pct: 82, category: "IA & ML" },
  { name: "Computer Vision / Imágenes",     pct: 75, category: "IA & ML" },
  { name: "Python ML / Data Analysis",      pct: 80, category: "IA & ML" },
  { name: "Linux / DevOps / Docker",        pct: 92, category: "Infraestructura" },
  { name: "Automatización (Ansible)",        pct: 88, category: "Infraestructura" },
  { name: "RabbitMQ / Message Brokers",      pct: 82, category: "Infraestructura" },
  { name: "SAP (ABAP / POS / R3)",          pct: 86, category: "ERP" },
  { name: "SQL / Oracle / PostgreSQL",      pct: 90, category: "Bases de Datos" },
];

// Unified gradient bar for all categories — all use the same shimmer gradient
// Category label styles: max 3 variations
const catMeta: Record<string, { label: string }> = {
  "Gestión":         { label: "text-indigo-300 bg-indigo-500/10 border-indigo-500/20" },
  "Tecnología":      { label: "text-sky-300    bg-sky-500/10    border-sky-500/20" },
  "Desarrollo":      { label: "text-blue-300   bg-blue-500/10   border-blue-500/20" },
  "IA & ML":         { label: "text-blue-300   bg-blue-500/10   border-blue-500/20" },
  "Infraestructura": { label: "text-indigo-300 bg-indigo-500/10 border-indigo-500/20" },
  "ERP":             { label: "text-indigo-300 bg-indigo-500/10 border-indigo-500/20" },
  "Bases de Datos":  { label: "text-sky-300    bg-sky-500/10    border-sky-500/20" },
};

const techBadges = [
  "Linux", "Docker", "CI/CD", "VMware", "Laravel", "FastAPI", "React", "Next.js",
  "Kotlin", "React Native", "PHP", "Python", "JavaScript", "TypeScript", "Java",
  "SQL Server", "Oracle", "MySQL", "PostgreSQL",
  "SAP ABAP", "SAP POS", "SAP R3", "AWS", "Azure", "WMS-KNAPP", "AS400",
  "RedHat", "Ubuntu", "Git", "Ansible", "RabbitMQ", "Gemini AI", "TensorFlow", "OpenCV", "LangChain",
];

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

export default function Skills() {
  const [sectionRef, visible] = useReveal(0.1);
  const [badgeRef, badgesVisible] = useReveal(0.1);

  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="habilidades" className="py-24" style={{ backgroundColor: "#0a1628" }} ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge">Stack Técnico</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Habilidades &amp; <span className="gradient-text">Tecnologías</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Skill bars by category */}
        <div className="space-y-10 mb-16">
          {categories.map((cat, catIdx) => {
            const { label } = catMeta[cat] ?? { label: "text-blue-300 bg-blue-500/10 border-blue-500/20" };
            const catSkills = skills.filter((s) => s.category === cat);
            return (
              <div
                key={cat}
                style={{
                  opacity: 0,
                  animation: visible ? `slideInUp 0.55s ease ${catIdx * 0.12}s both` : "none",
                }}
              >
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${label}`}>
                  {cat}
                </span>
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
                  {catSkills.map((skill, si) => {
                    const delay = catIdx * 120 + si * 60;
                    return (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-slate-300">{skill.name}</span>
                          <span className="font-semibold text-blue-300">{skill.pct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                          <div
                            className="h-full rounded-full transition-all ease-out"
                            style={{
                              width: visible ? `${skill.pct}%` : "0%",
                              transitionDuration: `${900 + si * 80}ms`,
                              transitionDelay: `${delay}ms`,
                              background: 'linear-gradient(90deg, #1d4ed8, #2563eb, #38bdf8, #6366f1)',
                              backgroundSize: '200% 100%',
                              animation: visible ? `shimmerLine 3s ease ${delay}ms infinite` : 'none',
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech badges */}
        <div className="text-center mb-5">
          <h3 className="text-base font-semibold text-slate-400 tracking-wide">Tecnologías &amp; Herramientas</h3>
        </div>
        <div className="flex flex-wrap gap-2 justify-center" ref={badgeRef}>
          {techBadges.map((tech, i) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs rounded-lg cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              style={{
                background: "rgba(15,31,61,0.7)",
                border: "1px solid rgba(59,130,246,0.15)",
                color: "#94a3b8",
                opacity: 0,
                animation: badgesVisible ? `scaleIn 0.35s ease ${i * 0.025}s both` : "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.5)";
                (e.currentTarget as HTMLElement).style.color = "#93c5fd";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(59,130,246,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.15)";
                (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
