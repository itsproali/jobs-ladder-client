import React from "react";
import logo from "../../asset/Jobs-ladder-logo-blue.png";
import "./About.css";
import history from "../../img/composed-book-school-supplies_23-2147654593 (1).jpg";
import commitment from "../../img/company-has-achieved-successful-business-deal_1150-43185.webp";
import information from "../../img/illustration-social-media-concept_53876-17828.webp";

const About = () => {
  return (
    <div>
      <div className="about">
        <div>
          <img className="about-img mt-28 mx-auto " src={logo} alt="" />
        </div>
        <div>
          <div className="box-about mx-auto">
            <div className=" pt-10 sm:px-20 px-5 items-center text-center">
              <h2 className=" text-3xl  font-extrabold ...">About us</h2>
              <p>
                Jobs ladder makes it fast and easy for businesses to delight
                their customers and employees. We do this by taking a fresh
                approach to building and delivering software-as-a-service that’s
                affordable, quick to implement, and designed for the end-user.
                Unlike legacy software, Jobs ledder builds tech that works for
                everyone, making it easy for IT, customer service, sales,
                marketers and HR to do their job and delight their customers.
                More than 50,000 companies use jobs ledder’ SaaS to enable a
                better customer experience (CX, CRM) and employee experience
                (ITSM, HRSM).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-14 px-5">
        <div className="text-4xl ">
          <h1 className="text-center">Who we are</h1>
        </div>
        <div className="container  mx-auto grid gap-2 mt-14  justify-center  lg:grid-cols-3 grid-cols-1 py-14vb ">
          <div>
            <div className="card  bg-base-100 shadow-xl mx-auto">
              <figure>
                <img src={history} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">History of Jobs ledder!!!</h2>
                <p>Jobs leddder since 2012 workin on job plece...</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="card  bg-base-100 shadow-xl mx-auto">
              <figure>
                <img src={commitment} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Our Commitments!!!</h2>
                <p>We are Committed to provide best jobs services...</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="card  bg-base-100 shadow-xl mx-auto">
              <figure>
                <img src={information} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Access to information!!! </h2>
                <p>Access to Information of the jobs ledder site... </p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
