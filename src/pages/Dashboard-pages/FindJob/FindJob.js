import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Loading from "../../../components/Shared/Loading/Loading";
import fetching from "../../../hooks/UseAddUserInfo/fetching";
import getJobPosts from "../../../stateManagement/actions/getJobPostAction";
import Search from "../../Search/Search";
import JobSCard from "../JobPost/Jobs-card";

const FindJob = () => {
  const [pageNo, setPageNo] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const { isLoading, jobPost, error } = useSelector(
    (state) => state.jobPostState
  );

  useEffect(() => {
    let url = `job-post/count`;
    if (searchText) {
      url = `job-post/count?searchText=${searchText}`;
    }
    fetching.get(url).then((res) => {
      const count = res?.data?.count;
      setPageNo(Math.ceil(count / 10));
    });
  }, [jobPost, searchText]);

  useEffect(() => {
    dispatch(getJobPosts({ currentPage, searchText }));
  }, [dispatch, currentPage, searchText]);

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
        <Search setSearchText={setSearchText}></Search>
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
