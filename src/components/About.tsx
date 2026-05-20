export default function About() {
  const expertise = [
    {
      icon: "🔒",
      title: "Seguridad Informática",
      desc: "Maestría en Ciberseguridad, certificación SAP ABAP, Symantec NetBackup, hardening y auditorías de seguridad.",
      accent: "rgba(239,68,68,0.15)",
      border: "rgba(239,68,68,0.2)",
    },
    {
      icon: "🖥️",
      title: "DevOps & Infraestructura",
      desc: "Linux (RedHat, Ubuntu, Suse), VMware vCenter, Docker, CI/CD pipelines, Windows Server, Oracle Linux.",
      accent: "rgba(249,115,22,0.15)",
      border: "rgba(249,115,22,0.2)",
    },
    {
      icon: "⚛️",
      title: "Frontend – React / Next.js",
      desc: "Aplicaciones SPA y SSR modernas con React, Next.js, TypeScript y Tailwind CSS.",
      accent: "rgba(6,182,212,0.15)",
      border: "rgba(6,182,212,0.2)",
    },
    {
      icon: "🛠️",
      title: "Backend – Laravel / FastAPI",
      desc: "APIs REST y microservicios con Laravel (PHP) y FastAPI (Python). PostgreSQL, MySQL, Oracle.",
      accent: "rgba(16,185,129,0.15)",
      border: "rgba(16,185,129,0.2)",
    },
    {
      icon: "🤖",
      title: "IA & Machine Learning",
      desc: "Integración de Gemini AI, Computer Vision para reconocimiento de imágenes, LLMs y automatización inteligente con Python.",
      accent: "rgba(59,130,246,0.15)",
      border: "rgba(59,130,246,0.25)",
    },
    {
      icon: "📱",
      title: "Desarrollo Mobile",
      desc: "Apps Android nativas con Kotlin y multiplataforma con React Native integradas a sistemas empresariales y ERP.",
      accent: "rgba(139,92,246,0.15)",
      border: "rgba(139,92,246,0.2)",
    },
    {
      icon: "☁️",
      title: "Cloud & ERP",
      desc: "AWS, Azure, SAP-POS en 29 sucursales, SAP-R3 interfaces/IDOCS, WMS-KNAPP, AS400.",
      accent: "rgba(245,158,11,0.15)",
      border: "rgba(245,158,11,0.2)",
    },
  ];

  const stats = [
    { number: "20+", label: "Años de Experiencia" },
    { number: "300+", label: "Estaciones Impactadas" },
    { number: "29",  label: "Sucursales SAP-POS" },
    { number: "2",   label: "Maestrías / Diplomas" },
  ];

  return (
    <section id="sobre-mi" className="py-24" style={{ backgroundColor: "#0a1628" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge">Sobre Mí</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Experto en Seguridad &amp;{" "}
            <span className="gradient-text">Desarrollo</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Bio + stats */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Full Stack Developer, Security Expert y AI Engineer</strong> con más
              de 20 años de experiencia construyendo soluciones robustas, seguras y escalables. Del frontend en
              React al backend en Laravel/FastAPI, pasando por infraestructura Linux, pipelines DevOps e
              integración de Inteligencia Artificial con Gemini.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              Experto en sistemas empresariales (SAP, WMS-KNAPP, AS400), administración de infraestructura con
              VMware y Docker, desarrollo mobile con <strong className="text-white">Kotlin y React Native</strong>,
              y Maestría en Seguridad Informática.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Panamá Pacífico, Howard", "Español (nativo)", "Inglés (intermedio)"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm rounded-full text-blue-300 border"
                  style={{ background: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.2)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-5 text-center card-hover"
                style={{ background: "rgba(15,31,61,0.7)", border: "1px solid rgba(59,130,246,0.12)", backdropFilter: "blur(8px)" }}
              >
                <div className="text-3xl font-extrabold gradient-text mb-1">{s.number}</div>
                <div className="text-slate-400 text-xs leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-5 card-hover transition-all duration-250"
              style={{
                background: item.accent,
                border: `1px solid ${item.border}`,
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-white text-sm mb-2 leading-snug">{item.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
