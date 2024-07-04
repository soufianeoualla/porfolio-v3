import Image from "next/image";
import arrow_right from "../assets/arrowright.svg";
import arrow_left from "../assets/arrowleft.svg";
import soufiane from "../assets/soufiane.png";
import contact from "../assets/contact.svg";

export const Footer = () => {
  return (
    <div className=" max-w-[1180px] mx-auto pt-16 pb-32 flex flex-col justify-center items-center text-center  ">
      <p className="text-2xl font-medium">Tell us about your project</p>
      <div className="relative">
        <h1 className="text-7xl sm:text-5xl font-bold uppercase leading-[100px] sm:leading-[80px] text-white">
          Let’s Work <br /> Together
        </h1>
        <Image
          src={soufiane}
          alt=""
          width={60}
          className="absolute bottom-[18px] sm:w-[40px] translate-x-[108%]"
        />
      </div>
      <div className="flex gap-[70px] sm:gap-8">
        <Image src={arrow_left} alt="" className="sm:w-[60px]" />
        <Image
          src={contact}
          alt="contact"
          className="relative translate-y-20 sm:w-[10 0px]  animate-pulse"
          width={149}
          height={149}
        />
        <Image src={arrow_right} alt="" className=" sm:w-[60px]" />
      </div>
    </div>
  );
};
