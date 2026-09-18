"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function Hero() {
  const { t, lang } = useLang();
  const { hero } = t;

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <p className="availability-line">
            <span aria-hidden="true" />
            {hero.badge}
          </p>
          <p className="hero-name">José Serrano</p>
          <h1 id="hero-title">{hero.title}</h1>
          <p className="hero-specialization">{hero.subtitle}</p>
          <p className="hero-statement">{hero.tagline}</p>

          <div className="hero-primary-actions" aria-label="Portfolio sections">
            <a className="button button-primary" href="#experience">
              {hero.cta.experience}
              <span aria-hidden="true">→</span>
            </a>
            <a className="button button-secondary" href="#projects">
              {hero.cta.projects}
            </a>
          </div>

          <div className="hero-secondary-actions">
            <Link href={`/cv/${lang}`}>{hero.cta.resume}</Link>
            <a href="#contact">{hero.cta.contact}</a>
          </div>
        </div>

        <aside className="hero-aside" aria-label={hero.focusLabel}>
          <p className="mono-label">{hero.focusLabel}</p>
          <ol>
            {hero.focusItems.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>
          <div className="hero-location">
            <span>Panama</span>
            <span aria-hidden="true">·</span>
            <span>Remote US / LATAM</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
