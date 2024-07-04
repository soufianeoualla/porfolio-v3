import { projects } from "@/data";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import Link from "next/link";

export const Projects = () => {
  return (
    <section className=" max-w-[1180px] mx-auto">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl sm:text-3xl font-bold text-white">
          Recent <br className="hidden sm:block" /> Projects
        </h2>
        <Link href={'https://www.linkedin.com/in/soufianeoualla/'} target="_blank" className="text-white w-36 h-36 sm:w-24 sm:h-24 rounded-full flex justify-center items-center flex-col border-[1.5px] font-medium text-base sm:text-sm tracking-[-2%] border-white hover:bg-indigo-600">
          {" "}
          View All{" "}
          <span className="ml-6 pb-[1px] border-b font-semibold">Projects</span>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-1">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
