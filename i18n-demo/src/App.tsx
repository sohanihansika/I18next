import { useEffect, useState, Suspense } from "react";
import { useTranslation } from "react-i18next";

import Sidebar from "./components/Sidebar";
import LanguageSwitcher from "./components/LngSwitcher";
import ContextPage from "./pages/Context";
import EssentialsPage from "./pages/Essentials";
import FormattingPage from "./pages/Formatting";
import HomePage from "./pages/Home";
import InterpolationPage from "./pages/Interpolation";
import NestingPage from "./pages/Nesting";
import PluralsPage from "./pages/Plural";
import FallbackPage from "./pages/Fallback";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const { t, i18n } = useTranslation();

  // Set the direction and language dynamically
  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const renderPage = () => {
    switch (currentPage) {
      case "essentials":
        return <EssentialsPage />;
      case "interpolation":
        return <InterpolationPage />;
      case "formatting":
        return <FormattingPage />;
      case "plurals":
        return <PluralsPage />;
      case "nesting":
        return <NestingPage />;
      case "context":
        return <ContextPage />;
      case "fallback":
        return <FallbackPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          Loading...
        </div>
      }
    >
      <div className="min-h-screen">
        <header>
          <div className="header-inner">
            <div className="header-left">
              <h1
                className="header-title"
                onClick={() => setCurrentPage("home")}
              >
                {t("header")}
              </h1>
            </div>
            <div className="header-right">
              <LanguageSwitcher />
            </div>
          </div>
        </header>

        <div className="flex">
          <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
          <main>{renderPage()}</main>
        </div>
      </div>
    </Suspense>
  );
};

export default App;
