import React from "react";
import { BsFacebook, BsTwitterX, BsWhatsapp } from "react-icons/bs";

const Header = () => {
  return (
    <div
      id="header"
      className="flex justify-evenly relative overflow-hidden  lg:justify-evenly w-full py-5 items-center bg-[#675b30] text-gray-300 text-[14px] 3xl:text-[1rem] text-gray-850"
    >
      <div className="flex marquee-text justify-evenly gap-2 ">
        <p className="">
          {" "}
          <span className="font-[600]">Phone:</span> 281-925-8152{" "}
        </p>
        <p className="hidden  lg:flex">
          <span className="font-[600] capitalize">Email:</span>
          <a href="mailto:joycecarehome14@yahoo.com" className="ps-[2px]">
            joycecarehome14@yahoo.com
          </a>
        </p>
        <p className="hidden lg:flex">
          <span className="font-[600]">Opening Hours:</span> 07:00am to 07:00pm
        </p>

        <div className="flex gap-4 items-center ">
          <div className="">
            {" "}
            <p className="capitalize">An elderly home full of love</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
