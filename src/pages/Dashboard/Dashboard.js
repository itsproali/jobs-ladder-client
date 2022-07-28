import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  HiOutlineBriefcase,
  HiBookOpen,
  HiOfficeBuilding,
  HiUserGroup,
} from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
const Dashboard = () => {
  return (
    <div className="mt-6">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="pt-24 relative pl-10 drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary btn-circle drawer-button absolute top-12 left-0 hover:left-2 duration-300 transition-all z-10 lg:hidden"
          >
            <IoIosArrowForward className="text-2xl"></IoIosArrowForward>
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side pt-10">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 text-base-content bg-secondary ">
            <li className="mb-5">
              <Link
                to="/dashboard/company"
                className="text-base-100 capitalize text-xl border inline-block text-center"
              >
                <HiOfficeBuilding className="inline-block -translate-y-0.5"></HiOfficeBuilding>{" "}
                company
              </Link>
            </li>
            <li className="mb-5">
              <Link
                to="/dashboard/employee"
                className="text-base-100 capitalize text-xl border inline-block text-center"
              >
                <HiUserGroup className="inline-block -translate-y-0.5"></HiUserGroup>{" "}
                Employee
              </Link>
            </li>
            <li className="mb-5">
              <Link
                to="/dashboard"
                className="text-base-100 capitalize text-xl border inline-block text-center"
              >
                <HiOutlineBriefcase className="inline-block -translate-y-0.5"></HiOutlineBriefcase>{" "}
                job post
              </Link>
            </li>
            <li className="mb-5">
              <Link
                to="/dashboard/circular"
                className="text-base-100 capitalize text-xl border inline-block text-center"
              >
                <HiBookOpen className="inline-block -translate-y-0.5"></HiBookOpen>{" "}
                circular
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
