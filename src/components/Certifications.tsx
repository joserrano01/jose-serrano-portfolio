"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLang } from "@/context/LangContext";

export default function Certifications() {
  const { t } = useLang();
  const [leftRef, leftVisible] = useReveal(0.1);
  const [rightRef, rightVisible] = useReveal(0.1);
  const c = t.certifications;

  return (
    <section id="certifications" className="py-24" style={{ backgroundColor: "#0a1628" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-badge">{c.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            {c.heading}
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Academic + Certs */}
          <div ref={leftRef}>
            <h3 className="text-base font-semibold text-blue-400 mb-5 flex items-center gap-2">
              <span aria-hidden>📚</span> {c.academicTitle}
            </h3>
            <div className="space-y-4 mb-8">
              {c.education.map((ed, i) => (
                <div
                  key={ed.degree}
                  className="rounded-xl p-4 card-hover flex gap-4"
                  style={{
                    background: "rgba(10,22,40,0.7)",
                    border: "1px solid rgba(59,130,246,0.12)",
                    opacity: 0,
                    animation: leftVisible ? `slideInLeft 0.6s ease ${i * 0.12}s both` : "none",
                  }}
                >
                  <div>
                    <span className="text-xs text-blue-400 font-semibold">{ed.year}</span>
                    <h4 className="text-white font-semibold text-sm mt-0.5 leading-snug">{ed.degree}</h4>
                    <p className="text-slate-400 text-xs mt-1">{ed.institution}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-base font-semibold text-blue-400 mb-5 flex items-center gap-2">
              <span aria-hidden>🏆</span> {c.certsTitle}
            </h3>
            <div className="space-y-3">
              {c.certs.map((cert, i) => (
                <div
                  key={cert.name}
                  className="rounded-xl p-4 flex items-center gap-3 card-hover"
                  style={{
                    background: "rgba(10,22,40,0.7)",
                    border: "1px solid rgba(59,130,246,0.12)",
                    opacity: 0,
                    animation: leftVisible ? `slideInLeft 0.6s ease ${(c.education.length + i) * 0.1}s both` : "none",
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{cert.name}</p>
                    <p className="text-slate-500 text-xs">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Upcoming + Languages */}
          <div ref={rightRef}>
            <h3 className="text-base font-semibold text-blue-400 mb-5 flex items-center gap-2">
              <span aria-hidden>🔮</span> {c.upcomingTitle}
            </h3>
            <div className="space-y-3 mb-8">
              {c.upcoming.map((item, i) => (
                <div
                  key={item.name}
                  className="rounded-xl p-4 flex items-center justify-between card-hover"
                  style={{
                    background: "rgba(10,22,40,0.7)",
                    border: "1px solid rgba(59,130,246,0.08)",
                    opacity: 0,
                    animation: rightVisible ? `slideInRight 0.6s ease ${i * 0.1}s both` : "none",
                  }}
                >
                  <p className="text-slate-300 text-sm">{item.name}</p>
                  <span
                    className="text-xs px-2 py-0.5 rounded border"
                    style={{ background: "rgba(251,191,36,0.08)", color: "#fbbf24", borderColor: "rgba(251,191,36,0.2)" }}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            <h3 className="text-base font-semibold text-blue-400 mb-5 flex items-center gap-2">
              <span aria-hidden>🌐</span> {c.languagesTitle}
            </h3>
            <div className="space-y-3">
              {c.languages.map((l, i) => (
                <div
                  key={l.lang}
                  className="rounded-xl p-4 flex items-center justify-between"
                  style={{
                    background: "rgba(10,22,40,0.7)",
                    border: "1px solid rgba(59,130,246,0.08)",
                    opacity: 0,
                    animation: rightVisible ? `slideInRight 0.6s ease ${(c.upcoming.length + i) * 0.1}s both` : "none",
                  }}
                >
                  <span className="text-white text-sm font-semibold">{l.lang}</span>
                  <span className="text-blue-400 text-xs font-medium">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
