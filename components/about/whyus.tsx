"use client";

import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import SeniorImg from "../../public/images/seniortwo.jpg";
import { HeroCarouselComponent } from "../carousel/carousel";
import Image from "next/image";
import CarouselImageOne from "../../public/images/homecare.jpg";
import CarouselImageTwo from "../../public/images/seniortwo.jpg";
import CarouselImageThree from "../../public/images/seniorthree.png";
import CarouselImageFour from "../../public/images/seniorone.jpg";
import CarouselImageFive from "../../public/images/seniorfour.png";
import CarouselImageSix from "../../public/images/seniorsix.png";
import CarouselImageSeven from "../../public/images/seniorseven.png";
import "animate.css";
import { motion, useInView } from "framer-motion";
import GallerySlider from "./components/slider";

const WhyUs = () => {
  const pathname = usePathname();
  const careValuesRef = useRef(null);
  const missionRef = useRef(null);
  const sliderRef = useRef(null);
  const isInView = useInView(careValuesRef, { once: true });
  const isMissionInView = useInView(missionRef, { once: true });
  const issliderInView = useInView(sliderRef, { once: true });

  //   const isInView = useInView({ threshold: 1 }, "#careValues");

  const careValues = [
    {
      value: "Respect and Dignity",
      img: CarouselImageSeven,
      description:
        "Each person is treated with the utmost respect, honoring their history, experiences, and autonomy. We strive to foster independence while offering support tailored to individual needs.",
    },
    {
      value: "Compassionate Care",
      img: CarouselImageFive,
      description:
        "Our caregivers are more than just helpers; they are companions, offering not only physical care but emotional support, understanding, and kindness.",
    },
    {
      value: "Holistic Well-Being",
      img: CarouselImageThree,
      description:
        "We focus on the physical, emotional, and social well-being of our clients. We understand that quality care goes beyond medical needs, incorporating mental, emotional, and spiritual nourishment to improve quality of life.",
    },
    {
      value: "Family Involvement",
      img: CarouselImageTwo,

      description:
        "We recognize the importance of family in the caregiving process and encourage active involvement and communication. Together, we create a collaborative approach that ensures continuity of care and strengthens family bonds.",
    },
    {
      value: "Safety and Comfort",
      img: CarouselImageFour,
      description:
        "Creating a safe, comfortable, and supportive environment is our top priority. We ensure that our clients feel secure in their own homes, promoting an atmosphere where they can thrive.",
    },
    {
      value: "Continuous Improvement",
      img: CarouselImageSix,
      description:
        "We are committed to learning and growing, always seeking ways to improve our care through innovation, education, and feedback. Our goal is to set the standard in home care by providing services that adapt to the evolving needs of our clients.",
    },
  ];

  return (
    <div className="mt-[120px] lg:mt-[150px] lg:pb-[0px] px-5 lg:px-[100px] w-full flex flex-col gap-[120px] lg:gap-[200px]">
      <div className="w-full">
        <h3 className="text-[24px] mt-1 lg:mt-0 lg:text-[32px] 3xl:text-[2.5rem] font-[700] text-[#675b30] text-start">
          Why Us?
        </h3>
        <h3 className="text-[19px] font-[700] text-[#887d52] 3xl:text-[1.8rem]">
          Compassionate Care & Dignified Living
        </h3>
        <p className="text-justify pt-3 3xl:text-[1.7rem]">
          Joyce Care Home is focused on premium care, safety and love for the
          elderly and we conduct background screening, ensure drug-free and
          alcohol-free workplace.{" "}
          <span className={`${pathname == "/" ? "hidden" : "inline"}`}>
            Joyce Care Home is a residential Home set to make a difference and a
            home to live in as your own home.
          </span>{" "}
          <br />
          <span className="text-[#887d52] inline-block my-2 font-[700] text-[18px] 3xl:text-[1.9rem]">
            -PHILOSOPHY: “Compassionate Care & Dignified Living"
          </span>{" "}
          <br />
          <span className={`${pathname == "/" ? "hidden" : "inline"}`}>
            {" "}
            We believe that the golden years are a time to be celebrated,
            cherished, and lived with dignity and joy. Our mission is to provide
            compassionate, person-centered care that honors the unique needs and
            wishes of every individual.{" "}
          </span>
          <span className={`${pathname == "/" ? "hidden" : "inline"}`}>
            We believe in empowering the elderly to live life to its fullest,
            providing not just care but companionship, comfort, and a sense of
            belonging. At Joyce Care Home, we are more than caregivers we are
            partners in living well.
          </span>
        </p>
        <p className="py-5">We are committed to:</p>

        <div className="lg:hidden">
          <HeroCarouselComponent careTypes={careValues} />
        </div>

        <div className={`hidden lg:flex   justify-between  `}>
          <div
            id="careValues"
            className={`flex flex-wrap items-center lg:w-1/2 `}
          >
            {careValues.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className=" lg:pe-6 py-2 flex flex-col w-[max-content] justify-center rounded-[10px]"
                >
                  <motion.div
                    ref={careValuesRef}
                    style={{
                      transform: isInView ? "none" : "translateX(-200px)",
                      opacity: isInView ? 1 : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}
                    className="font-[700] text-[#887d52] flex items-center gap-2 border border-[#887d52] rounded-[5px] w-[max-content] px-7 py-4"
                  >
                    {" "}
                    <FaCircleArrowRight className="text-[18px]" /> {item.value}
                  </motion.div>
                  <p
                    className={`text-justify text-[14px] ${
                      pathname == "/" ? "hidden" : "hidden"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          <motion.div
            ref={careValuesRef}
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="lg:w-1/2  flex items-center justify-center"
          >
            {/* <div className=" border-r-2 border-b-2 border-[#887d52] lg:h-[50%] xl:h-[100%] w-[70%] lg:me-5">
              <Image
                src={SeniorImg}
                width={1000}
                height={50}
                alt="nursing-img"
                className="object-cover w-[90%] right-[4%] top-[30px] lg:top-auto lg:mt-[10px] relative lg:w-[40%] h-[200px] lg:h-[300px] lg:absolute rounded-[10px]"
              />
            </div> */}

            <div className=" border-r-2 border-b-2 absolute lg:relative border-[#887d52] h-[27%] w-[90%] lg:w-[100%] lg:h-[70%] 2xl:h-[100%]"></div>
            <Image
              src={SeniorImg}
              width={1000}
              height={50}
              alt="nursing-img"
              className="object-cover w-[90%] md:w-[85%] 2xl:w-[38%] top-[50px] lg:top-auto relative lg:w-[40%] lg:mt-[100px] h-[200px] lg:h-[300px] lg:absolute rounded-[10px] lg:me-10"
            />
          </motion.div>
        </div>

        <div
          className={`  ${
            pathname == "/" ? "hidden" : "hidden lg:block lg:h-[100px]"
          }`}
        ></div>

        <div
          className={`flex flex-col-reverse lg:flex-row justify-between mt-[50px] gap-10 lg:gap-2 lg:mt-[150px] 2xl:mt-[250px] ${
            pathname == "/" ? "hidden" : "flex"
          }`}
        >
          <motion.div
            ref={missionRef}
            style={{
              transform: isMissionInView ? "none" : "translateY(-200px)",
              opacity: isMissionInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="w-full lg:w-1/2 flex items-center"
          >
            {/* <div className="hidden lg:block border-l-2 border-b-2 border-[#887d52] h-[80%] w-[70%]"></div> */}

            <div className=" border-l-2 border-b-2 absolute lg:relative border-[#887d52] h-[27%] w-[90%] lg:w-[70%] lg:h-[80%] 2xl:h-[100%]"></div>
            <Image
              src={CarouselImageFive}
              width={1000}
              height={50}
              alt="nursing-img"
              className="object-cover w-[90%] md:w-[85%] left-[4%] top-[50px] lg:top-auto relative lg:w-[40%] h-[200px] lg:h-[300px] lg:absolute rounded-[10px]"
            />
          </motion.div>
          <motion.div
            ref={missionRef}
            style={{
              transform: isMissionInView ? "none" : "translateY(-200px)",
              opacity: isMissionInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-[24px] mt-1 lg:mt-0 lg:text-[32px] 3xl:text-[2.5rem] font-[700] text-[#675b30] text-start">
              Mission Statement{" "}
            </h3>
            <h3 className="text-[19px] font-[700] text-[#887d52] 3xl:text-[1.8rem]">
              The Power of Care Giving{" "}
            </h3>
            <p className="text-justify pt-3 3xl:text-[1.7rem]">
              At Joyce Care Home, our mission is to enhance the quality of life
              for seniors by providing compassionate, personalized home care
              that promotes independence, dignity, and well-being. We are
              committed to supporting families by delivering reliable,
              respectful, and empathetic care, ensuring that each individual we
              serve feels valued, safe, and empowered to age gracefully in the
              comfort of our homes. Our dedicated caregivers strive to create
              meaningful connections, fostering a sense of belonging and
              community through every interaction. To the best of our knowledge
              based on our Quality improvement Program and Professional Personal
              practices, our services comply with professional standards and
              principles.We,the professional staff at JOYCE CARE HOME are
              dedicated to providing the best medically required care to our
              seniors. We strive to protect the integrity and dignity of our
              clients assuring confidentiality and respect at all times.We look
              forward to caring for your parents,aunt,uncles and any senior
              citizen you desire us to provide love and care to.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        ref={sliderRef}
        style={{
          transform: issliderInView ? "none" : "translateX(200px)",
          opacity: issliderInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="hidden xl:flex"
      >
        <GallerySlider />
      </motion.div>
    </div>
  );
};

export default WhyUs;
