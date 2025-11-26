import { useState } from "react";
import "./App.css";

// 1 - Config react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

function App() {
  return (
    <div className="container-main">
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          {/*Nested route*/}
          <Route path="/products/:id/info" element={<Info />} />
          <Route path="/search" element={<Search />} />
          {/* 404*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
