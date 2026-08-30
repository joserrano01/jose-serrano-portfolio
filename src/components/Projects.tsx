"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  imageUrl?: string;
  link?: string;
  category: string;
  impact?: string;
  year?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "NexusPOS",
    subtitle: "Sistema POS Multi-empresa",
    description:
      "Plataforma de punto de venta diseñada para operar en entornos desconectados. Soporta múltiples empresas y sucursales desde una sola instancia, con sincronización automática al reconectar. El módulo de IA monitorea patrones operativos y alerta anomalías en tiempo real.",
    tech: ["Kotlin", "Python", "FastAPI", "SQLite", "AI/ML", "Android"],
    category: "POS / IA",
    impact: "Offline-first · Multi-empresa · Multi-sucursal · Kotlin + Python",
    year: "2025–",
  },
  {
    id: "2",
    title: "FinanCore",
    subtitle: "Sistema Financiero de Crédito",
    description:
      "Sistema integral para instituciones de crédito en Panamá. Cubre originación de préstamos, amortización con reglas FECI/SERDES/ITBMS, AML/KYC con screening OFAC/ONU/PEP, contabilidad desacoplada vía mensajería y sincronización con sistemas legacy FoxPro.",
    tech: ["React 19", "FastAPI", "PostgreSQL", "Docker", "RabbitMQ", "SQLAlchemy"],
    category: "Finanzas",
    impact: "AML/KYC · Cumplimiento Panameño · 11 servicios integrados",
    year: "2026",
  },
  {
    id: "3",
    title: "SAP POS – Farmacias Arrocha",
    subtitle: "Implementación Nacional",
    description:
      "Implementación y desarrollo a medida del sistema SAP POS en 29 sucursales de Farmacias Arrocha, incluyendo interfaces ABAP, configuración de hardware y soporte a más de 300 estaciones de trabajo a nivel nacional.",
    tech: ["SAP POS", "SAP ABAP", "Oracle", "Linux"],
    category: "ERP / SAP",
    impact: "300+ estaciones activas · 29 sucursales unificadas",
    year: "2003–",
  },
  {
    id: "4",
    title: "WMS-KNAPP / AS400",
    subtitle: "Integración de Almacenes",
    description:
      "Integración entre el sistema de gestión de almacenes WMS-KNAPP y AS400 para automatizar la facturación en línea y eliminar la captura manual de transacciones.",
    tech: ["WMS-KNAPP", "AS400", "PHP", "SQL Server"],
    category: "Integración",
    impact: "Facturación en línea · Cero captura manual",
    year: "2010",
  },
  {
    id: "5",
    title: "SAP R3 Interfaces & IDOCs",
    subtitle: "Integración Multiplataforma",
    description:
      "Desarrollo de interfaces e IDOCs para SAP R3, logrando interoperabilidad efectiva con sistemas Linux e IBM AS400.",
    tech: ["SAP R3", "IDOCs", "Linux", "IBM AS400"],
    category: "ERP / SAP",
    impact: "Integración total entre plataformas heterogéneas",
    year: "2008",
  },
  {
    id: "6",
    title: "Sistema Financiero Lee Chang",
    subtitle: "ERP Financiero Pionero",
    description:
      "Sistema de control financiero para Grupo Lee Chang: préstamos, financiamiento, inventario con código de barras y cuentas por cobrar/pagar. Uno de los primeros sistemas con lector de código de barras en Chiriquí.",
    tech: ["Trimax", "SCO Unix", "Linux Red Hat", "Novell"],
    category: "Finanzas",
    impact: "Control integral desde 1994 · Pionero en código de barras",
    year: "1994",
  },
  {
    id: "7",
    title: "VendedorVirtual",
    subtitle: "Asistente de Ventas con IA",
    description:
      "Plataforma de asistente de ventas impulsada por IA. Gestiona catálogo de productos, atiende consultas de clientes por múltiples canales, procesa pedidos y genera reportes automáticos.",
    tech: ["FastAPI", "React", "PostgreSQL", "Docker", "RabbitMQ"],
    category: "IA",
    impact: "Atención 24/7 · Automatización de ventas",
    year: "2025",
  },
  {
    id: "8",
    title: "Sistema AXA",
    subtitle: "Plataforma Web Empresarial",
    description:
      "Sistema de gestión con módulos de administración de pólizas, seguimiento de siniestros, reportes ejecutivos y panel de control para agentes.",
    tech: ["Laravel", "React", "MySQL", "Docker", "REST API"],
    category: "Web",
    impact: "Gestión centralizada de pólizas y siniestros",
    year: "2024",
  },
];

const categoryAccent: Record<string, string> = {
  "ERP / SAP":   "#6366f1",
  "Integración": "#0ea5e9",
  "Finanzas":    "#3b82f6",
  "IA":          "#8b5cf6",
  "POS / IA":    "#10b981",
  "Web":         "#0ea5e9",
};

const defaultAccent = "#3b82f6";

export default function Projects() {
  const [filter, setFilter] = useState("Todos");

  const categories = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))];
  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="proyectos" className="py-24" style={{ backgroundColor: "#050d1a" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-badge">Portafolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Proyectos <span style={{ color: "#3b82f6" }}>Destacados</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-500 mt-4 text-sm">30 años de soluciones en producción</p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border cursor-pointer ${
                filter === cat
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "border-slate-700/60 text-slate-400 hover:text-slate-200 hover:border-slate-500"
              }`}
              style={filter !== cat ? { background: "rgba(15,31,61,0.5)" } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => {
            const accent = categoryAccent[project.category] ?? defaultAccent;
            return (
              <div
                key={`${filter}-${project.id}`}
                className="rounded-xl flex flex-col group"
                style={{
                  background: "rgba(10,22,42,0.8)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: `3px solid ${accent}`,
                  opacity: 0,
                  animation: `scaleIn 0.4s ease ${i * 0.04}s both`,
                  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px ${accent}22`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                }}
              >
                {project.imageUrl && (
                  <div className="relative h-40 rounded-t-xl overflow-hidden">
                    <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
                  </div>
                )}

                <div className="p-5 flex flex-col flex-1">
                  {/* Category + year */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded"
                      style={{ background: `${accent}18`, color: accent }}
                    >
                      {project.category}
                    </span>
                    {project.year && (
                      <span className="text-xs text-slate-600">{project.year}</span>
                    )}
                  </div>

                  <h3 className="font-bold text-white text-base leading-tight">{project.title}</h3>
                  <p className="text-xs text-slate-500 mb-2">{project.subtitle}</p>
                  <p className="text-slate-400 text-xs leading-relaxed flex-1">{project.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs rounded"
                        style={{ background: "rgba(255,255,255,0.04)", color: "#64748b", border: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.impact && (
                    <div
                      className="mt-4 pt-3 text-xs"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.05)", color: "#475569" }}
                    >
                      {project.impact}
                    </div>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1 transition-colors mt-3"
                    >
                      Ver proyecto →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
