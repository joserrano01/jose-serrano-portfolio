"use client";

const experience = [
  {
    period: "2003 – Actual",
    company: "Farmacias Arrocha",
    location: "Panamá",
    role: "Project Manager / Analista Programador de Sistemas",
    achievements: [
      "Lideré la migración de plataforma POS en 28 sucursales nacionales — 300+ estaciones actualizadas sin tiempo de inactividad.",
      "Implementé SAP POS en 29 farmacias, unificando operaciones bajo una sola plataforma desde gestión hasta punto de venta.",
      "Desarrollé e integré interfaces SAP R3 e IDOCs para interoperabilidad con IBM AS400 y sistemas Linux.",
      "Integré WMS-KNAPP con AS400 para facturación en línea, eliminando la captura manual en bodega.",
      "Automaticé aprovisionamiento de infraestructura con Ansible, reduciendo tiempos de despliegue de días a minutos.",
      "Administré entorno de alta disponibilidad: VMware vCenter, SAN DELL EqualLogic, Site Recovery Manager.",
    ],
  },
  {
    period: "1994 – 2002",
    company: "Grupo Lee Chang Hnos.",
    location: "Chiriquí, Panamá",
    role: "Gerente de Sistemas Informáticos",
    achievements: [
      "Desarrollé sistema de control financiero integral: préstamos, financiamiento, cuentas por cobrar/pagar e inventario.",
      "Implementé uno de los primeros sistemas de inventario con código de barras inalámbrico en Chiriquí (1994).",
      "Desplegué la solución de facturación e inventario en Hipermas Costa Rica, expandiéndola a Centroamérica.",
      "Configuré y administré infraestructura completa: SCO Unix, Linux Red Hat 7.0, Novell 3.2, Trimax POS.",
    ],
  },
];

const education = [
  { year: "2018", degree: "Maestría en Seguridad Informática", institution: "Universidad Tecnológica de Panamá" },
  { year: "2018", degree: "Licenciado en Tecnología — Programación y Análisis de Sistemas", institution: "Universidad Tecnológica de Panamá" },
  { year: "2006", degree: "Diplomado en Ingeniería Desarrollador — Plataforma .Net y Java", institution: "Universidad Interamericana" },
];

const certifications = [
  "SAP ABAP Certified — SAP",
  "Symantec NetBackup — Broadcom",
  "VMware vCenter — VMware",
];

const skills = [
  { category: "Desarrollo", items: "React · Next.js · TypeScript · Laravel · PHP · FastAPI · Python · REST APIs" },
  { category: "Mobile", items: "Kotlin (Android nativo) · React Native" },
  { category: "IA & ML", items: "Gemini AI · Computer Vision · LLMs · LangChain · TensorFlow · OpenCV" },
  { category: "Infraestructura", items: "Linux (RedHat / Ubuntu / SUSE) · Docker · Ansible · Jenkins · CI/CD · VMware" },
  { category: "Cloud", items: "AWS · Azure" },
  { category: "Mensajería", items: "RabbitMQ · Apache Kafka" },
  { category: "Bases de Datos", items: "PostgreSQL · MySQL · Oracle · SQL Server" },
  { category: "ERP / Sistemas", items: "SAP POS · SAP R3 · SAP ABAP · WMS-KNAPP · IBM AS400" },
  { category: "Seguridad", items: "Hardening · Auditorías · Ciberseguridad enterprise · Symantec NetBackup" },
];

const projects = [
  {
    name: "NexusPOS",
    tech: "Kotlin · Python · FastAPI · SQLite · AI/ML",
    impact: "POS offline-first, multi-empresa y multi-sucursal con monitoreo IA",
    year: "2025–",
  },
  {
    name: "FinanCore",
    tech: "React 19 · FastAPI · PostgreSQL · Docker · RabbitMQ",
    impact: "Sistema financiero para crédito: AML/KYC, cumplimiento panameño, sync FoxPro",
    year: "2026",
  },
  {
    name: "SAP POS – Farmacias Arrocha",
    tech: "SAP POS · ABAP · Oracle · Linux",
    impact: "300+ estaciones en producción · 29 sucursales",
    year: "2003–",
  },
  {
    name: "WMS-KNAPP / AS400",
    tech: "WMS-KNAPP · AS400 · PHP · SQL Server",
    impact: "Facturación en línea automatizada, cero captura manual",
    year: "2010",
  },
  {
    name: "VendedorVirtual",
    tech: "FastAPI · React · PostgreSQL · Docker · RabbitMQ",
    impact: "Asistente de ventas IA con atención 24/7",
    year: "2025",
  },
  {
    name: "Sistema AXA",
    tech: "Laravel · React · MySQL · Docker",
    impact: "Gestión de pólizas y siniestros centralizada",
    year: "2024",
  },
];

