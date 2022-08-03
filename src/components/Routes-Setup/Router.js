import React, { lazy, Suspense } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";
import auth from "../../firebase-init";
import useUserRole from "../../hooks/UseAddUserInfo/useUserRole";
import Loading from "../Shared/Loading/Loading";
import RequireAuth from "../Shared/RequireAuth";
import JobPostForm from "../../pages/Dashboard-pages/JobPostForm/JobPostForm";
import JobPost from "../../pages/Dashboard-pages/JobPost/JobPost";
import ApplyJobModal from "../../pages/Dashboard-pages/JobPost/ApplyJobModal";
const Response = lazy(() =>
  import("../../pages/Dashboard-pages/Response/Response")
);
const Company = lazy(() =>
  import("../../pages/Dashboard-pages/Company/Company")
);
const Employee = lazy(() =>
  import("../../pages/Dashboard-pages/Employee/Employee")
);
const FindJob = lazy(() =>
  import("../../pages/Dashboard-pages/FindJob/FindJob")
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
  console.log(role);
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
          <Route path="/welcome" element={<CollectInfo />}></Route>
          <Route path="/loading" element={<Loading />}></Route>
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
            <Route path="apply/:_id" element={<ApplyJobModal></ApplyJobModal>}></Route>
            <Route path="jobpost" element={<JobPost></JobPost>}></Route>
            <Route path="jobpostform" element={<JobPostForm></JobPostForm>}></Route>
            <Route path="response" element={<Response></Response>}></Route>
            <Route path="employee" element={<Employee></Employee>}></Route>
            {role === "HR" && (
              <Route path="response" element={<Response></Response>}></Route>
            )}
            {role !== "job-seeker" && (
              <Route path="employee" element={<Employee></Employee>}></Route>
            )}
          </Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Suspense>
      {isHidden || isFooterHidden || <Footer></Footer>}
    </div>
  );
};

export default RoutesIndex;
