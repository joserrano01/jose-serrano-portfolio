"use client";

import { useLang } from "@/context/LangContext";

export default function CoreExpertise() {
  const { t } = useLang();
  const tiers = [
    { label: t.expertise.levels[0], groups: t.expertise.groups.slice(0, 4) },
    { label: t.expertise.levels[1], groups: t.expertise.groups.slice(4, 6) },
    { label: t.expertise.levels[2], groups: t.expertise.groups.slice(6) },
  ];

  return (
    <section id="expertise" className="section" aria-labelledby="expertise-title">
      <div className="site-container">
        <div className="section-intro split-intro">
          <div>
            <p className="eyebrow">{t.expertise.badge}</p>
            <h2 id="expertise-title">{t.expertise.heading}</h2>
          </div>
          <p>{t.expertise.sub}</p>
        </div>

        <div className="expertise-index">
          {tiers.map((tier, tierIndex) => (
            <div className="expertise-tier" key={tier.label}>
              <p className="mono-label">{tier.label}</p>
              <div>
                {tier.groups.map((group, groupIndex) => (
                  <article key={group.title} className="expertise-row">
                    <span className="row-number">
                      {String(
                        (tierIndex === 0 ? 0 : tierIndex === 1 ? 4 : 6) +
                          groupIndex +
                          1,
                      ).padStart(2, "0")}
                    </span>
                    <h3>{group.title}</h3>
                    <p>{group.items.join(" · ")}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
