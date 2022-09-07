import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm, useWatch } from "react-hook-form";
import { HiOutlineBriefcase, HiOutlineLockClosed } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import welcome from "../../asset/welcome.png";
import auth from "../../firebase-init";
import fetching from "../../hooks/UseAddUserInfo/fetching";
import setUserRoleAction from "../../stateManagement/actions/setUserRoleAction";

const CollectInfo = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm();
  const roleValue = useWatch({ control, name: "role" });
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const userName = user?.displayName;
  const email = user?.email;
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const role = await data?.role;
    const companyName = await data?.companyName;
    const companySecret = await data?.companySecret?.toLowerCase();
    if (role) {
      const userData = await {
        userName,
        role,
        companyName,
        companySecret,
        email,
      };
      console.log(userData);
      await fetching.put("/users/add-info", userData).then((res) => {
        console.log(res.data);
        if (res?.data?.insertCompany?.status === "failed") {
          setError("companySecret", {
            type: "custom",
            message: res?.data?.insertCompany?.message,
          });
        } else {
          dispatch(setUserRoleAction(user));
          navigate("/dashboard");
        }
      });
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
                <label className="block text-red-700 text-xs">
                  Please select your role
                </label>
              )}
            </div>
            <div className="text-2xl">
              {roleValue === "HR" && (
                <div className=" w-3/4 mx-auto relative my-3">
                  <HiOutlineBriefcase className="absolute top-3 left-4"></HiOutlineBriefcase>
                  <input
                    type="text"
                    {...register("companyName", { required: true })}
                    className="py-2 pl-14 pr-4 w-full focus:outline-none rounded"
                    placeholder="Enter your company name"
                  />
                  {errors.companyName && (
                    <label className="block text-red-700 text-xs">
                      Please Enter your company Name
                    </label>
                  )}
                </div>
              )}
              {/* {roleValue === "HR" && (
                <h2 className="text-3xl text-indigo-300">
                  Company Secret: <b> {uniqueSecret}</b>
                </h2>
              )} */}
              {(roleValue === "HR" || roleValue === "Employee") && (
                <div className=" w-3/4 mx-auto relative my-3">
                  <HiOutlineLockClosed className="absolute top-3 left-4"></HiOutlineLockClosed>
                  <input
                    type="text"
                    {...register(
                      "companySecret",
                      {
                        required: true,
                        message: "Please Enter a Company Secret",
                      },
                      { minLength: 4, message: "Minimum 4 digit required" }
                    )}
                    className="py-2 pl-14 pr-4 w-full focus:outline-none rounded"
                    placeholder={`${
                      roleValue === "HR"
                        ? "Enter/create your company secret"
                        : "Enter your company secret"
                    }`}
                  />
                  {errors.companySecret && (
                    <label className="block text-red-700 text-xs">
                      {errors?.companySecret?.message}
                    </label>
                  )}
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
