import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-grey-200 shadow-lg">
      <div className=" px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* Logo */}
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <img src="/logo.png" alt="Logo" className="h-20 w-40 mr-2" />
                <span className="font-semibold text-blue-500 text-lg"></span>
              </a>
            </div>
          </div>
          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-4 px-4 text-blue-500 font-semibold hover:text-white transition duration-300">Home</a>
            <a href="#" className="py-4 px-4 text-blue-500 font-semibold hover:text-white transition duration-300">About</a>
            {/* Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)} 
                className="py-4 px-4 text-blue-500 font-semibold hover:text-white transition duration-300 flex items-center"
              >
                Services
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Service 1</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Service 2</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Service 3</a>
                </div>
              )}
            </div>
            <a href="#" className="py-4 px-4 text-blue-500 font-semibold hover:text-white transition duration-300">Contact</a>
            <a href="#" className="py-4 px-4 text-white bg-blue-500 font-semibold rounded-lg hover:bg-blue-600 transition duration-300">Login</a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-blue-500 hover:text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="hidden mobile-menu">
        <ul className="">
          <li className="active"><a href="#" className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold">Home</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">About</a></li>
          <li className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)} 
              className="block text-sm px-2 py-4 w-full text-left hover:bg-blue-500 transition duration-300 flex items-center"
            >
              Services
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="pl-8">
                <li><a href="#" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Service 1</a></li>
                <li><a href="#" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Service 2</a></li>
                <li><a href="#" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Service 3</a></li>
              </ul>
            )}
          </li>
          <li><a href="#" className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300">Contact</a></li>
          <li><a href="#" className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold">Login</a></li>
        </ul>
      </div>
      <style jsx>{`
        .mobile-menu-button:hover .mobile-menu {
          display: block;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
