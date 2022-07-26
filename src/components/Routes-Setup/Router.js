import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
const Circulars = lazy(() =>
  import("../../pages/Dashboard-pages/Circulars/Circulars")
);
const Company = lazy(() =>
  import("../../pages/Dashboard-pages/Company/Company")
);
const Employee = lazy(() =>
  import("../../pages/Dashboard-pages/Employee/Employee")
);
const JobPost = lazy(() =>
  import("../../pages/Dashboard-pages/JobPost/JobPost")
);
const Dashboard = lazy(() => import("../../pages/Dashboard/Dashboard"));
const Home = lazy(() => import("../../pages/Home/Home"));
const About = lazy(() => import("../../pages/About/About"));
const Blog = lazy(() => import("../../pages/Blog/Blog"));
const Login = lazy(() => import("../../pages/Login/Login"));
const Register = lazy(() => import("../../pages/Login/Register"));
const CollectInfo = lazy(() => import("../../pages/Welcome/CollectInfo"));
const Header = lazy(() => import("../Shared/Header/Header"));
const Footer = lazy(() => import("../Shared/Footer/Footer"));
const Contact = lazy(() => import("../../pages/Home/Contact/Contact"));
const DevelopmentTeam = lazy(() =>
  import("../../pages/Development-Team/DevelopmentTeam")
);

const RoutesIndex = () => {
  const location = useLocation();
  const conditionalRoutes = ["/login", "/register", "/welcome"];
  const isHidden = conditionalRoutes.includes(location.pathname);
  return (
    <div>
      {isHidden || <Header></Header>}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/development-team" element={<DevelopmentTeam />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/welcome" element={<CollectInfo/>}></Route>
          <Route path="/loading" element={<Loading />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<JobPost></JobPost>}></Route>
            <Route path="circular" element={<Circulars></Circulars>}></Route>
            <Route index element={<Company></Company>}></Route>
            <Route path="company" element={<Company></Company>}></Route>
            <Route path="employee" element={<Employee></Employee>}></Route>
          </Route>
        </Routes>
      </Suspense>
      {isHidden || <Footer></Footer>}
    </div>
  );
};

export default RoutesIndex;
