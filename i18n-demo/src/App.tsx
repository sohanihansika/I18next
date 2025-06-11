import Sidebar from "./components/Sidebar";
import { useState, Suspense } from "react";
import LanguageSwitcher from "./components/LngSwitcher";
import ContextPage from "./pages/Context";
import EssentialsPage from "./pages/Essentials";
import FormattingPage from "./pages/Formatting";
import HomePage from "./pages/Home";
import InterpolationPage from "./pages/Interpolation";
import NestingPage from "./pages/Nesting";
import PluralsPage from "./pages/Plural";

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'essentials': return <EssentialsPage />;
      case 'interpolation': return <InterpolationPage />;
      case 'formatting': return <FormattingPage />;
      case 'plurals': return <PluralsPage />;
      case 'nesting': return <NestingPage />;
      case 'context': return <ContextPage />;
      default: return <HomePage />;
    }
  };

  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    }>
      <div className="min-h-screen">
        <header>
          <div className="header-inner">
            <div className="header-left">
              <h1 
                className="header-title"
                onClick={() => setCurrentPage('home')}
              >
                React i18next Demo
              </h1>
            </div>
            <div className="header-right">
                <LanguageSwitcher />
            </div>
              
            
          </div>
        </header>

        <div className="flex">
          <Sidebar 
            currentPage={currentPage} 
            onPageChange={setCurrentPage}
          />
          
          <main>
            {renderPage()}
          </main>
        </div>
      </div>
    </Suspense>
  );
};

export default App;
