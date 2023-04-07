import React, { useState } from "react";
import 'flowbite';
import { useDispatch } from "react-redux";
import { onLogout } from "../api/auth";
import { unauthenticateUser } from "../redux/slices/authSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMenu2 = () => setIsOpen2(!isOpen2);
  const toggleMenu3 = () => setIsOpen3(!isOpen3);
  const toggleMenu4 = () => setIsOpen4(!isOpen4);
  const logout = async () => {
    try {
      await onLogout();

      dispatch(unauthenticateUser());
      localStorage.removeItem("isAuth");
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <span className="font-semibold text-xl tracking-tight">
            My Navbar
          </span>
        </div>
        <div className="block lg:hidden ">
          <button
            id="nav"
            className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="menu w-full  flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
        <div className="text-md font-bold text-blue-700 lg:flex-grow">

          <div className="inline-block
          ">
      <button
        className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
        onClick={toggleMenu}
      >
        <span className="mr-1">City</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6.928 9.172a.5.5 0 0 1 .707 0L10 11.793l2.364-2.621a.5.5 0 0 1 .707 0l.707.707a.5.5 0 0 1 0 .707l-3.536 3.899a.5.5 0 0 1-.707 0l-3.536-3.899a.5.5 0 0 1 0-.707l.707-.707z"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-56 float-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Ahmedabad
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Mumbai
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Delhi
            </a>
          </div>
        </div>
      )}
    </div>

    <button
        className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
        onClick={toggleMenu2}
      >
        <span className="mr-1">Type</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6.928 9.172a.5.5 0 0 1 .707 0L10 11.793l2.364-2.621a.5.5 0 0 1 .707 0l.707.707a.5.5 0 0 1 0 .707l-3.536 3.899a.5.5 0 0 1-.707 0l-3.536-3.899a.5.5 0 0 1 0-.707l.707-.707z"
          />
        </svg>
      </button>
      {isOpen2 && (
        <div className="absolute mt-2 w-56 float-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Punjabi
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Inter-Continental
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              South Indian
            </a>
          </div>
        </div>
      )}

<button
        className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
        onClick={toggleMenu3}
      >
        <span className="mr-1">Veg/Non-Veg</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6.928 9.172a.5.5 0 0 1 .707 0L10 11.793l2.364-2.621a.5.5 0 0 1 .707 0l.707.707a.5.5 0 0 1 0 .707l-3.536 3.899a.5.5 0 0 1-.707 0l-3.536-3.899a.5.5 0 0 1 0-.707l.707-.707z"
          />
        </svg>
      </button>
      {isOpen3 && (
        <div className="absolute mt-2 w-56 float-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Veg
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Non-Veg
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Both
            </a>
          </div>
        </div>
      )}

<button
        className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
        onClick={toggleMenu4}
      >
        <span className="mr-1">Rating</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6.928 9.172a.5.5 0 0 1 .707 0L10 11.793l2.364-2.621a.5.5 0 0 1 .707 0l.707.707a.5.5 0 0 1 0 .707l-3.536 3.899a.5.5 0 0 1-.707 0l-3.536-3.899a.5.5 0 0 1 0-.707l.707-.707z"
          />
        </svg>
      </button>
      {isOpen4 && (
        <div className="absolute mt-2 w-56 float-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              1 star
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              2 star
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              3 star
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              4 star
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              5 star
            </a>
          </div>
        </div>
      )}
          
        </div>

        <div className="relative mx-auto text-gray-700 lg:block hidden">
          <input
            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              // style="enable-background:new 0 0 56.966 56.966;"

              // xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <div className="" onClick={logout}>
          Logout
        </div>
      </div>
    </nav>
  );
};

export default Nav;
