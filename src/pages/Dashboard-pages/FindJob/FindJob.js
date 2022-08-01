import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { AiFillEye } from "react-icons/ai";
import getJobPosts from "../../../stateManagement/actions/Actions";

const FindJob = () => {
  const dispatch = useDispatch();
  const {isLoading , jobPost , error} = useSelector( (state) => state.jobPostState) ; 
  useEffect(()=> {
    dispatch(getJobPosts())
   } , [dispatch])
   console.log(jobPost);
  return (
    <div>
      <div className="flex flex-col sm:gap-3 gap-1 justify-center items-center ">
        <h5 className="font-bold uppercase text-primary sm:text-lg text-sm">
          Let's Find it
        </h5>
        <h1 className=" md:text-3xl sm:text-2xl text-lg font-bold uppercase">
          Your Dream Job is here
        </h1>
      </div>
      <div>
        <h1 className='flex items-center gap-2 text-secondary'> <AiFillEye className='text-xl' /> Sort By Time</h1>
      </div>
    </div>
  );
};

export default FindJob;
