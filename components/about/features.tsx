import React from "react";
import { FaUserDoctor, FaUserNurse } from "react-icons/fa6";

const Features = () => {
  return (
    <div className="w-full md:px-5 lg:px-[100px]">
      <div className="flex flex-col md:flex-row md:ml-auto w-full md:justify-end relative top-[-65px] text-white 3xl:text-[1.5rem]">
        <div className="bg-[#675b30] flex  gap-3 px-5 items-center min-h-[80px] md:min-h-[130px] 3xl:min-h-[200px] 3xl:w-[20%] 3xl:px-10 rounded-t-[15px]  md:rounded-l-[25px]  md:rounded-r-[0px]">
          <div className="bg-[#887d52] py-3 px-3 rounded-full">
            <FaUserDoctor className="text-white text-[30px] 3xl:text-[50px]" />
          </div>
          <div className="">Expert Medical Personnels</div>
        </div>
        <div className="bg-[#887d52] flex  gap-3 px-5 items-center min-h-[80px] md:min-h-[130px] 3xl:w-[20%] 3xl:px-10">
          <div className="bg-[#887d52] py-3 px-3 rounded-full">
            <FaUserNurse className="text-white text-[30px] 3xl:text-[50px]" />
          </div>
          <div className="">Top Class Senior Services</div>
        </div>
        <div className="bg-[#686045] flex  gap-3 px-5 items-center min-h-[80px] md:min-h-[130px] 3xl:w-[20%] 3xl:px-10 rounded-b-[15px] md:rounded-l-[0px] md:rounded-b-[0px] md:rounded-r-[25px]">
          <div className="bg-[#887d52] py-3 px-3 rounded-full">
            <FaUserDoctor className="text-white text-[30px] 3xl:text-[50px]" />
          </div>
          <div className="">Quality Care Solutions</div>
        </div>
      </div>
    </div>
  );
};

export default Features;
