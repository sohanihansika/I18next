import { useTranslation } from "react-i18next";
import './Pages.css';

const FormattingPage = () => {
  const { t } = useTranslation();
  const currentDate = new Date();
  const price = 1234.56;
  const largeNumber = 1234567.89;
  const pastDate = new Date(Date.now() - 5 * 60  * 1000); // 5 hours ago
  // const languages = ['English', 'Spanish', 'French'];

  return (
    <div className="formatting-container">
      <h1 className="formatting-title">{t('formatting.title')}</h1>
      <div className="formatting-card">
        
        <div className="formatting-section">
          <h3 className="formatting-heading">{t('formatting.date.title')}</h3>
          <p className="formatting-text">
            {t('formatting.date.example', { date: currentDate })}
          </p>
        </div>

        <div className="formatting-section">
          <h3 className="formatting-heading">{t('formatting.currency.title')}</h3>
          <p className="formatting-text">
            {t('formatting.currency.example', { price })}
          </p>
        </div>

        <div className="formatting-section">
          <h3 className="formatting-heading">{t('formatting.number.title')}</h3>
          <p className="formatting-text">
            {t('formatting.number.example', { number: largeNumber })}
          </p>
        </div>

        <div className="formatting-section">
          <h3 className="formatting-heading">{t('formatting.relative.title')}</h3>
          <p className="formatting-text">
            {t('formatting.relative.example', { timestamp: pastDate })}
          </p>
        </div>

        {/* <div className="formatting-section">
          <h3 className="formatting-heading">{t('formatting.list.title')}</h3>
          <p className="formatting-text">
            {t('formatting.list.example', { items: languages })}
          </p>
        </div> */}
        
      </div>
    </div>
  );
};

export default FormattingPage;
