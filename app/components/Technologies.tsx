import html from "../assets/html.png";
import css from "../assets/css.png";
import next from "../assets/next.svg";
import react from "../assets/react.svg";
import sass from "../assets/sass.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import prisma from "../assets/prisma.svg";
import postgrsql from "../assets/postgre.png";
import tailwind from "../assets/tailwind.svg";
import { TechnologieItem } from "./TechnologieItem";
import { EmptyDiv } from "./EmptyDiv";
import React from "react";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Technologies = () => {
  const technologies = [
    { name: "HTML", icon: html },
    { name: "CSS", icon: css },
    { name: "TAILWIND CSS", icon: tailwind },
    { name: "SASS", icon: sass },
    { name: "JAVASCRIPT", icon: javascript },
    { name: "TYPESCRIPT", icon: typescript },
    { name: "REACTJS", icon: react },
    { name: "NEXTJS", icon: next },
    { name: "PRISMA ORM", icon: prisma },
    { name: "POSTGRESQL", icon: postgrsql },
  ];

  return (
    <section className=" max-w-[1180px] mx-auto">
      <h2 className="text-4xl font-bold text-black mb-8">Technologies</h2>
      <div className=" flex  justify-between items-center sm:flex-col-reverse sm:gap-8">
        <div className="flex gap-x-6 ">
          <div className="rounded-2xl px-11 py-5 sm:px-4 sm:py-3 flex flex-col bg-white    justify-center items-center  ">
            <FaLinkedin className="w-28 h-28 mb-2 sm:w-20 sm:h-20" />
            <span className="textlg font-semibold">Profile</span>
            <Link
              href={"https://www.linkedin.com/in/soufianeoualla/"}
              target="_blank"
              className="px-5 py-2 rounded-lg bg-indigo-600 flex items-center justify-center gap-x-2 text-white mt-2 hover:bg-opacity-70 "
            >
              <b className="text-base tracking-[-3%]">LinkedIn</b>
              <ArrowUpRight strokeWidth={2.5} width={16} height={16} />
            </Link>
          </div>

          <div className="rounded-2xl px-11 py-5 sm:px-4 sm:py-3 flex flex-col bg-white    justify-center items-center ">
            <FaSquareGithub className="w-28 h-28 mb-2 sm:w-20 sm:h-20" />

            <span className="textlg font-semibold">Profile</span>
            <Link
              href={"https://www.linkedin.com/in/soufianeoualla/"}
              target="_blank"
              className="px-5 py-2 rounded-lg bg-indigo-600 flex items-center justify-center gap-x-2 text-white mt-2 hover:bg-opacity-70 "
            >
              <b className="text-base tracking-[-3%]">Github</b>
              <ArrowUpRight strokeWidth={2.5} width={16} height={16} />
            </Link>
          </div>
        </div>

        <div className=" w-[659px] sm:w-full grid grid-cols-3 relative ">
          <div className="bg-white w-[80%] h-[calc(100%-170px)] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10"></div>
          {technologies.map((item, index) => (
            <React.Fragment key={index}>
              {index % 3 === 0 && <EmptyDiv />}
              <TechnologieItem
                item={item}
                index={index}
                length={technologies.length}
              />
              {index % 3 === 0 && <EmptyDiv />}
              {index % 3 === 1 && <EmptyDiv />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
