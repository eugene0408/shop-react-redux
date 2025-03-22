import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const getDefaultLanguage = () => {
  const browserLanguage = navigator.language || navigator.userLanguage;
  return ["uk", "ru", "uk-UA", "ru-RU"].includes(browserLanguage) ? "uk" : "en";
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "uk"],
    fallbackLng: "en",
    detection: {
      order: ["queryString", "cookie"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

i18n.changeLanguage(getDefaultLanguage());

export default i18n;
