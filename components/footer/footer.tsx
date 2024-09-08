import Image from "next/image";
import React from "react";
import FullLogo from "../../public/images/logoone (1).png";
import { IoLocation } from "react-icons/io5";
import {
  MdLocationPin,
  MdMyLocation,
  MdOutlineMail,
  MdPhone,
} from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
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

  const careTypes = [
    {
      title: "Personal Care Services",
      details: [
        "Assistance with Activities of Daily Living (ADLs): Bathing and Hygiene: Helping with showers, baths, oral care, hair care, and grooming to ensure cleanliness and comfort.",
        "Nutritious Meal Planning: Preparing balanced meals tailored to dietary needs and preferences, including special diets (diabetic, low-sodium, vegetarian).",
        "Feeding Assistance: Helping with eating for those who have difficulty feeding themselves, ensuring proper nutrition and hydration.",
      ],
    },
    {
      title: "Companionship and Emotional Support",
      details: [
        "Social Interaction: Engaging Conversations: Providing friendly interaction to stimulate mental engagement and alleviate feelings of loneliness.",
        "Activity Participation: Encouraging involvement in hobbies, games, and activities that bring joy and enhance cognitive function.",
        "Emotional Support: Empathetic Listening: Offering a compassionate ear to share stories, concerns, and memories.",
        "Emotional Well-being: Monitoring mood changes and providing support to improve overall mental health.",
      ],
    },
    {
      title: "Medication Management",
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
      details: [
        "Vital Signs Monitoring: Regular Checks: Monitoring blood pressure, heart rate, blood sugar levels, and other vital signs as needed.",
        "Health Reporting: Notifying family members and healthcare professionals of any significant changes or concerns.",
        "Chronic Condition Management: Disease Management Support: Assisting with care plans for conditions like diabetes, arthritis, hypertension, or heart disease.",
        "Symptom Observation: Keeping an eye on symptoms and reactions to medications or treatments.",
      ],
    },
    {
      title: "Specialized Care",
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
      details: [
        "Temporary Relief for Family Caregivers: Short-Term Care: Stepping in when primary caregivers need a break due to personal commitments, vacations, or rest.",
        "Flexible Scheduling: Offering services ranging from a few hours a day to overnight or extended periods.",
      ],
    },
    {
      title: "Transportation Services",
      details: [
        "Medical Appointments: Safe Transport: Providing reliable transportation to doctor visits, therapy sessions, and medical procedures.",
        "Appointment Assistance: Helping with check-ins, paperwork, and communicating with medical staff if needed.",
        "Errands and Outings: Grocery Shopping: Assisting with purchasing food and household necessities.",
        "Social Engagements: Facilitating attendance at community events, religious services, or visits with friends and family.",
      ],
    },
    {
      title: "Light Housekeeping and Home Maintenance",
      details: [
        "Cleaning and Organization: Household Tasks: Performing light cleaning such as dusting, vacuuming, washing dishes, and tidying living spaces.",
        "Laundry Services: Washing, drying, folding, and putting away clothes and linens.",
        "Home Safety Assessments: Hazard Identification: Checking for potential risks like loose rugs, poor lighting, or cluttered pathways.",
        "Safety Enhancements: Assisting in arranging for home modifications like grab bars or ramps if necessary.",
      ],
    },
    {
      title: "Nutrition and Diet Support",
      details: [
        "Meal Planning: Dietary Compliance: Ensuring meals meet medical dietary restrictions (e.g., low sugar, low cholesterol).",
        "Balanced Nutrition: Incorporating a variety of foods to meet nutritional needs and preferences.",
        "Grocery Shopping: List Preparation: Helping create shopping lists based on dietary needs and meal plans.",
        "Shopping Assistance: Accompanying clients to the store or handling shopping independently.",
      ],
    },
    {
      title: "Rehabilitation Support",
      details: [
        "Physical Therapy Assistance: Exercise Support: Assisting with prescribed exercises to improve mobility, strength, and balance.",
        "Therapy Coordination: Working with physical or occupational therapists to reinforce rehabilitation goals.",
        "Mobility Training: Use of Aids: Supporting the use of walkers, canes, or wheelchairs.",
        "Fall Prevention: Teaching safe movement techniques to reduce the risk of falls.",
      ],
    },
    {
      title: "Communication with Family and Healthcare Providers",
      details: [
        "Regular Updates: Progress Reports: Keeping family members informed about daily activities, health status, and any concerns.",
        "Open Communication Channels: Being accessible for questions and discussions about care.",
        "Coordination of Care: Team Collaboration: Working alongside doctors, nurses, and other professionals to ensure cohesive care.",
        "Appointment Scheduling: Assisting in setting up medical appointments and follow-ups.",
      ],
    },
    {
      title: "Technology Assistance",
      details: [
        "Using Communication Devices: Staying Connected: Helping with phone calls, video chats, or emails to maintain relationships with loved ones.",
        "Technology Education: Teaching basic use of smartphones, tablets, or computers.",
        "Safety Devices: Emergency Systems: Assisting with setting up and using personal emergency response systems or medical alert devices.",
        "Monitoring Tools: Helping use health monitoring apps or devices as prescribed.",
      ],
    },
    {
      title: "Personal Errands",
      details: [
        "Mail and Correspondence: Mail Management: Assisting with sorting mail, paying bills, and managing important documents.",
        "Letter Writing: Helping compose letters or emails to friends and family.",
      ],
    },
    {
      title: "Recreational Activities",
      details: [
        "Mental Stimulation: Cognitive Games: Engaging in puzzles, board games, or reading to stimulate the mind.",
        "Creative Activities: Encouraging participation in art, music, or crafts.",
        "Physical Activities: Exercise Programs: Leading gentle exercises like stretching, walking, or yoga suited to the client's ability.",
        "Outdoor Activities: Accompanying on walks or gardening to enjoy fresh air and nature.",
      ],
    },
    {
      title: "Household Management",
      details: [
        "Appointment Reminders: Scheduling Assistance: Keeping track of medical, personal, or home maintenance appointments.",
        "Calendar Management: Organizing schedules to ensure important dates are not missed.",
        "Financial Organization: Expense Tracking: Assisting with recording daily expenses and managing budgets.",
        "Bill Payments: Helping ensure bills are paid on time to avoid late fees.",
      ],
    },
    {
      title: "Safety and Emergency Preparedness",
      details: [
        "Emergency Planning: Safety Protocols: Establishing clear procedures in case of emergencies like fires or natural disasters.",
        "Emergency Contacts: Maintaining an up-to-date list of contacts for quick access.",
        "24/7 Availability: On-Call Support: Providing access to assistance at any time, especially for urgent needs.",
      ],
    },
    {
      title: "Cultural and Language Support",
      details: [
        "Cultural Sensitivity: Respectful Care: Providing services that respect cultural, religious, and personal values.",
        "Language Assistance: Offering caregivers who speak the client's native language if needed.",
        "Religious Practices: Spiritual Support: Assisting with participation in religious services or rituals.",
        "Holiday Celebrations: Helping celebrate important cultural or religious holidays.",
      ],
    },
    {
      title: "Advocacy and Support",
      details: [
        "Healthcare Advocacy: Appointment Accompaniment: Attending medical appointments to help ask questions and understand instructions.",
        "Care Coordination: Ensuring all aspects of the client's care are aligned and advocating for their needs.",
        "Legal and Financial Referrals: Referring to trusted legal or financial advisors for matters like wills or estate planning.",
      ],
    },
    {
      title: "End-of-Life Care",
      details: [
        "Palliative Care Plans: Specialized care tailored to comfort and emotional support for those in the final stages of life.",
        "Family Counseling: Offering personalized grief support and family counseling services.",
      ],
    },
  ];
  return (
    <div className="w-full bg-[#640d57] text-white  ">
      <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-10 px-5 lg:px-[100px] lg:gap-4 py-10 lg:py-20">
        <div className="w-full md:w-[45%] lg:w-[30%] flex ">
          <div className="">
            <Image
              src={FullLogo}
              //   width={100}
              //   height={50}
              alt="Joyce-home-logo"
              className="inline object-contain w-[inherit]  scale-[370%] h-[90px] ps-10 sm:ps-10 lg:ps-7 lg:h-[70px] pt-[2px]"
            />
            <ul className="flex flex-col  text-[#887d52] gap-3 mt-4 justify-between">
              {careTypes.slice(0, 4)?.map((item: any, index: any) => {
                return (
                  <li key={index} className={`capitalize z-20 `}>
                    <a href={"/services"}>{item?.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="w-full md:w-[45%] lg:w-[30%] flex flex-col gap-4">
          <p className="font-[700] text-[18px]">Our Services</p>
          <ul className="flex flex-col gap-3 justify-between">
            {headers?.map((item: any, index: any) => {
              return (
                <li key={index} className={`capitalize   `}>
                  <a href={item.path}>{item?.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full md:w-[45%] lg:w-[30%] flex flex-col gap-4">
          <p className="font-[700] text-[18px]"> Contact Us </p>
          <div className="flex gap-3 flex-col">
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
      <hr className=" border-[#887d52]" />
      <p className=" text-center py-7">
        Copyright <span className="text-[#887d52] font-[600]">©</span>{" "}
        {new Date().getFullYear()}.{" "}
        <span className="text-[14px]">Joyce Care Home</span>
      </p>
    </div>
  );
};

export default Footer;
