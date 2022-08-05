import React from "react";
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
import { FaEdit } from "react-icons/fa";

const Company = () => {
  // dynamic way to save image bb
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

    const allCompanyDetails = {
      companyName,
      companyOverview,
      companyspecialties,
    };

    fetch("", {
      method: "POST", // or 'PUT'
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

  return (
    <>
      <div className="bg-base-100 ">
        <figure className="relative">
          <div>
            <div className=" ">
              {" "}
              <div>
                <a
                  href="#my-modal-2"
                  class="btn border border-primary bg-white absolute bottom-0 right-0 text-black hover:bg-white hover:border-primary justify-end"
                >
                  <HiOutlineCamera className="text-2xl"></HiOutlineCamera> Edit
                  Cover photo
                </a>

                <div class="modal" id="my-modal-2">
                  <div class="modal-box">
                    <h3 class="font-bold text-lg">Edit Cover picture!</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div>
                        <input
                          type="file"
                          className="input input-bordered w-full max-w-xs"
                          {...register("image", {
                            required: {
                              value: true,
                              message: "Image is Required",
                            },
                          })}
                        />
                      </div>
                      <div class="modal-action">
                        <input
                          className="btn w-full max-w-xs text-white"
                          type="submit"
                          value="Add"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="h-96 cover-img"
              src="https://i.ibb.co/Bggt5pt/Screenshot-5.png"
              alt="Shoes"
            />
          </div>
        </figure>
        <div>
          {/* <label for="company-modal" class="btn btn-primary modal-button">Edit Details</label> */}

          <input type="checkbox" id="company-modal" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box relative">
              <label
                for="company-modal"
                class="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <form>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("example")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
        {/* <div className="text-4xl p-3  ">Miami HEAT</div> */}

        {/* edit name dynamic way  */}

        {/* <!-- The button to open modal --> */}
        <label for="my-modal-4" class="btn modal-button">
          Edit Details <FaEdit />
        </label>

        {/* <!-- Put this part before </body> tag --> */}
        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
        <label for="my-modal-4" class="modal cursor-pointer">
          <label class="modal-box relative" for="">
            <form onSubmit={handleCompanyDetails}>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                class="input input-bordered input-primary w-full max-w-xs"
              />
              <br /> <br />
              <textarea
                class="textarea textarea-primary"
                name="overview"
                placeholder="Overview"
              ></textarea>
              <br /> <br />
              <textarea
                class="textarea textarea-primary"
                name="specialties"
                placeholder="Specialties"
              ></textarea>
              <br /> <br />
              <input
                className="input input-bordered input-primary "
                type="submit"
                value="Add Details"
              />
            </form>
          </label>
        </label>

        {/* edit name dynamic way end */}

        <div>
          {/* <a className="text-primary" href="#my-modal-2">
            Edit
          </a> */}

          {/* <div class="modal" id="my-modal-2">
            <div class="modal-box">
              <h3 class="font-bold text-lg">Edit Cover picture!</h3>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </form>
            <div class="modal-action">
              <input
                className="btn w-full max-w-xs text-white"
                type="submit"
                value="Add"
              />
            </div>
          </div> */}
        </div>
        <div className="p-3">
          <button className="btn btn-outline ">
            Visit website <HiExternalLink className="text-2xl ml-1" />
          </button>
          <div>
            {/* <a className="text-primary" href="#my-modal-2 ">
              Edit
            </a> */}

            {/* <div class="modal" id="my-modal-2">
              <div class="modal-box">
                <h3 class="font-bold text-lg">Edit Cover picture!</h3>
                <input
                  className="btn w-full max-w-xs text-white"
                  type="submit"
                  value="Add"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <Tabs className="tab-customize">
        <TabList>
          <Tab>About</Tab>
          <Tab>jobs</Tab>
          <Tab>People</Tab>
        </TabList>

        {/* about tab panel */}
        <TabPanel>
          {/* edit overview dynamic way  */}

          {/* edit overview dynamic way end */}

          <h2 className="text-xl font-semibold">Overview</h2>
          <div className=" ">
            {" "}
            <div>
              {/* <a className="text-primary" href="#my-modal-2">
                Edit
              </a> */}

              {/* <div class="modal" id="my-modal-2">
                <div class="modal-box">
                  <h3 class="font-bold text-lg">Edit Cover picture!</h3>
                  <input
                    type="text"
                    placeholder="set link"
                    className="input w-full  mb-5 home-contact-input "
                  />
                  <div class="modal-action">
                    <a href="#" class="btn">
                      Oky!
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div>
            <p className="text-lg pt-5">
              Nordstone is a global software consultancy headquartered in
              London. We are a team of world-class developers, designers,
              product strategists and growth hackers. Together we have built
              100+ products on mobile, web and on the blockchain. Nordstone’s
              CEO has a professional background in Banking and several years ago
              he took the leap of faith and stepped out of the corporate world
              to launch his first venture - the UK’s first mobile app combating
              loneliness and scaled the product to 70+ countries. He now leads
              Nordstone, a global software consultancy, partnering with
              entrepreneurs and businesses to turn their visions into reality.
              We are not your ordinary consultancy. Nordstone is built by
              experienced people who have been on the other side of the table.
              We treat every project as if it was our own, from startup ventures
              to enterprise brands.
            </p>
          </div>

          <div className="pt-10">
            {/* edit Specialties dynamic way  */}
            {/* edit Specialties dynamic way  end*/}
            <h2 className="text-lg font-bold pb-5">Specialties</h2>
            <div>
              {/* <a className="text-primary" href="#my-modal-2">
                Edit
              </a> */}

              {/* <div class="modal" id="my-modal-2">
                <div class="modal-box">
                  <h3 class="font-bold text-lg">Edit Cover picture!</h3>
                  <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                  />
                </form>
                <div class="modal-action">
                  <input
                    className="btn w-full max-w-xs text-white"
                    type="submit"
                    value="Add"
                  />
                </div>
              </div> */}
            </div>
            Mobile App Development, iOS, Android, UI/UX Designs, Product Market
            Fit, In-App Purchases, Backend Development, Machine Learning, APIs,
            Google Play Store, Apple App Store, Frontend Development,
            Blockchain, NFTs, Web Development, and Database Structuring
          </div>
        </TabPanel>

        {/* jobs tab panel */}
        <TabPanel>
          <div class=" w-96 rounded  align-middle p-4 shadow-lg shadow-blue-500/50 hover:bg-white-700 border	mb-3">
            <figure>
              {" "}
              <img className="h-60 w-96 rounded" src={miami} alt="" />
            </figure>
            <div class="">
              <h1 class="text-xl font-bold">Mern Stack Developer</h1>
              <p className="font-bold ">Miami and Drive Way</p>
              <div class=" justify-end">
                <span>
                  <small className="font-light">1 day ago</small>
                </span>
              </div>
            </div>
          </div>
        </TabPanel>

        {/* people tab panel */}
        <TabPanel>
          <div class=" w-96 rounded text-center  p-4 shadow-lg shadow-blue-500/50 hover:bg-white-700 border mb-3">
            <div class="avatar ">
              <div class="w-24 rounded-full">
                <img src={people} />
              </div>
            </div>
            <div class="">
              <h3 class="text-xl font-bold">Job's Ladder Limited</h3>
              <div class=" justify-end">
                <span>
                  <small className="font-light">
                    Actively looking for Full-time opportunities.
                  </small>
                </span>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Company;
