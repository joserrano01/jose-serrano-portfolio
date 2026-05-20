"use client";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2044 50%, #0a1628 100%)" }}
    >
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-cyan-500 blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 fade-in-up">
        {/* Avatar placeholder */}
        <div className="mx-auto mb-6 w-32 h-32 rounded-full border-4 border-blue-500 pulse-glow flex items-center justify-center bg-[#1a3a6b] text-4xl font-bold text-blue-300">
          JS
        </div>

        <p className="text-blue-400 font-semibold tracking-widest text-sm mb-2 uppercase">
          Bienvenido a mi portfolio
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-3">
          <span className="gradient-text">José Serrano</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-300 font-light mb-2">
          Full Stack Developer · Security Expert · DevOps Engineer
        </h2>

        <p className="text-slate-400 text-sm mb-8 max-w-xl mx-auto">
          +20 años de experiencia · Laravel · FastAPI · React · Kotlin · Linux · Docker · AWS · SAP
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#proyectos"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-full transition-all duration-300"
          >
            Contactar
          </a>
          <a
            href="https://www.linkedin.com/in/jose-serrano-21406650/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-500 text-slate-300 hover:border-blue-400 hover:text-blue-400 font-semibold rounded-full transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
