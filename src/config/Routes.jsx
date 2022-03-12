import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";

import Catalog from "../pages/Catalog.jsx";
import Detail from "../pages/detail/Detail.jsx";
import Home from "../pages/Home.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category/:id" element={<Detail />} />
        <Route path="/:category" element={<Catalog />} />
        <Route path=":category/search/:keyword" element={<Catalog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
