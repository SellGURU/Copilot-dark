import Img from "../../assets/images/Group.svg";
import { InfoGraphicInput } from "./InfoGraphicInput.tsx";
import { patientMainInfo } from "./index.ts";
import { PatientInfo } from "./patientInfo.tsx";
import { useSelector } from "react-redux";

export const InfoGraphicMain = () => {
  const theme = useSelector((state: any) => state.theme.value.name);

  return (
    <div className= "  bg-black-background rounded-xl   flex flex-col gap-4 ">
        <div className="relative w-full flex justify-center items-center bg-black-primary pb-3 rounded-xl border border-main-border">
        <img src={Img} alt="" />
        {patientMainInfo.map((item) => (
          <div className={` border-2 border-main-border rounded-full absolute ${theme}-graphicinfo-patientinfo-${item.name}-position`}>
            <PatientInfo name={item.name} value={item.value} icon={item.icon} border={item.border} />
          </div>
        ))}
        <div></div>
        </div>
        <InfoGraphicInput />
    </div>
  );
};
