import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import {
  HiBookOpen,
  HiCube,
  HiOfficeBuilding,
  HiOutlineBriefcase,
  HiUserGroup,
} from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { TbHotelService } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import DashboardDrawer from "./DashboardDrawer";

const Dashboard = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { role } = useSelector((state) => state.setUserRole);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

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
    <div className="mt-20 relative">
      <div className="mx-auto">
        <div className="drawer-side z-20 bg-gradient-to-tl from-primary to-secondary h-screen fixed top-0 left-0">
          <ul className=" p-4 pt-20 overflow-y-auto w-64 lg:block hidden">
            {/* Only HR Routes */}
            {role === "HR" &&
              hrLinks.map((link) => (
                <li className="my-2" key={link.title}>
                  <Link
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
        <button
          className="btn btn-primary rounded-r-full -ml-4 mb-4 pl-4 pr-2  hover:pl-12 duration-300 transition-all ease-in-out z-10 lg:hidden"
          onClick={toggleDrawer}
        >
          <IoIosArrowForward className="text-2xl"></IoIosArrowForward>
        </button>
        <DashboardDrawer isOpen={isOpenDrawer} toggleDrawer={toggleDrawer} />
        <div className="container mx-auto lg:pl-64">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
