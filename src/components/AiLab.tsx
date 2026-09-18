"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLang } from "@/context/LangContext";

function StatusBadge({ status, labels }: { status: "in-development" | "coming-soon"; labels: { inDevelopment: string; comingSoon: string } }) {
  const isInDev = status === "in-development";
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border"
      style={
        isInDev
          ? { background: "rgba(251,191,36,0.1)", color: "#fbbf24", borderColor: "rgba(251,191,36,0.25)" }
          : { background: "rgba(100,116,139,0.1)", color: "#64748b", borderColor: "rgba(100,116,139,0.2)" }
      }
    >
      {isInDev && <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />}
      {isInDev ? labels.inDevelopment : labels.comingSoon}
    </span>
  );
}

type AiItem = {
  id: string;
  title: string;
  description: string;
  tech: readonly string[];
  status: "in-development" | "coming-soon";
  architectureFlow?: readonly string[];
};

function ArchitectureFlow({ steps }: { steps: readonly string[] }) {
  const midpoint = Math.ceil(steps.length / 2);
  return (
    <div className="mt-4 pt-4 border-t" style={{ borderColor: "rgba(59,130,246,0.1)" }}>
      <div className="flex flex-col items-center gap-1">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-col items-center">
            <span
              className="px-3 py-1 rounded-lg text-xs font-medium text-center"
              style={
                i === midpoint - 1 || i === midpoint
                  ? { background: "rgba(37,99,235,0.2)", color: "#93c5fd", border: "1px solid rgba(59,130,246,0.3)" }
                  : { background: "rgba(255,255,255,0.04)", color: "#64748b", border: "1px solid rgba(255,255,255,0.06)" }
              }
            >
              {step}
            </span>
            {i < steps.length - 1 && (
              <div className="w-px h-4" style={{ background: "rgba(59,130,246,0.3)" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AiLab() {
  const { t } = useLang();
  const [ref, visible] = useReveal(0.05);
  const lab = t.aiLab;

  return (
    <section id="ai-lab" className="py-24" style={{ backgroundColor: "#0a1628" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-badge">{lab.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            {lab.heading}
          </h2>
          <div className="section-divider" />
          <p className="text-slate-500 mt-4 text-sm">{lab.sub}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
          {(lab.items as unknown as AiItem[]).map((item, i) => (
            <div
              key={item.id}
              className="rounded-2xl p-5 flex flex-col card-hover"
              style={{
                background: "rgba(12,30,56,0.65)",
                border: "1px solid rgba(59,130,246,0.1)",
                backdropFilter: "blur(10px)",
                opacity: 0,
                animation: visible ? `scaleIn 0.55s cubic-bezier(0.23,1,0.32,1) ${i * 0.06}s both` : "none",
              }}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-bold text-white text-sm leading-snug">{item.title}</h3>
                <StatusBadge status={item.status} labels={{ inDevelopment: lab.inDevelopment, comingSoon: lab.comingSoon }} />
              </div>

              <p className="text-slate-400 text-xs leading-relaxed flex-1 mb-3">{item.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded border"
                    style={{ background: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.18)", color: "#93c5fd" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {item.architectureFlow && (
                <ArchitectureFlow steps={item.architectureFlow} />
              )}

              {/* Disabled buttons until project is ready */}
              <div className="flex gap-2 mt-4 pt-4 border-t" style={{ borderColor: "rgba(59,130,246,0.08)" }}>
                {[lab.architectureLabel, lab.githubLabel, lab.demoLabel].map((label) => (
                  <span
                    key={label}
                    className="px-2.5 py-1 text-xs rounded border cursor-not-allowed"
                    style={{ background: "rgba(255,255,255,0.02)", color: "#334155", borderColor: "rgba(255,255,255,0.06)" }}
                    title={item.status === "in-development" ? lab.inDevelopment : lab.comingSoon}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
