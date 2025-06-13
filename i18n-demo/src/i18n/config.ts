import i18n, { init } from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    saveMissing: true,
    backend: {
            loadPath: '/locales/{{lng}}/translation.json',
        },
    interpolation: {
      skipOnVariables: false,
      escapeValue: false,
      format: function(value, format, lng) {
        if (format === 'currency') {
          return new Intl.NumberFormat(lng, {
            style: 'currency',
            currency: lng === 'en' ? 'USD' : lng === 'es' ? 'EUR' : 'EUR'
          }).format(value);
        }
        if (format === 'datetime') {
          return new Intl.DateTimeFormat(lng, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }).format(value);
        }
        if (format === 'number') {
          return new Intl.NumberFormat(lng).format(value);
        }
        if (format === 'relative') {
          const diff = Math.floor((Date.now() - value) / 1000); // seconds ago
          const rtf = new Intl.RelativeTimeFormat(lng, { numeric: 'auto' });
          if (diff < 60) return rtf.format(-diff, 'seconds');
          if (diff < 3600) return rtf.format(-Math.floor(diff / 60), 'minutes');
          if (diff < 86400) return rtf.format(-Math.floor(diff / 3600), 'hours');
          return rtf.format(-Math.floor(diff / 86400), 'days');
        }

        

        return value;
      }
    }
  });

export default i18n;