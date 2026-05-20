"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Liderazgo & Gestión",           pct: 95, category: "Gestión" },
  { name: "Optimización de Procesos",       pct: 95, category: "Gestión" },
  { name: "Cloud Computing (AWS / Azure)",  pct: 85, category: "Tecnología" },
  { name: "Seguridad Informática",          pct: 82, category: "Tecnología" },
  { name: "Innovación TI",                  pct: 88, category: "Tecnología" },
  { name: "React / Next.js",               pct: 88, category: "Desarrollo" },
  { name: "Laravel / PHP",                  pct: 90, category: "Desarrollo" },
  { name: "FastAPI / Python",               pct: 86, category: "Desarrollo" },
  { name: "Kotlin (Android)",              pct: 80, category: "Desarrollo" },
  { name: "React Native (Mobile)",          pct: 78, category: "Desarrollo" },
  { name: "Gemini AI / LLM Integration",   pct: 82, category: "IA & Machine Learning" },
  { name: "Computer Vision / Imágenes",    pct: 75, category: "IA & Machine Learning" },
  { name: "Python ML / Data Analysis",     pct: 80, category: "IA & Machine Learning" },
  { name: "Linux / DevOps / Docker",       pct: 92, category: "Infraestructura" },
  { name: "SAP (ABAP / POS / R3)",         pct: 86, category: "ERP" },
  { name: "SQL / Oracle / PostgreSQL",     pct: 90, category: "Bases de Datos" },
];

const categoryColors: Record<string, { bar: string; label: string }> = {
  "Gestión":             { bar: "from-amber-500  to-yellow-400",  label: "text-amber-400 bg-amber-500/10 border-amber-500/25" },
  "Tecnología":          { bar: "from-orange-500 to-red-400",     label: "text-orange-400 bg-orange-500/10 border-orange-500/25" },
  "Desarrollo":          { bar: "from-cyan-500   to-blue-500",    label: "text-cyan-400 bg-cyan-500/10 border-cyan-500/25" },
  "IA & Machine Learning":{ bar: "from-blue-500  to-violet-500",  label: "text-blue-400 bg-blue-500/10 border-blue-500/25" },
  "Infraestructura":     { bar: "from-green-500  to-emerald-400", label: "text-green-400 bg-green-500/10 border-green-500/25" },
  "ERP":                 { bar: "from-purple-500 to-violet-400",  label: "text-purple-400 bg-purple-500/10 border-purple-500/25" },
  "Bases de Datos":      { bar: "from-sky-500    to-cyan-400",    label: "text-sky-400 bg-sky-500/10 border-sky-500/25" },
};

const techBadges = [
  "Linux", "Docker", "CI/CD", "VMware", "Laravel", "FastAPI", "React", "Next.js",
  "Kotlin", "React Native", "PHP", "Python", "JavaScript", "TypeScript", "Java",
  "SQL Server", "Oracle", "MySQL", "PostgreSQL",
  "SAP ABAP", "SAP POS", "SAP R3", "AWS", "Azure", "WMS-KNAPP", "AS400",
  "RedHat", "Ubuntu", "Git", "Gemini AI", "TensorFlow", "OpenCV", "LangChain",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="habilidades" className="py-24" style={{ backgroundColor: "#0a1628" }} ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge">Stack Técnico</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Habilidades &amp; <span className="gradient-text">Tecnologías</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Skills by category */}
        <div className="space-y-10 mb-16">
          {categories.map((cat) => {
            const { bar, label } = categoryColors[cat] ?? { bar: "from-blue-500 to-cyan-400", label: "text-blue-400 bg-blue-500/10 border-blue-500/20" };
            const catSkills = skills.filter((s) => s.category === cat);
            return (
              <div key={cat}>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${label}`}>
                  {cat}
                </span>
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
                  {catSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="font-semibold" style={{ color: "#93c5fd" }}>{skill.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${bar} transition-all duration-1000 ease-out`}
                          style={{ width: visible ? `${skill.pct}%` : "0%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech badges */}
        <div className="text-center mb-5">
          <h3 className="text-base font-semibold text-slate-400 tracking-wide">Tecnologías &amp; Herramientas</h3>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs rounded-lg cursor-default transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "rgba(15,31,61,0.7)",
                border: "1px solid rgba(59,130,246,0.15)",
                color: "#94a3b8",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.4)";
                (e.currentTarget as HTMLElement).style.color = "#93c5fd";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.15)";
                (e.currentTarget as HTMLElement).style.color = "#94a3b8";
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
