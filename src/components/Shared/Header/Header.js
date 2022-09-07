import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../asset/Jobs-ladder-logo-blue.png";
import { Spin as Hamburger } from "hamburger-react";
import "react-modern-drawer/dist/index.css";
import HeaderDrawer from "./HeaderDrawer";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase-init";
import Loading from "../Loading/Loading";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive && "#3b82f6",
    };
  };
  const toggleDrawer = () => {
    setIsOpenDrawer((prevState) => !prevState);
  };

  // Handle LogOUt
  const handleLogOut = async () => {
    await signOut(auth);
    await localStorage.removeItem("accessToken");
    await navigate("/");
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

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div
        className={`visible ${show && "nav-hidden"} ${
          window.scrollY > 80 && "shadow-lg"
        } bg-white px-2 md:px-10 z-50`}
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
              <li>
                <NavLink
                  to="/dashboard"
                  className="mx-4 hover:text-primary duration-200"
                  style={activeLink}
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end">
                {/* <div className="w-12 bg-transparent  rounded-full"> */}
                <label
                  tabIndex="0"
                  className="btn btn-circle bg-gradient-to-r from-primary to-secondary avatar  outline-none border-none p-[2px]"
                >
                  <div className="rounded-full w-full bg-white opacity-90 backdrop-blur-md flex items-center justify-center text-primary p-[2px]">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="user" className="w-full rounded-full" />
                    ) : (
                      <span className="text-3xl">
                        {user?.displayName?.slice(0, 1)}
                      </span>
                    )}
                  </div>
                </label>
                {/* </div> */}
                <ul
                  tabIndex="0"
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-gray-100 rounded-box w-52"
                >
                  <li className="btn btn-ghost w-full" >
                    Profile
                  </li>
                  <li className="btn btn-ghost w-full">
                    Settings
                  </li>
                  <li className="btn btn-ghost w-full" onClick={handleLogOut}>
                    Logout
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                className="hidden  md:flex border-2 border-primary text-primary rounded-md py-2 px-12 hover:bg-primary hover:border-primary hover:text-white duration-300"
                to="/login"
              >
                Login
              </Link>
            )}
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
