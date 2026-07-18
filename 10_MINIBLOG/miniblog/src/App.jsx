import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//CSS
import "./App.css";

//Components
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Registro from "./pages/Registro/Registro";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/registro" element={<Registro />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
