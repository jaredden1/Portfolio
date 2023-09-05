import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
