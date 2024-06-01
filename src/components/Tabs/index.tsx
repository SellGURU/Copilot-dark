import  { useState } from "react";
import { TabsInfo } from "./tabsInfo";
import { Tab } from "./Tab";
import { useSelector } from "react-redux";

const TabsWrapper = () => {
  const [active, setActive] = useState("Overview");
  const theme = useSelector((state: any) => state.theme.value.name);
  return (
    <div className="flex w-full ml-14  items-center gap-2 ">
      <div className={`${theme}-tab-icon-container`}>
        <img className={`${theme}-icons-arrow-left`} />
      </div>
      <div className={`${theme}-tab-container`}>
        {TabsInfo.map((item, index) => (
          <Tab
            theme={theme}
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
export default TabsWrapper;
