import './i18n'
import './App.css';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      <LanguageSwitcher />
      <h1 className="app-title">{t('welcome')}</h1>
      <p className="app-description">{t('description')}</p>
      
    </div>
  );
}

export default App;
