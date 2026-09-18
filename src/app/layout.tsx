import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "José Serrano | Senior Application & Production Support Engineer",
  description:
    "Senior Application & Production Support Engineer with 20+ years supporting business-critical enterprise systems, integrations, and production environments. Backend · Cloud · DevOps · Security · AI Automation. Open to Remote Opportunities — US / LATAM.",
  keywords: [
    "Senior Application Support Engineer",
    "Production Support Engineer",
    "Backend Engineer",
    "DevOps Engineer",
    "Cloud Support Engineer",
    "Technical Support Engineer",
    "FastAPI",
    "Laravel",
    "Linux",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "SAP",
    "Enterprise Integration",
    "AI Automation",
    "Remote Work",
    "Panama",
  ],
  authors: [{ name: "José Serrano" }],
  openGraph: {
    title: "José Serrano | Senior Application & Production Support Engineer",
    description:
      "20+ years supporting business-critical enterprise systems. Backend · Cloud · DevOps · Security · AI. Open to Remote — US / LATAM.",
    type: "website",
    locale: "en_US",
    url: "https://jserrano.diasofonline.com",
    siteName: "José Serrano — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "José Serrano | Senior Application & Production Support Engineer",
    description:
      "20+ years supporting business-critical enterprise systems. Backend · Cloud · DevOps · Security · AI. Open to Remote — US / LATAM.",
  },
  alternates: {
    canonical: "https://jserrano.diasofonline.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://jserrano.diasofonline.com/#person",
      name: "José Serrano",
      jobTitle: "Senior Application & Production Support Engineer",
      description:
        "Enterprise technology professional with 20+ years of experience in production systems, backend development, integrations, infrastructure, DevOps, security, and AI.",
      url: "https://jserrano.diasofonline.com",
      email: "joseserrano01@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PA",
        addressLocality: "Panama City",
      },
      knowsAbout: [
        "Application Support",
        "Production Support",
        "Backend Development",
        "DevOps",
        "Cloud Infrastructure",
        "Cybersecurity",
        "SAP",
        "Enterprise Integration",
        "AI Automation",
      ],
      sameAs: ["https://www.linkedin.com/in/jose-serrano-21406650/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://jserrano.diasofonline.com/#website",
      url: "https://jserrano.diasofonline.com",
      name: "José Serrano — Senior Application & Production Support Engineer",
      author: { "@id": "https://jserrano.diasofonline.com/#person" },
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  await headers();

  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${inter.className} min-h-full`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
