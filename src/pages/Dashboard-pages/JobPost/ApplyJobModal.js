import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {toast } from 'react-toastify';
const ApplyJobModal = ({apply}) => {
  const param = useParams()
  console.log(param._id);

    const imageStorageKey = "4dab8fd03df7f5dbf2aafd109eaffcf5";
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    const { register, handleSubmit, watch, reset , formState: { errors } } = useForm();
    const emailRef = useRef("");
    const fileRef = useRef("");
    const onSubmit = async(data)=>{
        console.log(data);
        const file = data.file[0];
        const formData = new FormData();
        formData.append('image', file);
        
          fetch(url,{
            method: "POST",
            body: formData
          })
          .then(res=> res.json())
          .then(result=> {
            console.log(result.data.url);
            if (result.success) {
              const jobSeeker = {
                name: data.name,
                Email: data.email,
                jobPostId: param._id,
                image: result.data.url
              }
              fetch('http://localhost:5000/job-post/response',{
                method: "POST",
                headers:{
                  'content-type': 'application/json',
                },
                body: JSON.stringify(jobSeeker)
                })
                
                .then(res=> res.json())
                .then(int=> {
                  if (int.insertedId) {
                    toast.success("your apply is done")
                    reset()
                  }else{
                    toast.error("something is wrong")
                  }
                })
            }
          })
      }
    return (
        <div className='py-10 px-10 lg:px-0 md:px-0'>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <label className='pb-5 block'>Your name</label>
                  <input id="name" className='mt-4 border border-gray-400 rounded w-full bg-white text-gray-700 focus:outline-none focus:border-gray-500 pl-5 h-10' {...register('name', { required: true, maxLength: 30 })} />
                  {errors.name && errors.name.type === "required" && <span className='text-error'>This is required</span>}     
                  <br></br>
                  <label className='pt-5 block'>Email Address</label>
                  <input id='email' ref={emailRef} {...register("email",{ required: true})} type="email" className='mt-4 border border-gray-400 rounded w-full bg-white text-gray-700 focus:outline-none focus:border-gray-500 pl-5 h-10'></input>
                  {errors.email && errors.email.type === "required" && <span className='text-error'>Enter your Email first</span>}
                  <br></br>
                  <label className='my-4 inline-block'>Upload Resume</label>
                  <br></br>
                  <input id='file' ref={fileRef} {...register("file",{ required: true})} type="file"></input>
                  <br></br>
                  {errors.file && errors.file.type === "required" && <span className='text-error'>Please choose any file</span>}
                  <br></br>
                  <input className='btn btn-primary mt-5' type="submit" value="submit"></input>
              </form>
          </div>
    );
};

export default ApplyJobModal;