import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Circulars from "../../pages/Dashboard-pages/Circulars/Circulars";
import Company from "../../pages/Dashboard-pages/Company/Company";
import JobPost from "../../pages/Dashboard-pages/JobPost/JobPost";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Loading from "../Shared/Loading/Loading";
const Home = lazy(() => import("../../pages/Home/Home"));
const About = lazy(() => import("../../pages/About/About"));
const Blog = lazy(() => import("../../pages/Blog/Blog"));
const Login = lazy(() => import("../../pages/Login/Login"));
const Register = lazy(() => import("../../pages/Login/Register"));
const Header = lazy(() => import("../Shared/Header/Header"));
const Footer = lazy(() => import("../Shared/Footer/Footer"));
const Contact = lazy(() => import("../../pages/Home/Contact/Contact"));
const DevelopmentTeam = lazy(() =>
  import("../../pages/Development-Team/DevelopmentTeam")
);

const RoutesIndex = () => {
  return (
    <div>
      <Header></Header>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/development-team" element={<DevelopmentTeam />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/loading" element={<Loading />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="jobpost" element={<JobPost></JobPost>}></Route>
            <Route path="circular" element={<Circulars></Circulars>}></Route>
            <Route path="company" element={<Company></Company>}></Route>
          </Route>
          
        </Routes>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default RoutesIndex;
