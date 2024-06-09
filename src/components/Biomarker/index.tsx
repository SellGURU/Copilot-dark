import { ProfileInfoCard } from "./profileInfoCard";
import SearchBox from "../searchBox";
import TabsWrapper from "../tabs";
import { ChartInfo, TabsInfo } from "./Data";
import stars from "../../../public/Themes/Aurora/icons/stars.svg";
import AddIcon from "../../../public/Themes/Aurora/icons/add-square.svg";
import { ChartCard } from "./chartCard";
export const Biomarker = () => {
  return (
    <div className="flex flex-col items-start gap-4 px-12">
      <ProfileInfoCard />
      <div className=" flex items-center gap-2">
        <SearchBox
          theme="Aurora"
          placeholder="Quick alphabetical search for biomarkers"
        />
        <div className="rounded-xl bg-black-primary border border-main-border flex text-xs text-primary-text">
          <div className="border-r border-main-border px-4 py-1">
            <div className="bg-black-secondary py-[10px] px-6 rounded-2xl">
              Critical
            </div>
          </div>
          <div className="border-r border-main-border px-4 py-1">
            <div className="bg-black-secondary rounded-2xl py-[10px] px-6">
              Low
            </div>
          </div>
          <div className="px-4 py-1">
            <div className="bg-black-secondary rounded-2xl py-[10px] px-6">
              Medium
            </div>
          </div>
        </div>
      </div>
      <TabsWrapper TabsInfo={TabsInfo} />
      <div className="  flex items-center gap-5 flex-wrap">
        <div className="flex flex-col gap-5">
          <div className="flex justify-center items-center gap-2 bg-brand-primary-color rounded-xl text-sm font-medium px-8 py-4">
            <img src={stars} alt="" />{" "}
            <h2 className="text-sm font-medium text-black-primary">
              Analyze by AI-Copilot
            </h2>
          </div>
          <div id="custom-border" className="px-12 py-8 flex justify-center items-center gap-2 text-white cursor-pointer custom-border">
            <img src={AddIcon} alt="" />
            <h2 className="text-xs font-medium text-secondary-text">Add New Biomarker</h2>
          </div>
        </div>
        {ChartInfo.map((item,i)=>(
            <ChartCard key={i} icon={item.icon} title={item.title} type={item.type} Avarage={item.Avarage} current={item.current} />
        ))}
      </div>
    </div>
  );
};
