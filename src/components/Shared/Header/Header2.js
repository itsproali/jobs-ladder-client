import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../asset/Jobs-ladder-logo.png";

const Header2 = () => {
  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive && "#ED3AB2",
    };
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="navbar w-full border-b border-gray-300">
          <div className="navbar-start">
            <Link to="/">
              <img
                className="w-40 pr-10 lg:border-r border-gray-300"
                src={logo}
                alt="Job's Ladder Logo"
              />
            </Link>
            <ul class="hidden lg:flex items-center ml-5">
              <li>
                <NavLink
                  to="/"
                  className="mx-4 hover:text-primary duration-200"
                  style={activeLink}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="mx-4 hover:text-primary duration-200"
                  style={activeLink}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="mx-4 hover:text-primary duration-200"
                  style={activeLink}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="mx-4 hover:text-primary duration-200"
                  style={activeLink}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link
              className="hidden md:flex border-2 border-primary text-primary rounded-md py-2 px-12 hover:bg-primary hover:border-primary hover:text-white duration-300"
              to="/login"
            >
              Login
            </Link>

            <div className="dropdown dropdown-left lg:hidden">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-6 p-2 shadow-xl bg-base-100 rounded-box w-52 border"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link
                    className="border-2 border-primary inline-block text-center text-primary rounded py-2 hover:bg-primary hover:border-primary hover:text-white duration-300"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header2;
