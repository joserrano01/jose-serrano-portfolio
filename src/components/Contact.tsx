"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

const LINKEDIN = "https://www.linkedin.com/in/jose-serrano-21406650/";
const WHATSAPP = "https://wa.me/50764300121";

export default function Contact() {
  const { t, lang } = useLang();
  const { contact } = t;

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="site-container contact-layout">
        <div>
          <p className="eyebrow">{contact.badge}</p>
          <h2 id="contact-title">{contact.heading}</h2>
          <p className="contact-intro">{contact.sub}</p>
        </div>

        <div className="contact-actions">
          <a className="button button-primary" href="mailto:joseserrano01@gmail.com">
            {contact.cta.email}
            <span aria-hidden="true">→</span>
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
            {contact.cta.linkedin} ↗
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
            {contact.cta.whatsapp} ↗
          </a>
          <Link href={`/cv/${lang}`}>{contact.cta.resume} ↗</Link>
        </div>

        <address className="contact-details">
          <div>
            <span>{contact.emailLabel}</span>
            <a href="mailto:joseserrano01@gmail.com">joseserrano01@gmail.com</a>
          </div>
          <div>
            <span>{contact.whatsappLabel}</span>
            <a href={WHATSAPP}>+507 6430-0121</a>
          </div>
          <div>
            <span>{contact.locationLabel}</span>
            <p>{contact.locationValue}</p>
          </div>
        </address>
      </div>
    </section>
  );
}
