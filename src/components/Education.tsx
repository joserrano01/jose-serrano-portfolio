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

export default function Education() {
  return (
    <section id="educacion" className="py-24 bg-[#0d2044]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Educación &amp; Certificaciones</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-6 flex items-center gap-2">
              <span>📚</span> Formación Académica
            </h3>
            <div className="space-y-5">
              {education.map((ed) => (
                <div
                  key={ed.degree}
                  className="bg-[#0a1628] border border-blue-900/30 rounded-xl p-5 card-hover flex gap-4"
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
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-6 flex items-center gap-2">
              <span>🏆</span> Certificaciones
            </h3>
            <div className="space-y-3 mb-10">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-[#0a1628] border border-blue-900/30 rounded-xl p-4 flex items-center gap-3 card-hover"
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
              ].map((l) => (
                <div key={l.lang} className="bg-[#0a1628] border border-blue-900/30 rounded-xl p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-sm font-semibold">{l.lang}</span>
                    <span className="text-blue-400 text-xs">{l.level}</span>
                  </div>
                  <div className="h-1.5 bg-[#0d2044] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${l.pct}%`,
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
