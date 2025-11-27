import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

//Components
import Navbar from "./components/Navbar";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <>
      <div className="container-main">
        <h1>Context</h1>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
