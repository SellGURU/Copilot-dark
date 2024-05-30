import { btnInfo, chartsInfo } from ".";
import { useState } from "react";
import { InfoGraghicBtn } from "./InfoGraghicBtn";

import { InfoGraphicMain } from "./infoGraphicMain";
import { ChartCard } from "./chartCard";
interface btnInfo{}
export const InfoGraphic = () => {
    const [active, setActive] = useState(btnInfo[1].text)
  return (
    <div className="flex w-full max-w[1440px]   gap-3 ">
      <div className="flex  flex-col gap-2">
       {btnInfo.map((item)=>(
        <InfoGraghicBtn key={item.text} text={item.text} number={item.number}  active = {active} setActive={setActive}  />
       ))}
      </div>
        <InfoGraphicMain />  
       <div className="flex   flex-col gap-4">
      {chartsInfo.map((item, i )=>(
        <ChartCard key={i} type={item.type} value={item.value} isMeasured={item.isMeasured} status={item.status} icon={item.icon} />
      ))}
       </div>
    </div>
  );
};
