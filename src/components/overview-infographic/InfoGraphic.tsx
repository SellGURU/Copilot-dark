import { btnInfo } from ".";
import { useState } from "react";
import { InfoGraghicBtn } from "./InfoGraghicBtn";
import { InfoGraphicInput } from "./InfoGraphicInput";
interface btnInfo{}
export const InfoGraphic = () => {
    const [active, setActive] = useState(btnInfo[1].text)
  return (
    <div className="flex  -mt-5 gap-5 ">
      {/* <div className="flex w-[344px] flex-col gap-2">
       {btnInfo.map((item)=>(
        <InfoGraghicBtn key={item.text} text={item.text} number={item.number}  active = {active} setActive={setActive}  />
       ))}
      </div> */}
      <InfoGraphicInput />
    </div>
  );
};
