"use client";

import Image from "next/image";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaNotesMedical } from "react-icons/fa6";
// import "swiper/css/pagination";

interface Props {
  careTypes: any;
  setModalData: any;
  setOpenModal: any;
}

const ServicesSlider = ({ careTypes, setModalData, setOpenModal }: Props) => {
  return (
    <div className="absolute w-[100%]">
      <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          // reverseDirection: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        speed={800}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          240: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          850: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 4,
          },
          1300: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 5,
          },
          1800: {
            slidesPerView: 5,
          },
        }}
      >
        {careTypes?.map((item: any, index: any) => {
          return (
            <SwiperSlide
              key={index}
              className="w-full border border-[#675b30] min-h-[250px] bg-[#ffffff] shadow-md px-6 py-8 flex flex-col  rounded-[10px]"
            >
              <p className="font-[700] text-[#675b30] text-[18px] flex items-center gap-2">
                <FaNotesMedical /> {item.title}
              </p>
              <div className="text-justify text-[14px] flex-grow">
                {item.details.slice(0, 2).map((detail: any, index: number) => {
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ServicesSlider;
