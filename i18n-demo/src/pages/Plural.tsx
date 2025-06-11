import { useState } from "react";
import { useTranslation } from "react-i18next";
import './Pages.css';

const PluralsPage = () => {
  const { t } = useTranslation();
  const [itemCount, setItemCount] = useState(1);
  
  return (
    <div className="page-container">
      <h1 className="page-title">{t('plurals.title')}</h1>

      <div className="card">
        <div className="input-group">
          <label className="label">{t('plurals.demo.countLabel')}</label>
          <input
            type="number"
            value={itemCount}
            onChange={(e) => setItemCount(parseInt(e.target.value) || 0)}
            className="input"
            min="0"
          />
        </div>

        <div>
          <div className="result-box result-items">
            {t('plurals.demo.items', { count: itemCount })}
          </div>
          <div className="result-box result-messages">
            {t('plurals.demo.messages', { count: itemCount })}
          </div>
          <div className="result-box result-users">
            {t('plurals.demo.users', { count: itemCount })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PluralsPage;
