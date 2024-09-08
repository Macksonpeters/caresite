import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import React from "react";
import { FaNotesMedical } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

interface Props {
  openModal?: boolean;
  setOpenModal?: any;
  data?: any;
}

const Modal = ({ openModal, setOpenModal, data }: Props) => {
  return (
    <div>
      <>
        <Dialog open={openModal} onOpenChange={() => setOpenModal(false)}>
          <DialogContent className="w-[90%] max-w-[400px] bg-[#fff8f7] rounded-[10px] sm:max-w-[400px] px-5 sm:px-10 overflow-y-scroll max-h-[80vh]">
            <div className="w-full flex justify-end items-end">
              <DialogClose>
                {" "}
                <IoClose className="text-[24px]" />
              </DialogClose>
            </div>
            <DialogHeader>
              <DialogTitle className="text-start"> </DialogTitle>
              <div>
                <div className="text-justify text-[14px] flex-grow">
                  <div className="">
                    <Image
                      src={data?.img}
                      alt="career-img"
                      width={1000}
                      height={50}
                      className="w-[1000px] h-[50px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-evenly lg:justify-between flex-wrap gap-4 py-7">
                    <p className="font-[700] text-[#675b30] text-[18px] flex items-center gap-2">
                      <FaNotesMedical /> {data?.title}
                    </p>
                    <div className=" text-[14px] flex-grow">
                      {data?.details.map((detail: any, index: number) => {
                        return (
                          <div key={index} className="">
                            {detail?.length < 359 ? (
                              <p>
                                <span className="font-[600]">
                                  {detail.split(":")[0]}:
                                </span>{" "}
                                <span className="text-justify">
                                  {detail.split(":")[1]}
                                </span>
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
                        setOpenModal(false);
                      }}
                      className="bg-[#887d52] text-[14px] mt-5 text-white px-3 py-1 rounded-[5px]"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </>
    </div>
  );
};

export default Modal;
