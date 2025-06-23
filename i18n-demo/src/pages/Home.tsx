import { Trans, useTranslation } from "react-i18next";
import "./Pages.css";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">{t("home.welcome")}</h1>
        <h2>{t("newKey1", "This segment should be automatically added and translated")}</h2>
        <Trans i18nKey="home.description">
          <p className="home-description">
            Explore the powerful features of <b>react-i18next</b>{" "}
            internationalization library. Click on any feature in the sidebar to
            see live examples and learn how to implement multilingual support in
            your React applications.
          </p>
        </Trans>
      </div>

      <div className="features-grid">
        {[
          { key: "essentials" },
          { key: "interpolation" },
          { key: "formatting" },
          { key: "plurals" },
          { key: "nesting" },
          { key: "context" },
          { key: "fallback" },
        ].map((feature) => (
          <div key={feature.key} className="feature-card">
            <h3 className="feature-title">
              {t(`features.${feature.key}.title`)}
            </h3>
            <p className="feature-description">
              {t(`features.${feature.key}.description`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
