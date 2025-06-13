import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.tsx";
import "./i18n/config";
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  </StrictMode>
);
