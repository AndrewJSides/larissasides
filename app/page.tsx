"use client";

import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "australia",
    subject: "",
    content: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Assuming you have a server or API to send emails
    const emailData = {
      to: "l.keller129@gmail.com",
      subject: formData.subject,
      content: formData.content,
    };

    try {
      // Send emailData to your server or API to handle email sending
      // Example using fetch:
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const [selected, setSelected] = useState("bio");
  const items = [
    {
      name: "Biography",
      key: "bio",
      render: () => Biography(),
    },
    {
      name: "Mission Statement",
      key: "expertise",
      render: () => MissionStatement(),
    },
    {
      name: "Functional Resume",
      key: "resume",
      render: () => Resume(),
    },
    {
      name: "Projects",
      key: "landing",
      render: () => Projects(),
    },
    {
      name: "Contact Me",
      key: "contact`",
      render: () => Contact(),
    },
  ];

  function handleItemClick(key: string) {
    setSelected(key);
  }

  const Biography = () => {
    return (
      <>
        <div className="w-3/8 ml-2 mt-2">
          <Image
            className="rounded-3xl border-4 border-black/80"
            src="/headshot3.jpg"
            alt="Picture of the author"
            width={350}
            height={350}
          />
        </div>
        <div className="w-1/4 p-4">
          <div className="text-8xl text-[#FAF2F0] transform rotate-90 translate-y-16 h-fit whitespace-nowrap ">
            Larissa Sides
          </div>
        </div>
        <div className="text-lg w-1/4 pt-24 text-center text-slate-800">
          <div className="text-3xl text-black">About Me</div>
          <br />
          Experienced Emergency Medical Technician with a demonstrated history
          of working in the higher education industry. Skilled in Nutrition
          Education, First Aid, Diet Planning, Medical Terminology, and Basic
          Life Support (BLS). Strong healthcare services professional with a
          Bachelor of Science - BS focused in Nutrition from Arizona State
          University.{" "}
        </div>
      </>
    );
  };

  const MissionStatement = () => {
    return (
      <div className="flex flex-col justify-center text-center items-center">
        <header className="text-black text-2xl text-center text-[#FAF2F0] h-fit whitespace-nowrap ">
          Mission Statement
        </header>
        <div className="p-8 text-lg text-slate-800">
          {" "}
          I&apos;m a passionate healthcare professional dedicated to delivering
          top-notch patient care.
          {<br />}
          My career goals include furthering my expertise in healthcare,
          especially in nursing and patient care, as I work towards earning my
          doctorate in nursing practice. My journey has always been about
          embracing continuous learning and growth. I&apos;m excited to apply my
          background in nursing and nutrition to enhance the well-being of
          patients, whether it&apos;s in high-stress critical care scenarios,
          clinical settings, or educational roles. My mission is to have a
          positive impact on the healthcare field by using my knowledge,
          empathy, and critical thinking skills to ensure the best outcomes for
          patients and their families. Whether I&apos;m at the bedside providing
          direct patient care or serving as a nurse practitioner, I&apos;m
          committed to making a difference
        </div>
      </div>
    );
  };
  const Resume = () => {
    return (
      <>
        <div className="text-xl text-[#FAF2F0] text-center mt-8 ml-4">
          <table className="table-auto">
            <tbody>
              <tr>
                <td className="text-3xl text-black">Work Experience</td>
              </tr>
              <tr className="flex flex-row items-center space-x-4 mb-4">
                <td>
                  <Image
                    className="rounded-3xl border-2 border-black/80"
                    src="/sutter.jpg"
                    alt="Picture of the author"
                    width={40}
                    height={40}
                  />
                </td>
                <td className="text-lg text-slate-800">
                  2023-Present: Sutter Health - Bay Area, Clinical Nurse,
                  Full-time
                </td>
              </tr>
              <tr className="flex flex-row items-center space-x-4 mb-4">
                <td>
                  <Image
                    className="rounded-3xl border-2 border-black/80"
                    src="/kaiser.jpg"
                    alt="Kaiser Permanente Logo"
                    width={40}
                    height={40}
                  />
                </td>
                <td className="text-lg text-slate-800">
                  2018-Present: Kaiser Permanente, Emergency Department
                  Technician
                </td>
              </tr>

              <tr className="flex flex-row items-center space-x-4 mb-4">
                <td>
                  <Image
                    className="rounded-3xl border-2 border-black/50 shadow-2xl"
                    src="/regional.jpg"
                    alt="Regional MC Logo"
                    width={40}
                    height={40}
                  />
                </td>
                <td className="text-lg text-slate-800">
                  2022-2023: Regional Medical Center of San Jose, Intensive Care
                  Nurse, Full-time
                </td>
              </tr>
              <tr className="flex flex-row items-center space-x-4 mb-4">
                <td>
                  <Image
                    className="rounded-3xl border-2 border-black/50 shadow-2xl"
                    src="/smu.jpg"
                    alt="SMU Logo"
                    width={40}
                    height={40}
                  />
                </td>
                <td className="text-lg text-slate-800">
                  2021-2022: Samuel Merritt University, Tutor, Part-time
                </td>
              </tr>
              <tr className="flex flex-row items-center space-x-4 mb-4">
                <td>
                  <Image
                    className="rounded-3xl border-2 border-black/50 shadow-2xl"
                    src="/sjcc.jpg"
                    alt="Regional MC Logo"
                    width={40}
                    height={40}
                  />
                </td>
                <td className="text-lg text-slate-800">
                  2016-2020: San Jose City College, EMT Skills Instructor,
                  Part-time
                </td>
              </tr>
              <tr className="flex flex-row items-center space-x-4 mb-4">
                <td>
                  <Image
                    className="rounded-3xl border-2 border-black/50 shadow-2xl"
                    src="/rm.jpg"
                    alt="Rural Metro Logo"
                    width={40}
                    height={40}
                  />
                </td>
                <td className="text-lg text-slate-800">
                  2015-2017: Rural/Metro Corporation, Emergency Medical
                  Technician
                </td>
              </tr>
              <br />
              <tr>
                <td className="text-3xl text-black">Education</td>
              </tr>
              <tr className="flex flex-row items-center space-x-4 mb-4">
                <td>
                  <Image
                    className="rounded-3xl border-2 border-black/50 shadow-2xl"
                    src="/smu.jpg"
                    alt="Rural Metro Logo"
                    width={40}
                    height={40}
                  />
                </td>
                <td className="text-lg text-slate-800">
                  2023-Present: FNP/DNP Student
                </td>
              </tr>
              <tr className="flex flex-row items-center space-x-4 mb-4">
                <td>
                  <Image
                    className="rounded-3xl border-2 border-black/50 shadow-2xl"
                    src="/smu.jpg"
                    alt="Rural Metro Logo"
                    width={40}
                    height={40}
                  />
                </td>
                <td className="text-lg text-slate-800">
                  2021-2022: Samuel Merritt University: BSN, Registered
                </td>
              </tr>
              <tr className="flex flex-row items-center space-x-4 mb-4">
                <td>
                  <Image
                    className="rounded-3xl border-2 border-black/50 shadow-2xl"
                    src="/asu.jpg"
                    alt="Rural Metro Logo"
                    width={40}
                    height={40}
                  />
                </td>
                <td className="text-lg text-slate-800">
                  2017-2019 Arizona State University: Bachelor of Science in
                  Nutrition
                </td>
              </tr>
              <tr className="flex flex-row items-center space-x-4 mb-4">
                <td>
                  <Image
                    className="rounded-3xl border-2 border-black/50 shadow-2xl"
                    src={"/wv.jpg"}
                    alt="Rural Metro Logo"
                    width={40}
                    height={40}
                  />
                </td>
                <td className="text-lg text-slate-800">
                  2013-2017 West Valley College: General Biology
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  };

  const Contact = () => {
    return (
      <div className="flex flex-col w-full justify-center text-lg">
        email: l.keller129@gmail.com
      </div>
    );
  };
  const Projects = () => {
    return (
      <div className="flex flex-col justify-center text-center items-center text-lg">
        Future Projects
      </div>
    );
  };

  return (
    <main className="flex flex-row h-screen justify-between bg-[#FAF2F0] text-black font-bold">
      <div className="z-10 max-h-5xl text-center h-screen w-1/4 items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col w-full justify-center items-center h-full">
          <div className="flex flex-col w-fit justify-evenly h-1/2 text-lg">
            {items.map((item) => (
              <button
                key={item.key}
                className={`text-center cursor-pointer border-b-2 border-black/10 hover:border-black/50`}
                onClick={() => handleItemClick(item.key)}
              >
                {item.name}{" "}
                {selected == item.key && (
                  <span className="text-red-500">*</span>
                )}
              </button>
            ))}
          </div>
          <div className="flex flex-row justify-evenly w-full">
            <SocialIcon
              bgColor="black"
              url="https://www.linkedin.com/in/larissa-keller-0a7093168/"
            />
            <SocialIcon
              bgColor="black"
              url="https://www.facebook.com/larissa.sides"
            />
            <SocialIcon
              bgColor="black"
              url="https://www.instagram.com/littlemisslariss/"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#6A988B] w-3/4 h-screen">
        <div className="flex flex-row w-full h-full ml-4 pt-8">
          {items.find((item) => item.key == selected)?.render()}
        </div>
      </div>
    </main>
  );
}
