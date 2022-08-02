import React, { useRef } from 'react';
import { AiTwotoneMedicineBox } from 'react-icons/ai';
import { FiClock } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { GrOrganization } from 'react-icons/gr';
import ButtonDefault from '../../../components/ButtonDefault/ButtonDefault';
import { useForm } from "react-hook-form";
const JobSCard = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const fileStorageKey = 'J90VOH6DMOPFFSH10SP1R94PN9L8Q4HHO6NFDC0GLC46CJQO50A0';
  const emailRef = useRef("");
  const fileRef = useRef("");

  const Applyform = async(data)=>{
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
    <div className='relative mt-5 rounded-lg shadow-xl border cursor-pointer pt-8 px-6 flex flex-col justify-between md:h-[300px] bg-transparent backdrop-blur-md'>
      <div>
        <h1>
          <span className='text-2xl font-semibold text-primary link link-hover'>Jr. Front-End Developer </span>
        </h1>
        <h5 className='flex gap-2 mt-1 items-center'>
          <GrOrganization />
          <span className=' text-primary link link-hover font-semibold'> Microsoft OP</span>
        </h5>
        <div className='flex gap-5'>
          <h5 className='flex gap-2 mt-2 items-center'>
            <GoLocation />
            location OP
          </h5>
          <h5 className='flex gap-2 mt-2 items-center'>
            <FiClock />
            min ago
          </h5>
        </div>
        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit modi architecto perspiciatis illo. Assumenda ipsa incidunt aspernatur velit accusamus quis perspiciatis atque ab quia voluptatem, aut quaerat laborum et soluta distinctio hic doloribus quibusdam? </p>


      </div>
      <div className='bg-[#F2F2F3] h-14 flex items-center px-6 w-full absolute bottom-0 left-0'>
        <div className='flex gap-5 items-center'>
          <p className='badge badge-primary text-md py-4 px-3'>Full Time</p>
          <p className='badge badge-primary text-md py-4 px-3'>Part Time</p>
          <p className='badge badge-primary text-md py-4 px-3'>Remote</p>
        </div>
      </div>
      <div className='absolute top-5 right-5'>
        {/* <ButtonDefault text='apply'></ButtonDefault> */}
        <label for="my-modal-3" class="btn modal-button border">Apply</label>
        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box relative">
            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <form onSubmit={handleSubmit(Applyform)}>
          <label className='pb-5'>Email Address</label>
            <br></br>
            <input ref={emailRef} {...register("email")} type="email" className='mt-4 border border-gray-400 rounded w-full bg-white text-gray-700 focus:outline-none focus:border-gray-500 pl-5 h-10'></input>
            <br></br>
            <label className='my-4 inline-block'>Upload Resume</label>
            <br></br>
            <input ref={fileRef} {...register("file")} type="file"></input>
            <br></br>
            <input className='btn mt-5' type="submit" value="submit"></input>
         </form>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default JobSCard;