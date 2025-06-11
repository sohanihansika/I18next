import { useTranslation } from "react-i18next";
import './Pages.css'; 
const FormattingPage = () => {
  const { t } = useTranslation();
  const currentDate = new Date();
  const price = 1234.56;
  
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
            {t('formatting.currency.example', { price: price })}
          </p>
        </div>
        
        <div className="formatting-section">
          <h3 className="formatting-heading">{t('formatting.number.title')}</h3>
          <p className="formatting-text">
            {t('formatting.number.example', { number: 1234567.89 })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormattingPage;
