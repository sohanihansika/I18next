import { useTranslation } from "react-i18next";
import "./Pages.css";
const FallbackPage = () => {
  const { t } = useTranslation();

  return (
    <div className="formatting-container">
      <h1 className="formatting-title">{t("fallback.title")}</h1>
      <div className="formatting-card">
        <div className="formatting-section">
          <h3 className="formatting-heading">{t("fallback.missingKey")}</h3>
        </div>
      </div>
    </div>
  );
};

export default FallbackPage;
