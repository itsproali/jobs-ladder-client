import React, { useEffect } from "react";
import image1 from "../../../asset/company.jpg";
import "./Company.css";
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import miami from "../../../asset/miami.jpg";
import "react-tabs/style/react-tabs.css";
import people from "../../../asset/testimonial/client-3.png";
import { useForm } from "react-hook-form";
import { HiOutlineCamera } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import ChangeProfilePhotoModal from "../Employee/changeProfilePhotoModal";
import Employee from "../Employee/Employee";
import JobPost from "../JobPost/JobPost";
import { useDispatch, useSelector } from "react-redux";
import getJobPosts from "../../../stateManagement/actions/getJobPostAction";
import { useAuthState } from "react-firebase-hooks/auth";
import useUserRole from "../../../hooks/UseAddUserInfo/useUserRole";
import auth from "../../../firebase-init";
import JobSCard from "../JobPost/Jobs-card";

const Company = () => {
  const dispatch = useDispatch();
  const { jobPost } = useSelector((state) => state?.jobPostState);
  const [user] = useAuthState(auth);
  const [role, currentUser] = useUserRole(user);
  const imageStorageKey = "4dab8fd03df7f5dbf2aafd109eaffcf5";
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          console.log(result.data.url);
        }
      });
  };

  //post method using to fetch all details -------------------------------------------------------

  const handleCompanyDetails = (event) => {
    event.preventDefault();
    const companyName = event.target.name.value;
    const companyOverview = event.target.overview.value;
    const companyspecialties = event.target.specialties.value;
    console.log(companyName, companyOverview, companyspecialties);

    const allCompanyDetails = { companyName, companyOverview, companyspecialties };

    console.log(allCompanyDetails);

    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allCompanyDetails),
    })
      .then((response) => response.json())
      .then((allCompanyDetails) => {
        console.log("Success:", allCompanyDetails);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    dispatch(getJobPosts({ companySecret: currentUser?.companySecret }));
  }, [dispatch, currentUser]);
  return (
    <div className="px-5">
      {/* cover photo for company */}
      <div className="bg-base-100 ">
        <figure className="relative">
          <div>
            <div className=" ">
              {" "}
              <div>
                <label
                  for="editProfileImage"
                  class="btn  modal-button border border-primary bg-white absolute bottom-0 right-0 text-black hover:bg-white hover:border-primary justify-end "
                >
                  <HiOutlineCamera className="text-2xl"></HiOutlineCamera> Edit Cover photo
                </label>

                <ChangeProfilePhotoModal></ChangeProfilePhotoModal>
              </div>
            </div>
            <img
              className="h-96 cover-img"
              src="https://images.unsplash.com/photo-1507919909716-c8262e491cde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
              alt="company-banner"
            />
          </div>
        </figure>
        <div>
          <input type="checkbox" id="my-modal-4" class="modal-toggle" />
          <label for="my-modal-4" class="modal cursor-pointer">
            <label class="modal-box relative" for="">
              <form>
                {/* register your input into the hook by invoking the "register" function */}
                <input className="border input input-bordered input-primary w-full max-w-xs" defaultValue="test" {...register("example")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input className="border input input-bordered input-primary w-full max-w-xs" {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  className="input input-bordered input-primary w-full max-w-xs bg-primary text-white rounded-md hover:bg-secondary"
                  type="submit"
                />
              </form>
            </label>
          </label>
        </div>
      </div>

      <div className="mt-3">
        <button className="btn btn-outline border border-primary ">
          Visit website <HiExternalLink className="ml-1" />
        </button>
        <div></div>
      </div>
      {/* make dynamic name ,about and details dynamic form*/}

      {/* <!-- The button to open modal --> */}
      <label for="my-modal-5" class="btn btn-outline mt-3 text-black-600 border border-primary">
        Edit Details <FiEdit className="ml-1" />
      </label>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-5" class="modal-toggle" />
      <label for="my-modal-5" class="modal cursor-pointer">
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
            <br />
            <div class="form-control w-full bg-primary text-white rounded-md">
              <input
                className="input input-bordered input-primary w-full  bg-primary text-white rounded-md hover:bg-secondary"
                type="submit"
                value="Edit Details"
              />
            </div>
          </form>
        </label>
      </label>

      {/* edit name dynamic way  */}

      <div className="text-4xl mt-3 mb-3 text-secondary">Miami HEAT</div>

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
            <p className=" p-5   shadow-xl">
              Nordstone is a global software consultancy headquartered in London. We are a team of world-class developers, designers, product
              strategists and growth hackers. Together we have built 100+ products on mobile, web and on the blockchain. Nordstone’s CEO has a
              professional background in Banking and several years ago he took the leap of faith and stepped out of the corporate world to launch his
              first venture - the UK’s first mobile app combating loneliness and scaled the product to 70+ countries. He now leads Nordstone, a global
              software consultancy, partnering with entrepreneurs and businesses to turn their visions into reality. We are not your ordinary
              consultancy. Nordstone is built by experienced people who have been on the other side of the table. We treat every project as if it was
              our own, from startup ventures to enterprise brands.
            </p>
          </div>

          <div className=" mb-5 ">
            <h2 className="text-lg font-bold mt-2 text-primary">Specialties</h2>
            <div className=" p-5  shadow-xl">
              Mobile App Development, iOS, Android, UI/UX Designs, Product Market Fit, In-App Purchases, Backend Development, Machine Learning, APIs,
              Google Play Store, Apple App Store, Frontend Development, Blockchain, NFTs, Web Development, and Database Structuring
            </div>
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
