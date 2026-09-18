"use client";

import { useEffect } from "react";
import { ResumeDocument } from "@/app/cv/page";
import { useLang } from "@/context/LangContext";
import type { Lang } from "@/lib/translations";

export default function LocalizedResume({ lang }: { lang: Lang }) {
  const { setLang } = useLang();

  useEffect(() => {
    setLang(lang);
  }, [lang, setLang]);

  return <ResumeDocument forcedLang={lang} />;
}
