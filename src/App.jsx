import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@fontsource/metropolis";
import "@fontsource/metropolis/400.css";
import "@fontsource/metropolis/500.css";
import "@fontsource/metropolis/600.css";
import "@fontsource/metropolis/700.css";
import "@fontsource/metropolis/800.css";
import "@fontsource/metropolis/900.css";

import MainPage from "./components/MainPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ChiSiamoPage from "./components/ChiSiamoPage";
import CorsiPage from "./components/CorsiPage";
import ContattiPage from "./components/ContattiPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/chi-siamo" element={<ChiSiamoPage />} />
          <Route path="/corsi" element={<CorsiPage />} />
          <Route path="/contatti" element={<ContattiPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
