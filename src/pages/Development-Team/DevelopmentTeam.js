import React from "react";
import Ali from "./Ali/Ali";
import Imtiaz from "./Imtiaz/imtiaz";
import Nahid from "./Nahid/Nahid";
import Sayed from "./Sayed/Sayed";
import Shakil from "./Shakil/Shakil";
import Siam from "./Siam/Siam";

const DevelopmentTeam = () => {
  return (
    <div className="container mx-auto px-5 mt-20">
      <div className="mt-10">
        <h6 className="text-center text-bold text-primary sm:text-2xl text-xl uppercase font-semibold">
          Meet our
        </h6>
        <h1 className="text-center lg:text-5xl md:text-4xl text-2xl text-primary font-bold uppercase ">
          Development Team
        </h1>
      </div>
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="grid gap-8 mb-6 lg:mb-16 lg:grid-cols-2">
              <Shakil />
              <Siam />
              <Ali />
              <Imtiaz />
              <Nahid />
              <Sayed />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DevelopmentTeam;
