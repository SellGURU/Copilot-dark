import React from "react";
import { LineChart } from "../charts/LineChart";
import { MixedLinesChart } from "../charts/mixedLinesChart";
interface CharCardProps {
  icon: string;
  title: string;
  type ?: string;
  Avarage: number;
  current: number;
}
export const ChartCard: React.FC<CharCardProps> = ({
  icon,
  title,
  type = 'line',
  Avarage,
  current,
}) => {
  return (
    <div className="bg-black-primary px-6 py-3  border border-main-border rounded-2xl flex gap-2 max-w-sm">
        <div className="flex flex-col gap-3 flex-[1.5]">
            <div className="flex gap-2 items-center">
                <img src={icon} alt="" />
                <h2 className="text-base text-primary-text font-medium" >{title}</h2>
            </div>
            <div className="w-48 h-24">
                {title === 'Blood Pressure' ? <MixedLinesChart /> :   <LineChart model={type} title="" /> }
         
            </div>
        </div>
        <div className="flex flex-col justify-between items-center flex-[0.5]">
            <div className="flex flex-col ">
                <h2 className="text-secondary-text  text-xs">Avg</h2>
                <h2 className="text-primary-text text-lg flex items-center" >{Avarage} <span className="text-secondary-text text-xs">oF</span></h2>
            </div>
            <div className="flex flex-col">
                <h2 className="text-secondary-text  text-xs">Current</h2>
                <h2 className="text-primary-text text-lg flex items-center" >{current} <span className="text-secondary-text text-xs">oF</span></h2>
            </div>
            
        </div>
    </div>
  );
};
