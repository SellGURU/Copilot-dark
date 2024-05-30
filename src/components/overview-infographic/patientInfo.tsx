import React from "react";
import { useSelector } from "react-redux";

interface patientInfoProps {
  name: string;
  value: number;
  icon: string,
  border:string,
}
export const PatientInfo: React.FC<patientInfoProps> = ({ name, value , icon , border }) => {
  const theme = useSelector((state: any) => state.theme.value.name);
  return (
    <div className=" relative flex flex-col items-center justify-center w-36 h-36 ">
      <img className="absolute " src={border} alt="" />
      <div className="flex flex-col  items-center justify-center gap-2">
        <img className="w-8 h-8 " src={icon} alt="" />
        <h2 className={`${name === "Nutritions" ? 'text-primary-color' : 'text-brand-secondary-color'}  font-bold text-[20px]`}>
          {value}%
        </h2>
        <p className="text-third-text text-[12px] font-normal">{name}</p>
      </div>
    </div>
  );
};
