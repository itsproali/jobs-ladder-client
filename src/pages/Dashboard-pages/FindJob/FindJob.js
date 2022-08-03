import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { AiFillEye } from "react-icons/ai";
import Loading from "../../../components/Shared/Loading/Loading";
import JobSCard from "../JobPost/Jobs-card";
import getJobPosts from "../../../stateManagement/actions/Actions";

const FindJob = () => {
  const dispatch = useDispatch()
  const { isLoading, jobPost, error } = useSelector((state) => state.jobPostState);
  useEffect(()=> {
    dispatch(getJobPosts())
   } , [dispatch])

  if (isLoading) {
    return <Loading />
  }

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
      <div>
        {
          jobPost.map( job => <JobSCard key={job?._id} job={job}></JobSCard>)
        }
      </div>
    </div>
  );
};

export default FindJob;
