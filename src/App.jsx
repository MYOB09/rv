import AboutPage from "./Pages/AboutPage";
import FeaturePage from "./Pages/FeaturePage";
import HomePage from "./Pages/HomePage";

import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import PricingPage from "./Pages/PricingPage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/features" element={<FeaturePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
