import { useTranslation } from "react-i18next";
import './Pages.css'; 

const EssentialsPage = () => {
  const { t } = useTranslation();

  return (
    <div className="essentials-container">
      <h1 className="essentials-title">{t('essentials.title')}</h1>
      <div className="essentials-card">
        <div className="essentials-section">
          <p className="essentials-label">
            <strong>{t('essentials.basic.simple')}:</strong>
          </p>
          <p className="essentials-code">{t('essentials.basic.example')}</p>
        </div>

        <div className="essentials-section">
          <p className="essentials-label">
            <strong>{t('essentials.basic.withVariables')}:</strong>
          </p>
          <p className="essentials-code">
            {t('essentials.basic.variableExample', { name: 'John', age: 25 })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EssentialsPage;
