"use client";

const experience = [
  {
    period: "2003 – Actual",
    company: "Farmacias Arrocha",
    location: "Panamá",
    role: "Project Manager / Analista Programador de Sistemas",
    achievements: [
      "Lideré sin interrupciones la migración de plataforma POS en 28 sucursales — 300+ estaciones actualizadas con cero tiempo de inactividad.",
      "Implementé SAP POS en 29 farmacias, unificando operaciones nacionales bajo una plataforma estándar.",
      "Automaticé aprovisionamiento y configuración de infraestructura con Ansible — reducción drástica de tiempos de despliegue.",
      "Integré WMS-KNAPP/AS400 automatizando la facturación en línea — eliminación de procesos manuales críticos.",
      "Implementé SAP-R3 interfaces e IDOCS logrando interoperabilidad total entre plataformas heterogéneas.",
      "Administré infraestructura de alta disponibilidad: VMware VCenter, SAN DELL EqualLogic, Site Recovery Manager.",
      "Certificado SAP ABAP. Dominio end-to-end: desarrollo, configuración e integración.",
    ],
  },
  {
    period: "1994 – 2002",
    company: "Grupo Lee Chang Hnos.",
    location: "Chiriquí, Panamá",
    role: "Gerente de Sistemas Informáticos",
    achievements: [
      "Pionero en tecnología inalámbrica para inventarios con código de barras en la región (1994).",
      "Desarrollé sistema integral de préstamos y financiamiento — control automatizado de cuentas por cobrar/pagar.",
      "Desplegué sistema de facturación e inventario en Hipermas (Costa Rica), expandiendo la solución a Centroamérica.",
      "Implementé Trimax para puntos de venta, estandarizando operaciones en toda la cadena de tiendas.",
      "Configuré infraestructura completa: SCO Unix, Linux Red Hat 7.0, Novell 3.2.",
    ],
  },
];

const education = [
  { year: "2018", degree: "Maestría en Seguridad Informática", institution: "Universidad Tecnológica de Panamá" },
  { year: "2018", degree: "Licenciado en Tecnología — Programación y Análisis de Sistemas", institution: "Universidad Tecnológica de Panamá" },
  { year: "2006", degree: "Diplomado en Ingeniería Desarrollador Bajo Plataforma .Net y Java", institution: "Universidad Interamericana" },
];

const certifications = ["SAP ABAP Certified (SAP)", "Symantec NetBackup (Broadcom)", "VMware VCenter (VMware)"];

const skills = [
  { category: "Desarrollo Web", items: "React · Next.js · TypeScript · Laravel · PHP · FastAPI · Python · REST APIs" },
  { category: "Mobile", items: "Kotlin (Android nativo) · React Native" },
  { category: "IA & Machine Learning", items: "Gemini AI · Computer Vision · LLMs · LangChain · TensorFlow · OpenCV" },
  { category: "Infraestructura & DevOps", items: "Linux (RedHat/Ubuntu/Suse) · Docker · Ansible · Jenkins · CI/CD · VMware vCenter" },
  { category: "Mensajería & Middleware", items: "RabbitMQ · Message Brokers" },
  { category: "Cloud", items: "AWS · Azure" },
  { category: "Bases de Datos", items: "PostgreSQL · MySQL · Oracle · SQL Server" },
  { category: "ERP & Sistemas Empresariales", items: "SAP POS · SAP R3 · SAP ABAP · WMS-KNAPP · AS400" },
  { category: "Seguridad", items: "Ciberseguridad enterprise · Hardening · Auditorías · Symantec NetBackup" },
];

const projects = [
  { name: "SAP POS – Farmacias Arrocha", tech: "SAP POS, ABAP, Oracle, Linux", impact: "300+ estaciones · 29 sucursales" },
  { name: "WMS-KNAPP / AS400 Integration", tech: "WMS-KNAPP, AS400, PHP, SQL Server", impact: "Facturación automatizada" },
  { name: "Reconocimiento de Recetas con IA", tech: "Gemini AI, Python, FastAPI, React Native", impact: "Análisis en <3 segundos" },
  { name: "VendedorVirtual", tech: "FastAPI, React, PostgreSQL, Docker, RabbitMQ", impact: "Atención 24/7 automatizada" },
  { name: "Sistema AXA", tech: "Laravel, React, MySQL, Docker", impact: "Gestión centralizada de pólizas" },
];

