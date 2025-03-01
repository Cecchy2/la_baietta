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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
