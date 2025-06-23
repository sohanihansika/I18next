import i18n, { init } from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-locize-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { locizePlugin} from "locize";

const isProduction = import.meta.env.NODE_ENV === "production";

const locizeOptions = {
  projectId: import.meta.env.VITE_LOCIZE_PROJECT_ID ,
  apiKey: import.meta.env.VITE_LOCIZE_API_KEY,
  referenceLng: "en",
}

i18n
  .use(Backend)
  .use(locizePlugin)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // lng: "en",
    fallbackLng: "en",
    debug: true,
    saveMissing: !isProduction, //shouldn't use saveMissing in production 
    backend: locizeOptions,
    // backend: {
    //   loadPath: "/locales/{{lng}}/translation.json",
    // },
    interpolation: {
      skipOnVariables: false,
      escapeValue: false,  //Normally, we want `escapeValue: true` as it ensures that i18next escapes any code in
    // translation messages, safeguarding against XSS (cross-site scripting) attacks. However,
    // React does this escaping itself, so we turn it off in i18next.
      format: function (value, format, lng) {
        if (format === "currency") {
          return new Intl.NumberFormat(lng, {
            style: "currency",
            currency: lng === "en" ? "USD" : lng === "es" ? "EUR" : "EUR",
          }).format(value);
        }
        if (format === "datetime") {
          return new Intl.DateTimeFormat(lng, {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(value);
        }
        if (format === "number") {
          return new Intl.NumberFormat(lng).format(value);
        }
        if (format === "relative") {
          const diff = Math.floor((Date.now() - value) / 1000); // seconds ago
          const rtf = new Intl.RelativeTimeFormat(lng, { numeric: "auto" });
          if (diff < 60) return rtf.format(-diff, "seconds");
          if (diff < 3600) return rtf.format(-Math.floor(diff / 60), "minutes");
          if (diff < 86400)
            return rtf.format(-Math.floor(diff / 3600), "hours");
          return rtf.format(-Math.floor(diff / 86400), "days");
        }

        return value;
      },
    },
  });

export default i18n;
