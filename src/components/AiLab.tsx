"use client";

import { useLang } from "@/context/LangContext";

export default function AiLab() {
  const { t } = useLang();
  const { aiLab } = t;
  const groups = [
    {
      label: aiLab.developmentGroup,
      status: aiLab.inDevelopment,
      items: aiLab.items.filter((item) => item.status === "in-development"),
    },
    {
      label: aiLab.researchGroup,
      status: aiLab.comingSoon,
      items: aiLab.items.filter((item) => item.status === "coming-soon"),
    },
  ];

  return (
    <section id="ai-lab" className="section" aria-labelledby="ai-title">
      <div className="site-container">
        <div className="section-intro split-intro">
          <div>
            <p className="eyebrow">{aiLab.badge}</p>
            <h2 id="ai-title">{aiLab.heading}</h2>
          </div>
          <p>{aiLab.sub}</p>
        </div>

        <div className="ai-groups">
          {groups.map((group, groupIndex) => (
            <section className="ai-group" key={group.label} aria-labelledby={`ai-group-${groupIndex}`}>
              <h3 id={`ai-group-${groupIndex}`} className="mono-label">
                {group.label}
              </h3>
              <div className="ai-list">
                {group.items.map((item) => {
                  const architectureFlow =
                    "architectureFlow" in item ? item.architectureFlow : undefined;
                  return (
                    <article key={item.id} className="ai-entry">
                      <div className="ai-entry-heading">
                        <h4>{item.title}</h4>
                        <span>{group.status}</span>
                      </div>
                      <dl>
                        <div>
                          <dt>{aiLab.problemLabel}</dt>
                          <dd>{item.description}</dd>
                        </div>
                        <div>
                          <dt>{aiLab.architectureLabel}</dt>
                          <dd className="tech-line">
                            {architectureFlow
                              ? architectureFlow.join(" → ")
                              : item.tech.join(" · ")}
                          </dd>
                        </div>
                        <div>
                          <dt>{aiLab.exploringLabel}</dt>
                          <dd>{item.exploring}</dd>
                        </div>
                      </dl>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
