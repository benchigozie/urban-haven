import React from 'react';

import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";

import Nav from './components/Nav';
import ScrollToTop from './components/scrolltotop';

export default function App() {

  return (
    <div>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Nav />
    </div>


  )
}
