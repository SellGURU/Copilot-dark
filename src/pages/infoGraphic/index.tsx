import { InfoGraphicSection } from "@/components/infographic/infoGraphicSection";
import TabsWrapper from "@/components/tabs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const InfoGraphic = () => {
  const theme = useSelector((state: any) => state.theme.value.name);
  return (
    <div className="bg-black-background h-[100vh] max-w-[1440px] flex flex-col justify-start items-center">
      <div className="flex gap-3 my-6 ">
      <Link to={"/patientlist"}>
        <div className={`${theme}-tab-icon-container`}>
          <img className={`${theme}-icons-arrow-left`} />
        </div>
        </Link>
        <TabsWrapper />
      </div>
      <InfoGraphicSection />
    </div>
  );
};

export default InfoGraphic;
