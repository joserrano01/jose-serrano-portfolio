"use client";

const techStack = [
  { name: "Laravel",      color: "text-red-400    bg-red-500/10    border-red-500/25" },
  { name: "FastAPI",      color: "text-green-400  bg-green-500/10  border-green-500/25" },
  { name: "React/Next.js",color: "text-cyan-400   bg-cyan-500/10   border-cyan-500/25" },
  { name: "Kotlin",       color: "text-orange-400 bg-orange-500/10 border-orange-500/25" },
  { name: "Gemini AI",    color: "text-blue-400   bg-blue-500/10   border-blue-500/25" },
  { name: "React Native", color: "text-violet-400 bg-violet-500/10 border-violet-500/25" },
  { name: "Docker",       color: "text-sky-400    bg-sky-500/10    border-sky-500/25" },
  { name: "SAP",          color: "text-amber-400  bg-amber-500/10  border-amber-500/25" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
      style={{ backgroundColor: "#050d1a" }}
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute -top-56 -left-56 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.13) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-56 -right-56 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.11) 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 60%)" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", color: "#4ade80", backdropFilter: "blur(12px)" }}>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Disponible para proyectos · Panamá
        </div>

        {/* Avatar with orbit rings */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="w-28 h-28 rounded-full flex items-center justify-center pulse-glow z-10"
            style={{ background: "linear-gradient(135deg, #1e3a8a, #1e1b4b)", border: "2px solid rgba(99,102,241,0.45)" }}>
            <span className="text-4xl font-black gradient-text select-none">JS</span>
          </div>
          <div className="absolute inset-0 rounded-full spin-slow"
            style={{ transform: "scale(1.38)", border: "1px solid rgba(59,130,246,0.22)" }} />
          <div className="absolute inset-0 rounded-full spin-reverse"
            style={{ transform: "scale(1.65)", border: "1px solid rgba(139,92,246,0.12)" }} />
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-3 leading-none">
          <span className="text-white">José </span>
          <span className="gradient-text">Serrano</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-medium text-slate-300 mb-2">
          Full Stack Developer · Security Expert · AI Engineer
        </p>
        <p className="text-slate-500 text-sm mb-10 max-w-lg mx-auto">
          +20 años construyendo soluciones tecnológicas robustas y escalables en Panamá
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {techStack.map((t) => (
            <span
              key={t.name}
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 hover:scale-105 cursor-default ${t.color}`}
            >
              {t.name}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#proyectos"
            className="px-6 py-3 rounded-xl text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #2563eb, #7c3aed)" }}
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 text-slate-300 hover:text-white hover:border-blue-500/40"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}
          >
            Contactar
          </a>
          <a
            href="https://www.linkedin.com/in/jose-serrano-21406650/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 text-blue-400 hover:text-blue-300"
            style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.28)", backdropFilter: "blur(8px)" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn ↗
          </a>
          <a
            href="https://wa.me/50764300121"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 text-green-400 hover:text-green-300"
            style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.28)", backdropFilter: "blur(8px)" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-float" style={{ color: "#334155" }}>
        <span className="text-xs tracking-[0.2em] font-medium">SCROLL</span>
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, #475569, transparent)" }} />
      </div>
    </section>
  );
}
