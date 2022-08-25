import React, { useEffect } from "react";
import "./Company.css";
import { HiExternalLink } from "react-icons/hi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useForm } from "react-hook-form";
import { HiOutlineCamera } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import ChangeProfilePhotoModal from "../Employee/changeProfilePhotoModal";
import Employee from "../Employee/Employee";
import { useDispatch, useSelector } from "react-redux";
import getJobPosts from "../../../stateManagement/actions/getJobPostAction";
import { useAuthState } from "react-firebase-hooks/auth";
import useUserRole from "../../../hooks/UseAddUserInfo/useUserRole";
import auth from "../../../firebase-init";
import JobSCard from "../JobPost/Jobs-card";
import ChangeCompanyCoverModal from "./ChangeCompanyCoverModal";
import getCompanyAction from "../../../stateManagement/actions/getCompanyAction";
import Loading from "../../../components/Shared/Loading/Loading";

const Company = () => {
  const dispatch = useDispatch();
  const { jobPost } = useSelector((state) => state?.jobPostState);
  const recall = useSelector((state) => state.recallApi);
  const { isLoading, companyDetail } = useSelector((state) => state.getCompany);
  const [user] = useAuthState(auth);
  const { currentUser } = useUserRole(user);

  console.log(companyDetail);

  const handleCompanyDetails = (event) => {
    event.preventDefault();
    const companyName = event.target.name.value;
    const companyWebUrl = event.target.websiteLink.value;
    const companyOverview = event.target.overview.value;
    const companySpecialties = event.target.specialties.value;
    console.log(companyName, companyOverview, companySpecialties);

    const allCompanyDetails = { companyName, companyOverview, companySpecialties, companyWebUrl };

    console.log(allCompanyDetails);

    // fetch("", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(allCompanyDetails),
    // })
    //   .then((response) => response.json())
    //   .then((allCompanyDetails) => {
    //     console.log("Success:", allCompanyDetails);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  useEffect(() => {
    dispatch(getJobPosts({ companySecret: currentUser?.companySecret }));
    dispatch(getCompanyAction({ companySecret: currentUser?.companySecret }));
  }, [dispatch, currentUser, recall]);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-5">
      {/* cover photo for company */}
      <div className="bg-base-100 ">
        <figure className="relative">
          <div>
            <div className=" ">
              <div>
                <label
                  for="editCoverImage"
                  class="btn  modal-button border border-primary bg-white absolute bottom-0 right-0 text-black hover:bg-white hover:border-primary justify-end "
                >
                  <HiOutlineCamera className="text-2xl"></HiOutlineCamera> Change Cover photo
                </label>

                <ChangeCompanyCoverModal></ChangeCompanyCoverModal>
              </div>
            </div>
            {/* <img
              className="h-96 w-full rounded-lg "
              src={}
              alt="company-banner"
            /> */}
            <div className=" bg-gradient-to-tr from-primary to-secondary   h-96 w-full rounded-lg flex justify-center items-center">
              <div className="text-white text-xl">No Cover Photo Added</div>
            </div>
          </div>
        </figure>
      </div>

      <div className="mt-3">
        <button className="btn btn-outline border border-primary ">
          Visit website <HiExternalLink className="ml-1" />
        </button>
        <div></div>
      </div>

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="editDetails" class="modal-toggle" />
      <label for="editDetails" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <form className="flex flex-col items-center	" onSubmit={handleCompanyDetails}>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Company Name</span>
              </label>
              <input type="text" name="name" placeholder="Type here" class="border input input-bordered input-primary w-full " />
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Website Link:-</span>
              </label>
              <input type="text" name="websiteLink" placeholder="Type here" class="border input input-bordered input-primary w-full " />
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Overview</span>
              </label>
              <textarea class="border input input-bordered input-primary w-full  h-24" name="overview" placeholder="Type here"></textarea>
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Specialties</span>
              </label>
              <textarea class="border input input-bordered input-primary w-full  h-24" name="specialties" placeholder="Type here"></textarea>
            </div>
            <div class=" w-full mt-5  rounded-md">
              <input
                className="btn border-2  border-primary text-primary rounded-md w-full hover:bg-primary hover:border-primary hover:text-white duration-300 uppercase"
                type="submit"
                value="Edit Details"
              />
            </div>
          </form>
        </label>
      </label>

      {/* edit name dynamic way  */}

      <div className="flex justify-between">
        <div className="text-4xl mt-3 mb-3 text-secondary">{companyDetail?.companyName}</div>

        <label for="editDetails" class="btn btn-outline mt-3 text-black-600 border border-primary">
          Edit Details <FiEdit className="ml-1" />
        </label>
      </div>

      <Tabs className="tab-customize pb-10">
        <TabList>
          <Tab>About</Tab>
          <Tab>jobs</Tab>
          <Tab>Peoples</Tab>
        </TabList>

        {/* about tab panel */}
        <TabPanel>
          <h2 className="text-xl font-bold text-primary">Overview</h2>

          <div>
            {companyDetail?.companyOverview ? (
              <p className=" p-5   shadow-lg">{companyDetail?.companyOverview}</p>
            ) : (
              <p className="h-24  p-5  flex justify-center items-center  shadow-lg">
                <p>overview unavailable</p>
              </p>
            )}
          </div>

          <div className=" mb-5 ">
            <h2 className="text-lg font-bold mt-2 text-primary">Specialties</h2>
            {companyDetail?.companySpecialties ? (
              <div className=" p-5  shadow-lg">{companyDetail?.companySpecialties}</div>
            ) : (
              <p className="h-24  p-5  flex justify-center items-center  shadow-lg">
                <p>overview specialties</p>
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
