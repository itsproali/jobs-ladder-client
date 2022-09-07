import React, { useEffect } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { BiLock } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import circle1 from "../../asset/circle-1.png";
import circle3 from "../../asset/circle-3.png";
import ButtonDefault from "../../components/ButtonDefault/ButtonDefault";
import Loading from "../../components/Shared/Loading/Loading";
import auth from "../../firebase-init";
import useAddUserInfo from "../../hooks/UseAddUserInfo/UseAddUserInfo";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import setUserRoleAction from "../../stateManagement/actions/setUserRoleAction";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [inputType, icon] = usePasswordToggle();
  const [token, loadingToken] = useAddUserInfo(user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from, token]);

  useEffect(() => {
    if (user?.user?.email && token) {
      dispatch(setUserRoleAction(user.user));
    }
  }, [dispatch, user, token]);

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const handleResetPassword = async () => {
    const { value: email } = await Swal.fire({
      title: "Input email address",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address",
      confirmButtonText: "Reset Password",
    });
    if (sending) {
      Swal.showLoading();
    }
    if (email) {
      Swal.fire("A reset link has been sent!");
      sendPasswordResetEmail(email);
    }
  };

  if (loading || loadingToken) {
    return <Loading />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center relative overflow-hidden">
      <div className="card w-96 shadow-xl border lg:-mr-16 bg-white backdrop-blur-xl bg-opacity-40">
        <div className="card-body">
          <h2 className="text-center text-3xl font-semibold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                placeholder="Password"
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
                <span
                  className="text-accent cursor-pointer text-xs hover:underline mb-2"
                  onClick={handleResetPassword}
                >
                  Forgot Password?
                </span>
              </label>
            </div>

            {error && <p className="text-red-500">{error.message}</p>}
            {resetError && <p className="text-red-500">{resetError.message}</p>}

            <label htmlFor="submit">
              <input type="submit" value="" />
              <ButtonDefault className="w-full">Login</ButtonDefault>
            </label>
          </form>

          <p className="block lg:hidden text-center mt-2 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-secondary link-hover">
              Register Now{" "}
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
          <p className="my-4">Enter your details & start new journey with us</p>
          <Link to="/register">
            <button className="px-8 py-2 btn btn-primary">Register</button>
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
