
import React from "react";
import { btnInfo, chartsInfo } from "./Data";
import { useState } from "react";
import { InfoGraghicBtn } from "./InfoGraghicBtn";
import { OverviewChartCard } from "./chartCard";
import { InfoGraphicCenter} from "./infoGraphicCenter";
export const OverviewInfoGraphic: React.FC = () => {
    const [active, setActive] = useState(btnInfo[1].text)
  return (
    <div className="flex justify-center w-full mx-auto max-w[1440px] bg-black-background  gap-5 ">
      <div className="flex  flex-col gap-2">
       {btnInfo.map((item , i)=>(
        <InfoGraghicBtn key={i} text={item.text} number={item.number}  active = {active} setActive={setActive}  />
       ))}
      </div>
        <InfoGraphicCenter />  
       <div className="flex flex-col gap-3">
      {chartsInfo.map((item ,i )=>(
        <div key={i} >
        <OverviewChartCard  type={item.type} value={item.value} isMeasured={item.isMeasured} othersTypes={item.otherTypes} status={item.status} />
        </div>
      ))}
       </div>
    </div>
  );
};
