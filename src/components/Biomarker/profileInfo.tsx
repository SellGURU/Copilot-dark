import { BiologicalCardInfo, MolecularCardInfo } from ".";
import border from "../../../public/Themes/Aurora/icons/profile-img-border.svg";
import profille from "../../assets/images/profile-img.svg";
import DualProgressCircle from "./dualProgressCircle";
import ProgressCircle from "./progressCircle";
export const ProfileInfo = () => {
  return (
    <div className="bg-black-secondary w-full max-w-[1224px] mx-auto lg:px-6 md:px-4 py-3  border border-main-border rounded-xl  flex ">
      <div className=" flex gap-4 items-center ">
        <div className="relative min-w-[100px] w-full  ">
          <img className="absolute w-full h-full" src={border} alt="" />

          <img src={profille} alt="" />
        </div>
        <div className="flex flex-col  gap-2 text-nowrap">
          <h2 className="text-secondary-text text-[14px] font-medium">
            Leslie Alexander
          </h2>
          <div className="flex -ml-2 text-[14px]">
            <h2 className="text-primary-text border-r border-x-secondary-text  px-2 text-[14px]">
              48 Years
            </h2>
            <h2 className="text-primary-text border-r border-x-secondary-text  px-2 text-[14px]">
              Female
            </h2>
            <h2 className="text-primary-text px-2 text-[14px] ">P1245</h2>
          </div>
          <div className="text-[12px]">
            <h2 className="text-secondary-text">Conditions: </h2>
            <p className="text-primary-text">1. High Blood Pressure</p>
            <p className="text-primary-text">2. Diabetes</p>
          </div>
        </div>
      </div>

      <div className=" ml-4 flex gap-1 relative  ">
        {BiologicalCardInfo.map((item) => (
          <ProgressCircle
          size={45}
            progress={85}
            title={item.title}
            MAE={item.MAE}
            icon={item.icon}
            otherStyles={item.otherStyles}
            border="text-brand-secondary-color"
          />
        ))}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex  items-center ">
          <h2 className="text-secondary-text text-[14px] text-nowrap -rotate-90 ">
            Digital Clocks
          </h2>
          <div className="w-[1px] h-[140px] bg-secondary-color -ml-6 " />
        </div>

        <DualProgressCircle size={135} progress1={48} progress2={39} />
        <div className="flex justify-center items-center gap-4">
          <div className="w-[1px] h-[140px] bg-secondary-color -" />
          <h2 className="text-secondary-text text-green-g text-[14px] text-nowrap -rotate-90 -ml-12 ">
            Molcular Clocks
          </h2>
        </div>
      </div>
      <div className="flex  relative  ">
        {MolecularCardInfo.map((item) => (
          <ProgressCircle
          size={45}
            progress={45}
            title={item.title}
            MAE={item.MAE}
            icon={item.icon}
            otherStyles={item.otherStyles}
            border="green"
          />
        ))}
      </div>
    </div>
  );
};
