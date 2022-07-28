import React from 'react';
import image1 from '../../../asset/company.jpg'
import './Company.css'
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";



const Company = () => {
    return (

        <>

            <div className="  bg-base-100 shadow-xl">
                <figure><img className='h-96 cover-img' src={image1} alt="Shoes" /></figure>
                <div className="text-4xl p-3  ">
                    Miami HEAT
                </div>
                <div className='p-3'>
                    <button className="btn btn-outline ">Visit website <HiExternalLink className='text-2xl ml-1' /></button>

                </div>


            </div>

            <div class="navbar bg-base-100">
                {/* <div class="navbar-start">
                    <div class="dropdown">

                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>

                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                </div> */}
                <div class=" navbar-start lg:flex">
                    <ul class="menu menu-horizontal p-0 font-bold">
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Jobs</Link></li>
                        <li><Link to="/">People</Link></li>
                    </ul>
                </div>

            </div>
        </>



    );
};

export default Company;