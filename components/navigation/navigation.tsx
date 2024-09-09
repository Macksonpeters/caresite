"use client";

import React, { useEffect, useState } from "react";
import useInView from "../common/useInView";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import FullLogo from "../../public/images/logoone (1).png";
import ShortLogo from "../../public/images/logotwo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
  const [header, setHeader] = useState<any>(0);
  const [changeButton, setChangeButton] = useState<boolean>(false);
  const pathname = usePathname();

  const headers = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "About us",
      path: "/about",
    },
    {
      name: "Our services",
      path: "/services",
    },
    {
      name: "Careers",
      path: "/careers",
    },
    {
      name: "Contact us",
      path: "/contact",
    },
  ];

  const handleClick = (index: number) => {
    setHeader(index);
  };

  const isInView = useInView({ threshold: 1 }, "#header");

  useEffect(() => {
    const interval = setInterval(() => {
      setChangeButton(!changeButton);
    }, 10000);

    return () => clearInterval(interval);
  }, [changeButton]);

  return (
    <div
      className={`w-full z-50 overflow-y-hidden right-0 ${
        isInView ? "relative" : "fixed top-0 "
      } bg-[#fffbfa] transition-transform duration-300`}
    >
      <div className="flex px-5 lg:px-[100px] justify-between items-center gap-4 w-full py-3 text-[18px] 3xl:text-[1.6rem] text-[#421910]">
        <div className="w-1/4 flex items-center">
          <Link href="/" className="">
            <Image
              src={FullLogo}
              priority={true}
              quality={100}
              //   width={100}
              //   height={50}
              alt="Joyce-home-logo"
              className="inline object-contain w-[inherit] scale-[370%] h-[90px] ps-7 sm:ps-10 lg:ps-7 lg:h-[70px] pt-[2px]"
            />
          </Link>
        </div>
        <div className="hidden lg:block w-2/4">
          <ul className="flex justify-between lg:text-[14px] xl:text-[17px]">
            {headers?.map((item: any, index: any) => {
              return (
                <li
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`capitalize hover:font-[700] hover:border-b border-[#ac523e] ${
                    pathname == item.path
                      ? "text-[#ac523e] font-[700] scale-110 border-b border-[#ac523e] sm:scale-110"
                      : "text-[#ac523e] scale-100"
                  } transition-transform duration-300`}
                >
                  <Link href={item.path}>{item?.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden w-1/4 lg:flex justify-end">
          <Link
            href="/contact"
            className={` bg-[#675b30] hover:bg-[#640d57] text-white text-[15px] 3xl:text-[1.2rem] py-[10px] px-4 xl:px-7 rounded-[5px] mt-[-2px]`}
          >
            Contact <span className="hidden xl:inline">us</span>
          </Link>
        </div>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <CiMenuFries className="text-[34px]" />
            </SheetTrigger>
            <SheetContent
              side={"top"}
              className={`bg-[#675b30] text-gray-200 `}
            >
              <SheetHeader>
                <SheetTitle className={`text-gray-200 font-[500] text-start  `}>
                  <Image
                    src={ShortLogo}
                    //   width={100}
                    //   height={50}
                    alt="Joyce-home-logo"
                    className="inline object-contain w-[inherit]  scale-[300%] lg:scale-[370%] h-[50px]"
                  />{" "}
                </SheetTitle>
                <div className="text-gray-200 w-full pt-10 pb-5 tracking-wide overflow-y-hidden flex flex-col justify-end">
                  <ul className=" flex flex-col gap-3">
                    {headers?.map((item: any, index: any) => {
                      return (
                        <li
                          key={index}
                          // onClick={() => handleClick(index)}
                          className={` text-[20px] text-start hover:text-gray-400 ${
                            header == index
                              ? "text-gray-200 scale-100"
                              : "text-gray-100 scale-100"
                          } transition-transform duration-300`}
                        >
                          <SheetClose className="capitalize outline-none">
                            <a href={item.path}>{item?.name}</a>
                          </SheetClose>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="text-justify pt-10 text-[14px] w-full">
                    <a
                      href="/contact"
                      className={` bg-[#640d57] flex justify-center w-full text-white text-[15px]  py-[20px]  rounded-[10px] mt-[-2px]`}
                    >
                      Contact us
                    </a>
                  </p>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
