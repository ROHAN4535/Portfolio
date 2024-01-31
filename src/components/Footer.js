import React from "react";

const Footer = () => {
  return (
    <div className="lg:py-20 lg:mt-20 mt-10 py-[60px]">
      <div className="w-full lg:w-[1130px] border border-gray-700 mb-10"></div>
      <div className=" lg:block hidden absolute translate-x-[340px] -ml-3 -mr-2 -translate-y-[150px] z-10"></div>
        <div className="flex items-center justify-center mx-auto">
        <h1 className="text-gray-400 text-[15px] text-center">© Rohan Gaikwad. All rights reserved</h1>
        </div>
    </div>
  );
};

export default Footer;