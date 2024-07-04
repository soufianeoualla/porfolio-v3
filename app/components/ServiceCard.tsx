import Image from "next/image";
import coding from "../assets/Rectangle 34624447.png";
import frontend from "../assets/front-end.png";
import uiux from "../assets/uiux.png";
import webapp from "../assets/webapp.png";
import website from "../assets/website.png";
type Props = {
  service: "UI/UX" | "Front-end Development" | "Coding" | "Web App" | "Website";
  number: string;
};

export const ServiceCard = ({ service, number }: Props) => {
  let selectedImage;

  switch (service) {
    case "Coding":
      selectedImage = coding;
      break;
    case "UI/UX":
      selectedImage = uiux;
      break;
    case "Front-end Development":
      selectedImage = frontend;
      break;
    case "Web App":
      selectedImage = webapp;
      break;
    case "Website":
      selectedImage = website;
      break;
    default:
      selectedImage = coding;
      break;
  }
  
  return (
    <div className="border border-white/35 flex flex-col justify-between items-start  h-[358px] sm:h-[300px] group relative">
      <Image
        src={selectedImage}
        alt={service}
        className="object-fill h-full absolute  hidden group-hover:block  z-10"
      />
      <div className="flex justify-between items-center w-full px-6 pt-3 z-20">
        <span className="border border-white/70 w-5 h-5 rounded-full group-hover:bg-white" />
        <span className="  text-4xl group-hover:text-white services tracking-[-1px]  font-semibold stroke-white">
          {number}
        </span>
      </div>
      <h3 className="text-white text-4xl sm:text-3xl font-bold tracking-[-1px] px-6 sm:px-3  pb-3 z-20">
        {service}
      </h3>
    </div>
  );
};
