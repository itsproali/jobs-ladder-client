import React from "react";
import logo from "../../img/Jobs-ladder-logo.11594fc28c14ccf596d8.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <div>
        <img className="about-img mt-14 mx-auto " src={logo} alt="" />
      </div>
      <div>
        <div class="box-about mx-auto">
          <figure class="px-10 pt-10"></figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-3xl  font-extrabold ...">About us</h2>
            <p>
              Jobs ladder makes it fast and easy for businesses to delight their
              customers and employees. We do this by taking a fresh approach to
              building and delivering software-as-a-service that’s affordable,
              quick to implement, and designed for the end-user. Unlike legacy
              software, Jobs ledder builds tech that works for everyone, making
              it easy for IT, customer service, sales, marketers and HR to do
              their job and delight their customers. More than 50,000 companies
              use jobs ledder’ SaaS to enable a better customer experience (CX,
              CRM) and employee experience (ITSM, HRSM).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
