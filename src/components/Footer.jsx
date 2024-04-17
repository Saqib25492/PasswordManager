import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-700 text-white bottom-0 relative w-full">
      <div className="logo font-bold text-xl">
        <span className="text-green-500">&lt;</span>
        Pass
        <span className="text-green-500">OP/&gt;</span>
      </div>
      <div className="flex gap-3 p-3 text-xl">created with <img src="/heart1.png" alt="Heart" className="w-5 h-7"/> by CodeWithSaqib</div>
    </div>
  );
};

export default Footer;
