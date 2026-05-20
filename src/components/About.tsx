export default function About() {
  const expertise = [
    { icon: "🔒", title: "Seguridad Informática", desc: "Certificación SAP ABAP, Symantec NetBackup, hardening de servidores, auditorías de seguridad." },
    { icon: "🖥️", title: "DevOps & Infraestructura", desc: "Linux (RedHat, Ubuntu, Suse), VMware vCenter, Docker, CI/CD, Windows Server, Oracle Linux." },
    { icon: "⚛️", title: "Frontend – React / Next.js", desc: "Aplicaciones SPA y SSR modernas con React, Next.js, TypeScript y Tailwind CSS." },
    { icon: "🛠️", title: "Backend – Laravel / FastAPI", desc: "APIs REST y microservicios con Laravel (PHP) y FastAPI (Python), PostgreSQL, MySQL, Oracle." },
    { icon: "📱", title: "Mobile – Kotlin", desc: "Aplicaciones Android nativas con Kotlin integradas a sistemas empresariales y ERP." },
    { icon: "☁️", title: "Cloud & ERP", desc: "AWS, Azure, SAP-POS en 29 sucursales, SAP-R3 interfaces/IDOCS, WMS-KNAPP, AS400." },
  ];

  return (
    <section id="sobre-mi" className="py-24 bg-[#0d2044]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Sobre Mí</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Experto en Seguridad &amp; Desarrollo</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              <strong className="text-white">Full Stack Developer, Security Expert y DevOps Engineer</strong> con más de 20 años de experiencia
              construyendo soluciones robustas, seguras y escalables. Del frontend en React al backend en Laravel/FastAPI,
              pasando por infraestructura Linux y pipelines DevOps — cubro todo el ciclo de vida del software.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Experto en integración de sistemas empresariales (SAP, WMS-KNAPP, AS400), administración de infraestructura
              con VMware y Docker, y desarrollo de apps Android con <strong className="text-white">Kotlin</strong>.
              Maestría en Seguridad Informática y certificación SAP ABAP.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Panamá Pacífico, Howard", "Español (nativo)", "Inglés (intermedio)"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#1a3a6b] text-blue-300 text-sm rounded-full border border-blue-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "20+", label: "Años de Experiencia" },
              { number: "300+", label: "Estaciones Impactadas" },
              { number: "29", label: "Sucursales SAP-POS" },
              { number: "2", label: "Maestrías / Diplomas" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#0a1628] border border-blue-900/40 rounded-xl p-5 text-center card-hover"
              >
                <div className="text-3xl font-extrabold gradient-text mb-1">{stat.number}</div>
                <div className="text-slate-400 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="bg-[#0a1628] border border-blue-900/30 rounded-xl p-6 card-hover"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
