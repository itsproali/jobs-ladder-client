import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonDefault from "../../../components/ButtonDefault/ButtonDefault";
import getJobPosts from "../../../stateManagement/actions/getJobPostAction";
import Search from "../../Search/Search";
import JobSCard from "./Jobs-card";

const JobPost = () => {
  const dispatch = useDispatch();
  const { jobPost } = useSelector((state) => state?.jobPostState);
  const { currentUser } = useSelector((state) => state.setUserRole);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    dispatch(
      getJobPosts({ companySecret: currentUser?.companySecret, searchText })
    );
  }, [dispatch, currentUser, searchText]);

  return (
    <div className="capitalize">
      <div className="flex flex-col sm:gap-3 gap-1 justify-center items-center ">
        <h5 className="font-bold uppercase text-primary sm:text-lg text-sm">
          job circulars
        </h5>
        <h1 className=" md:text-3xl sm:text-2xl text-lg font-bold uppercase">
          posted by {currentUser?.companyName} company
        </h1>
      </div>
      <div className="flex justify-between items-center mt-8">
        <Search setSearchText={setSearchText}></Search>

        <Link to="/dashboard/jobpostform">
          <ButtonDefault text="add new"></ButtonDefault>
        </Link>
      </div>
      <div>
        {jobPost.map((job, index) => (
          <JobSCard key={index} job={job}></JobSCard>
        ))}
      </div>
    </div>
  );
};

export default JobPost;
