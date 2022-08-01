import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import welcome from "../../asset/welcome.png";
import auth from "../../firebase-init";
import fetching from "../../hooks/UseAddUserInfo/fetching";
import { useForm, useWatch } from "react-hook-form";
import { HiOutlineBriefcase, HiOutlineLockClosed } from "react-icons/hi";

const CollectInfo = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const roleValue = useWatch({ control, name: "role" });
  const uniqueSecret = Math.random().toString(36).slice(2, 6);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const userName = user?.displayName;
  const email = user?.email;

  const onSubmit = async (data) => {
    const role = await data.role;
    const companyName = await data.companyName;
    const companySecret = await data.companySecret;
    if (role) {
      const userData = await {
        userName,
        role,
        companyName,
        companySecret,
        email,
      };
      console.log(userData);
      const { res } = await fetching.put("/users/add-info", userData);
      console.log(res);
      navigate("/dashboard");
    }
  };
  return (
    <>
      <div className="mx-auto px-2 md:px-16 py-8 min-h-screen bg-gradient-to-b from-primary to-secondary">
        <h1 className="text-4xl text-white font-semibold text-center">
          Welcome to Job's Ladder
        </h1>
        <p className="text-xl text-center text-white">
          A Few steps to Enter our website
        </p>
        <div className="flex flex-col mt-16 lg:flex-row items-center justify-evenly">
          <div className="mx-auto w-full lg:w-1/2">
            <img
              src={welcome}
              alt="welcome"
              className="block mx-auto max-w-full"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto w-full lg:w-1/2 text-center"
          >
            <div className="text-2xl my-2">
              <label htmlFor="role">
                <span className="mr-3 text-white">
                  What is the role of you?
                </span>
                <select
                  className="text-indigo-300 underline focus:outline-none bg-transparent"
                  {...register("role", { required: true })}
                >
                  <option value="">-- Select your Role --</option>
                  <option value="HR">HR</option>
                  <option value="Employee">Employee</option>
                  <option value="job-seeker">Job Seeker</option>
                </select>
              </label>
              {errors.role && (
                <label className="block text-red-700">
                  Please select your role
                </label>
              )}
            </div>
            <div className="text-2xl">
              {roleValue === "job-seeker" || roleValue === undefined || (
                <div className=" w-3/4 mx-auto relative my-3">
                  <HiOutlineBriefcase className="absolute top-3 left-4"></HiOutlineBriefcase>
                  <input
                    type="text"
                    {...register("companyName", { required: true })}
                    className="py-2 pl-14 pr-4 w-full focus:outline-none rounded"
                    placeholder="Enter your company name"
                  />
                </div>
              )}
              {roleValue === "HR" && (
                <h2 className="text-3xl text-indigo-300">
                  Company Secret: <b> {uniqueSecret}</b>
                </h2>
              )}
              {roleValue === "Employee" && (
                <div className=" w-3/4 mx-auto relative my-3">
                  <HiOutlineLockClosed className="absolute top-3 left-4"></HiOutlineLockClosed>
                  <input
                    type="text"
                    {...register("companySecret", { required: true })}
                    className="py-2 pl-14 pr-4 w-full focus:outline-none rounded"
                    placeholder="Enter your company name"
                  />
                </div>
              )}
            </div>
            <input
              type="submit"
              value="Next"
              className="btn px-6 mt-12 btn-primary"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default CollectInfo;
