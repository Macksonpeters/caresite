import About from "@/components/about/about";
import CareTypes from "@/components/about/caretypes";
import Features from "@/components/about/features";
import React from "react";

const Page = () => {
  return (
    <div className="pb-[100px]">
      <p className="py-20 text-center bg-[#675b30] text-white font-[700] border-b-2">
        Our Services
      </p>
      <CareTypes />
    </div>
  );
};

export default Page;
