import HomePage from "./Pages/HomePage";

import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
