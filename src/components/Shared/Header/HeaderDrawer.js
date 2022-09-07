import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase-init";

const HeaderDrawer = ({ isOpen, toggleDrawer }) => {
  const [user] = useAuthState(auth);
  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      duration={800}
      direction="right"
    >
      <div>
        <span
          onClick={toggleDrawer}
          className=" btn btn-ghost rounded-full text-2xl absolute top-1 right-1"
        >
          {" "}
          <AiOutlineClose />
        </span>
        <div className="flex mt-20 mb-16 justify-center">
          <ul className="flex flex-col gap-10 uppercase font-semibold">
            <li
              onClick={toggleDrawer}
              className={"transition duration-200  hover:text-primary text-xl"}
            >
              <NavLink to="/">home</NavLink>
            </li>
            <li
              onClick={toggleDrawer}
              className={"transition duration-200  hover:text-primary text-xl"}
            >
              <NavLink to="/about">about us</NavLink>
            </li>
            <li
              onClick={toggleDrawer}
              className={"transition duration-200  hover:text-primary text-xl"}
            >
              <NavLink to="/blog">blogs</NavLink>
            </li>
            <li
              onClick={toggleDrawer}
              className={"transition duration-200  hover:text-primary text-xl"}
            >
              <NavLink to="/contact"> contact</NavLink>
            </li>
            <li
              onClick={toggleDrawer}
              className={"transition duration-200  hover:text-primary text-xl"}
            >
              <NavLink to="/dashboard"> Dashboard</NavLink>
            </li>
          </ul>
        </div>
        {!user && (
          <div className="px-5">
            <Link
              onClick={toggleDrawer}
              className=" md:hidden w-full  border-2 border-primary inline-block text-center text-primary rounded py-2 hover:bg-primary hover:border-primary hover:text-white duration-300"
              to="/login"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default HeaderDrawer;
