
import bellIcon from "../../../public/Themes/Aurora/icons/bell-icon.svg";
import { LineChart } from "../charts/LineChart";
interface chartCardProps {
  type : string,
  value: number,
  isMeasured : boolean,
  status: string,
  icon : string,
}
type ChartType = 'Temperature' | 'Heart Rate' | 'default';
export const ChartCard : React.FC<chartCardProps> = ({type , value ,isMeasured , status , icon}) => {
  const  typeTitles: Record<ChartType, string> = {
    'Temperature': 'oF',
    'Heart Rate': 'bpm',
    'default': '%'
  };
  const title = typeTitles[type as ChartType] || typeTitles['default'];

  return (
    <div className="bg-black-primary border rounded-xl border-main-border w-full  p-2">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-start gap-2">
          <img width={32} src={icon} alt="" />
          <div className="flex flex-col ">
            <h2 className="text-primary-text font-medium text-[12px]">
              {type}
            </h2>
            <h2 className="text-secondary-text text-[10px] font-normal">
              Average:    
                  <span className="mx-1 text-primary-text font-medium text-[14px]">
                   {value}
              </span>
              F
            </h2>
          </div>
        </div>
        <div className="flex gap-2">
          {!isMeasured &&  <img width={32} src={bellIcon} alt="" /> }
          <div className="flex flex-col ">
            <h2 className={`${isMeasured ? 'text-brand-primary-color' : 'text-red-status'} font-medium text-[12px]`}>
              {isMeasured ? 'Measured' : 'Not Measured'}
            </h2>
            <h2 className="text-gray-400 text-[10px] font-normal">
              Status: <span className="text-primary-text text-[10px] font-medium">{status}</span>
            </h2>
          </div>
        </div>
      </div>
      <LineChart model={type === 'CBC' ? 'linear' : 'line'} title={title} />
    </div>
  );
};
