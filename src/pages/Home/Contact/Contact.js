import React from "react";
import img1 from "../../../img/contact-box-bg-img-1.png";
import img2 from "../../../img/contact-round-1.png";
import img3 from "../../../img/contact.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="bg-[#952DDE] text-base-100 py-14">
      <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1 py-14">
        <div className="relative">
          <img className="contact-img1" src={img1} alt="" />
          <form className="contact-home w-3/4 py-14 px-10 z-10 relative mx-auto">
            <label className="pt-5">Full Name</label>
            <br />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full  mb-5 home-contact-input "
            />
            <br />
            <label className="pt-5">Phone number</label>
            <br />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full  mb-5 home-contact-input"
            />
            <br />
            <label className="pt-5">Message</label>
            <br />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full  mb-5 home-contact-input"
            />
            <div className="">
              <input className="btn btn-active btn-warning" type="Submit" />
            </div>
          </form>
          <img className="contact-img2" src={img2} alt="" />
        </div>

        <div className="mx-auto">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
