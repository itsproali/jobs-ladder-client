import React from "react";
import "./Employee.css";
import { BiMailSend } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";
import { AiFillFacebook } from "react-icons/ai";
import { BsFillChatSquareTextFill } from "react-icons/bs";

const Employee = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 px-5">
      <div className="sm:h-[300px]   shadow-lg employee-card rounded-lg flex justify-center items-center cursor-pointer overflow-hidden">
        <div className="flex flex-col">
          <div className="mb-3 h-1/2 flex items-center justify-center">
            <div class="avatar">
              {/* <div class="w-32 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div> */}
              <div class="w-32 bg-secondary rounded-full"></div>
            </div>
          </div>
          <div className="h-[100px]">
            <h1 className="font-extrabold text-center ">Sheikh Shahariar Siam</h1>
            <p className=" font-semibold text-center my-3 ">Jr web Developer</p>
          </div>
        </div>
        <div className="w-full h-full absolute employee-options text-white">
          <div className="bg-secondary p-3 h-full backdrop-blur-md">
            <div className="h-20 pt-6">
              <h1 className="font-extrabold  text-center">Sheikh Shahariar Siam</h1>
              <p className=" font-semibold text-center my-2">Jr web Developer</p>
            </div>
            <div className=" h-36 flex gap-2 justify-center items-center w-full">
              <a href="" className="h-8 w-8 rounded-full bg-gray-700 flex justify-center items-center">
                <AiFillLinkedin />
              </a>
              <a href="" className="h-8 w-8 rounded-full bg-gray-700 flex justify-center items-center">
                <AiFillFacebook />
              </a>
              <a href="" className="h-8 w-8 rounded-full bg-gray-700 flex justify-center items-center">
                <ImTwitter />
              </a>
              <a href="" className="h-8 w-8 rounded-full bg-gray-700 flex justify-center items-center">
                <BsFillChatSquareTextFill />
              </a>
            </div>
          </div>
          <button className="h-11 w-full  bg-primary absolute bottom-0 flex gap-2 justify-center items-center text-xl">
            <BiMailSend className="text-3xl" /> Send Mail
          </button>
        </div>
      </div>
      <div className="sm:h-[300px]   shadow-lg employee-card rounded-lg flex justify-center items-center cursor-pointer overflow-hidden">
        <div className="flex flex-col">
          <div className="mb-3 h-1/2 flex items-center justify-center">
            <div class="avatar">
              {/* <div class="w-32 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div> */}
              <div class="w-32 bg-secondary rounded-full"></div>
            </div>
          </div>
          <div className="h-[100px]">
            <h1 className="font-extrabold text-center ">Sheikh Shahariar Siam</h1>
            <p className=" font-semibold text-center my-3 ">Jr web Developer</p>
          </div>
        </div>
        <div className="w-full h-full absolute employee-options text-white">
          <div className="bg-secondary p-3 h-full backdrop-blur-md">
            <div className="h-20">
              <h1 className="font-extrabold  ">Sheikh Shahariar Siam</h1>
              <p className=" font-semibold  my-2">Jr web Developer</p>
            </div>
            <div className=" h-36 flex gap-2 justify-center items-center w-full">
              <a href="" className="h-8 w-8 rounded-full bg-black flex justify-center items-center">
                <AiFillLinkedin />
              </a>
              <a href="" className="h-8 w-8 rounded-full bg-black flex justify-center items-center">
                <AiFillFacebook />
              </a>
              <a href="" className="h-8 w-8 rounded-full bg-black flex justify-center items-center">
                <ImTwitter />
              </a>
              <a href="" className="h-8 w-8 rounded-full bg-black flex justify-center items-center">
                <BsFillChatSquareTextFill />
              </a>
            </div>
          </div>
          <button className="h-11 w-full  bg-primary absolute bottom-0 flex gap-2 justify-center items-center text-xl">
            <BiMailSend className="text-3xl" /> Send Mail
          </button>
        </div>
      </div>
      <div className="sm:h-[300px]   shadow-lg employee-card rounded-lg flex justify-center items-center cursor-pointer overflow-hidden">
        <div className="flex flex-col">
          <div className="mb-3 h-1/2 flex items-center justify-center">
            <div class="avatar">
              {/* <div class="w-32 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div> */}
              <div class="w-32 bg-secondary rounded-full"></div>
            </div>
          </div>
          <div className="h-[100px]">
            <h1 className="font-extrabold text-center ">Sheikh Shahariar Siam</h1>
            <p className=" font-semibold text-center my-3 ">Jr web Developer</p>
          </div>
        </div>
        <div className="w-full h-full absolute employee-options text-white">
          <div className="bg-secondary p-3 h-full backdrop-blur-md">
            <div className="h-20">
              <h1 className="font-extrabold  ">Sheikh Shahariar Siam</h1>
              <p className=" font-semibold  my-2">Jr web Developer</p>
            </div>
            <div className=" h-36 flex gap-2 justify-center items-center w-full">
              <a href="" className="h-8 w-8 rounded-full bg-black flex justify-center items-center">
                <AiFillLinkedin />
              </a>
              <a href="" className="h-8 w-8 rounded-full bg-black flex justify-center items-center">
                <AiFillFacebook />
              </a>
              <a href="" className="h-8 w-8 rounded-full bg-black flex justify-center items-center">
                <ImTwitter />
              </a>
              <a href="" className="h-8 w-8 rounded-full bg-black flex justify-center items-center">
                <BsFillChatSquareTextFill />
              </a>
            </div>
          </div>
          <button className="h-11 w-full  bg-primary absolute bottom-0 flex gap-2 justify-center items-center text-xl">
            <BiMailSend className="text-3xl" /> Send Mail
          </button>
        </div>
      </div>
      <div className="sm:h-[300px]   shadow-lg employee-card rounded-lg flex justify-center items-center cursor-pointer overflow-hidden">
        <div className="flex flex-col">
          <div className="mb-3 h-1/2 flex items-center justify-center">
            <div class="avatar">
              {/* <div class="w-32 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div> */}
              <div class="w-32 bg-secondary rounded-full"></div>
            </div>
          </div>
          <div className="h-[100px]">
            <h1 className="font-extrabold text-center ">Sheikh Shahariar Siam</h1>
            <p className=" font-semibold text-center my-3 ">Jr web Developer</p>
          </div>
        </div>
        <div className="w-full h-full absolute employee-options text-white">
          <div className="bg-secondary p-3 h-full backdrop-blur-md">
            <div className="h-20">
              <h1 className="font-extrabold  ">Sheikh Shahariar Siam</h1>
              <p className=" font-semibold  my-2">Jr web Developer</p>
            </div>
            <div className=" h-36 flex gap-2 justify-center items-center w-full">
              <a href="" className="h-8 w-8 rounded-full bg-black flex justify-center items-center">
                <AiFillLinkedin />
              </a>
              <a href="" className="h-8 w-8 rounded-full bg-black flex justify-center items-center">
                <AiFillFacebook />
              </a>
              <a href="" className="h-8 w-8 rounded-full bg-black flex justify-center items-center">
                <ImTwitter />
              </a>
              <a href="" className="h-8 w-8 rounded-full bg-black flex justify-center items-center">
                <BsFillChatSquareTextFill />
              </a>
            </div>
          </div>
          <button className="h-11 w-full  bg-primary absolute bottom-0 flex gap-2 justify-center items-center text-xl">
            <BiMailSend className="text-3xl" /> Send Mail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employee;