export default function CVPage() {
  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          @page { margin: 1.5cm 1.8cm; size: A4; }
          .page-break { page-break-before: always; }
          a { color: inherit !important; text-decoration: none !important; }
        }
        @media screen {
          .cv-root { max-width: 860px; margin: 0 auto; }
        }
      `}</style>

      {/* Toolbar — hidden on print */}
      <div className="no-print sticky top-0 z-50 flex items-center justify-between px-6 py-3 border-b"
        style={{ background: "#050d1a", borderColor: "rgba(59,130,246,0.15)" }}>
        <a href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al portafolio
        </a>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-2 rounded-lg text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, #2563eb, #6366f1)" }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          Descargar / Imprimir PDF
        </button>
      </div>

      {/* CV Document */}
      <div className="cv-root px-8 py-10 min-h-screen"
        style={{ background: "#fff", color: "#111827", fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>

        {/* ── Header ── */}
        <div className="border-b-2 pb-6 mb-6" style={{ borderColor: "#2563eb" }}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-black tracking-tight" style={{ color: "#050d1a" }}>
                José Serrano
              </h1>
              <p className="text-lg font-semibold mt-1" style={{ color: "#2563eb" }}>
                Consultor Senior TI · Full Stack Developer · Security Expert · AI Engineer
              </p>
              <p className="text-sm mt-2" style={{ color: "#6b7280" }}>
                20+ años transformando retos empresariales en soluciones tecnológicas de alto impacto
              </p>
            </div>
            <div className="text-sm space-y-1 md:text-right" style={{ color: "#374151" }}>
              <p>📍 Panamá Pacífico, Howard · Panamá</p>
              <p>📧 joseserrano01@gmail.com</p>
              <p>📱 +507 6430-0121 · 591-5535</p>
              <p>
                <a href="https://www.linkedin.com/in/jose-serrano-21406650/" style={{ color: "#2563eb" }}>
                  linkedin.com/in/jose-serrano-21406650
                </a>
              </p>
              <p>
                <a href="https://jserrano.diasofonline.com" style={{ color: "#2563eb" }}>
                  jserrano.diasofonline.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* ── Perfil Profesional ── */}
        <section className="mb-6">
          <h2 className="text-xs font-black tracking-[0.18em] uppercase mb-3 pb-1 border-b" style={{ color: "#2563eb", borderColor: "#e5e7eb" }}>
            Perfil Profesional
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            Consultor Senior TI con más de 20 años de experiencia comprobada en implementaciones enterprise de alto impacto.
            Especialista en arquitecturas seguras, sistemas distribuidos y modernización tecnológica. He liderado migraciones
            críticas de plataformas POS en 28+ sucursales, implementado SAP en entornos nacionales y desarrollado soluciones
            de Inteligencia Artificial con impacto de negocio medible. <strong style={{ color: "#111827" }}>Cada proyecto que inicio, lo entrego en producción.</strong>
          </p>
        </section>

        {/* ── Experiencia Profesional ── */}
        <section className="mb-6">
          <h2 className="text-xs font-black tracking-[0.18em] uppercase mb-4 pb-1 border-b" style={{ color: "#2563eb", borderColor: "#e5e7eb" }}>
            Experiencia Profesional
          </h2>
          <div className="space-y-5">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-0.5 mb-1">
                  <div>
                    <span className="font-bold text-sm" style={{ color: "#111827" }}>{job.company}</span>
                    <span className="text-sm" style={{ color: "#6b7280" }}> · {job.location}</span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: "#eff6ff", color: "#2563eb" }}>
                    {job.period}
                  </span>
                </div>
                <p className="text-xs font-semibold mb-2 italic" style={{ color: "#4b5563" }}>{job.role}</p>
                <ul className="space-y-1">
                  {job.achievements.map((a, i) => (
                    <li key={i} className="flex gap-2 text-xs leading-relaxed" style={{ color: "#374151" }}>
                      <span className="flex-shrink-0 font-bold mt-0.5" style={{ color: "#2563eb" }}>▸</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Proyectos Destacados ── */}
        <section className="mb-6">
          <h2 className="text-xs font-black tracking-[0.18em] uppercase mb-3 pb-1 border-b" style={{ color: "#2563eb", borderColor: "#e5e7eb" }}>
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {projects.map((p) => (
              <div key={p.name} className="rounded-lg px-3 py-2" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                <p className="font-semibold text-xs" style={{ color: "#111827" }}>{p.name}</p>
                <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>{p.tech}</p>
                <p className="text-xs font-medium mt-0.5" style={{ color: "#2563eb" }}>→ {p.impact}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          {/* ── Stack Técnico ── */}
          <section>
            <h2 className="text-xs font-black tracking-[0.18em] uppercase mb-3 pb-1 border-b" style={{ color: "#2563eb", borderColor: "#e5e7eb" }}>
              Stack Técnico
            </h2>
            <div className="space-y-2">
              {skills.map((s) => (
                <div key={s.category}>
                  <p className="text-xs font-semibold" style={{ color: "#111827" }}>{s.category}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{s.items}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-5">
            {/* ── Formación Académica ── */}
            <section>
              <h2 className="text-xs font-black tracking-[0.18em] uppercase mb-3 pb-1 border-b" style={{ color: "#2563eb", borderColor: "#e5e7eb" }}>
                Formación Académica
              </h2>
              <div className="space-y-2">
                {education.map((ed) => (
                  <div key={ed.degree}>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-bold" style={{ color: "#2563eb" }}>{ed.year}</span>
                      <p className="text-xs font-semibold leading-snug" style={{ color: "#111827" }}>{ed.degree}</p>
                    </div>
                    <p className="text-xs" style={{ color: "#6b7280" }}>{ed.institution}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Certificaciones ── */}
            <section>
              <h2 className="text-xs font-black tracking-[0.18em] uppercase mb-3 pb-1 border-b" style={{ color: "#2563eb", borderColor: "#e5e7eb" }}>
                Certificaciones
              </h2>
              <ul className="space-y-1">
                {certifications.map((c) => (
                  <li key={c} className="flex gap-2 text-xs" style={{ color: "#374151" }}>
                    <span style={{ color: "#2563eb" }}>✓</span> {c}
                  </li>
                ))}
              </ul>
            </section>

            {/* ── Idiomas ── */}
            <section>
              <h2 className="text-xs font-black tracking-[0.18em] uppercase mb-3 pb-1 border-b" style={{ color: "#2563eb", borderColor: "#e5e7eb" }}>
                Idiomas
              </h2>
              <div className="space-y-1 text-xs" style={{ color: "#374151" }}>
                <p><strong style={{ color: "#111827" }}>Español</strong> — Nativo</p>
                <p><strong style={{ color: "#111827" }}>Inglés</strong> — Intermedio</p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t text-center" style={{ borderColor: "#e5e7eb" }}>
          <p className="text-xs" style={{ color: "#9ca3af" }}>
            José Serrano · joseserrano01@gmail.com · +507 6430-0121 · jserrano.diasofonline.com
          </p>
        </div>
      </div>
    </>
  );
}
