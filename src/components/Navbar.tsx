import React from 'react';

import Logo from "../assets/logo-text.png"
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li className="text-pink-600 font-semibold cursor-pointer">Home</li>
                    <li className="cursor-pointer">Technologies</li>
                    <li className="cursor-pointer" >Projects</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Contact</li>
      </ul>
    </div>
    <div className="flex items-center">
                    <img src={Logo} alt="" className="h-8 w-auto"/>
                </div>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 gap-8">
        <li className="text-pink-600 font-semibold cursor-pointer">Home</li>
                    <li className="cursor-pointer">Technologies</li>
                    <li className="cursor-pointer" >Projects</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Contact</li>
    </ul>
  </div>
  <div className="navbar-end">
     <div className="font flex gap-6 items-center ">
                       <button className="text-gray-700" >Sign in</button>
                        <button className="bg-pink-600 text-white px-5 py-2
                         rounded-full transition-colors ">Sign Up</button>
                    </div>
  </div>
</div>
    );
};

export default Navbar;