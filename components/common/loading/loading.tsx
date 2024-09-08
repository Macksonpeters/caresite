import React from "react";
import { ImSpinner8 } from "react-icons/im";

interface Props {
  className?: string;
}

const Loading = ({ className }: Props) => {
  return (
    <div className="flex w-full justify-center items-center slow animate-spin">
      <ImSpinner8
        className={` ${className ? className : "text-[24px] text-[#8440C1]"} `}
      />
    </div>
  );
};

export default Loading;
