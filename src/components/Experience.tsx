"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LangContext";
import { useReveal } from "@/hooks/useReveal";

function JobCard({ job, idx }: { job: { period: string; company: string; location: string; role: string; achievements: readonly string[] }; idx: number }) {
  const [ref, visible] = useReveal(0.2);
  const isLeft = idx % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row gap-8 mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
      style={{
        opacity: 0,
        animation: visible
          ? `${isLeft ? "slideInLeft" : "slideInRight"} 0.7s ease both`
          : "none",
      }}
    >
      <div
        className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 mt-6"
        style={{
          background: "linear-gradient(135deg, #2563eb, #6366f1)",
          borderColor: "#050d1a",
          boxShadow: visible ? "0 0 12px rgba(37,99,235,0.5)" : "none",
          transition: "box-shadow 0.4s ease 0.3s",
        }}
      />

      <div className={`ml-14 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
        <div
          className="rounded-2xl p-6 card-hover"
          style={{
            background: "rgba(12,30,56,0.65)",
            border: "1px solid rgba(59,130,246,0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <span
            className="inline-block px-3 py-1 text-xs rounded-full mb-3 font-medium"
            style={{ background: "rgba(37,99,235,0.15)", color: "#93c5fd", border: "1px solid rgba(59,130,246,0.25)" }}
          >
            {job.period}
          </span>
          <h3 className="text-base font-bold text-white leading-snug">{job.role}</h3>
          <p className="font-semibold text-sm mt-1 mb-0.5" style={{ color: "#60a5fa" }}>{job.company}</p>
          <p className="text-slate-500 text-xs mb-4">{job.location}</p>
          <ul className="space-y-2 text-left">
            {job.achievements.map((a, j) => (
              <li key={j} className="flex gap-2 text-slate-300 text-sm">
                <span className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }}>▸</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { t } = useLang();
  const lineRef = useRef<HTMLDivElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setLineVisible(true); },
      { threshold: 0.05 }
    );
    if (lineRef.current) obs.observe(lineRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 bg-grid" style={{ backgroundColor: "#050d1a" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-badge">{t.experience.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            {t.experience.heading}
          </h2>
          <div className="section-divider" />
        </div>

        <div className="relative" ref={lineRef}>
          <div
            className="absolute left-6 md:left-1/2 top-0 w-0.5 -translate-x-1/2 transition-all duration-[2s] ease-out"
            style={{
              height: lineVisible ? "100%" : "0%",
              background: "linear-gradient(to bottom, #2563eb, #6366f1, #38bdf8)",
            }}
          />
          {t.experience.jobs.map((job, i) => (
            <JobCard key={job.company} job={job} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
