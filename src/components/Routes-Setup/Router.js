import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";

import Login from "../../pages/Login/Login";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Contact from "../../pages/Home/Contact/Contact";

const RoutesIndex = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default RoutesIndex;
