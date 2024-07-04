import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  item: {
    name: string;
    icon: any;
  };
  index: number;
  length: number;
};

export const TechnologieItem = ({ item, index, length }: Props) => {
  const { icon, name } = item;
  return (
    <div
      className={cn(
        "w-[216px] h-[93px] sm:w-auto  bg-white  flex justify-center items-center z-20",
        index === 0 && "rounded-t-xl",
        index === length - 1 && "rounded-b-xl",
        index % 3 === 1 && "rounded-l-xl",
        index % 3 === 2 && "rounded-r-xl"

      )}
    >
      <Image src={icon} alt={name} height={55} className="sm:h-[40px] sm:w-[40px]" />
    </div>
  );
};
