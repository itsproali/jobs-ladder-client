import React from "react";
import { BsArrowRight } from "react-icons/bs";
import circle1 from "../../../asset/circle-1.png";
import circle2 from "../../../asset/circle-2.png";
import search from "../../../asset/servicesForHr/search.png";
import calander from "../../../asset/servicesForHr/calander-mark.png";
import handshake from "../../../asset/servicesForHr/handshake.png";
import typing from "../../../asset/servicesForHr/typing.png";
import "./makeHrImapactfull.css";

const MakehrImpactfull = () => {
  return (
    <div className="container mx-auto my-14 relative px-5">
      <div className="flex flex-col sm:gap-3 gap-1 justify-center items-center mb-5 pb-5">
        <h5 className="font-bold uppercase text-primary sm:text-lg text-sm">
          It's Impactful
        </h5>
        <h1 className=" md:text-3xl sm:text-2xl text-lg font-bold uppercase">
          Smart Solution and affordable
        </h1>
        <div className="flex sm:gap-2 gap-1 mt-1">
          <div className="sm:h-1 h-[2px] sm:w-12 w-8 bg-secondary rounded-lg"></div>
          <div className="sm:h-1 h-[2px]  sm:w-7 w-4 bg-primary rounded-lg"></div>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5 justify-between">
        <div className="sm:h-[400px]  shadow-xl impactfull-card rounded-lg flex justify-center items-center cursor-pointer">
          <div className="">
            <div className=" flex justify-center">
              <img src={search} alt="" className="w-40" />
            </div>
            <div className="h-[200px]">
              <h1 className="text-xl font-extrabold text-center ">
                Automate repetitive routines
              </h1>
              <p className="md:text-xl font-semibold text-center my-3 ">
                {" "}
                Reduce recruiter workload by as much as 75%.
              </p>
              <p className="flex gap-1 hover:gap-2 text-secondary font-semibold justify-center items-center">
                Application Tracing System <BsArrowRight />
              </p>
            </div>
          </div>
        </div>
        <div className="sm:h-[400px]  shadow-xl impactfull-card rounded-lg flex justify-center items-center cursor-pointer">
          <div className="">
            <div className=" flex justify-center">
              <img src={handshake} alt="" className="w-40" />
            </div>
            <div className="h-[200px]">
              <h1 className="text-xl font-extrabold text-center ">
                Onboard faster
              </h1>
              <p className="md:text-xl font-semibold text-center my-3 ">
                {" "}
                Cut down on new hire onboarding queries.
              </p>
              <p className="flex gap-1 hover:gap-2 text-secondary font-semibold justify-center items-center">
                Virtual Onboarding <BsArrowRight />
              </p>
            </div>
          </div>
        </div>
        <div className="sm:h-[400px]  shadow-xl impactfull-card rounded-lg flex justify-center items-center cursor-pointer">
          <div className="">
            <div className=" flex justify-center">
              <img src={typing} alt="" className="w-40" />
            </div>
            <div className="h-[200px]">
              <h1 className="text-xl font-extrabold text-center ">
                Organize data better
              </h1>
              <p className="md:text-xl font-semibold text-center my-3 ">
                {" "}
                Securely store all employee data and files.
              </p>
              <p className="flex gap-1 hover:gap-2 text-secondary font-semibold justify-center items-center">
                Employee Database <BsArrowRight />
              </p>
            </div>
          </div>
        </div>
        <div className="sm:h-[400px]  shadow-xl impactfull-card rounded-lg flex justify-center items-center cursor-pointer">
          <div className="">
            <div className=" flex justify-center">
              <img src={calander} alt="" className="w-40" />
            </div>
            <div className="h-[200px]">
              <h1 className="text-xl font-extrabold text-center ">
                Manage time off easier
              </h1>
              <p className="md:text-xl font-semibold text-center my-3 ">
                {" "}
                Track and report time-off and absence.
              </p>
              <p className="flex gap-1 hover:gap-2 text-secondary font-semibold justify-center items-center">
                Time off management <BsArrowRight />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute left-8 -bottom-12 w-32 -z-10">
        <img src={circle1} alt="circle" />
      </div>
      <div className="hidden md:block absolute right-8 top-20 -z-10 ">
        <img src={circle2} alt="circle" className="w-44" />
      </div>
    </div>
  );
};

export default MakehrImpactfull;
