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
      "Obtuve la certificación en SAP ABAP.",
    ],
  },
  {
    period: "1994 – 2002",
    company: "Grupo Lee Chang Hnos.",
    location: "Chiriquí",
    role: "Gerente de Sistemas Informáticos",
    achievements: [
      "Implementé el sistema Trimax para cajas registradoras, mejorando la eficiencia de las transacciones en puntos de venta.",
      "Desarrollé e implementé un sistema automatizado de control para una financiera (préstamo y financiamiento).",
      "Sistemas integrales de facturación, inventario, cuentas por cobrar y cuentas por pagar.",
      "Instalación y configuración en múltiples plataformas: SCO Unix, Linux Red Hat 7.0, Novell 3.2.",
      "Sistema de control de inventario y cajas registradoras en Hipermas (San José, Costa Rica).",
      "Pionero en implementación de tecnología inalámbrica para recolección de inventarios con código de barras.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-[#0a1628]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experiencia</h2>
          <div className="section-divider" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-500 -translate-x-1/2" />

          {jobs.map((job, i) => (
            <div
              key={job.company}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-[#0a1628] mt-1" />

              {/* Content */}
              <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                <div
                  className={`bg-[#0d2044] border border-blue-900/40 rounded-xl p-6 card-hover ${
                    i % 2 === 0 ? "" : ""
                  }`}
                >
                  <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full mb-3 border border-blue-600/30">
                    {job.period}
                  </span>
                  <h3 className="text-lg font-bold text-white">{job.role}</h3>
                  <p className="text-blue-400 font-semibold text-sm mb-1">{job.company}</p>
                  <p className="text-slate-500 text-xs mb-4">{job.location}</p>
                  <ul className="space-y-2 text-left">
                    {job.achievements.map((a, j) => (
                      <li key={j} className="flex gap-2 text-slate-300 text-sm">
                        <span className="text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
