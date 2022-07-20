import React from "react";
import MakehrImpactfull from "./MakeHrImpactfull/MakehrImpactfull";
import Testimonial from "./Testimonial/Testimonial";
import TrustedBy from "./TrustedBy/TrustedBy";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TrustedBy />
      <MakehrImpactfull />
      <Testimonial />
      <Contact></Contact>
    </div>
  );
};

export default Home;
