import { useEffect , useRef } from "react";
import { ProfileInfoCard } from "./profileInfoCard";
import SearchBox from "../searchBox";
import {TabsWrapper} from "@/components/index.ts";
import { ChartInfo, TabsInfo } from "./Data";
import stars from "/public/Themes/Aurora/icons/stars.svg";
import AddIcon from "/public/Themes/Aurora/icons/add-square.svg";
import { ChartCard } from "./chartCard.tsx";
import { OverviewChartCard } from "../overviewInfographic/chartCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import logo from "/public/Themes/Aurora/icons/input-logo.svg";
import { ButtonPrimary, ButtonSecondary } from "@/components/index.ts";
import { InfoGraphicInput } from "../overviewInfographic/InfoGraphicInput.tsx";
export const Biomarker = () => {
  const theme = useSelector((state: any) => state.theme.value.name);
  const [active, setActive] = useState <string | null>(null);
  const [messages, setMessages] = useState([
    
    { type: 'text', content: 'Weight Management: Maintaining a healthy weight is crucial for controlling blood pressure.' },
    { type: 'text', content: 'Alcohol and Tobacco: Limiting alcohol intake and avoiding tobacco use can significantly reduce blood pressure.' },
   
  ]);

  
  const handleSendMessage = (message: string) => {
    if (message.trim()) {
      setMessages([...messages, { type: 'text', content: message }]);
    }
   
  };
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div className="flex flex-col overflow-hidden   items-start gap-4 px-12">
      <ProfileInfoCard />
      <div className=" flex w-full max-w-[666px]   items-center gap-2">
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
      <div className="flex w-full gap-5">
        <div
          id="charts-container"
          className={`w-full ${
            active
              ? "grid-cols-1 overflow-y-auto max-w-[292px] h-[600px] "
              : "max-w-[1292px] grid-cols-4"
          } grid  gap-4   `}
        >
          <div
            className={`flex  ${
              active ? "flex-row" : "flex-col"
            }  gap-5 w-full max-w-[292px]`}
          >
            <div
            onClick={()=>setActive('chat')}
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
        {active && active !== "chat" ?  <div
          className={` ${
            !active && "hidden"
          } w-full max-w-[920px] max-h-[300px]  flex flex-col  ml-5 gap-3`}
        >
          <OverviewChartCard
            
            type={active}
            isMeasured={false}
            value={55}
            status="active"
          />
          <div className=" w-full flex justify-between items-center gap-6 bg-black-primary rounded-2xl border border-main-border p-3">
            <div className=" w-full max-w-[200px] h-full max-h-[193px] flex items-center justify-center bg-black-secondary rounded-lg">
              <img
                src="/src/assets/images/Animation - 1715763236608 (1) 1 (1).svg"
                alt=""
              />
            </div>
            <div className="flex w-full justify-between items-start">
              <div>
                <h6 className="text-third-text text-xs font-medium">
                  Body Temperature (AVG)
                </h6>
                <div className="flex flex-col gap-6 mt-4">
                  <p className=" text-center text-xs font-normal text-primary-text">
                    98.2°F{" "}
                    <span className="font-light text-third-text">(36.8°C)</span>{" "}
                  </p>
                  <p className=" text-center text-xs font-normal text-primary-text">
                    98.2°F{" "}
                    <span className="font-light text-third-text">(36.8°C)</span>{" "}
                  </p>
                  <p className=" text-center text-xs font-normal text-primary-text">
                    98.2°F{" "}
                    <span className="font-light text-third-text">(36.8°C)</span>{" "}
                  </p>
                  <p className=" text-center text-xs font-normal text-primary-text">
                    98.2°F{" "}
                    <span className="font-light text-third-text">(36.8°C)</span>{" "}
                  </p>
                </div>
              </div>
              <div>
                <h6 className="text-third-text text-xs font-medium">
                  Temperature Variability
                </h6>
                <div className="flex flex-col gap-6 mt-4">
                  <p className=" text-center text-xs font-normal text-primary-text">
                    ±0.9°F{" "}
                    <span className="font-light text-third-text">(±0.5°C)</span>{" "}
                  </p>
                  <p className=" text-center text-xs font-normal text-primary-text">
                    ±0.5°F{" "}
                    <span className="font-light text-third-text">(±0.3°C)</span>{" "}
                  </p>
                  <p className=" text-center text-xs font-normal text-primary-text">
                    ±0.9°F
                    <span className="font-light text-third-text">
                      (±0.5°C)
                    </span>{" "}
                  </p>
                  <p className=" text-center text-xs font-normal text-primary-text">
                    ±0.5°F
                    <span className="font-light text-third-text">
                      (±0.5°C)
                    </span>{" "}
                  </p>
                </div>
              </div>
              <div>
                <h6 className="text-third-text text-xs font-medium">
                  Fever Frequency
                </h6>
                <div className="flex flex-col gap-6 mt-4">
                  <p className=" text-center text-xs font-normal text-primary-text">
                    0
                  </p>
                  <p className=" text-center text-xs font-normal text-primary-text">
                    0
                  </p>
                  <p className=" text-center text-xs font-normal text-primary-text">
                    0
                  </p>
                  <p className=" text-center text-xs font-normal text-primary-text">
                    0
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black-primary w-full h-full max-w-[917px] flex flex-col  rounded-2xl border border-main-border px-6 py-3 ">
            <div className="flex gap-1">
              <img src={logo} width={24} alt="" />
              <h2 className="text-primary-text text-14 font-medium">
                AI-Copilot
              </h2>
            </div>
            <div className=" mt-6 flex w-full justify-between items-center ">
              <h5 className="text-secondary-text text-sm font-normal">
                5 Biomarkers need updated information. Send notification to
                patient?
              </h5>
              <div className="flex gap-3 items-center">
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
        </div> :
        active === 'chat' &&
        <div  className="  h-full w-full max-w-[920px] max-h-[672px] relative ">
          <div id="copilot-chat" className="max-h-[472px] h-full overflow-y-scroll">
          <div className="bg-black-primary w-full mb-2 max-w-[917px] flex flex-col gap-2 rounded-2xl border border-main-border px-4 py-2 ">
            <div className="flex gap-1">
              <img src={logo} width={24} alt="" />
              <h2 className="text-primary-text text-sm font-medium">
                AI-Copilot
              </h2>
            </div>
            <div className="  flex w-full justify-between items-end ">
              <h5 className="text-secondary-text text-sm font-normal">
                5 Biomarkers need updated information. Send notification to
                patient?
              </h5>
              <div className="flex gap-3 items-center">
                <ButtonSecondary>
                  <img src="/public/Themes/Aurora/icons/open-book.svg" alt="" />
                  Learn more{" "}
                </ButtonSecondary>
                <ButtonPrimary onClickHandler={()=>setActive("chat")}>
                  Get started{" "}
                  <img
                    src="/public/Themes/Aurora/icons/arrow-right-black.svg"
                    alt=""
                  />
                </ButtonPrimary>
              </div>
            </div>
          </div>
          
           {messages.map((message , index)=>(
             <div key={index} className="bg-black-secondary text-secondary-text p-2 my-2 rounded-xl">
               {message.content}
             </div>
           ))}
           <div ref={messagesEndRef} />
           </div>
           <div className=" w-full absolute bottom-0 "><InfoGraphicInput handleSendMessage={handleSendMessage} /></div>
           
         </div>}
      
      </div>
    </div>
  );
};
