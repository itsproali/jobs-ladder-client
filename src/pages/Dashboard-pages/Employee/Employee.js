import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MailEmployee from "./MailEmployee";
const Employee = () => {
  const navigate = useNavigate();
  const [employees, setEmployee] = useState([]); 
  const url = '/public/job.json'
  useEffect(()=>{
    fetch(url)
    .then(res=> res.json())
    .then(data=> setEmployee(data))
  },[]);
  
  return (
    <div className="grid grid-cols-3 gap-5">
      
      <div className='text-center border border-primary rounded-md border-1'>
        <div className=' flex justify-center items-center mt-6 mb-5 '>
          <div>
          <div class="avatar">
            <div class="w-34 rounded-full ">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <h2 className="mt-4 text-2xl capitalize"></h2>
          <p className="mt-1 text-xl capitalize">front end developer</p>

          <Link to="/" className="btn capitalize border border-primary text-primary rounded-md py-2 px-12 hover:bg-primary hover:border-primary hover:text-white duration-300 mt-8 text-xl">send mail</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
