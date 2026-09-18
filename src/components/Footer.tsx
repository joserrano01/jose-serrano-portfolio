"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function Footer() {
  const { t, lang } = useLang();

  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        <div>
          <p className="footer-name">José Serrano</p>
          <p>{t.footer.role}</p>
        </div>
        <div className="footer-links">
          <a href="mailto:joseserrano01@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/jose-serrano-21406650/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <Link href={`/cv/${lang}`}>{t.hero.cta.resume}</Link>
        </div>
        <p className="footer-meta">
          © {new Date().getFullYear()} · {t.footer.location}
        </p>
      </div>
    </footer>
  );
}
