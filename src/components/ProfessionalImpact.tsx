"use client";

import { useLang } from "@/context/LangContext";

export default function ProfessionalImpact() {
  const { t } = useLang();

  return (
    <section className="metrics-section" aria-labelledby="impact-title">
      <div className="site-container">
        <div className="section-intro compact-intro">
          <p className="eyebrow">{t.impact.badge}</p>
          <h2 id="impact-title">{t.impact.heading}</h2>
        </div>
        <dl className="metrics-list">
          {t.impact.metrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
