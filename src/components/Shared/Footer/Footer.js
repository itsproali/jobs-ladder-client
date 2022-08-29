import React from "react";
import logo from "../../../asset/Jobs-ladder-logo-blue.png"
import {Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-indigo-800 text-base-100">
        <div>
          <Link to='/'><img src={logo} alt="" className="sm:w-48 w-32"/></Link>
          
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Investor</a>
          <a className="link link-hover">Partners</a>
          <a className="link link-hover">Advertisement</a>
          <a className="link link-hover">Contact Us</a>
        </div>
        <div>
          <span className="footer-title">Top Features</span>
          <a className="link link-hover">Recruitment management</a>
          <a className="link link-hover">Employee database</a>
          <a className="link link-hover">HR reports</a>
          <a className="link link-hover">Mailing Contact</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Helpline</a>
          <a className="link link-hover">Rules and regulation</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="text-sm text-center px-10 py-4  bg-indigo-900 text-base-100 border-base-300">
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
