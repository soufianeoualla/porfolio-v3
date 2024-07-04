import { ArrowUpRight } from "lucide-react";
import { Navbar } from "./Navbar";
import Link from "next/link";


export const Header = () => {
  return (
    <header className="flex justify-between items-center text-white">
      <span className=" font-bold tracking-wide text-2xl">SOUFIANE</span>
      <Navbar/>
      <Link href={'https://www.linkedin.com/in/soufianeoualla/'} target="_blank" className=" px-5 py-[14px] flex justify-center items-center gap-x-2  font-bold bg-indigo-600 rounded-lg hover:bg-opacity-70">
        Hire Me
        <ArrowUpRight strokeWidth={2.5} width={16} height={16} />
      </Link>
    </header>
  );
};
