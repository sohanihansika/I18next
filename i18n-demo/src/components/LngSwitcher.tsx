import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";


export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

    const [lngs, setLngs] = useState<Record<string, { nativeName: string }>>({});
  
    useEffect(() => {
      i18n.services.backendConnector.backend.getLanguages((err: unknown, lngs: any) => {
        const simplifiedLngs = Object.fromEntries(
          Object.entries(lngs).map(([key]) => [
            key,
            {
              nativeName:
                {
                  en: "English",
                  es: "Español",
                  fr: "Français",
                  ar: "العربية",
                }[key] ||lngs[key].nativeName|| key.toUpperCase(),
            },
          ])
        );
        setLngs(simplifiedLngs);
      });
    }, [i18n]);


  return (
    <div className="mb-6">
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="border px-2 py-1 rounded"
      >
        {Object.keys(lngs).map((lng) => (
          <option key={lng} value={lng}>
            {lngs[lng].nativeName}
          </option>
        ))}
        {/* <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="ar">Arabic</option> */}
      </select>
    </div>
  );
}
