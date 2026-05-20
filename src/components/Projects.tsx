"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string;
  link?: string;
  category: string;
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "SAP POS – Farmacias Arrocha",
    description:
      "Implementación y desarrollo del sistema SAP POS en 29 sucursales de Farmacias Arrocha, impactando más de 300 estaciones de trabajo a nivel nacional.",
    tech: ["SAP POS", "SAP ABAP", "Oracle", "Linux"],
    category: "ERP / SAP",
  },
  {
    id: "2",
    title: "WMS-KNAPP / AS400 Integration",
    description:
      "Integración del sistema de gestión de almacenes WMS-KNAPP con AS400, automatizando la facturación en línea y mejorando la eficiencia operativa.",
    tech: ["WMS-KNAPP", "AS400", "PHP", "SQL Server"],
    category: "Integración",
  },
  {
    id: "3",
    title: "SAP-R3 Interfaces & IDOCS",
    description:
      "Desarrollo de interfaces e IDOCS para SAP-R3, logrando integración efectiva con sistemas Linux e IBM AS400 y mejorando la interoperabilidad.",
    tech: ["SAP R3", "IDOCS", "Linux", "IBM AS400"],
    category: "ERP / SAP",
  },
  {
    id: "4",
    title: "Sistema Financiero – Lee Chang",
    description:
      "Desarrollo e implementación de sistema automatizado de control para préstamos, financiamiento, inventario y cuentas por cobrar/pagar.",
    tech: ["Trimax", "SCO Unix", "Linux Red Hat", "Novell"],
    category: "Finanzas",
  },
];

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

  const filtered =
    filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

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
    <section id="proyectos" className="py-24 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Proyectos</h2>
          <div className="section-divider" />
          <p className="text-slate-400 mt-4 text-sm">Soluciones desarrolladas a lo largo de mi carrera</p>
        </div>

        {/* Filter + Add button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white"
                    : "bg-[#0d2044] text-slate-400 hover:text-blue-400 border border-blue-900/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full transition-all"
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
            className="bg-[#0d2044] border border-blue-900/40 rounded-2xl p-6 mb-10"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Nuevo Proyecto</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Título *</label>
                <input
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full bg-[#0a1628] border border-blue-900/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Nombre del proyecto"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Categoría</label>
                <input
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full bg-[#0a1628] border border-blue-900/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Ej: Web, Mobile, ERP..."
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs text-slate-400 mb-1">Descripción *</label>
                <textarea
                  required
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  rows={3}
                  className="w-full bg-[#0a1628] border border-blue-900/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="Descripción del proyecto..."
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Tecnologías (separadas por coma)</label>
                <input
                  value={form.tech}
                  onChange={(e) => setForm({ ...form, tech: e.target.value })}
                  className="w-full bg-[#0a1628] border border-blue-900/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                  placeholder="React, Laravel, MySQL..."
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Enlace (opcional)</label>
                <input
                  value={form.link}
                  onChange={(e) => setForm({ ...form, link: e.target.value })}
                  className="w-full bg-[#0a1628] border border-blue-900/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                  placeholder="https://..."
                />
              </div>
            </div>

            {/* Image upload */}
            <div className="mb-4">
              <label className="block text-xs text-slate-400 mb-2">Foto del Proyecto</label>
              <div
                onClick={() => fileRef.current?.click()}
                className="border-2 border-dashed border-blue-900/50 rounded-xl p-6 text-center cursor-pointer hover:border-blue-500 transition-colors"
              >
                {imagePreview ? (
                  <div className="relative w-full h-40">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                ) : (
                  <div>
                    <svg className="w-10 h-10 text-slate-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-slate-500 text-sm">Clic para subir imagen</p>
                    <p className="text-slate-600 text-xs mt-1">PNG, JPG, WEBP hasta 5MB</p>
                  </div>
                )}
              </div>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
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
                className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all disabled:opacity-50"
              >
                {uploading ? "Guardando..." : "Guardar Proyecto"}
              </button>
            </div>
          </form>
        )}

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-[#0d2044] border border-blue-900/30 rounded-2xl overflow-hidden card-hover flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 bg-[#1a3a6b] flex items-center justify-center overflow-hidden">
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="text-5xl opacity-30">💻</div>
                )}
                <span className="absolute top-3 right-3 px-2 py-0.5 bg-blue-600/80 text-white text-xs rounded-full backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-blue-600/15 text-blue-300 text-xs rounded border border-blue-600/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 transition-colors"
                  >
                    Ver proyecto
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
