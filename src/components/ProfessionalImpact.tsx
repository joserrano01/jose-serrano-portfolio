"use client";

import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useLang } from "@/context/LangContext";

function Counter({ target, suffix, visible }: { target: number; suffix: string; visible: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const duration = 1600;
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

function parseMetric(value: string): { num: number; suffix: string; isStatic: boolean } {
  const m = value.match(/^(\d+)(.*)$/);
  if (m) return { num: parseInt(m[1]), suffix: m[2], isStatic: false };
  return { num: 0, suffix: "", isStatic: true };
}

export default function ProfessionalImpact() {
  const { t } = useLang();
  const [ref, visible] = useReveal(0.15);

  return (
    <section
      id="impact"
      className="py-16"
      style={{ backgroundColor: "#0a1628", borderTop: "1px solid rgba(59,130,246,0.08)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="section-badge">{t.impact.badge}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-3">
            {t.impact.heading}
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" ref={ref}>
          {t.impact.metrics.map((m, i) => {
            const { num, suffix, isStatic } = parseMetric(m.value);
            return (
              <div
                key={m.label}
                className="rounded-2xl p-5 text-center card-hover"
                style={{
                  background: "rgba(12,30,56,0.65)",
                  border: "1px solid rgba(59,130,246,0.1)",
                  backdropFilter: "blur(8px)",
                  opacity: 0,
                  animation: visible ? `scaleIn 0.5s ease ${i * 0.08}s both` : "none",
                }}
              >
                <div className="text-3xl font-extrabold gradient-text mb-1">
                  {isStatic ? (
                    <span>{m.value}</span>
                  ) : num === 0 && m.value === "0" ? (
                    <span style={{ color: "#4ade80" }}>0</span>
                  ) : (
                    <Counter target={num} suffix={suffix} visible={visible} />
                  )}
                </div>
                <div className="text-slate-400 text-xs leading-snug">{m.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
