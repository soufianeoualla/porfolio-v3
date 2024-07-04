import Image from "next/image";
import home_Image from "../assets/home-image.svg";
import chat_image from "../assets/lets-have-a-chat.svg";
import graphic_image from "../assets/Graphic_Elements.svg";
import Link from "next/link";
export const Hero = () => {
  return (
    <section className="flex justify-between items-center mt-28 relative sm:flex-col-reverse">
      <div>
        <h1 className="text-[160px] sm:text-7xl tracking-[-6px] sm:tracking-[-4px] text-white leading-[172px] mb-8">
          I’m Front End Developer
        </h1>
        <div className="flex items-center gap-28 sm:flex-col sm:gap-8">
          <p className="w-[60%] sm:w-full leading-7 text-[16px] ">
            I’m a Front-end Developer based in Morocco passionate about building
            accessible web apps.committed to crafting exceptional user
            experiences. With proficiency in HTML, CSS, JavaScript, TypeScript, Next JS and
            React,
          </p>
          <Link href={'https://www.linkedin.com/in/soufianeoualla/'} target="_blank">
          <Image
            src={chat_image}
            alt="chat"
            width={120}
            height={120}
            className="spin sm:hidden "
            />
            </Link>
        </div>
        <div className="mt-20 ">
          <p className="mona text-[44px] font-bold">
            10 <span className="text-[39px] text-indigo-600">+</span>
          </p>
          <p className="text-lg">Projects</p>
        </div>
      </div>
      <div className="flex items-end sm:ml-4 sm:mb-8  ">
        <Image src={home_Image} alt="soufiane" width={500} height={380} />
      </div>
      <Image
        src={graphic_image}
        alt="graphic image"
        width={1500}
        height={464}
        className="absolute "
      />
    </section>
  );
};
