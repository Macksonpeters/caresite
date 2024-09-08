import About from "@/components/about/about";
import WhyUs from "@/components/about/whyus";
import React from "react";

const Page = () => {
  return (
    <div className="pb-[150px]">
      <p className="py-20 text-center bg-[#675b30]  text-white font-[700] border-b-2">
        About Us
      </p>
      <About />
      <WhyUs />
    </div>
  );
};

export default Page;
