import { useTranslation } from "react-i18next";
import './Pages.css';

const NestingPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="page-container">
      <h1 className="page-title">{t('nesting.title')}</h1>

      <div className="card">
        <div className="section">
          <h3 className="section-title">{t('nesting.user.title')}</h3>
          <p className="text">{t('nesting.user.profile.name')}: John Doe</p>
          <p className="text">{t('nesting.user.profile.email')}: john@example.com</p>
          <p className="text">{t('nesting.user.profile.role')}: {t('nesting.user.profile.roles.admin')}</p>
        </div>

        <div className="section">
          <h3 className="section-title">{t('nesting.navigation.title')}</h3>
          <p className="text">• {t('nesting.navigation.menu.home')}</p>
          <p className="text">• {t('nesting.navigation.menu.about')}</p>
          <p className="text">• {t('nesting.navigation.menu.contact')}</p>
        </div>
      </div>
    </div>
  );
};

export default NestingPage;
