"use client";

import { FormEvent, useState } from "react";
import SuccessModal from "../modal/successmodal";
import LoadingModal from "../modal/loadingmodal";

const Explore = () => {
  const [email, setemail] = useState("");
  const [program, setProgram] = useState("");
  const [loading, setLoading] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleOnsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setemail("");
      setProgram("");
      setOpenSuccess(true);
    }, 5000);
  };

  return (
    <div className="px-5 lg:px-[150px]" id="explore">
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="flex flex-col lg:flex-row gap-10 items-start justify-start lg:w-[70%] py-20 me-auto">
          <div className="text-center text-white px-4 py-6 bg-opacity-50 bg-transparent">
            <h1 className="text-[30px] md:text-[48px] font-[700] text-start">
              Register your interest
            </h1>

            <form className="mt-4 text-lg" onSubmit={handleOnsubmit}>
              <div className="flex gap-5 flex-wrap justify-start text-gray-200">
                <div className="text-start">
                  <label className="text-[15px] md:text-[17px]" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className="w-[80vw] text-[15px] md:w-[300px] block ps-4 outline-none h-[50px] border border-gray-200 rounded-[10px] bg-transparent"
                  />
                </div>
                <div className="text-start">
                  <label
                    className="text-[15px] md:text-[17px]"
                    htmlFor="program"
                  >
                    Program
                  </label>
                  <input
                    type="text"
                    name="program"
                    id="program"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-[80vw] text-[15px] md:w-[300px] block ps-4 outline-none h-[50px] border border-gray-200 rounded-[10px] bg-transparent"
                  />
                </div>
              </div>
              <div className="flex justify-start py-[30px]">
                <button
                  className={`h-[55px] cursor-pointer items-center justify-center min-w-[230px] rounded-[100px] text-white bg-[#2a2570] hover:bg-[#8c62a2] ${
                    email?.length > 2 &&
                    email?.includes("@") &&
                    program?.length > 2
                      ? "flex"
                      : "pointer-events-none opacity-[35%]"
                  }`}
                >
                  Register your interest
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <SuccessModal isOpen={openSuccess} setIsOpen={setOpenSuccess} />
      {loading && (
        <div className="h-[max-content]">
          {" "}
          <LoadingModal isOpen={loading} />
        </div>
      )}
    </div>
  );
};

export default Explore;
