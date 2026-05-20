import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "José Serrano | Ing. de Sistemas & Security Expert",
  description:
    "Portfolio de José Serrano — experto en Seguridad Informática, Laravel, FastAPI, React, Kotlin y Linux con más de 20 años de experiencia.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="h-full scroll-smooth">
      <body className={`${inter.className} min-h-full`}>{children}</body>
    </html>
  );
}
