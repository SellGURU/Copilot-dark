import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ProfileInfoCard } from "@/components/Biomarker/profileInfoCard";
import {
  TabsWrapper,
  SearchBox,
  ButtonPrimary,
  ButtonSecondary,
  Badge,
} from "@/components";
import { TabsInfo, ChartInfo } from "./Data";
import { ChartCard } from "@/components/Biomarker/chartCard";
import { OverviewChartCard } from "@/components/overviewInfographic/chartCard";
import stars from "/public/Themes/Aurora/icons/stars.svg";
import AddIcon from "/public/Themes/Aurora/icons/add-square.svg";
import logo from "/public/Themes/Aurora/icons/input-logo.svg";

import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { DoughnutChart } from "@/components/Charts";
export const Diagnosis = () => {
  const theme = useSelector((state: any) => state.theme.value.name);
  const [active, setActive] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(true);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className=" w-full h-full flex flex-col mx-auto overflow-hidden max-w-[1236px]  gap-3 ">
      <ProfileInfoCard />
      <div className=" flex    items-center gap-2">
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
      <div className="flex  w-full gap-5">
        <div
          id="charts-container"
          className={`w-full ${
            active
              ? "grid-cols-1 overflow-y-auto max-w-[292px]  h-full max-h-[556px] "
              : " grid-cols-4"
          } grid  gap-4   `}
        >
          <div
            className={`flex  ${
              active ? "flex-row" : "flex-col"
            }  gap-5 w-full max-w-[292px]`}
          >
            <div
              onClick={() => setActive("chat")}
              className={` ${
                active && "hidden"
              } cursor-pointer flex justify-center items-center gap-2 bg-brand-primary-color rounded-xl text-sm font-medium px-8 py-4`}
            >
              <img src={stars} alt="" />{" "}
              <h2
                className={`${
                  active && "hidden"
                } text-sm font-medium text-black-primary`}
              >
                Analyze by AI-Copilot
              </h2>
            </div>

            <div
              onClick={() => setActive(null)}
              className={` bg-black-primary rounded-xl flex items-center justify-center px-5  ${
                active ? "" : "hidden"
              }`}
            >
              <img className={`${theme}-icons-arrow-left`} />
            </div>

            <div
              id="custom-border"
              className={`${
                active ? "px-8 py-4" : "px-12 py-8"
              } text-nowrap  flex justify-center items-center gap-2 text-white cursor-pointer custom-border`}
            >
              <img src={AddIcon} alt="" />
              <h2 className="text-xs font-medium text-secondary-text">
                Add New Biomarker
              </h2>
            </div>
          </div>

          {ChartInfo.map((item, i) => (
            <ChartCard
              active={active}
              setActive={setActive}
              key={i}
              title={item.title}
              type={item.type}
              Avarage={item.Avarage}
              current={item.current}
            />
          ))}
        </div>
        {active && (
            <div className="flex justify-center gap-6 w-full flex-wrap ">
          <div className="px-6 pt-6 pb-2 bg-black-primary w-full h-fit max-h-[556px]  max-w-[411px]  rounded-2xl border border-main-border">
            <h4 className="font-medium text-primary-text">Diagnosis Details</h4>
            <div className="flex gap-3 mt-5">
              <div className="flex flex-col items-center justify-center p-3 gap-2 rounded-lg bg-black-third text-orange-status ">
                <div className=" bg-black-primary rounded-2xl px-3 py-1">
                  160mg/dl
                </div>
                <h6 className="text-xs font-medium">Patient Value</h6>
              </div>
              <div className="flex flex-col items-center justify-center p-3 gap-2 rounded-lg bg-black-third text-brand-primary-color ">
                <div className=" bg-black-primary rounded-2xl px-3 py-1">
                  160mg/dl
                </div>
                <h6 className="text-xs font-medium">Patient Value</h6>
              </div>
              <div className="flex flex-col items-center justify-center p-3 gap-2 rounded-lg bg-black-third text-brand-secondary-color ">
                <div className=" bg-black-primary rounded-2xl px-3 py-1">
                  160mg/dl
                </div>
                <h6 className="text-xs font-medium">Patient Value</h6>
              </div>
            </div>
            <div className="text-secondary-text flex items-center gap-5 my-4">
              Show more details{" "}
              <img
                src="/public/Themes/Aurora/icons/chevron-up.svg"
                className={` ${!showDetails && "rotate-180"}`}
                onClick={toggleDetails}
                width={8}
                alt=""
              />
            </div>
            {showDetails && (
              <div className="flex flex-col gap-4 text-primary-text">
                <div className="w-full h-[1px] rounded-full bg-secondary-text" />
                <div className="w-full flex justify-between  items-center">
                  Diagnosis Type{" "}
                  <div className="bg-brand-primary-color px-3 py-1 rounded-2xl text-black-background text-xs font-normal">
                    Metabolomics
                  </div>
                </div>
                <div className="w-full flex justify-between  items-center">
                  Diagnosis Severity{" "}
                  <div className="bg-red-status px-3 py-1 rounded-2xl text-black-background text-xs font-normal">
                    Critical
                  </div>
                </div>
                <div className="w-full flex justify-between  items-center">
                  Date of Diagnosis{" "}
                  <div className="bg-black-third px-3 py-1 rounded-2xl text-primary-text text-xs font-normal">
                    17 May, 2024
                  </div>
                </div>
                <div className="w-full flex justify-between  items-center">
                  <div className="flex items-center gap-4">
                    Diagnosis Severity{" "}
                    <Link to="">
                      <FiExternalLink></FiExternalLink>
                    </Link>{" "}
                  </div>
                  <div className="bg-black-third px-3 py-1 rounded-2xl text-primary-text text-xs font-normal">
                    Dr.Jenny Wilson
                  </div>
                </div>
                <div className="flex justify-end  w-full ">
                  <DoughnutChart />
                </div>
              </div>
            )}
          </div>
          <div className="px-6 pt-6 pb-2 bg-black-primary w-full  h-full max-w-[485px] max-h-[556px]    rounded-2xl border border-main-border">
          <h4 className="font-medium text-primary-text">Related Biomarkers</h4>
          <div id="copilot-chat" className=" w-full  flex  flex-col mt-4 gap-4 h-full overflow-auto max-h-[488px] ">
            <OverviewChartCard  type={active}
            isMeasured={false}
            value={55}
            status="active"/>
            <OverviewChartCard  type={active}
            isMeasured={false}
            value={55}
            status="active"/>
            <OverviewChartCard  type={active}
            isMeasured={false}
            value={55}
            status="active"/>
          </div>

          </div>
          {
            active && (
                <div className="bg-black-primary w-full h-full max-h-[110px] max-w-[917px] flex flex-col  rounded-2xl border border-main-border px-6 pt-3 pb-2 ">
                <div className="flex gap-1">
                  <img src={logo} width={24} alt="" />
                  <h2 className="text-primary-text text-14 font-medium">
                    AI-Copilot
                  </h2>
                </div>
                <div className=" mt-6 flex w-full justify-between items-center  ">
                  <h5 className="text-secondary-text text-sm font-normal">
                    5 Biomarkers need updated information. Send notification to
                    patient?
                  </h5>
                  <div className="flex gap-3 items-center  ">
                    <ButtonSecondary>
                      <img src="/public/Themes/Aurora/icons/open-book.svg" alt="" />
                      Learn more
                    </ButtonSecondary>
                    <ButtonPrimary onClickHandler={()=>setActive("chat")}>
                      Get started
                      <img
                        src="/public/Themes/Aurora/icons/arrow-right-black.svg"
                        alt=""
                      />
                    </ButtonPrimary>
                  </div>
                </div>
              </div>
            )
          }
        
          </div>
        )}
      </div>

    </div>
  );
};
