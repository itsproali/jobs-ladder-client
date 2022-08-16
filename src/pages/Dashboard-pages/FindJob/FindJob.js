import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiFillEye } from "react-icons/ai";
import Loading from "../../../components/Shared/Loading/Loading";
import JobSCard from "../JobPost/Jobs-card";
import getJobPosts from "../../../stateManagement/actions/getJobPostAction";
import axios from "axios";

const FindJob = () => {
  const [pageNo, setPageNo] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const { isLoading, jobPost, error } = useSelector(
    (state) => state.jobPostState
  );

  useEffect(() => {
    axios.get("http://localhost:5000/job-post/count").then((res) => {
      const count = res?.data?.count;
      setPageNo(Math.ceil(count / 5));
    });
  }, []);

  useEffect(() => {
    dispatch(getJobPosts({currentPage}));
  }, [dispatch, currentPage]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex  flex-col sm:gap-3 gap-1 justify-center items-center ">
        <h5 className="font-bold uppercase text-primary sm:text-lg text-sm">
          Let's Find it
        </h5>
        <h1 className=" md:text-3xl sm:text-2xl text-lg font-bold uppercase">
          Your Dream Job is here
        </h1>
      </div>
      <div>
        <h1 className="flex items-center gap-2 text-secondary">
          {" "}
          <AiFillEye className="text-xl" /> Sort By Time
        </h1>
      </div>
      <div>
        {jobPost.map((job) => (
          <JobSCard key={job?._id} job={job}></JobSCard>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-center my-8">
        {[...Array(pageNo).keys()].map((number) => (
          <button
            className={`mx-2 px-4 py-2 border-2 hover:bg-primary transition-300 rounded-full ${
              currentPage === number && "bg-primary text-white"
            }`}
            key={number}
            onClick={() => setCurrentPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FindJob;
