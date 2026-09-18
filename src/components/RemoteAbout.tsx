"use client";

import { useLang } from "@/context/LangContext";

export default function RemoteAbout() {
  const { t } = useLang();
  const { about } = t;

  return (
    <section id="about" className="section section-muted" aria-labelledby="about-title">
      <div className="site-container about-layout">
        <div className="section-intro sticky-intro">
          <p className="eyebrow">{about.badge}</p>
          <h2 id="about-title">{about.heading}</h2>
          <div className="about-location">
            <p>{about.location}</p>
            <p>{about.timezone}</p>
          </div>
        </div>

        <div className="about-copy">
          <p>{about.bio}</p>
          <p>{about.bioSecondary}</p>

          <div className="about-details">
            <div>
              <h3>{about.openToTitle}</h3>
              <p>{about.openTo.join(" · ")}</p>
            </div>
            <div>
              <h3>{about.rolesTitle}</h3>
              <ul>
                {about.roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
