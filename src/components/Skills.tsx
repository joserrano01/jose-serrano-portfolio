"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Liderazgo", pct: 95, category: "Gestión" },
  { name: "Optimización de Procesos", pct: 95, category: "Gestión" },
  { name: "Innovación TI", pct: 85, category: "Tecnología" },
  { name: "Cloud Computing (AWS/Azure)", pct: 85, category: "Tecnología" },
  { name: "Seguridad Informática", pct: 80, category: "Tecnología" },
  { name: "React / Next.js", pct: 88, category: "Desarrollo" },
  { name: "Laravel / PHP", pct: 90, category: "Desarrollo" },
  { name: "FastAPI / Python", pct: 85, category: "Desarrollo" },
  { name: "Kotlin (Android)", pct: 80, category: "Desarrollo" },
  { name: "Linux / DevOps / Docker", pct: 92, category: "Infraestructura" },
  { name: "SAP (ABAP / POS / R3)", pct: 85, category: "ERP" },
  { name: "SQL / Oracle / PostgreSQL", pct: 90, category: "Bases de Datos" },
];

const techBadges = [
  "Linux", "Docker", "CI/CD", "VMware", "Laravel", "FastAPI", "React", "Next.js",
  "Kotlin", "PHP", "Python", "JavaScript", "TypeScript", "Java",
  "SQL Server", "Oracle", "MySQL", "PostgreSQL",
  "SAP ABAP", "SAP POS", "SAP R3", "AWS", "Azure", "WMS-KNAPP", "AS400",
  "RedHat", "Ubuntu", "Git",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="habilidades" className="py-24 bg-[#0d2044]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Habilidades</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">{skill.name}</span>
                <span className="text-blue-400 font-semibold">{skill.pct}%</span>
              </div>
              <div className="h-2 bg-[#0a1628] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: visible ? `${skill.pct}%` : "0%",
                    background: "linear-gradient(90deg, #2563eb, #06b6d4)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-slate-300">Tecnologías &amp; Herramientas</h3>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-[#0a1628] border border-blue-900/40 text-slate-300 text-xs rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
