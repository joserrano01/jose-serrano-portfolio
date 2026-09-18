"use client";

import { useLang } from "@/context/LangContext";

export default function CareerTimeline() {
  const { t } = useLang();

  return (
    <section id="career" className="section section-muted" aria-labelledby="career-title">
      <div className="site-container">
        <div className="section-intro compact-intro">
          <p className="eyebrow">{t.career.badge}</p>
          <h2 id="career-title">{t.career.heading}</h2>
          <p>{t.career.sub}</p>
        </div>

        <ol className="career-timeline">
          {t.career.steps.map((step) => (
            <li key={step.year}>
              <div className="career-dot" aria-hidden="true" />
              <time>{step.year}</time>
              <h3>{step.label}</h3>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
