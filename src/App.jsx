import React from 'react';

import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

import Nav from './components/Nav';

export default function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Nav />
    </div>


  )
}
