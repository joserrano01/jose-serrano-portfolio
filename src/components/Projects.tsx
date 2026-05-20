"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string;
  link?: string;
  category: string;
  accentColor?: string;
  impact?: string;
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "SAP POS – Farmacias Arrocha",
    description: "Implementación y desarrollo del sistema SAP POS en 29 sucursales de Farmacias Arrocha, impactando más de 300 estaciones de trabajo a nivel nacional.",
    tech: ["SAP POS", "SAP ABAP", "Oracle", "Linux"],
    category: "ERP / SAP",
    impact: "300+ estaciones activas · 29 sucursales unificadas",
  },
  {
    id: "2",
    title: "WMS-KNAPP / AS400 Integration",
    description: "Integración del sistema de gestión de almacenes WMS-KNAPP con AS400, automatizando la facturación en línea y mejorando la eficiencia operativa.",
    tech: ["WMS-KNAPP", "AS400", "PHP", "SQL Server"],
    category: "Integración",
    impact: "Facturación automatizada · Cero procesos manuales",
  },
  {
    id: "3",
    title: "SAP-R3 Interfaces & IDOCS",
    description: "Desarrollo de interfaces e IDOCS para SAP-R3, logrando integración efectiva con sistemas Linux e IBM AS400 y mejorando la interoperabilidad.",
    tech: ["SAP R3", "IDOCS", "Linux", "IBM AS400"],
    category: "ERP / SAP",
    impact: "Integración total · Interoperabilidad entre plataformas",
  },
  {
    id: "4",
    title: "Sistema Financiero – Lee Chang",
    description: "Sistema automatizado de control para préstamos, financiamiento, inventario y cuentas por cobrar/pagar para Grupo Lee Chang.",
    tech: ["Trimax", "SCO Unix", "Linux Red Hat", "Novell"],
    category: "Finanzas",
    impact: "Control integral · Préstamos y contabilidad automatizados",
  },
  {
    id: "5",
    title: "Reconocimiento de Recetas con IA",
    description: "Sistema inteligente que analiza imágenes de platos de comida con Gemini Vision API. Identifica ingredientes, genera recetas paso a paso y calcula valores nutricionales en tiempo real.",
    tech: ["Gemini AI", "Python", "FastAPI", "React Native", "Computer Vision"],
    category: "IA",
    impact: "Análisis en <3 segundos · Precisión con Gemini Vision API",
  },
  {
    id: "6",
    title: "VendedorVirtual",
    description: "Plataforma de asistente de ventas virtual impulsado por IA. Gestiona catálogo, atiende consultas de clientes, procesa pedidos y genera reportes de ventas automáticamente.",
    tech: ["FastAPI", "React", "PostgreSQL", "Docker", "IA"],
    category: "IA",
    impact: "Atención 24/7 · Reducción de carga operativa manual",
  },
  {
    id: "7",
    title: "Sistema AXA",
    description: "Sistema de gestión empresarial con módulos de administración de pólizas, seguimiento de siniestros, reportes ejecutivos y panel de control para agentes.",
    tech: ["Laravel", "React", "MySQL", "Docker", "REST API"],
    category: "Web",
    impact: "Gestión centralizada · Pólizas y siniestros en un solo sistema",
  },
];

// Simplified: only blue/indigo/sky — no amber/orange/green
const categoryStyle: Record<string, string> = {
  "ERP / SAP":   "bg-indigo-500/15 text-indigo-300 border-indigo-500/25",
  "Integración": "bg-sky-500/15   text-sky-300   border-sky-500/25",
  "Finanzas":    "bg-blue-500/15  text-blue-300  border-blue-500/25",
  "IA":          "bg-blue-500/15  text-blue-300  border-blue-500/25",
  "Mobile":      "bg-indigo-500/15 text-indigo-300 border-indigo-500/25",
  "Web":         "bg-sky-500/15   text-sky-300   border-sky-500/25",
};

const defaultCategoryStyle = "bg-blue-500/15 text-blue-300 border-blue-500/25";

