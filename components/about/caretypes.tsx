"use client";

import React, { useRef, useState } from "react";
import { FaArrowRight, FaNotesMedical } from "react-icons/fa6";
import Modal from "./components/modal";
import { usePathname } from "next/navigation";
import { FeatureCarouselComponent } from "../carousel/carousel";
import CarouselImageOne from "../../public/images/homecare.jpg";
import CarouselImageTwo from "../../public/images/seniortwo.jpg";
import CarouselImageThree from "../../public/images/seniorthree.png";
import CarouselImageFour from "../../public/images/seniorone.jpg";
import CarouselImageFive from "../../public/images/seniorfour.png";
import CarouselImageSix from "../../public/images/seniorsix.png";
import CarouselImageSeven from "../../public/images/seniorseven.png";
import { motion, useInView } from "framer-motion";

const CareTypes = () => {
  const [modalData, setModalData] = useState<any>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const pathname = usePathname();
  const careValuesRef = useRef(null);
  const isInView = useInView(careValuesRef, { once: true });

  const careTypes = [
    {
      title: "Personal Care Services",
      img: CarouselImageOne,
      details: [
        "Assistance with Activities of Daily Living (ADLs): Bathing and Hygiene: Helping with showers, baths, oral care, hair care, and grooming to ensure cleanliness and comfort.",
        "Nutritious Meal Planning: Preparing balanced meals tailored to dietary needs and preferences, including special diets (diabetic, low-sodium, vegetarian).",
        "Feeding Assistance: Helping with eating for those who have difficulty feeding themselves, ensuring proper nutrition and hydration.",
      ],
    },
    {
      title: "Companionship and Emotional Support",
      img: CarouselImageTwo,
      details: [
        "Social Interaction: Engaging Conversations: Providing friendly interaction to stimulate mental engagement and alleviate feelings of loneliness.",
        "Activity Participation: Encouraging involvement in hobbies, games, and activities that bring joy and enhance cognitive function.",
        "Emotional Support: Empathetic Listening: Offering a compassionate ear to share stories, concerns, and memories.",
        "Emotional Well-being: Monitoring mood changes and providing support to improve overall mental health.",
      ],
    },
    {
      title: "Medication Management",
      img: CarouselImageThree,
      details: [
        "Medication Reminders: Scheduled Reminders: Ensuring medications are taken at the correct times and in the proper dosages.",
        "Dressing Assistance: Aiding in selecting appropriate attire and assisting with dressing to promote dignity and self-esteem.",
        "Toileting and Incontinence Care: Providing discreet assistance with bathroom needs and managing incontinence with sensitivity and respect.",
        "Mobility and Transfer Support: Assisting with moving around the home, including getting in and out of bed, chairs, or wheelchairs to prevent falls and injuries.",
        "Meal Preparation and Feeding: Documentation: Keeping accurate records of medication intake for family and healthcare providers.",
        "Coordination with Pharmacies: Prescription Refills: Assisting with ordering and picking up medications.",
        "Medication Organization: Helping organize pills in daily or weekly planners to prevent errors.",
      ],
    },
    {
      title: "Health Monitoring",
      img: CarouselImageFour,
      details: [
        "Vital Signs Monitoring: Regular Checks: Monitoring blood pressure, heart rate, blood sugar levels, and other vital signs as needed.",
        "Health Reporting: Notifying family members and healthcare professionals of any significant changes or concerns.",
        "Chronic Condition Management: Disease Management Support: Assisting with care plans for conditions like diabetes, arthritis, hypertension, or heart disease.",
        "Symptom Observation: Keeping an eye on symptoms and reactions to medications or treatments.",
      ],
    },
    {
      title: "Specialized Care",
      img: CarouselImageFive,
      details: [
        "Dementia and Alzheimer's Care: Cognitive Support: Implementing memory exercises and orientation activities to stimulate mental function.",
        "Safety Measures: Creating a secure environment to prevent wandering and ensure safety.",
        "Behavioral Management: Handling mood swings, confusion, or agitation with patience and understanding.",
        "Palliative and End-of-Life Care: Comfort-Focused Care: Prioritizing pain management and comfort for those with serious illnesses.",
        "Emotional and Spiritual Support: Providing compassionate care that respects the individual’s wishes and cultural practices.",
        "Family Support: Assisting families during difficult times with resources and emotional support.",
      ],
    },
    {
      title: "Respite Care",
      img: CarouselImageSix,
      details: [
        "Temporary Relief for Family Caregivers: Short-Term Care: Stepping in when primary caregivers need a break due to personal commitments, vacations, or rest.",
        "Flexible Scheduling: Offering services ranging from a few hours a day to overnight or extended periods.",
      ],
    },
    {
      title: "Transportation Services",
      img: CarouselImageSeven,
      details: [
        "Medical Appointments: Safe Transport: Providing reliable transportation to doctor visits, therapy sessions, and medical procedures.",
        "Appointment Assistance: Helping with check-ins, paperwork, and communicating with medical staff if needed.",
        "Errands and Outings: Grocery Shopping: Assisting with purchasing food and household necessities.",
        "Social Engagements: Facilitating attendance at community events, religious services, or visits with friends and family.",
      ],
    },
    {
      title: "Light Housekeeping and Home Maintenance",
      img: CarouselImageOne,
      details: [
        "Cleaning and Organization: Household Tasks: Performing light cleaning such as dusting, vacuuming, washing dishes, and tidying living spaces.",
        "Laundry Services: Washing, drying, folding, and putting away clothes and linens.",
        "Home Safety Assessments: Hazard Identification: Checking for potential risks like loose rugs, poor lighting, or cluttered pathways.",
        "Safety Enhancements: Assisting in arranging for home modifications like grab bars or ramps if necessary.",
      ],
    },
    {
      title: "Nutrition and Diet Support",
      img: CarouselImageSeven,
      details: [
        "Meal Planning: Dietary Compliance: Ensuring meals meet medical dietary restrictions (e.g., low sugar, low cholesterol).",
        "Balanced Nutrition: Incorporating a variety of foods to meet nutritional needs and preferences.",
        "Grocery Shopping: List Preparation: Helping create shopping lists based on dietary needs and meal plans.",
        "Shopping Assistance: Accompanying clients to the store or handling shopping independently.",
      ],
    },
    {
      title: "Rehabilitation Support",
      img: CarouselImageThree,
      details: [
        "Physical Therapy Assistance: Exercise Support: Assisting with prescribed exercises to improve mobility, strength, and balance.",
        "Therapy Coordination: Working with physical or occupational therapists to reinforce rehabilitation goals. Nurses and doctors come to the home to see the residents",
        "Mobility Training: Use of Aids: Supporting the use of walkers, canes, or wheelchairs.",
        "Fall Prevention: Teaching safe movement techniques to reduce the risk of falls.",
      ],
    },
    {
      title: "Communication with Family and Healthcare Providers",
      img: CarouselImageFour,
      details: [
        "Regular Updates: Progress Reports: Keeping family members informed about daily activities, health status, and any concerns.",
        "Open Communication Channels: Being accessible for questions and discussions about care.",
        "Coordination of Care: Team Collaboration: Working alongside doctors, nurses, and other professionals to ensure cohesive care.",
        "Appointment Scheduling: Assisting in setting up medical appointments and follow-ups.",
      ],
    },
    {
      title: "Technology Assistance",
      img: CarouselImageTwo,
      details: [
        "Using Communication Devices: Staying Connected: Helping with phone calls, video chats, or emails to maintain relationships with loved ones.",
        "Technology Education: Teaching basic use of smartphones, tablets, or computers.",
        "Safety Devices: Emergency Systems: Assisting with setting up and using personal emergency response systems or medical alert devices.",
        "Monitoring Tools: Helping use health monitoring apps or devices as prescribed.",
      ],
    },
    {
      title: "Personal Errands",
      img: CarouselImageFive,
      details: [
        "Mail and Correspondence: Mail Management: Assisting with sorting mail, paying bills, and managing important documents.",
        "Letter Writing: Helping compose letters or emails to friends and family.",
      ],
    },
    {
      title: "Recreational Activities",
      img: CarouselImageThree,
      details: [
        "Mental Stimulation: Cognitive Games: Engaging in puzzles, board games, or reading to stimulate the mind.",
        "Creative Activities: Encouraging participation in art, music, or crafts.",
        "Physical Activities: Exercise Programs: Leading gentle exercises like stretching, walking, or yoga suited to the client's ability.",
        "Outdoor Activities: Accompanying on walks or gardening to enjoy fresh air and nature.",
      ],
    },
    {
      title: "Household Management",
      img: CarouselImageSix,
      details: [
        "Appointment Reminders: Scheduling Assistance: Keeping track of medical, personal, or home maintenance appointments.",
        "Calendar Management: Organizing schedules to ensure important dates are not missed.",
        "Financial Organization: Expense Tracking: Assisting with recording daily expenses and managing budgets.",
        "Bill Payments: Helping ensure bills are paid on time to avoid late fees.",
      ],
    },
    {
      title: "Safety and Emergency Preparedness",
      img: CarouselImageTwo,
      details: [
        "Emergency Planning: Safety Protocols: Establishing clear procedures in case of emergencies like fires or natural disasters.",
        "Emergency Contacts: Maintaining an up-to-date list of contacts for quick access.",
        "24/7 Availability: On-Call Support: Providing access to assistance at any time, especially for urgent needs.",
      ],
    },
    {
      title: "Cultural and Language Support",
      img: CarouselImageSeven,
      details: [
        "Cultural Sensitivity: Respectful Care: Providing services that respect cultural, religious, and personal values.",
        "Language Assistance: Offering caregivers who speak the client's native language if needed.",
        "Religious Practices: Spiritual Support: Assisting with participation in religious services or rituals.",
        "Holiday Celebrations: Helping celebrate important cultural or religious holidays.",
      ],
    },
    {
      title: "Advocacy and Support",
      img: CarouselImageOne,
      details: [
        "Healthcare Advocacy: Appointment Accompaniment: Attending medical appointments to help ask questions and understand instructions.",
        "Care Coordination: Ensuring all aspects of the client's care are aligned and advocating for their needs.",
        "Legal and Financial Referrals: Referring to trusted legal or financial advisors for matters like wills or estate planning.",
      ],
    },
    {
      title: "End-of-Life Care",
      img: CarouselImageFive,
      details: [
        "Palliative Care Plans: Specialized care tailored to comfort and emotional support for those in the final stages of life.",
        "Family Counseling: Offering personalized grief support and family counseling services.",
      ],
    },
  ];

  return (
    <motion.div
      ref={careValuesRef}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className={`pt-[50px] lg:pt-[100px] px-5 lg:px-[100px] w-full bg-[#fffdfd] ${
        pathname == "/services" ? "my-0" : "my-20"
      }`}
    >
      <h3
        className={`text-[19px] text-center font-[700] text-[#887d52] 3xl:text-[1.8rem] ${
          pathname == "/services" ? "hidden" : "block"
        }`}
      >
        Our Services?
      </h3>
      <h3 className="text-[24px] lg:text-[32px] mt-2 lg:mt-0 3xl:text-[2.5rem] font-[700] text-[#675b30] capitalize text-center">
        Types of care we provide
      </h3>
      <p className="text-center">
        <span className={`${pathname == "/" ? "hidden" : "inline"}`}>
          At JOYCE CARE HOME,
        </span>{" "}
        <span className={`${pathname == "/" ? "capitalize" : ""}`}>we</span> are
        dedicated to providing personalized and compassionate home care services
        <span className={`${pathname == "/" ? "hidden" : "inline"}`}>
          that cater to the unique needs of each senior.
        </span>{" "}
        <span className="hidden lg:inline">
          {" "}
          Our goal is to enhance the quality of life for your loved ones while
          allowing them to maintain independence in the comfort of own home.
          Below are the detailed services we offer:
        </span>
      </p>
      <div className="flex justify-evenly lg:justify-between flex-wrap gap-4 py-10 lg:py-20">
        {pathname == "/" ? (
          <>
            {" "}
            {careTypes.slice(0, 6).map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="w-full md:w-[45%] lg:w-[30%] border border-[#675b30] min-h-[250px] bg-[#ffffff] shadow-md px-6 py-8 flex flex-col  rounded-[10px]"
                >
                  <p className="font-[700] text-[#675b30] text-[18px] flex items-center gap-2">
                    <FaNotesMedical className="w-[10%]" />{" "}
                    <span>{item.title}</span>
                  </p>
                  <div className=" text-[14px] flex-grow">
                    {item.details
                      .slice(0, 2)
                      .map((detail: any, index: number) => {
                        return (
                          <div key={index}>
                            {detail.length < 359 ? (
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
                      setModalData(item);
                      setOpenModal(true);
                    }}
                    className="bg-[#887d52] text-[14px] w-[fit-content] text-white px-3 py-1 mt-4 rounded-[5px]"
                  >
                    Read more
                  </button>
                </div>
              );
            })}
            {pathname == "/" && (
              <div className="flex gap-3 text-[#675b30] pt-10 items-center">
                <a
                  href="/services"
                  className="text-[19px] lg:text-[23px] font-[700]"
                >
                  See more
                </a>
                <div className="flex justify-start">
                  <a href="/services">
                    {" "}
                    <FaArrowRight className="text-[28px] md:text-[40px] 3xl:text-[60px] text-[#675b30] slow animate-pulse cursor-pointer" />
                  </a>
                </div>
              </div>
            )}
          </>
        ) : (
          careTypes.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="w-full md:w-[45%] lg:w-[30%] border border-[#675b30] min-h-[250px] bg-[#ffffff] shadow-md px-6 py-8 flex flex-col  rounded-[10px]"
              >
                <p className="font-[700] text-[#675b30] text-[18px] flex items-center gap-2">
                  <FaNotesMedical /> {item.title}
                </p>
                <div className="text-justify text-[14px] flex-grow">
                  {item.details
                    .slice(0, 2)
                    .map((detail: any, index: number) => {
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
              </div>
            );
          })
        )}
      </div>

      {/* <ServicesSlider
        setModalData={setModalData}
        setOpenModal={setOpenModal}
        careTypes={careTypes}
      /> */}

      <Modal
        setOpenModal={setOpenModal}
        openModal={openModal}
        data={modalData}
      />
    </motion.div>
  );
};

export default CareTypes;
