import './i18n'
import './App.css';
import { useTranslation, Trans } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <LanguageSwitcher />
      <h1 className="app-title">{t('welcome')}</h1>
      <Trans i18nKey="description">
        <p className="app-description">This is a simple <b>i18n</b> demo using react-i18next.</p>
      </Trans>
      <h3>{t('new.key', 'This will be added automatically')}</h3>
      
      
    </div>
  );
}

export default App;
