import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { HiExternalLink, HiOutlineCamera } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Loading from "../../../components/Shared/Loading/Loading";
import fetching from "../../../hooks/UseAddUserInfo/fetching";
import getCompanyAction from "../../../stateManagement/actions/getCompanyAction";
import getJobPosts from "../../../stateManagement/actions/getJobPostAction";
import recallApi from "../../../stateManagement/actions/recallApi";
import Employee from "../Employee/Employee";
import JobSCard from "../JobPost/Jobs-card";
import ChangeCompanyCoverModal from "./ChangeCompanyCoverModal";
import "./Company.css";

const Company = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { jobPost } = useSelector((state) => state?.jobPostState);
  const recall = useSelector((state) => state.recallApi);
  const { isLoading, companyDetail } = useSelector((state) => state.getCompany);
  const { currentUser } = useSelector((state) => state.setUserRole);
  const handleCompanyDetails = async (event) => {
    setLoading(true);
    event.preventDefault();
    const companyName = event.target.name.value;
    const companyWebUrl = event.target.websiteLink.value;
    const companyOverview = event.target.overview.value;
    const companySpecialties = event.target.specialties.value;

    const allCompanyDetails = {
      companyName,
      companyOverview,
      companySpecialties,
      companyWebUrl,
    };
    const url = `/company/${currentUser.companySecret}`;
    await fetching.put(url, allCompanyDetails);
    dispatch(recallApi(!recall));
    setLoading(false);
  };

  useEffect(() => {
    dispatch(getJobPosts({ companySecret: currentUser?.companySecret }));
    dispatch(getCompanyAction({ companySecret: currentUser?.companySecret }));
  }, [dispatch, currentUser, recall]);

  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-5">
      <div className="bg-base-100 ">
        <figure className="relative">
          <div>
            <div className=" ">
              <div>
                <label
                  htmlFor="editCoverImage"
                  className="btn  modal-button border border-primary bg-white absolute bottom-0 right-0 text-black hover:bg-white hover:border-primary justify-end "
                >
                  <HiOutlineCamera className="text-2xl"></HiOutlineCamera>{" "}
                  Change Cover photo
                </label>

                <ChangeCompanyCoverModal></ChangeCompanyCoverModal>
              </div>
            </div>
            {companyDetail?.coverImg ? (
              <img
                className="md:h-96 h-52 w-full rounded-lg mb-8"
                src={companyDetail?.coverImg}
                alt="company-banner"
              />
            ) : (
              <div className=" bg-gradient-to-tr from-primary to-secondary   mb-8 md:h-96 h-52 w-full rounded-lg flex justify-center items-center">
                <div className="text-white text-xl">No Cover Photo Added</div>
              </div>
            )}
          </div>
        </figure>
      </div>

      {companyDetail?.companyWebUrl && (
        <div className="mt-3">
          <a
            rel="noopener noreferrer"
            href={companyDetail?.companyWebUrl}
            target="_blank"
            className="btn btn-outline border border-primary "
          >
            Visit website <HiExternalLink className="ml-1" />
          </a>
        </div>
      )}
      <input type="checkbox" id="editDetails" className="modal-toggle" />
      <label htmlFor="editDetails" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <form
            className="flex flex-col items-center	"
            onSubmit={handleCompanyDetails}
          >
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Company Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={companyDetail?.companyName}
                placeholder="Type here"
                className="border input input-bordered input-primary w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">
                  Website Link:- ( https://www.google.com -- protocol require )
                </span>
              </label>
              <input
                type="text"
                defaultValue={companyDetail?.companyWebUrl}
                name="websiteLink"
                placeholder="Type here"
                className="border input input-bordered input-primary w-full "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Overview</span>
              </label>
              <textarea
                defaultValue={companyDetail?.companyOverview}
                className="border input input-bordered input-primary w-full  h-24"
                name="overview"
                placeholder="Type here"
              ></textarea>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Specialties</span>
              </label>
              <textarea
                defaultValue={companyDetail?.companySpecialties}
                className="border input input-bordered input-primary w-full  h-24"
                name="specialties"
                placeholder="Type here"
              ></textarea>
            </div>
            <div className=" w-full mt-5  rounded-md">
              <input
                className="btn border-2  border-primary text-primary rounded-md w-full hover:bg-primary hover:border-primary hover:text-white duration-300 uppercase"
                type="submit"
                value="Edit Details"
              />
            </div>
          </form>
        </label>
      </label>

      <div className="flex justify-between">
        <div className="text-4xl mt-3 mb-3 text-secondary">
          {companyDetail?.companyName}
        </div>

        <label
          htmlFor="editDetails"
          className="btn btn-outline mt-3 text-black-600 border border-primary"
        >
          Edit Details <FiEdit className="ml-1" />
        </label>
      </div>

      <Tabs className="tab-customize pb-10">
        <TabList>
          <Tab>About</Tab>
          <Tab>jobs</Tab>
          <Tab>Peoples</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            Overview
          </h2>
          <div>
            {companyDetail?.companyOverview ? (
              <p className=" p-5   shadow-lg">
                {companyDetail?.companyOverview}
              </p>
            ) : (
              <p className="h-24  p-5  flex justify-center items-center  shadow-lg">
                <p>overview unavailable</p>
              </p>
            )}
          </div>

          <div className=" mb-5 ">
            <h2 className="text-lg font-bold  text-primary  mt-10 mb-3">
              Specialties
            </h2>
            {companyDetail?.companySpecialties ? (
              <div className=" p-5  shadow-lg">
                {companyDetail?.companySpecialties}
              </div>
            ) : (
              <p className="h-24  p-5  flex justify-center items-center  shadow-lg">
                <p>specialties Details unavailable</p>
              </p>
            )}
          </div>
        </TabPanel>

        {/* jobs tab panel */}
        <TabPanel>
          <div>
            {jobPost.map((job, index) => (
              <JobSCard key={index} job={job}></JobSCard>
            ))}
          </div>
        </TabPanel>

        {/* people tab panel */}
        <TabPanel>
          <Employee></Employee>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Company;
