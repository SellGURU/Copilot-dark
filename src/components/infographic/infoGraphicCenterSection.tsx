import Img from "../../assets/images/Group.svg";
import { InfoGraphicInput } from "./InfoGraphicInput.tsx";
import { patientMainInfo } from "./index.ts";
import { PatientInfo } from "./patientInfo.tsx";
import { useSelector } from "react-redux";
import { useState } from "react";
import ArrowRight from "../../../public/Themes/Aurora/icons/arrowRight.svg";
import { MixedLinesChart } from "../charts/mixedLinesChart.tsx";
export const InfoGraphicCenter = () => {
  const theme = useSelector((state: any) => state.theme.value.name);
  const [isNext, setIsNext] = useState(false);
  return (
    <div className=" flex flex-col gap-2 ">
      <div className={`${theme}-graphicinfo-center-section `}>
        {!isNext ? (
          <div className="relative flex justify-center w-full pb-3">
            <img src={Img} className="max-h-[604px]" />
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
        ) : (
          <>
            <div className="border border-main-border rounded-xl rounded-t-none bg-black-secondary text-secondary-text py-1 px-5">
              <ul className="list-disc leading-6">
                <p>
                  Weight Management: Maintaining a healthy weight is crucial for
                  controlling blood pressure.
                </p>

                <li className="text-[12px] font-normal ml-5">
                  Alcohol and Tobacco: Limiting alcohol intake and avoiding
                  tobacco use can significantly reduce blood pressure.
                </li>
                <p className="block">Medication:</p>
                <li className="text-[12px] font-normal ml-5">
                  When lifestyle changes are not enough, medications such as
                  diuretics, ACE inhibitors, calcium channel blockers, and
                  beta-blockers can be prescribed to help control blood
                  pressure.
                </li>
                <p className="block">Regular Monitoring:</p>
                <li className="text-[12px] font-normal ml-5">
                  Regular check-ups with a healthcare provider are important for
                  monitoring blood pressure and making necessary adjustments to
                  treatment plans.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-main-border px-2 py-1 bg-black-secondary my-3 text-secondary-text text-[12px] font-normal leading-6">
              High blood pressure is a manageable condition, but it requires
              proactive and consistent efforts to prevent the severe
              complications associated with it. Early detection, lifestyle
              changes, and appropriate medical interventions are key to reducing
              the risks and maintaining overall health.
            </div>
            <div className="  rounded-xl bg-black-secondary border border-main-border px-3 py-2 w-full">
              <MixedLinesChart />
            </div>
          </>
        )}
        <div className="flex items-center mt-2 gap-3">
          <img
            onClick={() => setIsNext(false)}
            className={`cursor-pointer rotate-180 ${!isNext ? "opacity-50" : ""}`}
            src={ArrowRight}
            alt=""
          />
          <img
            onClick={() => setIsNext(true)}
            className={ `cursor-pointer ${isNext ? "opacity-50" : "opacity-100"}`}
            src={ArrowRight}
            alt=""
          />
        </div>
      </div>
      <InfoGraphicInput />
    </div>
  );
};
