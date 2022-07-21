import React from "react";
import logo from "../../../asset/Jobs-ladder-logo.png"
import {Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer class="footer p-10 bg-[#4D0C7A] text-base-100">
        <div>
          <Link to='/'><img src={logo} alt="" className="sm:w-48 w-32"/></Link>
          
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About</a>
          <a class="link link-hover">Investor</a>
          <a class="link link-hover">Partners</a>
          <a class="link link-hover">Advertisement</a>
          <a class="link link-hover">Contact Us</a>
        </div>
        <div>
          <span class="footer-title">Top Features</span>
          <a class="link link-hover">Recruitment management</a>
          <a class="link link-hover">Employee database</a>
          <a class="link link-hover">HR reports</a>
          <a class="link link-hover">Mailing Contact</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Helpline</a>
          <a class="link link-hover">Rules and regulation</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer class="text-sm text-center px-10 py-4  bg-[#411361] text-base-100 border-base-300">
        <div>
        
          <p className="">
          Copyright © 2022 - All right reserved by Job's Ladder Team.
          </p>
          <p>
            Developed by <Link to='/development-team' className="text-primary font-bold link link-hover">Runtime Terror</Link> Development team
          </p>
        </div>
      
      </footer>
    </div>
  );
};

export default Footer;
