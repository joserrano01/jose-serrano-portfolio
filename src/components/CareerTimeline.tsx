"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLang } from "@/context/LangContext";

export default function CareerTimeline() {
  const { t } = useLang();
  const [ref, visible] = useReveal(0.1);
  const { steps } = t.career;

  return (
    <section id="career" className="py-24" style={{ backgroundColor: "#050d1a" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-badge">{t.career.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            {t.career.heading}
          </h2>
          <div className="section-divider" />
          <p className="text-slate-500 mt-4 text-sm max-w-xl mx-auto">{t.career.sub}</p>
        </div>

        {/* Mobile: vertical list; Desktop: horizontal timeline */}
        <div ref={ref}>
          {/* Desktop horizontal timeline — hidden on mobile */}
          <div className="hidden md:flex items-start">
            {steps.map((step, i) => (
              <div key={step.year} className="flex flex-col items-center flex-1">
                {/* Connector row */}
                <div className="flex items-center w-full">
                  {i > 0 && (
                    <div className="flex-1 h-0.5" style={{ background: "linear-gradient(to right, rgba(37,99,235,0.4), rgba(99,102,241,0.4))" }} />
                  )}
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{
                      background: i === steps.length - 1 ? "linear-gradient(135deg, #06b6d4, #6366f1)" : "linear-gradient(135deg, #2563eb, #6366f1)",
                      boxShadow: visible ? "0 0 8px rgba(37,99,235,0.5)" : "none",
                    }}
                  />
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-0.5" style={{ background: "linear-gradient(to right, rgba(37,99,235,0.4), rgba(99,102,241,0.4))" }} />
                  )}
                </div>
                {/* Label card */}
                <div
                  className="mt-3 mx-1 p-3 rounded-xl text-center card-hover w-full"
                  style={{
                    background: "rgba(12,30,56,0.65)",
                    border: `1px solid ${i === steps.length - 1 ? "rgba(6,182,212,0.3)" : "rgba(59,130,246,0.12)"}`,
                    opacity: 0,
                    animation: visible ? `slideInUp 0.5s ease ${i * 0.08}s both` : "none",
                  }}
                >
                  <div className="text-xs font-bold text-blue-400 mb-1">{step.year}</div>
                  <div className="text-xs font-semibold text-white leading-tight mb-1.5">{step.label}</div>
                  <div className="text-xs text-slate-500 leading-tight">{step.detail}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile vertical list — hidden on md+ */}
          <div className="md:hidden space-y-3">
            {steps.map((step, i) => (
              <div
                key={step.year}
                className="flex gap-4 items-start"
                style={{
                  opacity: 0,
                  animation: visible ? `slideInUp 0.45s ease ${i * 0.06}s both` : "none",
                }}
              >
                {/* Timeline dot + line */}
                <div className="flex flex-col items-center flex-shrink-0 pt-1">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      background: i === steps.length - 1 ? "linear-gradient(135deg, #06b6d4, #6366f1)" : "linear-gradient(135deg, #2563eb, #6366f1)",
                    }}
                  />
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-1" style={{ background: "rgba(37,99,235,0.25)", minHeight: "40px" }} />
                  )}
                </div>
                {/* Content */}
                <div
                  className="flex-1 pb-2 rounded-xl p-3 card-hover"
                  style={{
                    background: "rgba(12,30,56,0.65)",
                    border: `1px solid ${i === steps.length - 1 ? "rgba(6,182,212,0.25)" : "rgba(59,130,246,0.1)"}`,
                  }}
                >
                  <span className="text-xs font-bold text-blue-400">{step.year}</span>
                  <h3 className="text-sm font-semibold text-white mt-0.5 mb-1">{step.label}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