export default function CVPage() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          @page { margin: 1.4cm 1.8cm; size: A4; }
          .page-break { page-break-before: always; }
          a { color: inherit !important; text-decoration: none !important; }
          .cv-root { font-size: 11px; }
        }
        @media screen {
          .cv-root { max-width: 860px; margin: 0 auto; }
        }
      `}</style>

      {/* Toolbar */}
      <div
        className="no-print sticky top-0 z-50 flex items-center justify-between px-6 py-3 border-b"
        style={{ background: "#fff", borderColor: "#e5e7eb" }}
      >
        <a
          href="/"
          className="flex items-center gap-1.5 text-sm transition-colors"
          style={{ color: "#6b7280" }}
          onMouseEnter={e => ((e.target as HTMLElement).style.color = "#111827")}
          onMouseLeave={e => ((e.target as HTMLElement).style.color = "#6b7280")}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al portafolio
        </a>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 rounded text-sm font-medium border transition-colors"
          style={{ background: "#fff", borderColor: "#d1d5db", color: "#374151" }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#f9fafb")}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#fff")}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Imprimir / PDF
        </button>
      </div>

      {/* CV Document */}
      <div
        className="cv-root px-8 py-10 min-h-screen"
        style={{ background: "#fff", color: "#111827", fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
      >
        {/* Header */}
        <div className="border-b pb-6 mb-6" style={{ borderColor: "#d1d5db" }}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-black tracking-tight" style={{ color: "#0f172a" }}>
                José Serrano
              </h1>
              <p className="text-base font-semibold mt-1" style={{ color: "#2563eb" }}>
                Consultor Senior TI · Full Stack Developer · Seguridad Informática
              </p>
              <p className="text-sm mt-2 max-w-sm leading-relaxed" style={{ color: "#6b7280" }}>
                30 años de experiencia en implementaciones enterprise, desarrollo de software y transformación digital en Panamá.
              </p>
            </div>
            <div className="text-sm space-y-1" style={{ color: "#374151" }}>
              <p>Panamá Pacífico, Howard — Panamá</p>
              <p>joseserrano01@gmail.com</p>
              <p>+507 6430-0121 · 591-5535</p>
              <p>
                <a href="https://jserrano.diasofonline.com" style={{ color: "#2563eb" }}>
                  jserrano.diasofonline.com
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/jose-serrano-21406650/" style={{ color: "#2563eb" }}>
                  linkedin.com/in/jose-serrano-21406650
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Perfil */}
        <section className="mb-6">
          <SectionTitle>Perfil Profesional</SectionTitle>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            Llevo más de 30 años resolviendo problemas reales de negocio con tecnología: desde los primeros sistemas de código de barras
            inalámbrico en Chiriquí hasta integraciones SAP en producción nacional y sistemas de IA en desarrollo activo.
            Me especializo en proyectos que otros consideran complejos — integraciones entre plataformas heterogéneas, migraciones
            sin tiempo de inactividad, sistemas que deben funcionar en entornos sin conectividad. Cada proyecto que asumo
            llega a producción.
          </p>
        </section>

        {/* Experiencia */}
        <section className="mb-6">
          <SectionTitle>Experiencia Profesional</SectionTitle>
          <div className="space-y-5">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-0.5 mb-1">
                  <div>
                    <span className="font-bold text-sm" style={{ color: "#0f172a" }}>{job.company}</span>
                    <span className="text-sm" style={{ color: "#9ca3af" }}> · {job.location}</span>
                  </div>
                  <span className="text-xs font-medium" style={{ color: "#6b7280" }}>{job.period}</span>
                </div>
                <p className="text-xs font-semibold mb-2" style={{ color: "#4b5563" }}>{job.role}</p>
                <ul className="space-y-1 pl-3">
                  {job.achievements.map((a, i) => (
                    <li key={i} className="text-xs leading-relaxed" style={{ color: "#374151", listStyleType: "disc" }}>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Proyectos */}
        <section className="mb-6">
          <SectionTitle>Proyectos Destacados</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {projects.map((p) => (
              <div key={p.name} className="px-3 py-2 rounded" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-semibold text-xs" style={{ color: "#0f172a" }}>{p.name}</p>
                  <span className="text-xs flex-shrink-0" style={{ color: "#9ca3af" }}>{p.year}</span>
                </div>
                <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>{p.tech}</p>
                <p className="text-xs mt-0.5" style={{ color: "#374151" }}>{p.impact}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Stack Técnico */}
          <section>
            <SectionTitle>Stack Técnico</SectionTitle>
            <div className="space-y-2">
              {skills.map((s) => (
                <div key={s.category}>
                  <p className="text-xs font-semibold" style={{ color: "#0f172a" }}>{s.category}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{s.items}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-5">
            {/* Formación */}
            <section>
              <SectionTitle>Formación Académica</SectionTitle>
              <div className="space-y-2">
                {education.map((ed) => (
                  <div key={ed.degree}>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-bold flex-shrink-0" style={{ color: "#2563eb" }}>{ed.year}</span>
                      <p className="text-xs font-semibold leading-snug" style={{ color: "#0f172a" }}>{ed.degree}</p>
                    </div>
                    <p className="text-xs pl-9" style={{ color: "#6b7280" }}>{ed.institution}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certificaciones */}
            <section>
              <SectionTitle>Certificaciones</SectionTitle>
              <ul className="space-y-1 pl-3">
                {certifications.map((c) => (
                  <li key={c} className="text-xs" style={{ color: "#374151", listStyleType: "disc" }}>
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            {/* Idiomas */}
            <section>
              <SectionTitle>Idiomas</SectionTitle>
              <div className="space-y-1 text-xs" style={{ color: "#374151" }}>
                <p><strong style={{ color: "#0f172a" }}>Español</strong> — Nativo</p>
                <p><strong style={{ color: "#0f172a" }}>Inglés</strong> — Intermedio técnico</p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t" style={{ borderColor: "#e5e7eb" }}>
          <p className="text-xs text-center" style={{ color: "#9ca3af" }}>
            José Serrano · joseserrano01@gmail.com · +507 6430-0121 · jserrano.diasofonline.com
          </p>
        </div>
      </div>
    </>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-xs font-black tracking-[0.15em] uppercase mb-3 pb-1 border-b"
      style={{ color: "#2563eb", borderColor: "#e5e7eb" }}
    >
      {children}
    </h2>
  );
}
