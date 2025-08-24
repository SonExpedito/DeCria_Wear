// app/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importando arquivos de tradução
import pt from "@/locales/pt.json";
import en from "@/locales/en.json";

const resources = {
  pt: { translation: pt },
  en: { translation: en },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "pt",
  fallbackLng: "pt",
  resources,
  interpolation: { escapeValue: false },
});

export default i18n;
