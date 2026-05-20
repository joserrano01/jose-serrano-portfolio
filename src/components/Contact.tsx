export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-[#0a1628]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contacto</h2>
          <div className="section-divider" />
          <p className="text-slate-400 mt-4">
            ¿Interesado en colaborar? Estoy disponible para proyectos y consultoría.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ),
              label: "Teléfono",
              value: "6430-0121 / 591-5535",
              href: "tel:64300121",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              label: "Email",
              value: "joseserrano01@gmail.com",
              href: "mailto:joseserrano01@gmail.com",
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              label: "Ubicación",
              value: "Panamá Pacífico, Howard",
              href: undefined,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[#0d2044] border border-blue-900/30 rounded-2xl p-6 text-center card-hover"
            >
              <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 mx-auto mb-3">
                {item.icon}
              </div>
              <p className="text-slate-500 text-xs mb-1">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-white text-sm font-semibold hover:text-blue-400 transition-colors">
                  {item.value}
                </a>
              ) : (
                <p className="text-white text-sm font-semibold">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/jose-serrano-21406650/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0077B5] hover:bg-[#006097] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/40"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Conectar en LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
