import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "José Serrano | Consultor Senior TI · Full Stack · Security · AI",
  description:
    "Consultor Senior TI con 20+ años transformando retos empresariales en soluciones tecnológicas de alto impacto. Full Stack Developer, Security Expert y AI Engineer en Panamá.",
  keywords: [
    "Consultor TI Panamá", "Full Stack Developer", "Security Expert",
    "Laravel", "FastAPI", "React", "Kotlin", "Ansible", "Jenkins", "RabbitMQ",
    "SAP", "Docker", "AI Engineer", "Gemini AI",
  ],
  authors: [{ name: "José Serrano" }],
  openGraph: {
    title: "José Serrano | Consultor Senior TI",
    description: "20+ años entregando resultados en proyectos enterprise. Full Stack · Security · AI · DevOps.",
    type: "website",
    locale: "es_PA",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Reading headers() makes Next.js aware of x-nonce set by middleware,
  // so it injects the correct nonce into its own generated scripts (__NEXT_DATA__, hydration).
  await headers();

  return (
    <html lang="es" className="h-full scroll-smooth">
      <body className={`${inter.className} min-h-full`}>{children}</body>
    </html>
  );
}
