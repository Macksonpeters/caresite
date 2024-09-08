"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { MdLocationPin, MdOutlineMail, MdPhone } from "react-icons/md";
import ContactImg from "../../public/images/contactimg.png";
import { usePostFnHook } from "@/hooks/hooks";
import LoadingModal from "../common/loading/loadingmodal";
import { ShowToast } from "../common/taost";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const pathname = usePathname();
  const { toast } = useToast();

  const SendMailMutate = usePostFnHook("/api/sendEmail");

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const payload = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        number: phoneNumber,
        message: message,
      };
      const response = await SendMailMutate.mutateAsync(payload);
      console.log(response);

      if (response?.status == 200) {
        ShowToast(toast, "form submitted successfully", "success");
        setEmail("");
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setMessage("");
        window.scrollTo(0, 0);
      } else {
        ShowToast(toast, response?.statusText, "error");
      }
    } catch (error) {
      console.log(error);

      const errorMessage: any = error;
      ShowToast(
        toast,
        errorMessage?.response?.statusText || errorMessage,
        "error"
      );
    }
  };
  return (
    <div
      className={`py-[50px] lg:py-[100px] px-5 lg:px-[100px] w-full  ${
        pathname == "/services" ? "my-0" : "my-10 lg:my-20"
      }`}
    >
      {/* <p
        onClick={() => {
          ShowToast(toast, "form submitted successfully", "success");
        }}
        className="bg-red-500 cursor-pointer "
      >
        Click
      </p> */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-20 pb-[50px] lg:pb-0 lg:gap-4">
        <div className="lg:w-1/2">
          <h3
            className={`text-[19px] text-start font-[700] text-[#887d52] 3xl:text-[1.8rem] ${
              pathname == "/services" ? "hidden" : "block"
            }`}
          >
            Contact us
          </h3>
          <h3
            className={`text-[24px] lg:text-[32px] mt-2 lg:mt-0 3xl:text-[2.5rem] font-[700]  capitalize ${
              pathname == "/" ? "text-[#675b30]" : "text-[#cebc7d] text-start"
            }`}
          >
            We Are Ready To Hear From You
          </h3>
          <p className="text-justify lg:w-[90%]">
            Let us help you navigate the journey of caring for your loved one.
            <span className={`ms-1 ${pathname == "/" ? "hidden" : "inline"}`}>
              Contact us at 281-925-8152 to discuss how we can tailor our
              services to meet your family's specific needs. This comprehensive
              list is designed to provide detailed insights into each service
              area, helping you understand how we can support your loved one's
              well-being at our home with interfering with your daily life
              schedules.
            </span>{" "}
          </p>
          <div
            className={`w-full flex flex-col gap-4 ${
              pathname == "/" ? "text-[#675b30]" : "text-[#cebc7d] text-start"
            }`}
          >
            <div className="flex gap-3 flex-col py-6">
              <a className="flex items-center">
                {" "}
                <p>
                  <MdPhone className="text-[20px] me-2" />
                </p>{" "}
                <p> 281-925-8152</p>
              </a>
              <a
                href="mailto:joycecarehome14@yahoo.com"
                className="flex  items-center"
              >
                {" "}
                <p>
                  {" "}
                  <MdOutlineMail className="text-[20px] me-2 " />{" "}
                </p>
                <p className="text-wrap"> Joycecarehome14@yahoo.com</p>
              </a>

              <a className="flex items-center">
                <p>
                  {" "}
                  <MdLocationPin className="text-[20px] me-2" />{" "}
                </p>
                <p> 11081 Sands Point Drive, Houston Texas,77072</p>
              </a>
            </div>
          </div>
        </div>
        <div
          className={`lg:w-1/2 2xl:mx-[100px] bg-[#e3e1db] h-[max-content] py-10 rounded-[15px] ${
            pathname == "/" && "border-[5px] border-[#887d52]"
          }`}
        >
          <h3
            className={`text-[19px] mb-7 font-[700] text-center text-[#887d52] 3xl:text-[1.8rem] ${
              pathname == "/services" ? "hidden" : "block"
            }`}
          >
            Contact form
          </h3>

          <div>
            <Image
              src={ContactImg}
              alt="contact-img"
              width={1000}
              height={50}
              className="w-[1000px] h-[100px] object-cover"
            />
          </div>
          <form className="mt-4 text-lg w-full" onSubmit={handleOnSubmit}>
            <div className="flex flex-wrap justify-center gap-4 w-full">
              <div className="text-start w-[80vw] lg:w-[300px]">
                <label
                  className="text-[15px] md:text-[17px] text-[#887d52]"
                  htmlFor="program"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="program"
                  id="program"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-[80vw] text-black font-normal text-[15px] lg:w-[300px] block ps-4 outline-none h-[45px] rounded-[10px] bg-white border border-text-[#887d52]"
                />
              </div>
              <div className="text-start w-[80vw] lg:w-[300px]">
                <label
                  className="text-[15px] md:text-[17px] text-[#887d52]"
                  htmlFor="program"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="program"
                  id="program"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-[80vw] text-black font-normal text-[15px] lg:w-[300px] block ps-4 outline-none h-[45px] rounded-[10px] bg-white "
                />
              </div>
              <div className="text-start w-[80vw] lg:w-[300px]">
                <label
                  className="text-[15px] md:text-[17px] text-[#887d52]"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[80vw] text-black font-normal text-[15px] lg:w-[300px] block ps-4 outline-none h-[45px] rounded-[10px] bg-white border border-text-[#887d52]"
                />
              </div>
              <div className="text-start w-[80vw] lg:w-[300px]">
                <label
                  className="text-[15px] md:text-[17px] text-[#887d52]"
                  htmlFor="program"
                >
                  Phone number
                </label>
                <input
                  type="number"
                  name="program"
                  id="program"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-[80vw] text-black font-normal text-[15px] lg:w-[300px] block ps-4 outline-none h-[45px] rounded-[10px] bg-white border border-text-[#887d52]"
                />
              </div>
              <div className="text-start w-[80vw] lg:w-[300px]">
                <label
                  className="text-[15px] md:text-[17px] text-[#887d52]"
                  htmlFor="program"
                >
                  Message
                </label>
                <textarea
                  name="program"
                  id="program"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-[80vw] py-2 text-black font-normal text-[15px] lg:w-[300px] block ps-4 outline-none h-[100px] rounded-[10px] bg-white border border-text-[#887d52]"
                />
              </div>
            </div>
            <div className="flex justify-center mx-auto py-[30px] w-[70vw] md:w-[300px]">
              <button
                className={`h-[45px] cursor-pointer items-center justify-center w-full rounded-[100px] bg-[#887d52] text-white ${
                  email?.length > 2 &&
                  email?.includes("@") &&
                  firstName?.length > 2 &&
                  lastName?.length > 2 &&
                  phoneNumber?.length > 2 &&
                  message?.length > 2
                    ? "flex"
                    : "pointer-events-none"
                }`}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      {SendMailMutate.isPending && (
        <div className="h-[max-content]">
          {" "}
          <LoadingModal isOpen={SendMailMutate.isPending} />
        </div>
      )}
    </div>
  );
};

export default Contact;
