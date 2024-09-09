"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import Image from "next/image";
import { FaCircleArrowRight, FaNotesMedical } from "react-icons/fa6";
import CarouselImage from "../../public/images/homecare.jpg";

interface Props {
  careTypes: any;
  setModalData?: any;
  setOpenModal?: any;
}

export const HeroCarouselComponent = ({
  careTypes,
  setModalData,
  setOpenModal,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="text-white mx-auto w-[90vw] lg:w-[45vw]">
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          stopOnHover={true}
          swipeable={false}
          transitionTime={2000}
          //   dynamicHeight={false}
          onChange={handleSlideChange}
          interval={5000}
        >
          {careTypes.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className=" py-2 flex flex-col gap-10 px-5 mx-2 border border-[#887d52] h-[450px]  rounded-[10px]"
              >
                <div className="flex pt-3">
                  <Image
                    priority={true}
                    src={item.img}
                    height={50}
                    width={1000}
                    alt="Committment-images"
                    className="object-cover max-h-[200px] rounded-[5px]"
                  />
                </div>
                <div>
                  <div className="font-[700] text-[#887d52] flex items-center gap-2">
                    {" "}
                    <FaCircleArrowRight className="text-[18px]" />{" "}
                    <span>{item.value}</span>
                  </div>
                  <p className="text-justify text-[14px] text-black">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export const FeatureCarouselComponent = ({
  careTypes,
  setModalData,
  setOpenModal,
}: Props) => {
  return (
    <div>
      <div className="text-white w-full ">
        <Carousel
          className=""
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={true}
          stopOnHover={true}
          swipeable={false}
          transitionTime={2000}
          interval={5000}
        >
          {careTypes.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="w-full md:w-[45%] lg:w-[30%] border border-[#675b30] min-h-[250px] bg-[#ffffff] shadow-md px-6 py-8 flex flex-col  rounded-[10px]"
              >
                <p className="font-[700] text-[#675b30] text-[18px] flex items-center gap-2">
                  <FaNotesMedical /> {item.title}
                </p>
                <div className="text-justify text-[14px] flex-grow">
                  {item.details
                    .slice(0, 2)
                    .map((detail: any, index: number) => {
                      return (
                        <div key={index}>
                          {detail.length < 359 ? (
                            <p>
                              <span className="font-[600]">
                                {detail.split(":")[0]}:
                              </span>{" "}
                              <span>{detail.split(":")[1]}</span>
                            </p>
                          ) : (
                            detail.slice(0, 359)
                          )}
                        </div>
                      );
                    })}
                </div>
                <button
                  onClick={() => {
                    setModalData(item);
                    setOpenModal(true);
                  }}
                  className="bg-[#887d52] text-[14px] w-[fit-content] text-white px-3 py-1 mt-4 rounded-[5px]"
                >
                  Read more
                </button>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export const BackgroundCarouselComponent = ({
  careTypes,
  setModalData,
  setOpenModal,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="text-white mx-auto w-[90vw] lg:w-[45vw]">
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          stopOnHover={true}
          swipeable={false}
          transitionTime={2000}
          //   dynamicHeight={false}
          onChange={handleSlideChange}
          interval={5000}
        >
          {careTypes.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className=" py-2 flex flex-col gap-10 px-5 mx-2 border border-[#887d52] h-[450px]  rounded-[10px]"
              >
                <div className="flex pt-3">
                  <Image
                    src={item.img}
                    height={50}
                    width={1000}
                    alt="Committment-images"
                    className="object-cover max-h-[200px] rounded-[5px]"
                  />
                </div>
                <div>
                  <div className="font-[700] text-[#887d52] flex items-center gap-2">
                    {" "}
                    <FaCircleArrowRight className="text-[18px]" />{" "}
                    <span>{item.value}</span>
                  </div>
                  <p className="text-justify text-[14px] text-black">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
