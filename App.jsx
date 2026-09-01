import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./component/Nav";
import Home from "./pages/Home";
import About from "./pages/about";
import UrbanRunoff from "./pages/Urban";
import IndustrialWaste from "./pages/IndustrialWaste";
import SewageLeakage from "./pages/SewageLeakage";



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        
        <Route path="/home" element={<Home />} />
    
        <Route path="/urban-runoff" element={<UrbanRunoff />} />
        <Route path="/industrial-waste" element={<IndustrialWaste />} />
        <Route path="/sewage-leakage" element={<SewageLeakage />} />
      </Routes>
    </Router>
  );
}

export default App;