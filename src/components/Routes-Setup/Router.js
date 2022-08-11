import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes, useLocation } from "react-router-dom";
import auth from "../../firebase-init";
import useUserRole from "../../hooks/UseAddUserInfo/useUserRole";
import NotFound from "../../pages/NotFound/NotFound";
import RequireAuth from "../Shared/RequireAuth";
import JobPostForm from "../../pages/Dashboard-pages/JobPostForm/JobPostForm";
import JobPost from "../../pages/Dashboard-pages/JobPost/JobPost";
import Response from "../../pages/Dashboard-pages/Response/Response";
import Company from "../../pages/Dashboard-pages/Company/Company";
import Employee from "../../pages/Dashboard-pages/Employee/Employee";
import FindJob from "../../pages/Dashboard-pages/FindJob/FindJob";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";
import CollectInfo from "../../pages/Welcome/CollectInfo";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import Contact from "../../pages/Home/Contact/Contact";
import DevelopmentTeam from "../../pages/Development-Team/DevelopmentTeam";
import ApplyJobModal from "../../pages/Dashboard-pages/JobPost/ApplyJobModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MailEmployee from "../../pages/Dashboard-pages/Employee/MailEmployee";

const RoutesIndex = () => {
  const location = useLocation();
  const conditionalRoutes = ["/login", "/register", "/welcome"];
  const conditionalFooterHide = [
    "/dashboard",
    "/dashboard/jobpost",
    "/dashboard/employee",
    "/dashboard/response",
    "/dashboard/findjob",
  ];
  const isHidden = conditionalRoutes.includes(location.pathname);
  const isFooterHidden = conditionalFooterHide.includes(location.pathname);
  const [user] = useAuthState(auth);
  const [role] = useUserRole(user);
  // console.log(role);
  return (
    <div>
      <ToastContainer />
      {isHidden || <Header></Header>}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/development-team" element={<DevelopmentTeam />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/welcome" element={<CollectInfo />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          {role === "job-seeker" ? (
            <Route index element={<FindJob></FindJob>}></Route>
          ) : (
            <Route index element={<Company></Company>}></Route>
          )}
          <Route
            path="apply/:_id"
            element={<ApplyJobModal></ApplyJobModal>}
          ></Route>
          <Route
            path="employeemail/:_id"
            element={<MailEmployee></MailEmployee>}
          ></Route>
          <Route path="jobpost" element={<JobPost></JobPost>}></Route>
          <Route
            path="jobpostform"
            element={<JobPostForm></JobPostForm>}
          ></Route>
          <Route path="response" element={<Response></Response>}></Route>
          <Route path="employee" element={<Employee></Employee>}></Route>
          {role === "HR" && (
            <Route path="response" element={<Response></Response>}></Route>
          )}
          {role !== "job-seeker" && (
            <Route path="employee" element={<Employee></Employee>}></Route>
          )}
        </Route>
        <Route
          path="/mailEmployee"
          element={<MailEmployee></MailEmployee>}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      {isHidden || isFooterHidden || <Footer></Footer>}
    </div>
  );
};

export default RoutesIndex;
