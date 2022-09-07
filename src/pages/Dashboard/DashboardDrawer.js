import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import {
  HiBookOpen,
  HiCube,
  HiOfficeBuilding,
  HiOutlineBriefcase,
  HiUserGroup,
} from "react-icons/hi";
import { TbHotelService } from "react-icons/tb";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const DashboardDrawer = ({ isOpen, toggleDrawer }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { role } = useSelector((state) => state.setUserRole);

  // Hr Dashboard
  const hrLinks = [
    { path: "/dashboard", title: "Company", icon: <HiOfficeBuilding /> },
    { path: "/dashboard/employee", title: "Employee", icon: <HiUserGroup /> },
    {
      path: "/dashboard/job-post",
      title: "Job Post",
      icon: <HiOutlineBriefcase />,
    },
    { path: "/dashboard/hire", title: "Hire Employee", icon: <HiCube /> },
    { path: "/dashboard/response", title: "Response", icon: <HiBookOpen /> },
  ];
  // Employee Dashboard
  const employeeLinks = [
    { path: "/dashboard", title: "Company", icon: <HiOfficeBuilding /> },
    { path: "/dashboard/employee", title: "Employee", icon: <HiUserGroup /> },
    { path: "/dashboard/tasks", title: "Tasks", icon: <FaTasks /> },
  ];
  // Job Seeker Dashboard
  const seekerLinks = [
    { path: "/dashboard", title: "Jobs", icon: <HiOutlineBriefcase /> },
    {
      path: "/dashboard/my-services",
      title: "My Services",
      icon: <TbHotelService />,
    },
    { path: "/dashboard/tasks", title: "Tasks", icon: <FaTasks /> },
  ];
  return (
    <Drawer
      style={{ background: "linear-gradient(#3b82f6, #4f46e5)" }}
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
            {/* Only HR Routes */}
            {role === "HR" &&
              hrLinks.map((link) => (
                <li className="my-2" key={link.title}>
                  <Link
                    onClick={toggleDrawer}
                    to={link.path}
                    className={`capitalize text-xl flex items-center justify-start btn outline-none border-none hover:bg-neutral hover:bg-opacity-20 ${
                      currentPath === link.path
                        ? "bg-white text-neutral"
                        : "bg-transparent text-white"
                    }`}
                  >
                    <span className="mr-2 block">{link.icon}</span>
                    <span className="block">{link.title}</span>
                  </Link>
                </li>
              ))}

            {/* Only Employee Routes */}
            {role === "Employee" &&
              employeeLinks.map((link) => (
                <li className="my-2" key={link.title}>
                  <Link
                    onClick={toggleDrawer}
                    to={link.path}
                    className={`capitalize text-xl flex items-center justify-start btn outline-none border-none hover:bg-neutral hover:bg-opacity-20 ${
                      currentPath === link.path
                        ? "bg-white text-neutral"
                        : "bg-transparent text-white"
                    }`}
                  >
                    <span className="mr-2 block">{link.icon}</span>
                    <span className="block">{link.title}</span>
                  </Link>
                </li>
              ))}

            {/* Only Job Seeker Routes */}
            {role === "job-seeker" &&
              seekerLinks.map((link) => (
                <li className="my-2" key={link.title}>
                  <Link
                  onClick={toggleDrawer}
                    to={link.path}
                    className={`capitalize text-xl flex items-center justify-start btn outline-none border-none hover:bg-neutral hover:bg-opacity-20 ${
                      currentPath === link.path
                        ? "bg-white text-neutral"
                        : "bg-transparent text-white"
                    }`}
                  >
                    <span className="mr-2 block">{link.icon}</span>
                    <span className="block">{link.title}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Drawer>
  );
};

export default DashboardDrawer;
