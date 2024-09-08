import Image from "next/image";
import React from "react";
import SeniorImg from "../../public/images/seniorone.jpg";

const About = () => {
  return (
    <div className="pt-[20px] lg:pt-[50px] px-5 lg:px-[100px] w-full flex flex-col-reverse lg:flex-row justify-between gap-5 lg:gap-2">
      <div className="lg:w-1/2  flex  items-center">
        <div className=" border-r-2 border-b-2 absolute lg:relative border-[#887d52] h-[27%] w-[90%] lg:w-[70%] lg:h-[80%]"></div>
        <Image
          src={SeniorImg}
          width={1000}
          height={50}
          alt="nursing-img"
          className="object-cover w-[90%] md:w-[85%] left-[4%] top-[50px] lg:top-auto relative lg:w-[40%] h-[200px] lg:h-[300px] lg:absolute rounded-[10px]"
        />
      </div>
      <div className="lg:w-1/2">
        <h3 className="text-[19px] font-[700] text-[#887d52] 3xl:text-[1.8rem]">
          Welcome to Joyce Care Home
        </h3>
        <h3 className="text-[24px] mt-1 lg:mt-0 lg:text-[32px] 3xl:text-[2.5rem] font-[700] text-[#675b30] text-start">
          Where Care Feels Like Home -
          <br className="hidden lg:block 3xl:hidden" /> Because You Matter Most
        </h3>
        <p className="text-justify pt-3 3xl:text-[1.7rem]">
          At Joyce Care Home, we are dedicated to providing personalized and
          compassionate home care services that cater to the unique needs of
          each of our senior citizens. Our goal is to enhance the quality of
          life for your loved ones while allowing them to maintain independence
          in the comfort of own home.
          <br />
          We understand how busy life can be and how much you want to take care
          of your loved ones while still working to provide them with the best
          within their life span, We understand also the fears associated with
          living your love ones alone at their homes or in your home while you
          pursue your career, family and growth life. You need not worry anymore
          as Joyce Care Home is here to help.
          <br />
          <span className="hidden lg:inline">
            {" "}
            Joyce care home. offers high-quality, long-term care in our
            beautiful and comfortable homes. We know the trust value of a solid
            relationship. We begin to build one with you from the very start
            with an in-home assessment to determine your needs.
            <br />
            It takes someone special to become a caregiver. For the best team in
            the business! We insist our caregivers represent our ideals of
            integrity, loyalty and empathy. We make all efforts to match their
            qualifications, interests and unique characteristics with your
            needs.
            <br />
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
