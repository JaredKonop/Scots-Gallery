import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "../src/pages/Home";
import Resume from "../src/pages/Resume";
import ContactMe from "../src/pages/ContactMe";
import Work from "../src/pages/Work";
import Footer from "./components/Footer";
// import Resume from "../src/pages/Resume";

import "../src/styles/navbar.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
