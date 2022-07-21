import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../asset/Jobs-ladder-logo.png";
import { Spin as Hamburger } from "hamburger-react";
import "react-modern-drawer/dist/index.css";
import HeaderDrawer from "./HeaderDrawer";
import "./Header.css";

const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive && "#ED3AB2",
    };
  };
  const toggleDrawer = () => {
    setIsOpenDrawer((prevState) => !prevState);
  };

  // Show Navbar on Scroll UP
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShow(true);
        } else {
          setShow(false);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <>
      <div
        className={`visible ${show && "nav-hidden"} ${
          window.scrollY > 80 && "bg-white  shadow-lg"
        } px-2 md:px-10 z-50`}
      >
        <div
          className={`navbar w-full ${
            window.scrollY < 80 && "border-b border-gray-300"
          }`}
        >
          <div className="navbar-start">
            <Link to="/">
              <img
                className="w-40 pr-10 lg:border-r border-gray-300"
                src={logo}
                alt="Job's Ladder Logo"
              />
            </Link>
            <ul className="hidden lg:flex items-center ml-5">
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
              className="hidden  md:flex border-2 border-primary text-primary rounded-md py-2 px-12 hover:bg-primary hover:border-primary hover:text-white duration-300"
              to="/login"
            >
              Login
            </Link>
            <button onClick={toggleDrawer} className="ml-2 lg:hidden">
              <Hamburger toggled={isOpenDrawer} />
            </button>
          </div>
          <HeaderDrawer isOpen={isOpenDrawer} toggleDrawer={toggleDrawer} />
        </div>
      </div>
    </>
  );
};

export default Header;
