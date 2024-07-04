import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  project: {
    id: number;
    title: string;
    demo: string;
    github: string;
    image: string;
    stack: string[];
  };
  index: number;
};

export const ProjectCard = ({ project, index }: Props) => {
  return (
    <div
      key={project.id}
      className={cn(
        "space-y-4 group relative   ",
        index % 2 === 1 && " translate-y-20 sm:translate-y-0"
      )}
    >
      <div className="relative before:absolute before:inset-0  group-hover:before:bg-black/60 ">
        <Image
          src={project.image}
          alt={project.title}
          height={450}
          width={450}
          className="w-full rounded-lg"
        />
      </div>
      <h4 className="text-white font-medium text-xl capitalize">
        {project.title}
      </h4>
      <div className="hidden group-hover:block ">
        <div className="flex flex-col justify-center items-center gap-y-2 absolute top-[40%] sm:top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2">
          <a
            className="pb-1 px-1 border-b-2 hover:border-b-4 hover:border-indigo-600 font-bold text-white text-lg"
            href={project.demo}
            target="_blank"
          >
            Live Demo
          </a>
          <a
            className="pb-1 px-1 border-b-2 hover:border-b-4 hover:border-indigo-600 font-bold text-white text-lg"
            href={project.github}
            target="_blank"
          >
            View Code
          </a>
        </div>
        <div className="flex items-center gap-3 absolute px-3 bottom-[70px]    flex-wrap ">
          {project.stack.map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 sm:p-2 text-black bg-white rounded-md text-sm font-medium uppercase"
            >
              {item}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
