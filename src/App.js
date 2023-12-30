import Distance from "./Components/Distance";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import ServicePage from "./Components/ServicePage";
import AboutUsPage from "./Components/AboutUsPage";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <Router>
      <nav>
        {/* Links to navigate between pages */}
        <Link to="/UrgentTrackProject">主頁 </Link>
        <Link to="/service">專科服務 </Link>
        <Link to="/about-us">關於我們 </Link>
      </nav>

      <Routes>
        <Route path="/service" element={<ServicePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/UrgentTrackProject" element={<Distance />} />
      </Routes>
    </Router>
  );
}

export default App;
