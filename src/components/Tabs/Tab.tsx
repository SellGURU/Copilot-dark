import React from "react";
interface BackTabProps {
  text: string;
  icon: string;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  isFirst?: boolean;
  isLast?: boolean;
}
export const Tab = ({ text, icon, active, setActive , isFirst, isLast}: BackTabProps) => {
  return (
    <div
      onClick={() => setActive(text)}
      className={` flex gap-1 items-center  ${
        active === text ? "bg-teal-500 " : ""
      } cursor-pointer px-8 py-3 ${isLast ? 'rounded-r-2xl' : ''} ${isFirst ? 'rounded-l-2xl' : ''} ${!isLast ? 'border-r' : ''} border-gray-500`}
    >
      <img className="object-contain " width={22} src={icon} alt={text} />
      <h5 className="text-white font-normal text-[14px]  ">{text}</h5>
    </div>
  );
};
