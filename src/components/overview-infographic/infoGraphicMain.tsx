import Img from "../../assets/images/Group.svg";
import { useState } from "react";
import { InfoGraphicInput } from "./InfoGraphicInput.tsx";
import { patientMainInfo } from "./index.ts";
import { PatientInfo } from "./patientInfo.tsx";
import { useSelector } from "react-redux";
import ArrowRight from "../../../public/Themes/Aurora/icons/arrowRight.svg";
import ArrowLeft from "../../../public/Themes/Aurora/icons/arrowLeft.svg";

export const InfoGraphicMain = () => {
  const theme = useSelector((state: any) => state.theme.value.name);
//  const [active, setAirst] = useState(second)
  return (
    <div className=" flex flex-col gap-4 ">
        <div className=" w-full flex flex-col justify-center items-center bg-black-primary pb-3 rounded-xl border border-main-border">
          <div className="relative flex justify-center w-full pb-3">
          <img src={Img} alt="" />
          {patientMainInfo.map((item) => (
            <div
              className={` border-2 border-main-border rounded-full absolute ${theme}-graphicinfo-patientinfo-${item.name}-position`}
            >
              <PatientInfo
                name={item.name}
                value={item.value}
                icon={item.icon}
                border={item.border}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <img di className=" rotate-180" src={ArrowRight} alt="" />
          <img di className=" opacity-50 " src={ArrowRight} alt="" />
        </div>
        </div>
          <InfoGraphicInput />
    </div>
  );
};
