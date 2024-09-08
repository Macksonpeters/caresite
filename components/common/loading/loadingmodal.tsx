"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import Loading from "./loading";

interface Props {
  isOpen?: any;
  setIsOpen?: any;
}

const LoadingModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent className=" bg-transparent h-[max-content] w-full shadow-none outline-none border-none px-10 py-[5%] flex flex-col justify-center items-center overflow-hidden max-h-[99vh]">
        <DialogTitle className="hidden">Loading</DialogTitle>
        <Loading className="text-[40px] text-white " />
      </DialogContent>
    </Dialog>
  );
};

export default LoadingModal;
