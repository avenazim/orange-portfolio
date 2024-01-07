import React, { useState, Suspense } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/index.js";

function App() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.resolvedLanguage);

  const handleLanguageChange = (e) => {
    setLang(e.target.value);
    let loc = "https://avenazim.github.io/orange-portfolio";
    window.location.replace(loc + "?lng=" + e.target.value);
  };

  return (
    <Suspense fallback="loading">
      <div className="App">
        <Home lang={lang} handleLanguageChange={handleLanguageChange}/>
      </div>
    </Suspense>
  );
}

export default App;
