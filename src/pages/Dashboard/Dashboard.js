import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  HiOutlineBriefcase,
  HiBookOpen,
  HiOfficeBuilding,
  HiUserGroup,
} from "react-icons/hi";
const Dashboard = () => {
  return (
    <div className="py-10 mx-auto ">
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="mt-14 ml-10 drawer-content">
          <Outlet></Outlet>
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div class="drawer-side pt-10 ">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 text-base-content bg-secondary ">
            <li className="mb-5">
              <Link
                to="/dashboard"
                className="text-base-100 capitalize text-xl border inline-block text-center"
              >
                <HiOutlineBriefcase className="inline-block -translate-y-0.5"></HiOutlineBriefcase>{" "}
                Job posts
              </Link>
            </li>
            <li className="mb-5">
              <Link
                to="/dashboard/Response"
                className="text-base-100 capitalize text-xl border inline-block text-center"
              >
                <HiBookOpen className="inline-block -translate-y-0.5"></HiBookOpen>{" "}
                Response
              </Link>
            </li>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
