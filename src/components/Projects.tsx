"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useLang } from "@/context/LangContext";
import { tiltHandlers } from "@/lib/tiltHandlers";

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "Enterprise · ERP":       { bg: "rgba(139,92,246,0.12)",  text: "#c4b5fd", border: "rgba(139,92,246,0.25)" },
  "Enterprise · Integration": { bg: "rgba(56,189,248,0.1)", text: "#7dd3fc", border: "rgba(56,189,248,0.22)" },
  "AI · Backend":           { bg: "rgba(59,130,246,0.1)",   text: "#93c5fd", border: "rgba(59,130,246,0.22)" },
  "AI · Mobile":            { bg: "rgba(59,130,246,0.1)",   text: "#93c5fd", border: "rgba(59,130,246,0.22)" },
  "Web · Backend":          { bg: "rgba(34,197,94,0.08)",   text: "#86efac", border: "rgba(34,197,94,0.2)" },
  "Enterprise · Integración": { bg: "rgba(56,189,248,0.1)", text: "#7dd3fc", border: "rgba(56,189,248,0.22)" },
  "IA · Backend":           { bg: "rgba(59,130,246,0.1)",   text: "#93c5fd", border: "rgba(59,130,246,0.22)" },
  "IA · Mobile":            { bg: "rgba(59,130,246,0.1)",   text: "#93c5fd", border: "rgba(59,130,246,0.22)" },
};
const DEFAULT_COLOR = { bg: "rgba(59,130,246,0.1)", text: "#93c5fd", border: "rgba(59,130,246,0.22)" };

function CaseStudy({ item, labels }: {
  item: { id: string; title: string; category: string; problem: string; architecture: string; role: string; tech: readonly string[]; challenges: string; solution: string; impact: string };
  labels: { problemLabel: string; architectureLabel: string; roleLabel: string; challengesLabel: string; solutionLabel: string; impactLabel: string; caseStudyLabel: string };
}) {
  const [open, setOpen] = useState(false);
  const color = CATEGORY_COLORS[item.category] ?? DEFAULT_COLOR;

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col tilt-card"
      style={{
        background: "rgba(12,30,56,0.65)",
        border: "1px solid rgba(59,130,246,0.1)",
        backdropFilter: "blur(10px)",
        transition: "transform 0.55s cubic-bezier(0.23,1,0.32,1), box-shadow 0.25s ease",
      }}
      {...tiltHandlers()}
    >
      <div className="p-5 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span
              className="inline-block px-2 py-0.5 text-xs font-medium rounded-full border mb-2"
              style={{ background: color.bg, color: color.text, borderColor: color.border }}
            >
              {item.category}
            </span>
            <h3 className="font-bold text-white text-sm leading-snug">{item.title}</h3>
          </div>
          <span
            className="flex-shrink-0 text-xs px-2 py-0.5 rounded border"
            style={{ background: "rgba(59,130,246,0.06)", color: "#64748b", borderColor: "rgba(59,130,246,0.12)" }}
          >
            {labels.caseStudyLabel}
          </span>
        </div>

        {/* Problem preview */}
        <p className="text-slate-400 text-xs leading-relaxed mb-3">{item.problem}</p>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-xs rounded border"
              style={{ background: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.18)", color: "#93c5fd" }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 text-xs font-medium transition-colors mt-auto"
          style={{ color: open ? "#60a5fa" : "#475569" }}
          aria-expanded={open}
        >
          <svg
            className="w-3.5 h-3.5 transition-transform duration-300"
            style={{ transform: open ? "rotate(90deg)" : "none" }}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          {open ? "Hide details" : "View case study"}
        </button>

        {/* Expanded case study */}
        <div
          className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={{ maxHeight: open ? "800px" : "0px", opacity: open ? 1 : 0 }}
        >
          <div className="pt-4 mt-4 border-t space-y-4" style={{ borderColor: "rgba(59,130,246,0.1)" }}>
            {(
              [
                { label: labels.architectureLabel, value: item.architecture },
                { label: labels.roleLabel, value: item.role },
                { label: labels.challengesLabel, value: item.challenges },
                { label: labels.solutionLabel, value: item.solution },
                { label: labels.impactLabel, value: item.impact },
              ] as const
            ).map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-semibold text-blue-400 mb-1 uppercase tracking-wider">{label}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLang();
  const [ref, visible] = useReveal(0.05);

  return (
    <section id="projects" className="py-24" style={{ backgroundColor: "#050d1a" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-badge">{t.projects.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            {t.projects.heading}
          </h2>
          <div className="section-divider" />
          <p className="text-slate-500 mt-4 text-sm">{t.projects.sub}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
          {t.projects.items.map((item, i) => (
            <div
              key={item.id}
              style={{
                opacity: 0,
                animation: visible ? `scaleIn 0.55s cubic-bezier(0.23,1,0.32,1) ${i * 0.06}s both` : "none",
              }}
            >
              <CaseStudy item={item} labels={{
                problemLabel: t.projects.problemLabel,
                architectureLabel: t.projects.architectureLabel,
                roleLabel: t.projects.roleLabel,
                challengesLabel: t.projects.challengesLabel,
                solutionLabel: t.projects.solutionLabel,
                impactLabel: t.projects.impactLabel,
                caseStudyLabel: t.projects.caseStudyLabel,
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
