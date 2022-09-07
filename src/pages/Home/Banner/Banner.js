import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../../asset/banner-illustration.jpg";
import ButtonDefault from "../../../components/ButtonDefault/ButtonDefault";
const Banner = () => {
  return (
    <section className="banner mt-16 py-16">
      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-2 px-5 gap-4 lg:text-left md:text-left sm:text-left text-center">
          <div className="banner-content content-center grid order-2 lg:-order-1">
            <h1 className="text-text-main-color lg:text-4xl md:text-3xl sm:text-3xl text-3xl font-bold uppercase">
              The smart HR software for growing businesses
            </h1>
            <p className="text-text-secondary-color lg:text-lg md:text-base text-base font-normal mt-5 lg:mt-10">
              Modernize your HR. Manage your hiring, onboarding, time-off,
              employee data, and HR workflows in one place.
            </p>
            <Link to="/about" className="mt-5">
              <ButtonDefault>Explore Us</ButtonDefault>
            </Link>
          </div>
          <div className="banner-image-wrapper order-1 lg:order-3 lg:pt-0 md:pt-0 sm:pt-0 pt-10">
            <img src={bannerImg} alt="Banner"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
