import { useState } from "react";
import { useTranslation } from "react-i18next";
import './Pages.css';

const InterpolationPage = () => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  return (
    <div className="page-container">
      <h1 className="page-title">{t('interpolation.title')}</h1>

      <div className="card">
        <div className="form-group">
          <label className="label">{t('interpolation.demo.nameLabel')}</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder={t('interpolation.demo.namePlaceholder')}
          />
        </div>

        <div className="form-group">
          <label className="label">{t('interpolation.demo.ageLabel')}</label>
          <input
            type="number"
            value={userAge}
            onChange={(e) => setUserAge(e.target.value)}
            className="input"
            placeholder={t('interpolation.demo.agePlaceholder')}
          />
        </div>

        <div className="result-box">
          <p className="result-text">
            {userName || userAge
              ? t('interpolation.demo.result', {
                  name: userName || t('interpolation.demo.defaultName'),
                  age: userAge || t('interpolation.demo.defaultAge'),
                })
              : t('interpolation.demo.fillFields')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterpolationPage;