const placeholderIcon: Record<string, string> = {
  "ERP / SAP":   "🏢",
  "Integración": "🔗",
  "Finanzas":    "💰",
  "IA":          "🤖",
  "Mobile":      "📱",
  "Web":         "🌐",
};

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

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", tech: "", category: "", link: "" });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [filter, setFilter] = useState("Todos");
  const fileRef = useRef<HTMLInputElement>(null);

  const categories = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))];
  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    try {
      let imageUrl: string | undefined;
      if (imageFile) {
        const fd = new FormData();
        fd.append("file", imageFile);
        const res = await fetch("/api/upload", { method: "POST", body: fd });
        if (res.ok) {
          const data = await res.json();
          imageUrl = data.url;
        }
      }
      const newProject: Project = {
        id: Date.now().toString(),
        title: form.title,
        description: form.description,
        tech: form.tech.split(",").map((t) => t.trim()).filter(Boolean),
        category: form.category || "General",
        link: form.link || undefined,
        imageUrl,
      };
      setProjects((prev) => [newProject, ...prev]);
      setForm({ title: "", description: "", tech: "", category: "", link: "" });
      setImageFile(null);
      setImagePreview(null);
      setShowForm(false);
    } finally {
      setUploading(false);
    }
  };

  return (
    <section id="proyectos" className="py-24" style={{ backgroundColor: "#050d1a" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-badge">Portafolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-500 mt-4 text-sm">Soluciones desarrolladas a lo largo de mi carrera</p>
        </div>

        {/* Filter + Add */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  filter === cat
                    ? "bg-blue-600 border-blue-500 text-white"
                    : "border-slate-700/60 text-slate-400 hover:text-blue-400 hover:border-blue-500/40"
                }`}
                style={filter !== cat ? { background: "rgba(15,31,61,0.5)" } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Agregar Proyecto
          </button>
        </div>

        {/* Add form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-6 mb-10"
            style={{ background: "rgba(10,22,40,0.7)", border: "1px solid rgba(59,130,246,0.18)", backdropFilter: "blur(12px)" }}
          >
            <h3 className="text-lg font-semibold text-white mb-5">Nuevo Proyecto</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {[
                { label: "Título *", key: "title", required: true, placeholder: "Nombre del proyecto" },
                { label: "Categoría", key: "category", required: false, placeholder: "Ej: Web, Mobile, IA, ERP..." },
              ].map(({ label, key, required, placeholder }) => (
                <div key={key}>
                  <label className="block text-xs text-slate-400 mb-1.5">{label}</label>
                  <input
                    required={required}
                    value={(form as Record<string, string>)[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none transition-colors"
                    style={{ background: "rgba(5,13,26,0.8)", border: "1px solid rgba(59,130,246,0.2)", color: "#e2e8f0" }}
                    placeholder={placeholder}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)")}
                  />
                </div>
              ))}
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-400 mb-1.5">Descripción *</label>
                <textarea
                  required
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={3}
                  className="w-full rounded-lg px-3 py-2.5 text-sm resize-none focus:outline-none transition-colors"
                  style={{ background: "rgba(5,13,26,0.8)", border: "1px solid rgba(59,130,246,0.2)", color: "#e2e8f0" }}
                  placeholder="Descripción del proyecto..."
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)")}
                />
              </div>
              {[
                { label: "Tecnologías (separadas por coma)", key: "tech", placeholder: "React, Laravel, MySQL..." },
                { label: "Enlace (opcional)", key: "link", placeholder: "https://..." },
              ].map(({ label, key, placeholder }) => (
                <div key={key}>
                  <label className="block text-xs text-slate-400 mb-1.5">{label}</label>
                  <input
                    value={(form as Record<string, string>)[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none transition-colors"
                    style={{ background: "rgba(5,13,26,0.8)", border: "1px solid rgba(59,130,246,0.2)", color: "#e2e8f0" }}
                    placeholder={placeholder}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)")}
                  />
                </div>
              ))}
            </div>

            {/* Image upload */}
            <div className="mb-5">
              <label className="block text-xs text-slate-400 mb-2">Foto del Proyecto</label>
              <div
                onClick={() => fileRef.current?.click()}
                className="rounded-xl p-6 text-center cursor-pointer transition-colors"
                style={{ border: "2px dashed rgba(59,130,246,0.25)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.5)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.25)")}
              >
                {imagePreview ? (
                  <div className="relative w-full h-40">
                    <Image src={imagePreview} alt="Preview" fill className="object-contain rounded-lg" />
                  </div>
                ) : (
                  <div>
                    <svg className="w-10 h-10 text-slate-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-slate-500 text-sm">Clic para subir imagen</p>
                    <p className="text-slate-600 text-xs mt-1">PNG, JPG, WEBP hasta 5MB</p>
                  </div>
                )}
              </div>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            </div>

            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => { setShowForm(false); setImagePreview(null); }}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={uploading}
                className="px-6 py-2.5 text-white text-sm font-semibold rounded-xl transition-all disabled:opacity-50"
                style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
              >
                {uploading ? "Guardando..." : "Guardar Proyecto"}
              </button>
            </div>
          </form>
        )}

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => {
            const catStyle = categoryStyle[project.category] ?? defaultCategoryStyle;
            const icon = placeholderIcon[project.category] ?? "💻";
            return (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden flex flex-col tilt-card"
                style={{
                  background: `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(37,99,235,0.1) 0%, transparent 55%), rgba(12,30,56,0.65)`,
                  border: "1px solid rgba(59,130,246,0.1)",
                  backdropFilter: "blur(10px)",
                  transition: 'transform 0.55s cubic-bezier(0.23,1,0.32,1)',
                  '--mx': '50%',
                  '--my': '50%',
                } as React.CSSProperties}
                {...tiltHandlers()}
              >
                {/* Image / placeholder */}
                <div
                  className="relative h-44 flex items-center justify-center overflow-hidden"
                  style={{ background: "rgba(5,13,26,0.5)" }}
                >
                  {project.imageUrl ? (
                    <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
                  ) : (
                    <div className="text-5xl opacity-25 select-none">{icon}</div>
                  )}
                  <span className={`absolute top-3 right-3 px-2.5 py-0.5 text-xs font-medium rounded-full border ${catStyle}`}>
                    {project.category}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-white mb-2 text-sm leading-snug">{project.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs rounded border"
                        style={{ background: "rgba(59,130,246,0.1)", borderColor: "rgba(59,130,246,0.2)", color: "#93c5fd" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.impact && (
                    <div className="mt-3 pt-3 border-t flex items-start gap-1.5"
                      style={{ borderColor: 'rgba(59,130,246,0.12)' }}>
                      <span className="mt-0.5 flex-shrink-0 text-xs" style={{ color: '#38bdf8' }}>▸</span>
                      <p className="text-xs" style={{ color: '#7dd3fc' }}>{project.impact}</p>
                    </div>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1 transition-colors mt-auto"
                    >
                      Ver proyecto
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
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
