"use client";
import { createContext, useCallback, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "@/lib/translations";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangCtx>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved === "en" || saved === "es") {
        setLangState(saved);
        document.documentElement.lang = saved;
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
