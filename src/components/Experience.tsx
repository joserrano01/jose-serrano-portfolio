"use client";

import { useLang } from "@/context/LangContext";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="site-container">
        <div className="section-intro experience-heading">
          <p className="eyebrow">{t.experience.badge}</p>
          <h2 id="experience-title">{t.experience.heading}</h2>
        </div>

        <div className="experience-timeline">
          {t.experience.jobs.map((job) => (
            <article className="experience-entry" key={job.company}>
              <div className="experience-meta">
                <p className="experience-period">{job.period}</p>
                <p>{job.location}</p>
              </div>
              <div className="timeline-marker" aria-hidden="true" />
              <div className="experience-content">
                <p className="company-name">{job.company}</p>
                <h3>{job.role}</h3>
                <ul>
                  {job.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
