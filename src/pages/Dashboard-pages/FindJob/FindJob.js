import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Loading from "../../../components/Shared/Loading/Loading";
import fetching from "../../../hooks/UseAddUserInfo/fetching";
import getJobPosts from "../../../stateManagement/actions/getJobPostAction";
import JobSCard from "../JobPost/Jobs-card";

const FindJob = () => {
  const [pageNo, setPageNo] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const { isLoading, jobPost, error } = useSelector(
    (state) => state.jobPostState
  );
  // const [jobs, setJobs] = useState(jobPost);

  useEffect(() => {
    // fetching.get("job-post/count").then((res) => {
    //   const count = res?.data?.count;
    //   setPageNo(Math.ceil(count / 10));
    // });
    setPageNo(Math.ceil(jobPost?.length / 10));
  }, [jobPost]);

  useEffect(() => {
    dispatch(getJobPosts({ currentPage, searchText }));
  }, [dispatch, currentPage, searchText]);

  const getSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.inputValue.value;
    setSearchText(searchValue);
    // fetching.get(`job-post/search/${searchText}`).then((res) => {
    //   setPageNo(Math.ceil(res?.data?.length / 10));
    //   setJobs(res?.data);
    // });
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    Swal.fire({
      title: error,
      icon: "error",
    });
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
      <div className="flex items-center justify-between mt-6">
        <h1 className="flex items-center gap-2 text-secondary">
          {" "}
          <AiFillEye className="text-xl" /> Sort By Time
        </h1>
        <form onSubmit={getSearch}>
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="What are you looking for ....?"
                className="input input-bordered focus:border-primary"
                name="inputValue"
              />
              <label className="btn btn-square btn-primary">
                <input type="submit" value="" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </label>
            </div>
          </div>
        </form>
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
