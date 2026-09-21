import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jserrano.diasofonline.com"),
  title: "José Serrano | Senior Application & Production Support Engineer",
  description:
    "Senior Application & Production Support Engineer with 30+ years supporting business-critical enterprise systems, integrations, and production environments. Available for part-time remote consulting and project-based engagements across US and LATAM.",
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
    "Part-Time Consulting",
    "Technical Consultant",
    "Panama",
  ],
  authors: [{ name: "José Serrano" }],
  creator: "José Serrano",
  category: "technology",
  openGraph: {
    title: "José Serrano | Senior Application & Production Support Engineer",
    description:
      "30+ years supporting business-critical enterprise systems. Available for part-time remote consulting and project-based engagements across US and LATAM.",
    type: "website",
    locale: "en_US",
    url: "https://jserrano.diasofonline.com",
    siteName: "José Serrano — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "José Serrano | Senior Application & Production Support Engineer",
    description:
      "30+ years supporting business-critical enterprise systems. Available for part-time remote consulting and project-based engagements across US and LATAM.",
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
      jobTitle: "Programmer Analyst",
      description:
        "Enterprise technology professional with 30+ years of experience in production systems, backend development, integrations, infrastructure, DevOps, security, and applied AI.",
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
      inLanguage: ["en", "es"],
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-full`}>
        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrg).replace(/</g, "\\u003c"),
          }}
        />
        <script
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var r=t==="light"||t==="dark"?t:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=r;document.documentElement.style.colorScheme=r}catch(e){}})();`,
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
