"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLang } from "@/context/LangContext";

const LINKEDIN = "https://www.linkedin.com/in/jose-serrano-21406650/";

export default function RemoteAbout() {
  const { t } = useLang();
  const [ref, visible] = useReveal(0.1);
  const a = t.about;

  return (
    <section id="about" className="py-24 bg-grid" style={{ backgroundColor: "#050d1a" }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-badge">{a.badge}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            {a.heading}
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-8" ref={ref}>
          {/* Bio + availability */}
          <div
            className="rounded-2xl p-6 card-hover"
            style={{
              background: "rgba(12,30,56,0.65)",
              border: "1px solid rgba(59,130,246,0.1)",
              backdropFilter: "blur(10px)",
              opacity: 0,
              animation: visible ? "slideInLeft 0.65s ease both" : "none",
            }}
          >
            <p className="text-slate-300 text-sm leading-relaxed mb-5">{a.bio}</p>

            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
              <span aria-hidden>📍</span> {a.location}
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-5">
              <span aria-hidden>🕐</span> {a.timezone}
            </div>

            {/* Open to */}
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">{a.openToTitle}</p>
            <div className="flex flex-wrap gap-2">
              {a.openTo.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs rounded-full font-medium"
                  style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", color: "#86efac" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Target roles */}
          <div
            className="rounded-2xl p-6 card-hover"
            style={{
              background: "rgba(12,30,56,0.65)",
              border: "1px solid rgba(59,130,246,0.1)",
              backdropFilter: "blur(10px)",
              opacity: 0,
              animation: visible ? "slideInRight 0.65s ease both" : "none",
            }}
          >
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-4">{a.rolesTitle}</p>
            <ul className="space-y-2.5">
              {a.roles.map((role) => (
                <li key={role} className="flex items-center gap-2 text-slate-300 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  {role}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t" style={{ borderColor: "rgba(59,130,246,0.1)" }}>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
