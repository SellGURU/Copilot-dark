import Img from "../../assets/images/Group.svg";
import { InfoGraphicInput } from "./InfoGraphicInput.tsx";
import { patientMainInfo } from "./index.ts";
import { PatientInfo } from "./patientInfo.tsx";
import { useSelector } from "react-redux";
import ArrowRight from "../../../public/Themes/Aurora/icons/arrowRight.svg";
export const InfoGraphicMain = () => {
  const theme = useSelector((state: any) => state.theme.value.name);
  //  const [active, setAirst] = useState(second)
  return (
    <div className=" flex flex-col gap-4 ">
      <div className={`${theme}-graphicinfo-center-section `}>
        <div className="relative flex justify-center w-full pb-3">
          <img src={Img} className="max-h-[604px]"/>
          {patientMainInfo.map((item) => (
            <div 
              className={` ${theme}-graphicinfo-patientinfo ${theme}-graphicinfo-patientinfo-${item.name}-position`}
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
          <img className=" rotate-180" src={ArrowRight} alt="" />
          <img className=" opacity-50 " src={ArrowRight} alt="" />
        </div>
      </div>
      <InfoGraphicInput />
    </div>
  );
};
