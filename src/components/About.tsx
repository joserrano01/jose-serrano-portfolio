"use client";

import { useEffect, useRef, useState } from "react";

const expertise = [
  { icon: "🔒", title: "Seguridad Informática",      desc: "Maestría en Ciberseguridad, certificación SAP ABAP, Symantec NetBackup, hardening y auditorías de seguridad." },
  { icon: "🖥️", title: "DevOps & Infraestructura",   desc: "Linux (RedHat, Ubuntu, Suse), VMware vCenter, Docker, CI/CD pipelines, Windows Server, Oracle Linux." },
  { icon: "⚛️", title: "Frontend – React / Next.js", desc: "Aplicaciones SPA y SSR modernas con React, Next.js, TypeScript y Tailwind CSS." },
  { icon: "🛠️", title: "Backend – Laravel / FastAPI", desc: "APIs REST y microservicios con Laravel (PHP) y FastAPI (Python). PostgreSQL, MySQL, Oracle." },
  { icon: "🤖", title: "IA & Machine Learning",       desc: "Integración de Gemini AI, Computer Vision para reconocimiento de imágenes, LLMs y automatización inteligente." },
  { icon: "📱", title: "Desarrollo Mobile",            desc: "Apps Android nativas con Kotlin y multiplataforma con React Native, integradas a sistemas empresariales." },
  { icon: "☁️", title: "Cloud & ERP",                  desc: "AWS, Azure, SAP-POS en 29 sucursales, SAP-R3 interfaces/IDOCS, WMS-KNAPP, AS400." },
];

const stats = [
  { num: 20, suffix: "+", label: "Años de Experiencia" },
  { num: 300, suffix: "+", label: "Estaciones Impactadas" },
  { num: 29, suffix: "",   label: "Sucursales SAP-POS" },
  { num: 2,  suffix: "",   label: "Maestrías / Diplomas" },
];

const CARD_BG = "rgba(12,30,56,0.65)";
const CARD_BORDER = "1px solid rgba(59,130,246,0.1)";

function tiltHandlers() {
  return {
    onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transition = 'transform 0.08s ease, box-shadow 0.08s ease';
      el.style.transform = `perspective(700px) rotateX(${-y * 14}deg) rotateY(${x * 14}deg) translateY(-6px) scale(1.015)`;
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    },
    onMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
      const el = e.currentTarget;
      el.style.transition = 'transform 0.55s cubic-bezier(0.23,1,0.32,1), box-shadow 0.55s ease';
      el.style.transform = '';
    },
  };
}

function Counter({ target, suffix, visible }: { target: number; suffix: string; visible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [visible, target]);

  return <>{count}{suffix}</>;
}

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}

export default function About() {
  const [statsRef, statsVisible] = useReveal(0.2);
  const [cardsRef, cardsVisible] = useReveal(0.1);
  const [bioRef, bioVisible] = useReveal(0.2);

  return (
    <section id="sobre-mi" className="py-24" style={{ backgroundColor: "#0a1628" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge">Sobre Mí</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Experto en Seguridad &amp; <span className="gradient-text">Desarrollo</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Bio + stats */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16" ref={bioRef}>
          {/* Bio */}
          <div style={{ opacity: 0, animation: bioVisible ? "slideInLeft 0.7s ease both" : "none" }}>
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

          {/* Animated stats */}
          <div className="grid grid-cols-2 gap-4" ref={statsRef}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="rounded-2xl p-5 text-center tilt-card"
                style={{
                  background: CARD_BG,
                  border: CARD_BORDER,
                  backdropFilter: "blur(8px)",
                  opacity: 0,
                  animation: statsVisible ? `scaleIn 0.5s ease ${i * 0.1}s both` : "none",
                  transition: 'transform 0.55s cubic-bezier(0.23,1,0.32,1)',
                }}
                {...tiltHandlers()}
              >
                <div className="text-3xl font-extrabold gradient-text mb-1">
                  <Counter target={s.num} suffix={s.suffix} visible={statsVisible} />
                </div>
                <div className="text-slate-400 text-xs leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise cards — staggered */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" ref={cardsRef}>
          {expertise.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl p-5 tilt-card"
              style={{
                background: `radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(37,99,235,0.1) 0%, transparent 55%), ${CARD_BG}`,
                border: CARD_BORDER,
                backdropFilter: "blur(10px)",
                opacity: 0,
                animation: cardsVisible ? `slideInUp 0.55s ease ${i * 0.08}s both` : "none",
                transition: 'transform 0.55s cubic-bezier(0.23,1,0.32,1)',
                '--mx': '50%',
                '--my': '50%',
              } as React.CSSProperties}
              {...tiltHandlers()}
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
