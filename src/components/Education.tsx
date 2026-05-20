"use client";

import { useEffect, useRef, useState } from "react";

const education = [
  {
    year: "2018",
    degree: "Maestría en Seguridad Informática",
    institution: "Universidad Tecnológica de Panamá",
    icon: "🎓",
  },
  {
    year: "2018",
    degree: "Licenciado en Tecnología con Especialización en Programación y Análisis de Sistemas",
    institution: "Universidad Tecnológica de Panamá",
    icon: "🖥️",
  },
  {
    year: "2006",
    degree: "Diplomado en Ingeniería Desarrollador Bajo Plataforma Net y Java",
    institution: "Universidad Interamericana",
    icon: "💻",
  },
];

const certifications = [
  { name: "SAP ABAP Certified", issuer: "SAP" },
  { name: "Symantec NetBackup", issuer: "Broadcom" },
  { name: "VMware VCenter", issuer: "VMware" },
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

export default function Education() {
  const [leftRef, leftVisible] = useReveal(0.1);
  const [rightRef, rightVisible] = useReveal(0.1);

  return (
    <section id="educacion" className="py-24" style={{ backgroundColor: "#0d2044" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-badge">Formación</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Educación &amp; <span className="gradient-text">Certificaciones</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div ref={leftRef}>
            <h3 className="text-lg font-semibold text-blue-400 mb-6 flex items-center gap-2">
              <span>📚</span> Formación Académica
            </h3>
            <div className="space-y-5">
              {education.map((ed, i) => (
                <div
                  key={ed.degree}
                  className="rounded-xl p-5 card-hover flex gap-4"
                  style={{
                    background: "rgba(10,22,40,0.7)",
                    border: "1px solid rgba(59,130,246,0.12)",
                    backdropFilter: "blur(8px)",
                    opacity: 0,
                    animation: leftVisible ? `slideInLeft 0.6s ease ${i * 0.12}s both` : "none",
                  }}
                >
                  <div className="text-3xl flex-shrink-0">{ed.icon}</div>
                  <div>
                    <span className="text-xs text-blue-400 font-semibold">{ed.year}</span>
                    <h4 className="text-white font-semibold text-sm mt-0.5">{ed.degree}</h4>
                    <p className="text-slate-400 text-xs mt-1">{ed.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications + Languages */}
          <div ref={rightRef}>
            <h3 className="text-lg font-semibold text-blue-400 mb-6 flex items-center gap-2">
              <span>🏆</span> Certificaciones
            </h3>
            <div className="space-y-3 mb-10">
              {certifications.map((cert, i) => (
                <div
                  key={cert.name}
                  className="rounded-xl p-4 flex items-center gap-3 card-hover"
                  style={{
                    background: "rgba(10,22,40,0.7)",
                    border: "1px solid rgba(59,130,246,0.12)",
                    backdropFilter: "blur(8px)",
                    opacity: 0,
                    animation: rightVisible ? `slideInRight 0.6s ease ${i * 0.1}s both` : "none",
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{cert.name}</p>
                    <p className="text-slate-500 text-xs">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
              <span>🌐</span> Idiomas
            </h3>
            <div className="space-y-3">
              {[
                { lang: "Español", level: "Nativo", pct: 100 },
                { lang: "Inglés", level: "Intermedio", pct: 65 },
              ].map((l, i) => (
                <div
                  key={l.lang}
                  className="rounded-xl p-4"
                  style={{
                    background: "rgba(10,22,40,0.7)",
                    border: "1px solid rgba(59,130,246,0.12)",
                    opacity: 0,
                    animation: rightVisible ? `slideInRight 0.6s ease ${(certifications.length + i) * 0.1}s both` : "none",
                  }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-sm font-semibold">{l.lang}</span>
                    <span className="text-blue-400 text-xs">{l.level}</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div
                      className="h-full rounded-full transition-all ease-out"
                      style={{
                        width: rightVisible ? `${l.pct}%` : "0%",
                        transitionDuration: "1200ms",
                        transitionDelay: `${(certifications.length + i) * 100 + 200}ms`,
                        background: "linear-gradient(90deg, #2563eb, #06b6d4)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
