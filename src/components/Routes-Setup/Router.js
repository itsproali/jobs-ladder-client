import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
// import Header from "../Shared/Header/Header";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import Login from "../../pages/Login/Login";
import Header2 from "../Shared/Header/Header2";

const RoutesIndex = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <Header2></Header2>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default RoutesIndex;
