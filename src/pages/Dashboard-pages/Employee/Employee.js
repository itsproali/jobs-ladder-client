import React from "react";
const Employee = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="sm:h-[300px]   shadow-lg impactfull-card rounded-lg flex justify-center items-center cursor-pointer">
        <div className="flex flex-col">
          <div className="mb-3 h-1/2 flex items-center justify-center">
            <div class="avatar">
              <div class="w-32 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
          </div>
          <div className="h-[100px]">
            <h1 className="font-extrabold text-center ">Sheikh Shahariar Siam</h1>
            <p className=" font-semibold text-center my-3 ">Jr web Developer</p>
          </div>
        </div>
        <div className="bg-red-500 h-11 absolute">

        </div>
      </div>
    </div>
  );
};

export default Employee;
