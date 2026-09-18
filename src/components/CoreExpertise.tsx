"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLang } from "@/context/LangContext";

const GROUP_COLORS = [
  { text: "#7dd3fc", bg: "rgba(56,189,248,0.08)", border: "rgba(56,189,248,0.2)" },
  { text: "#93c5fd", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.2)" },
  { text: "#a5b4fc", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)" },
  { text: "#86efac", bg: "rgba(34,197,94,0.07)", border: "rgba(34,197,94,0.18)" },
  { text: "#fca5a5", bg: "rgba(239,68,68,0.07)", border: "rgba(239,68,68,0.18)" },
  { text: "#fdba74", bg: "rgba(249,115,22,0.07)", border: "rgba(249,115,22,0.18)" },
  { text: "#c4b5fd", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)" },
];

export default function CoreExpertise() {
  const { t } = useLang();
  const [ref, visible] = useReveal(0.1);

  return (
    <section id="expertise" className="py-24" style={{ backgroundColor: "#050d1a" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-badge">{t.expertise.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            {t.expertise.heading}
          </h2>
          <div className="section-divider" />
          <p className="text-slate-500 mt-4 text-sm max-w-xl mx-auto">{t.expertise.sub}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" ref={ref}>
          {t.expertise.groups.map((group, i) => {
            const color = GROUP_COLORS[i % GROUP_COLORS.length];
            return (
              <div
                key={group.title}
                className="rounded-2xl p-5 card-hover"
                style={{
                  background: "rgba(12,30,56,0.65)",
                  border: "1px solid rgba(59,130,246,0.1)",
                  backdropFilter: "blur(10px)",
                  opacity: 0,
                  animation: visible ? `slideInUp 0.55s ease ${i * 0.07}s both` : "none",
                }}
              >
                <h3
                  className="text-xs font-bold tracking-widest mb-4 uppercase"
                  style={{ color: color.text }}
                >
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs rounded-lg font-medium"
                      style={{
                        background: color.bg,
                        border: `1px solid ${color.border}`,
                        color: color.text,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
