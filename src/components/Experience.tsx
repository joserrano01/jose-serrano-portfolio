"use client";

import { useEffect, useRef, useState } from "react";

const jobs = [
  {
    period: "2003 – Actual",
    company: "Farmacias Arrocha",
    location: "Panamá",
    role: "Project Manager / Analista Programador de Sistemas",
    achievements: [
      "Lideré la actualización de la plataforma de puntos de venta en 28 sucursales, impactando 300+ estaciones.",
      "Administración de servidores: VMware VCenter, Site Recovery Manager, DELL CMC PowerEdge M1000e, SAN DELL EQUALLOGIC.",
      "Desarrollo WMS-KNAPP/AS400, implementación de SAP POS en 29 farmacias (PHP, JavaScript, Java, Ajax, SQL Server, Oracle, MySQL, PostgreSQL, Zend Server, Oracle APEX).",
      "Implementación SAP-R3: interfaces e IDOCS para integración con sistemas actuales.",
      "Instalación y configuración de servidores: Windows 2003/2008, Suse Linux Enterprise, Ubuntu, RedHat, Oracle Linux.",
      "Certificación en SAP ABAP.",
    ],
  },
  {
    period: "1994 – 2002",
    company: "Grupo Lee Chang Hnos.",
    location: "Chiriquí",
    role: "Gerente de Sistemas Informáticos",
    achievements: [
      "Implementé el sistema Trimax para cajas registradoras, mejorando la eficiencia en puntos de venta.",
      "Desarrollé e implementé un sistema automatizado de control para una financiera (préstamo y financiamiento).",
      "Sistemas integrales de facturación, inventario, cuentas por cobrar y cuentas por pagar.",
      "Instalación y configuración: SCO Unix, Linux Red Hat 7.0, Novell 3.2.",
      "Sistema de control de inventario y cajas en Hipermas (San José, Costa Rica).",
      "Pionero en tecnología inalámbrica para inventarios con código de barras.",
    ],
  },
];

function useCardReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}

function JobCard({ job, idx }: { job: typeof jobs[0]; idx: number }) {
  const [ref, visible] = useCardReveal();
  const isLeft = idx % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row gap-8 mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
      style={{
        opacity: 0,
        animation: visible
          ? `${isLeft ? "slideInLeft" : "slideInRight"} 0.7s ease both`
          : "none",
      }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 mt-6"
        style={{
          background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          borderColor: "#050d1a",
          boxShadow: visible ? "0 0 12px rgba(59,130,246,0.6)" : "none",
          transition: "box-shadow 0.4s ease 0.3s",
        }}
      />

      {/* Content card */}
      <div className={`ml-14 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
        <div
          className="rounded-2xl p-6 card-hover"
          style={{
            background: "rgba(15,31,61,0.7)",
            border: "1px solid rgba(59,130,246,0.14)",
            backdropFilter: "blur(10px)",
          }}
        >
          <span
            className="inline-block px-3 py-1 text-xs rounded-full mb-3 font-medium"
            style={{ background: "rgba(59,130,246,0.15)", color: "#93c5fd", border: "1px solid rgba(59,130,246,0.25)" }}
          >
            {job.period}
          </span>
          <h3 className="text-base font-bold text-white leading-snug">{job.role}</h3>
          <p className="font-semibold text-sm mt-1 mb-0.5" style={{ color: "#60a5fa" }}>{job.company}</p>
          <p className="text-slate-500 text-xs mb-4">{job.location}</p>
          <ul className="space-y-2 text-left">
            {job.achievements.map((a, j) => (
              <li key={j} className="flex gap-2 text-slate-300 text-sm">
                <span className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }}>▸</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setLineVisible(true); },
      { threshold: 0.05 }
    );
    if (lineRef.current) obs.observe(lineRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experiencia" className="py-24 bg-grid" style={{ backgroundColor: "#050d1a" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-badge">Trayectoria</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Experiencia <span className="gradient-text">Profesional</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="relative" ref={lineRef}>
          {/* Animated timeline line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 w-0.5 -translate-x-1/2 transition-all duration-[2s] ease-out"
            style={{
              height: lineVisible ? "100%" : "0%",
              background: "linear-gradient(to bottom, #3b82f6, #8b5cf6, #06b6d4)",
            }}
          />
          {jobs.map((job, i) => (
            <JobCard key={job.company} job={job} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
