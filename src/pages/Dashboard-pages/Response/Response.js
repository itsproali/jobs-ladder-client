import React from "react";
import "./Response.css";
const Response = () => {
  return (
    <div className="">
      <h2 className="text-xl">Job Title: frontend developer</h2>
      <h2 className="text-xl">Date:</h2>
      <div className="flex justify-between pb-10">
        <div>
          <h2 className="font-semibold text-3xl">
            RESPONSE: <span className="text-primary font-semibold">1000</span>
          </h2>
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Summery Response</h2>
        </div>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th>Resume</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>blue@gmail.com</td>
                <td>blue@gmail.com</td>
              </tr>
              {/* {<!-- row 2 -->} */}
              <tr className="hover">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple@gmail.com</td>
                <td>Purple@gmail.com</td>
              </tr>
              {/* {<!-- row 3 -->} */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red@gmail.com</td>
                <td>Red@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Response;
