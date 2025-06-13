import { useTranslation } from "react-i18next";
import './Pages.css';

const NestingPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="page-container">
      <h1 className="page-title">{t('nesting.title')}</h1>
      

      <div className="card">
         <div className="section">
          <h3 className="section-title">{t('nesting.basic.title')}</h3>
          <p className="text"> {t('nesting.basic.nesting1')}</p>
        </div>
        <div className="section">
          <h3 className="section-title">{t('nesting.option.title')}</h3>
          <p className="text">{t('nesting.option.girlsAndBoys', {girls: 3, boys: 2})}</p>
        </div>
        <div className="section">
          <h3 className="section-title">{t('nesting.interpolate.title')}</h3>
          <p className="text">{t('nesting.interpolate.key2', {val: '$t(nesting.interpolate.key1)'})}</p>
        </div>

       
      </div>
    </div>
  );
};

export default NestingPage;
