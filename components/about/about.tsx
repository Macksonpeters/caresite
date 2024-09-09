"use client";

import Image from "next/image";
import React, { useRef } from "react";
import SeniorImg from "../../public/images/seniortenn.png";
import SeniorImgTwo from "../../public/images/seniortensmall.jpg";
import { motion, useInView } from "framer-motion";

const About = () => {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true });
  const imgRef = useRef(null);
  const isImgInView = useInView(imgRef, { once: true });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4 } },
  };

  const textOne = "Welcome to Joyce Care Home";

  return (
    <div className="pt-[20px] lg:pt-[50px] px-5 lg:px-[100px] w-full flex flex-col-reverse lg:flex-row justify-between gap-5 lg:gap-2">
      <motion.div
        ref={imgRef}
        style={{
          transform: isImgInView ? "none" : "translateX(-200px) ",
          opacity: isImgInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="lg:w-1/2  flex flex-col lg:flex-row items-center"
      >
        <div className=" border-r-2 border-b-2 absolute lg:relative border-[#887d52]  h-[27%] w-[90%] lg:w-[70%] lg:h-[80%]"></div>
        <Image
          src={SeniorImg}
          width={1000}
          height={50}
          alt="nursing-img"
          className="object-cover  w-[90%] md:w-[83%] left-[4%] top-[50px] z-10 mt-[20px] ms-8 sm:ms-10 lg:top-[auto] lg:mt-[-150px] lg:w-[40%] h-[200px] lg:h-[220px] lg:absolute rounded-[10px]"
        />
        <Image
          src={SeniorImgTwo}
          width={1000}
          height={50}
          alt="nursing-img"
          className="object-cover w-[93%] md:w-[85%] left-[0%] me-5 sm:me-[50px] z-20 lg:me-0 lg:left-[4%] top-[50px] mt-[-120px] lg:top-auto lg:mt-[150px] relative lg:w-[40%] h-[200px] lg:h-[220px] lg:absolute rounded-[10px]"
        />
      </motion.div>
      <div className="lg:w-1/2">
        <motion.h3
          ref={textRef}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[19px] font-[700] text-[#887d52] 3xl:text-[1.8rem]"
        >
          {textOne.split("").map((char, index) => (
            <motion.span key={index} variants={child}>
              {char}
            </motion.span>
          ))}
        </motion.h3>
        <h3 className="text-[24px] mt-1 lg:mt-0 lg:text-[32px] 3xl:text-[2.5rem] font-[700] text-[#675b30] text-start">
          Where Care Feels Like Home -
          <br className="hidden lg:block 3xl:hidden" /> Because You Matter Most
        </h3>
        <div className="text-justify pt-3 3xl:text-[1.7rem]">
          At Joyce Care Home, we are dedicated to providing personalized and
          compassionate home care services that cater to the unique needs of
          each of our senior citizens. Our goal is to enhance the quality of
          life for your loved ones while allowing them to maintain independence
          in the comfort of own home.;
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
        </div>
      </div>
    </div>
  );
};

export default About;
