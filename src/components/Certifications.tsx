"use client";

import { useLang } from "@/context/LangContext";

export default function Certifications() {
  const { t } = useLang();
  const { certifications } = t;

  return (
    <section id="certifications" className="section" aria-labelledby="certifications-title">
      <div className="site-container">
        <div className="section-intro compact-intro">
          <p className="eyebrow">{certifications.badge}</p>
          <h2 id="certifications-title">{certifications.heading}</h2>
        </div>

        <div className="credentials-grid">
          <section>
            <h3>{certifications.academicTitle}</h3>
            <ul>
              {certifications.education.map((item) => (
                <li key={item.degree}>
                  <time>{item.year}</time>
                  <strong>{item.degree}</strong>
                  <span>{item.institution}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3>{certifications.certsTitle}</h3>
            <ul>
              {certifications.certs.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.issuer}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="learning-column">
            <h3>{certifications.upcomingTitle}</h3>
            <ul>
              {certifications.upcoming.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.status}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="languages-row">
          <p className="mono-label">{certifications.languagesTitle}</p>
          {certifications.languages.map((language) => (
            <p key={language.lang}>
              <strong>{language.lang}</strong>
              <span>{language.level}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
