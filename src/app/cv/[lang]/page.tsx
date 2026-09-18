import { notFound } from "next/navigation";
import LocalizedResume from "@/components/LocalizedResume";
import type { Lang } from "@/lib/translations";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function ResumeByLanguage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "en" && lang !== "es") notFound();
  return <LocalizedResume lang={lang as Lang} />;
}
