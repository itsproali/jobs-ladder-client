import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import fetching from "../../../hooks/UseAddUserInfo/fetching";

const ApplyJobModal = ({ apply }) => {
  const param = useParams();
  const navigate = useNavigate();

  const imageStorageKey = "4dab8fd03df7f5dbf2aafd109eaffcf5";
  const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const emailRef = useRef("");
  const fileRef = useRef("");
  const onSubmit = async (data) => {
    console.log(data);
    const file = data.file[0];
    const formData = new FormData();
    formData.append("image", file);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data.url);
        if (result.success) {
          const jobSeeker = {
            name: data.name,
            Email: data.email,
            jobPostId: param._id,
            image: result.data.url,
          };
          fetching.post("job-post/response", jobSeeker).then((res) => {
            if (res.data.insertedId) {
              toast.success("your apply is done");
              reset();
              navigate("/dashboard");
            } else {
              toast.error("something is wrong");
            }
          });
        }
      });
  };
  return (
    <div className="p-5">
      <div className="sm:my-10  lg:px-0 md:px-0 max-w-xl mx-auto rounded-lg bg-slate-300">
        <form onSubmit={handleSubmit(onSubmit)} className="p-10">
          <label className="pb-3 block">Your name</label>
          <input
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register("name", { required: true, maxLength: 30 })}
          />
          {errors.name && errors.name.type === "required" && (
            <span className="text-error">This is required</span>
          )}
          <br></br>
          <label className="pb-3 block">Email Address</label>
          <input
            id="email"
            ref={emailRef}
            {...register("email", { required: true })}
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></input>
          {errors.email && errors.email.type === "required" && (
            <span className="text-error">Enter your Email first</span>
          )}
          <br></br>
          <label className=" inline-block">Upload Resume</label>
          <br></br>
          <input
            id="file"
            ref={fileRef}
            className="file:h-28 file:w-1/2 w-full file:bg-primary file:rounded-md file:text-white file:cursor-pointer "
            {...register("file", { required: true })}
            type="file"
          ></input>
          <br></br>
          {errors.file && errors.file.type === "required" && (
            <span className="text-error">Please choose any file</span>
          )}
          <br></br>
          <input
            className="btn btn-primary mt-5 w-full"
            type="submit"
            value="submit"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobModal;
