import  { useState } from "react";
import { TabsInfo } from "./tabsInfo";
import { Tab } from "./Tab";
import { useSelector } from "react-redux";

const TabsWrapper = () => {
  const [active, setActive] = useState("Overview");
  const theme = useSelector((state: any) => state.theme.value.name);
  return (
   
      <div className={`${theme}-tab-container `}>
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
  
  );
};
export default TabsWrapper;
