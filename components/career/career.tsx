"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BsDashLg } from "react-icons/bs";
import { MdLocationPin, MdOutlineMail, MdPhone } from "react-icons/md";
import CareerImg from "../../public/images/career.jpg";

const Career = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const pathname = usePathname();
  const handleSubmit = () => {};
  return (
    <div
      className={`py-[50px] lg:py-[100px] px-5 lg:px-[100px] w-full  ${
        pathname == "/services" ? "my-0" : "my-10 lg:my-20"
      }`}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-20 lg:gap-4">
        <div className="lg:w-1/2">
          <h3
            className={`text-[19px] text-start font-[700] text-[#887d52] 3xl:text-[1.8rem] ${
              pathname == "/services" ? "hidden" : "block"
            }`}
          >
            Career Opportunity
          </h3>
          <h3
            className={`text-[24px] lg:text-[32px] mt-2 lg:mt-0 3xl:text-[2.5rem] font-[700]  capitalize ${
              pathname == "/" ? "text-[#675b30]" : "text-[#cebc7d] text-start"
            }`}
          >
            Join Our Compassionate Team at JOYCE CARE HOME
          </h3>
          <p className="text-justify lg:w-[90%]">
            Are you a kind-hearted individual who believes in making a
            difference in the lives of seniors? At JOYCE CARE HOME we are
            dedicated to providing exceptional care and support to the elderly
            in the comfort of their own homes. We are looking for passionate,
            empathetic, and skilled individuals to join our team and help us
            continue our mission of enhancing the quality of life for our senior
            clients.
          </p>

          <h3
            className={`text-[19px] text-start font-[700] mt-7 text-[#e6d89f] 3xl:text-[1.8rem] ${
              pathname == "/services" ? "hidden" : "block"
            }`}
          >
            <BsDashLg className="inline" /> Why Choose Us?
          </h3>

          <div
            className={`w-full flex flex-col gap-4 ${
              pathname == "/" ? "text-[#675b30]" : "text-[#cebc7d] text-start"
            }`}
          >
            <div className="flex gap-3 flex-col py-6">
              <div className="flex flex-col">
                {" "}
                <p>• Meaningful Work</p>{" "}
                <p className="text-white text-[15px]">
                  {" "}
                  Every day, you’ll have the opportunity to make a real impact
                  on the lives of our clients, providing them with the care and
                  companionship they deserve.
                </p>
              </div>

              <div className="flex flex-col">
                {" "}
                <p>• Supportive Environment</p>{" "}
                <p className="text-white text-[15px]">
                  {" "}
                  We believe in creating a nurturing workplace where our team
                  members feel valued and supported. Our comprehensive training
                  programs and ongoing support ensure you are always equipped to
                  provide the best care.
                </p>
              </div>
              <div className="flex flex-col">
                {" "}
                <p>• Flexible Scheduling</p>{" "}
                <p className="text-white text-[15px]">
                  {" "}
                  We understand the importance of work-life balance and offer
                  flexible scheduling options to fit your needs.
                </p>
              </div>
              <div className="flex flex-col">
                {" "}
                <p>• Competitive Compensation</p>{" "}
                <p className="text-white text-[15px]">
                  {" "}
                  We offer competitive wages and benefits, recognizing and
                  rewarding your dedication and hard work.
                </p>
              </div>
            </div>
          </div>

          <h3
            className={`text-[19px] text-start font-[700] mt-7 text-[#e6d89f] 3xl:text-[1.8rem] ${
              pathname == "/services" ? "hidden" : "block"
            }`}
          >
            <BsDashLg className="inline" /> What We Are Looking For
          </h3>

          <div
            className={`w-full flex flex-col gap-4 ${
              pathname == "/" ? "text-[#675b30]" : "text-[#cebc7d] text-start"
            }`}
          >
            <div className="flex gap-3 flex-col py-6">
              <div className="flex flex-col">
                {" "}
                <p>• Empathy and Compassion</p>{" "}
                <p className="text-white text-[15px]">
                  {" "}
                  A genuine desire to care for others and make a positive
                  difference in their lives.
                </p>
              </div>

              <div className="flex flex-col">
                {" "}
                <p>• Reliable and Trustworthy</p>{" "}
                <p className="text-white text-[15px]">
                  {" "}
                  Dependability and integrity in all aspects of your work.
                </p>
              </div>
              <div className="flex flex-col">
                {" "}
                <p>• Experience</p>{" "}
                <p className="text-white text-[15px]">
                  {" "}
                  Prior experience in elderly care is a plus, but not required.
                  We provide training to help you succeed.
                </p>
              </div>
              <div className="flex flex-col">
                {" "}
                <p>• Strong Communication Skills</p>{" "}
                <p className="text-white text-[15px]">
                  {" "}
                  The ability to interact effectively with clients, their
                  families, and our team members.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 px-5 md:px-10 bg-[#e3e1db] border-[6px] border-[#640d57] h-[max-content] py-10 rounded-[15px]">
          <div>
            <Image
              src={CareerImg}
              alt="career-img"
              width={1000}
              height={50}
              className="w-[1000px] h-[50px] object-cover"
            />
          </div>
          <div>
            <div
              className={`w-full flex flex-col gap-4 ${
                pathname == "/" ? "text-[#675b30]" : "text-[#cebc7d] text-start"
              }`}
            >
              <div className="flex gap-3 flex-col py-6">
                <div className="flex flex-col">
                  <h3
                    className={`text-[19px] text-start font-[700] mt-7 text-[#675b30] 3xl:text-[1.8rem] ${
                      pathname == "/services" ? "hidden" : "block"
                    }`}
                  >
                    <BsDashLg className="inline" /> How to Apply
                  </h3>{" "}
                  <p className="text-[#640d57] text-[15px] text-justify">
                    {" "}
                    Call us at [281-925-8152] to learn more about this
                    opportunity and to submit your application. Together, let’s
                    make a difference in the lives of those who need it most.
                    Join JOYCE CARE HOME today!
                  </p>
                  <h3
                    className={`text-[19px] text-start font-[700] mt-7 text-[#675b30] 3xl:text-[1.8rem] ${
                      pathname == "/services" ? "hidden" : "block"
                    }`}
                  >
                    <BsDashLg className="inline" /> Benefits of Joining Our Team
                  </h3>
                  <div
                    className={`w-full flex flex-col gap-4 ${
                      pathname == "/"
                        ? "text-[#675b30]"
                        : "text-[#675b30] text-start"
                    }`}
                  >
                    <div className="flex gap-3 flex-col py-6">
                      <div className="flex flex-col">
                        {" "}
                        <p>• Comprehensive Training</p>{" "}
                        <p className="text-[#640d57] text-[15px]">
                          {" "}
                          Receive the knowledge and skills you need to excel in
                          your role.
                        </p>
                      </div>

                      <div className="flex flex-col">
                        {" "}
                        <p>• Career Growth</p>{" "}
                        <p className="text-[#640d57] text-[15px]">
                          {" "}
                          Opportunities for advancement within our company.
                        </p>
                      </div>
                      <div className="flex flex-col">
                        {" "}
                        <p>• Supportive Team</p>{" "}
                        <p className="text-[#640d57] text-[15px]">
                          {" "}
                          Work with a team that values and supports each other.
                        </p>
                      </div>

                      <h3
                        className={`text-[15px] text-justify font-[700] mt-7 text-[#675b30] 3xl:text-[1.8rem] ${
                          pathname == "/services" ? "hidden" : "block"
                        }`}
                      >
                        If you’re ready to bring your skills and compassion to a
                        fulfilling career in elderly home care, we’d love to
                        hear from you! Apply today and take the first step
                        toward a rewarding career with JOYCE CARE HOME.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
