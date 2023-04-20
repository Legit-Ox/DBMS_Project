import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Typed from "react-typed";
import { useNavigate } from "react-router-dom";

import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function Landing2() {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-black">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          PLATE TRACKER
        </h1>
        <ul className="hidden md:flex">
          <li>
            <button
              className="p-4"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </button>
          </li>
          <li>
            <button
              className="p-4"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login{" "}
            </button>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000000] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            REACT.
          </h1>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold p-2">ORDERING WITH EASE</p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Eat from the best.
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Fast, flexible food for
            </p>
            <Typed
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-200"
              strings={["Breakfast", "Lunch", "Dinner"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-500">
            Food at your doorstep, faster than your hunger.
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Get Started
          </button>
        </div>
      </div>

      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={"/laptop.jpg"} alt="/" />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold ">
              RESTAURANT MANAGEMENT DASHBOARD
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Manage Your Orders With Ease
            </h1>
            <p>
              Welcome to Plate Tracker, the innovative restaurant management app
              that takes your business to the next level.
            </p>
            <br></br>
            <p>
              With Plate Tracker, you can easily manage your menu, track your
              orders, and stay on top of your finances all from one platform.
              Our app allows you to optimize your operations, increase
              efficiency, and improve profitability. For customers, our app
              offers a hassle-free way to discover and order from your
              restaurant. We offer a user-friendly interface and intuitive
              search functionality that makes finding and ordering food a
              breeze.
            </p>
            <br></br>
            <p>
              Thank you for choosing Plate Tracker as your restaurant management
              solution. We are excited to partner with you and help your
              business reach new heights!
            </p>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="w-full py-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
          <div className="lg:col-span-2 my-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Want tips & tricks to optimize your order?
            </h1>
            <p>Sign up to our newsletter and stay up to date.</p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                className="p-3 flex w-full rounded-md text-black"
                type="email"
                placeholder="Enter Email"
              />
              <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-3 my-5 px-3 py-3">
                Notify Me
              </button>
            </div>
            <p>
              We care about the protection of your data. Read our{" "}
              <span className="text-[#00df9a]">Privacy Policy.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={"/single.png"}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
            <p className="text-center text-4xl font-bold">$149</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Start Trial
            </button>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
              src={"/double.png"}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
            <p className="text-center text-4xl font-bold">$149</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            </div>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Start Trial
            </button>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={"/triple.png"}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
            <p className="text-center text-4xl font-bold">$149</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Start Trial
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">
            PLATE TRACKER
          </h1>
          <p className="py-4"></p>Delivering happiness, one meal at a time.
          <br></br>© Dhairya Shah All rights reserved.
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="py-2 text-sm">Analytics</li>
              <li className="py-2 text-sm">Marketing</li>
              <li className="py-2 text-sm">Management</li>
              <li className="py-2 text-sm">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">Documentation</li>
              <li className="py-2 text-sm">Guides</li>
              <li className="py-2 text-sm">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing2;
