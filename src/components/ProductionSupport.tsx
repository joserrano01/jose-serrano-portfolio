"use client";

import { useLang } from "@/context/LangContext";

export default function ProductionSupport() {
  const { t } = useLang();

  return (
    <section id="support" className="section section-muted" aria-labelledby="support-title">
      <div className="site-container support-layout">
        <div className="section-intro sticky-intro">
          <p className="eyebrow">{t.support.badge}</p>
          <h2 id="support-title">{t.support.heading}</h2>
          <p>{t.support.tagline}</p>
        </div>

        <div className="capability-list">
          {t.support.areas.map((area, index) => (
            <article key={area.title}>
              <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{area.title}</h3>
                <p>{area.items.join(" · ")}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
