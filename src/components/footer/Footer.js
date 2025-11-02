import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { logo } from "../../assets/index";

// renders the footer of the website
const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      
      {/* Logo & Social Icons */}
      <div className="w-full h-full flex flex-col gap-8">
        {/* <img className="w-32" src={logo} alt="logo" /> */}
        <div className="flex gap-4">
          <span className="bannerIcon"><FaFacebookF /></span>
          <span className="bannerIcon"><FaTwitter /></span>
          <span className="bannerIcon"><FaLinkedinIn /></span>
          <span className="bannerIcon"><FaGithub /></span>
        </div>
      </div>

      {/* Quick Links */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">Quick Link</h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li className="w-full text-lg relative hover:text-designColor duration-300 cursor-default">About Us</li>
          <li className="w-full text-lg relative hover:text-designColor duration-300 cursor-default">Services</li>
          <li className="w-full text-lg relative hover:text-designColor duration-300 cursor-default">Portfolio</li>
          <li className="w-full text-lg relative hover:text-designColor duration-300 cursor-default">Contact</li>
          {/* <li className="w-full text-lg relative hover:text-designColor duration-300 cursor-default">BLOG</li> */}
        </ul>
      </div>

      {/* Resources */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">RESOURCES</h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li className="w-full text-lg relative hover:text-designColor duration-300 cursor-default">Authentication</li>
          <li className="w-full text-lg relative hover:text-designColor duration-300 cursor-default">System Status</li>
          <li className="w-full text-lg relative hover:text-designColor duration-300 cursor-default">Terms of Service</li>
          <li className="w-full text-lg relative hover:text-designColor duration-300 cursor-default">Pricing</li>
          <li className="w-full text-lg relative hover:text-designColor duration-300 cursor-default">Over Right</li>
        </ul>
      </div>

      {/* Developers */}
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">DEVELOPERS</h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li className="w-full text-lg relative hover:text-designColor duration-300 cursor-default">Documentation</li>
          <li className="w-full text-lg relative hover:text-designColor duration-300 cursor-default">Authentication</li>
          <li className="w-full text-lg relative hover:text-designColor duration-300 cursor-default">API Reference</li>
          <li className="w-full text-lg relative hover:text-designColor duration-300 cursor-default">Support</li>
          <li className="w-full text-lg relative hover:text-designColor duration-300 cursor-default">Open Source</li>
        </ul>
      </div>
      
    </div>
  );
}

export default Footer;
