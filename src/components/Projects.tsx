"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="section section-muted" aria-labelledby="projects-title">
      <div className="site-container">
        <div className="section-intro split-intro">
          <div>
            <p className="eyebrow">{t.projects.badge}</p>
            <h2 id="projects-title">{t.projects.heading}</h2>
          </div>
          <p>{t.projects.sub}</p>
        </div>

        <div className="projects-list">
          {t.projects.items.map((project, index) => (
            <article
              className="project-entry"
              data-priority={index < 3 ? "primary" : "standard"}
              key={project.id}
            >
              <div className="project-index">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{project.category}</p>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p className="project-context">{project.problem}</p>

                <dl className="project-facts">
                  <div>
                    <dt>{t.projects.roleLabel}</dt>
                    <dd>{project.role}</dd>
                  </div>
                  <div>
                    <dt>Stack</dt>
                    <dd className="tech-line">{project.tech.join(" · ")}</dd>
                  </div>
                  <div>
                    <dt>{t.projects.impactLabel}</dt>
                    <dd>{project.impact}</dd>
                  </div>
                </dl>

                <details className="case-study">
                  <summary>{t.ui.viewCaseStudy}</summary>
                  <div className="case-study-grid">
                    <div>
                      <h4>{t.projects.challengesLabel}</h4>
                      <p>{project.challenges}</p>
                    </div>
                    <div>
                      <h4>{t.projects.architectureLabel}</h4>
                      <p>{project.architecture}</p>
                    </div>
                    <div>
                      <h4>{t.projects.solutionLabel}</h4>
                      <p>{project.solution}</p>
                    </div>
                  </div>
                </details>

                {"demoHref" in project && project.demoHref ? (
                  <Link className="button button-primary project-demo-link" href={project.demoHref}>
                    {t.ui.openInteractiveDemo}
                    <span aria-hidden="true">→</span>
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
