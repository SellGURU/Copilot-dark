
import { btnInfo, chartsInfo } from ".";
import { useState } from "react";
import { InfoGraghicBtn } from "./InfoGraghicBtn";
import { ChartCard } from "./chartCard";
import { InfoGraphicCenter} from "./infoGraphicCenterSection";
export const InfoGraphicSection = () => {
    const [active, setActive] = useState(btnInfo[1].text)
  return (
    <div className="flex justify-center w-full mx-auto max-w[1440px] bg-black-background  gap-5 ">
      <div className="flex  flex-col gap-[6px]">
       {btnInfo.map((item)=>(
        <InfoGraghicBtn key={item.text} text={item.text} number={item.number}  active = {active} setActive={setActive}  />
       ))}
      </div>
        <InfoGraphicCenter />  
       <div className="flex flex-col gap-3">
      {chartsInfo.map((item, i )=>(
        <ChartCard key={i} type={item.type} value={item.value} isMeasured={item.isMeasured} othersTypes={item.otherTypes} status={item.status} icon={item.icon} />
      ))}
       </div>
    </div>
  );
};
