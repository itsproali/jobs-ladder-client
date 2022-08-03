import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

const ApplyJobModal = ({apply}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const fileStorageKey = 'J90VOH6DMOPFFSH10SP1R94PN9L8Q4HHO6NFDC0GLC46CJQO50A0';
    const emailRef = useRef("");
    const fileRef = useRef("");
    const Applyform = async(data)=>{
        // console.log(data);
        const file = data.file[0].name;
        const formData = new FormData();
        formData.append('avatar', file);
        const URL = `https://skynetfree.net/${fileStorageKey}`
          fetch(URL,{
            method: "POST",
            body: formData
          })
          .then(res=> res.json())
          .then(d=> console.log(d))
      }
    return (
        <div>
              <form onSubmit={handleSubmit(Applyform)}>
                  <label className='pb-5 block'>Your name</label>
                  <input id="name" className='mt-4 border border-gray-400 rounded w-full bg-white text-gray-700 focus:outline-none focus:border-gray-500 pl-5 h-10' {...register('name', { required: true, maxLength: 30 })} />
                  {errors.name && errors.name.type === "required" && <span>This is required</span>}     
                  <br></br>
                  <label className='pt-5 block'>Email Address</label>
                  <input ref={emailRef} {...register("email",{ required: true})} type="email" className='mt-4 border border-gray-400 rounded w-full bg-white text-gray-700 focus:outline-none focus:border-gray-500 pl-5 h-10'></input>
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