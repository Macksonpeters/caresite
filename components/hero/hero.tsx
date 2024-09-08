"use client";

import { Lato } from "next/font/google";
import { useEffect, useState } from "react";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  style: "normal",
});

const images = [
  "/images/homecare.jpg",
  "/images/seniortwo.jpg",
  "/images/seniorseven.jpg",
];

const mobileImages = [
  "/images/homecaremobile.jpg",
  "/images/seniortwomobile.jpg",
  "/images/seniorsevenmobile.jpg",
];

const Hero = () => {
  const [header, setHeader] = useState<any>(null);
  const [openComingSoon, setOpenComingSoon] = useState<any>(null);

  const headers = [
    {
      name: "home",
      path: "/#home",
    },
    {
      name: "features",
      path: "/#features",
    },
    {
      name: "Explore",
      path: "/#explore",
    },
    {
      name: "Blog",
      path: "/#blog",
    },
  ];

  const handleClick = (index: number) => {
    setHeader(index);
    if (index === 3) {
      setOpenComingSoon(true);
    }
  };

  const width = window.innerWidth;

  const [currentImage, setCurrentImage] = useState<string>(
    width < 1024 ? mobileImages[0] : images[0]
  );
  const [prevImage, setPrevImage] = useState<string>(currentImage);

  useEffect(() => {
    // Preload images
    [...images, ...mobileImages].forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const intervalId = setInterval(() => {
      if (currentImage === images[0] || currentImage === mobileImages[0]) {
        setPrevImage(currentImage);
        setCurrentImage(width < 1024 ? mobileImages[1] : images[1]);
      } else if (
        currentImage === images[1] ||
        currentImage === mobileImages[1]
      ) {
        setPrevImage(currentImage);
        setCurrentImage(width < 1024 ? mobileImages[2] : images[2]);
      } else if (
        currentImage === images[2] ||
        currentImage === mobileImages[2]
      ) {
        setPrevImage(currentImage);
        setCurrentImage(width < 1024 ? mobileImages[0] : images[0]);
      }
    }, 7000);

    return () => clearInterval(intervalId);
  }, [currentImage, width]);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0) 90%
    ), url(${currentImage})`,
        transition: "background-image 5s ease-in-out",
      }}
      className={`heroBackground text-gray-200 flex flex-col justify-center pt-[100px] px-5 lg:px-[100px]`}
      id="home"
    >
      {" "}
      <div className={lato.className}>
        {/* <p className="relative top-2">
          Our Commitment to Your Loved One’s Care
        </p> */}
        <h1
          className={`text-[30px] lg:text-[3rem] 3xl:text-[5rem]  font-[700] ${lato.className}`}
        >
          Because You Matter
        </h1>

        <p
          className={`w-full text-[18px] lg:w-3/4 xl:w-2/4 3xl:text-[2rem] text-justify ${lato.className}`}
        >
          At Joyce Homecare, we understand that every individual is unique, and
          so are their care needs. That’s why we take the time to get to know
          your loved one and develop a care plan that truly fits them
        </p>
        <div className="mt-10">
          <a
            href="/#about"
            className="bg-[#675b30] hover:bg-[#640d57] text-white text-[15px] 3xl:text-[1.4rem] py-[10px] px-7 rounded-[5px] "
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
