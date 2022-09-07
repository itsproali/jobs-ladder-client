import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { BiLock, BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import circle1 from "../../asset/circle-1.png";
import circle3 from "../../asset/circle-3.png";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import Loading from "../../components/Shared/Loading/Loading";
import auth from "../../firebase-init";
import useAddUserInfo from "../../hooks/UseAddUserInfo/UseAddUserInfo";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/welcome";
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [inputType, icon] = usePasswordToggle();

  const [token, loadingToken] = useAddUserInfo(user);

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from, token]);

  if (loading || updating || loadingToken) {
    return <Loading />;
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data?.name });
    reset();
  };
  return (
    <div className="flex min-h-screen items-center justify-center relative overflow-hidden">
      <div className="card w-96 shadow-xl border lg:-mr-16 bg-white backdrop-blur-xl bg-opacity-40">
        <div className="card-body">
          <h2 className="text-center text-3xl font-semibold">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="form-control w-full max-w-xs relative">
              <BiUser className="absolute left-3 top-4 text-xl"></BiUser>
              <input
                type="text"
                placeholder="Your Full Name"
                className="p-3 pl-10 bg-gray-200 border-l-4 border-primary focus:outline-none w-full max-w-xs rounded"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your Name",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            {/* Email */}
            <div className="form-control w-full max-w-xs relative">
              <HiOutlineMail className="absolute left-3 top-4 text-xl"></HiOutlineMail>
              <input
                type="email"
                placeholder="Your Email address"
                className="p-3 pl-10 bg-gray-200 border-l-4 border-primary focus:outline-none w-full max-w-xs rounded"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please provide your email",
                  },
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            {/* Password */}
            <div className="form-control w-full max-w-xs relative">
              <BiLock className="absolute left-3 top-4 text-xl"></BiLock>
              <input
                type={inputType}
                placeholder="Choose a strong Password"
                className="p-3 pl-10 bg-gray-200 border-l-4 border-primary focus:outline-none w-full max-w-xs rounded"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please enter your password",
                  },
                })}
              />
              <span className="absolute top-4 right-3 cursor-pointer text-xl">
                {icon}
              </span>
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="text-red-500 label-text-alt">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {error && <p className="text-red-500">{error.message}</p>}
            {updateError && (
              <p className="text-red-500">{updateError.message}</p>
            )}

            <label htmlFor="submit">
              <input type="submit" value="" />
              <ButtonDefault className="w-full">Register</ButtonDefault>
            </label>
          </form>

          <p className="block lg:hidden text-center mt-2 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-secondary link-hover">
              Please Login{" "}
            </Link>
          </p>

          <div className="divider">OR</div>
          <SocialLogin />
        </div>
      </div>

      {/* Login Image */}
      <div className="w-[700px] h-[500px] hidden lg:flex items-center justify-center bg-loginBg bg-cover rounded-lg">
        <div className="text-center text-white">
          <h2 className=" text-3xl font-semibold">WELCOME!</h2>
          <p className="my-4">We are very happy to see you again</p>
          <Link to="/login">
            <button className="px-8 py-2 btn btn-primary">Login</button>
          </Link>
        </div>
      </div>

      {/* Circle */}
      <div className="absolute -top-16 -left-16 -z-10">
        <img src={circle1} alt="circle" />
      </div>
      <div className="absolute w-32 bottom-8 -right-10 -z-10">
        <img src={circle3} alt="circle" />
      </div>
    </div>
  );
};

export default Login;
