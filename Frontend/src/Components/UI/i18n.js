import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 👇 JSON files ko import karo
import enTranslation from "../../assets/locals/en/translation.json";
import hiTranslation from "../../assets/locals/hi/translation.json";
import wpTranslation from "../../assets/locals/wp/translation.json";
import paTranslation from "../../assets/locals/pa/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    hi: { translation: hiTranslation },
    wp: { translation: wpTranslation },
    pa: { translation: paTranslation },
  },
  lng: "hi", // default language
  fallbackLng: "hi",
  interpolation: { escapeValue: false },
});

export default i18n;