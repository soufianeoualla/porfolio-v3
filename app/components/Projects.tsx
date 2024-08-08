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
        <Link
          href={"https://github.com/soufianeoualla/"}
          target="_blank"
          className="text-white hover:text-indigo-600 sm:w-24 sm:h-24  flex justify-center items-center flex-col  font-medium text-base sm:text-sm tracking-[-2%] group "
        >
          {" "}
          View All{" "}
          <span className="ml-6 pb-[1px] border-b font-semibold group-hover:border-b-indigo-600">Projects</span>
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
