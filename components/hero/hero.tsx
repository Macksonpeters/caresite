"use client";

import { Lato } from "next/font/google";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

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

  const isNotMobile = useMediaQuery("(min-width: 1024px)");
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentMobileImage, setCurrentMobileImage] = useState(mobileImages[0]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [nextImage, setNextImage] = useState(images[0]); // Track the next image for smooth transition

  useEffect(() => {
    const preloadImages = [...images, ...mobileImages].map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
      });
    });

    Promise.all(preloadImages).then(() => setIsLoaded(true));

    const intervalId = setInterval(() => {
      if (isNotMobile) {
        setNextImage((prev) => {
          if (prev === images[0]) return images[1];
          if (prev === images[1]) return images[2];
          return images[0];
        });
      } else {
        setNextImage((prev) => {
          if (prev === mobileImages[0]) return mobileImages[1];
          if (prev === mobileImages[1]) return mobileImages[2];
          return mobileImages[0];
        });
      }
    }, 7000);

    return () => clearInterval(intervalId);
  }, [isNotMobile]);

  // Handle applying the new image after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage(nextImage);
      setCurrentMobileImage(nextImage);
    }, 100); // Adjust delay to match smoothness
    return () => clearTimeout(timer);
  }, [nextImage]);

  const mobileTransition = "background-image 2s ease-in-out";
  const desktopTransition = "all 20s ease-in-out";

  return (
    <div
      style={{
        backgroundImage: isLoaded
          ? `linear-gradient(
            to right,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0) 90%
          ), url(${isNotMobile ? currentImage : currentMobileImage})`
          : "",
        backgroundColor: isLoaded ? "transparent" : "#000",
        transition: isNotMobile ? desktopTransition : mobileTransition,
        height: "80vh",
        width: "100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
      className="text-gray-200 flex flex-col justify-center pt-[100px] px-5 lg:px-[100px]"
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
