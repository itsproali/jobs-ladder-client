import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";
import Company from "../../pages/Dashboard-pages/Company/Company";
import Employee from "../../pages/Dashboard-pages/Employee/Employee";
import MailEmployee from "../../pages/Dashboard-pages/Employee/MailEmployee";
import FindJob from "../../pages/Dashboard-pages/FindJob/FindJob";
import HireEmployee from "../../pages/Dashboard-pages/HireEmployee/HireEmployee";
import ApplyJobModal from "../../pages/Dashboard-pages/JobPost/ApplyJobModal";
import JobPost from "../../pages/Dashboard-pages/JobPost/JobPost";
import JobPostForm from "../../pages/Dashboard-pages/JobPostForm/JobPostForm";
import MyServices from "../../pages/Dashboard-pages/MyServices/MyServices";
import Response from "../../pages/Dashboard-pages/Response/Response";
import TaskDetails from "../../pages/Dashboard-pages/Tasks/TaskDetails";
import Tasks from "../../pages/Dashboard-pages/Tasks/Tasks";
import Dashboard from "../../pages/Dashboard/Dashboard";
import DevelopmentTeam from "../../pages/Development-Team/DevelopmentTeam";
import Contact from "../../pages/Home/Contact/Contact";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";
import NotFound from "../../pages/NotFound/NotFound";
import CollectInfo from "../../pages/Welcome/CollectInfo";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import RequireAuth from "../Shared/RequireAuth";

const RoutesIndex = () => {
  const location = useLocation();
  const conditionalRoutes = ["/login", "/register", "/welcome"];
  const conditionalFooterHide = [
    "/dashboard",
    "/dashboard/job-post",
    "/dashboard/employee",
    "/dashboard/response",
    "/dashboard/findjob",
    "/dashboard/hire",
    "/dashboard/my-services",
    "/dashboard/tasks",
    "/dashboard/tasks/",
  ];
  const isHidden = conditionalRoutes.includes(location.pathname);
  const isFooterHidden = conditionalFooterHide.includes(location.pathname);
  const { role } = useSelector((state) => state.setUserRole);
  // console.log(role);

  // Hr Routes
  const hrRoutes = [
    { path: "employee", element: <Employee /> },
    { path: "job-post", element: <JobPost /> },
    { path: "jobpostform", element: <JobPostForm /> },
    { path: "hire", element: <HireEmployee /> },
    { path: "response", element: <Response /> },
  ];

  // Employee Routes
  const employeeRoutes = [
    { path: "employee", element: <Employee /> },
    { path: "tasks", element: <Tasks /> },
    { path: "tasks/:taskId", element: <TaskDetails /> },
  ];

  // Job Seeker Routes
  const seekerRoutes = [
    { path: "my-services", element: <MyServices /> },
    { path: "apply/:_id", element: <ApplyJobModal /> },
    { path: "tasks", element: <Tasks /> },
    { path: "tasks/:taskId", element: <TaskDetails /> },
  ];

  // if (roleLoading) {
  //   return <Loading />;
  // }
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

          {/* Hr Routes */}
          {role === "HR" &&
            hrRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}

          {/* Employee Routes */}
          {role === "Employee" &&
            employeeRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}

          {/* Job Seeker Routes */}
          {role === "job-seeker" &&
            seekerRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
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
