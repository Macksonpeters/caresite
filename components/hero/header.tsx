import React from "react";
import { BsDash, BsFacebook, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { GiClover } from "react-icons/gi";

const Header = () => {
  return (
    <div
      id="header"
      className="flex justify-evenly relative overflow-hidden  lg:justify-evenly w-full py-5 items-center bg-[#675b30] text-gray-300 text-[14px] 3xl:text-[1rem] text-gray-850"
    >
      <div className="flex marquee-text justify-evenly items-center gap-2 ">
        <p className="hidden  lg:flex items-center">
          {" "}
          <span className="font-[600]">Phone:</span> 281-925-8152{" "}
        </p>
        <BsDash className="hidden lg:inline text-[18px]" />
        <p className="hidden  lg:flex">
          <span className="font-[600] capitalize">Email:</span>
          <a href="mailto:joycecarehome14@yahoo.com" className="ps-[2px]">
            joycecarehome14@yahoo.com
          </a>
        </p>
        <BsDash className="hidden lg:inline text-[18px]" />

        <p className="hidden lg:flex">
          <span className="font-[600]">Opening Hours:</span> 07:00am to 07:00pm
        </p>
        <BsDash className="hidden lg:inline text-[18px]" />

        <div className="flex gap-4 items-center ">
          <div className="flex items-center gap-1">
            <GiClover className="inline" />
            <p className="capitalize text-[16px] lg:text-[14px]">
              An elderly home full of love
            </p>
            <GiClover className="inline" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
