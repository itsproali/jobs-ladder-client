import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  HiBookOpen,
  HiOfficeBuilding,
  HiOutlineBriefcase,
  HiUserGroup,
} from "react-icons/hi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase-init";
import useUserRole from "../../hooks/UseAddUserInfo/useUserRole";

const DashboardDrawer = ({ isOpen, toggleDrawer }) => {
  const [user] = useAuthState(auth);
  const [role] = useUserRole(user);
  return (
    <Drawer
      style={{ background: "linear-gradient(#ED3AB2, #952DDE)" }}
      open={isOpen}
      onClose={toggleDrawer}
      duration={800}
      direction="left"
    >
      <div>
        <span
          onClick={toggleDrawer}
          className=" btn btn-ghost rounded-full text-2xl absolute top-1 right-1 text-white"
        >
          <AiOutlineClose />
        </span>
        <div className="flex mt-20 mb-16 justify-center">
          <ul className="menu p-4 overflow-y-auto w-64  text-base-content">
            {role !== "job-seeker" && (
              <li className="mb-5">
                <Link
                  to="/dashboard"
                  className="text-base-100 capitalize text-xl border inline-block text-center"
                >
                  <HiOfficeBuilding className="inline-block -translate-y-0.5"></HiOfficeBuilding>{" "}
                  company
                </Link>
              </li>
            )}
            {role !== "job-seeker" && (
              <li className="mb-5">
                <Link
                  to="/dashboard/employee"
                  className="text-base-100 capitalize text-xl border inline-block text-center"
                >
                  <HiUserGroup className="inline-block -translate-y-0.5"></HiUserGroup>{" "}
                  Employee
                </Link>
              </li>
            )}
            {role === "HR" && (
              <li className="mb-5">
                <Link
                  to="/dashboard/jobpost"
                  className="text-base-100 capitalize text-xl border inline-block text-center"
                >
                  <HiOutlineBriefcase className="inline-block -translate-y-0.5"></HiOutlineBriefcase>{" "}
                  job post
                </Link>
              </li>
            )}
            {role === "job-seeker" && (
              <li className="mb-5">
                <Link
                  to="/dashboard"
                  className="text-base-100 capitalize text-xl border inline-block text-center"
                >
                  <HiOutlineBriefcase className="inline-block -translate-y-0.5"></HiOutlineBriefcase>{" "}
                  Jobs
                </Link>
              </li>
            )}
            {role === "HR" && (
              <li className="mb-5">
                <Link
                  to="/dashboard/response"
                  className="text-base-100 capitalize text-xl border inline-block text-center"
                >
                  <HiBookOpen className="inline-block -translate-y-0.5"></HiBookOpen>{" "}
                  Response
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </Drawer>
  );
};

export default DashboardDrawer;
