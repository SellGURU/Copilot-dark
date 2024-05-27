import { useState } from "react";
import arrowleft from "../../assets/icons/arrow-left.svg";
import { TabsInfo } from ".";
import { Tab } from "./Tab";
export const TabsWrapper = () => {
  const [active, setActive] = useState("Overview");
  return (
    <div className="flex   gap-2 ">
      <div className="bg-tabs-backgrund flex justify-center items-center   px-3    rounded-2xl">
        <img className="object-contain" width={22} src={arrowleft} alt="back" />
      </div>
      <div className="  flex  bg-[#1e1e1e]  rounded-2xl  ">
        {TabsInfo.map((item, index) => (
          <Tab
            key={item.text}
            text={item.text}
            icon={item.icon}
            active={active}
            setActive={setActive}
            isFirst={index === 0}
            isLast={index === TabsInfo.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
