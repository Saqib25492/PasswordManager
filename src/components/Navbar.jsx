import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 text-white">
      <div className="flex px-6 md:mycontainer justify-between py-3 items-center">
        <div className="logo font-bold text-xl">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>
        {/* <ul className="flex gap-4 font-medium">
          <li className="hover:cursor-pointer hover:font-bold">Home</li>
          <li className="hover:cursor-pointer hover:font-bold">About</li>
          <li className="hover:cursor-pointer hover:font-bold">Contact</li>
        </ul>*/}
        <button className="flex items-center justify-between px-2 ring-white ring-1 rounded-full hover:shadow-md hover:shadow-white">
          <img src="/icons/logo.png" alt="" className="px-1 h-7" />
          <span className="text-lg font-bold">
            <a href="https://github.com/Saqib25492" target="_blank">Git<span className="font-bold text-green-500 text-xl">hub</span></a>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
