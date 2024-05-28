import { useState } from "react";
import arrowleft from "../../../public/Themes/Aurora/icons/arrow-left.svg";
import { TabsInfo } from ".";
import { Tab } from "./Tab";
import { useSelector } from "react-redux";
export const TabsWrapper = () => {
  const [active, setActive] = useState("Overview");
  const theme = useSelector((state: any) => state.theme.value.name);
  return (
    <div className="flex  justify-center items-center gap-2 ">
      <div className="bg-black-primary flex justify-center items-center px-4 py-3 rounded-xl">
        <img className='object-contain' src={arrowleft}  alt="back" />
      </div>
      <div className={`${theme}-tab-container`}>
        {TabsInfo.map((item, index) => (
          <Tab
            key={item.text}
            text={item.text}
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
