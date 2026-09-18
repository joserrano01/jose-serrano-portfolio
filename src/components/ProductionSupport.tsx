"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLang } from "@/context/LangContext";

const AREA_ICONS = ["⚡", "🖥️", "🔌", "🔗", "⚙️", "🔒"];

export default function ProductionSupport() {
  const { t } = useLang();
  const [ref, visible] = useReveal(0.1);

  return (
    <section
      id="support"
      className="py-24 bg-grid"
      style={{ backgroundColor: "#0a1628" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-badge">{t.support.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            {t.support.heading}
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 mt-5 text-base max-w-2xl mx-auto leading-relaxed">
            {t.support.tagline}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" ref={ref}>
          {t.support.areas.map((area, i) => (
            <div
              key={area.title}
              className="rounded-2xl p-6 card-hover"
              style={{
                background: "rgba(12,30,56,0.65)",
                border: "1px solid rgba(59,130,246,0.1)",
                backdropFilter: "blur(10px)",
                opacity: 0,
                animation: visible ? `slideInUp 0.55s ease ${i * 0.08}s both` : "none",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl" aria-hidden>{AREA_ICONS[i % AREA_ICONS.length]}</span>
                <h3 className="font-semibold text-white text-sm">{area.title}</h3>
              </div>
              <ul className="space-y-2">
                {area.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-slate-400 text-xs leading-relaxed">
                    <span className="mt-0.5 flex-shrink-0 text-blue-500">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
