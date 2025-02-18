import TabsWrapper from "../../components/Tabs";
import { useSelector } from "react-redux";
import { Link, Outlet , useNavigate  } from "react-router-dom";
import { TabsInfo } from "./tabsInfo";
const InfoGraphic = () => {
  const theme = useSelector((state: any) => state.theme.value.name);
  const navigate = useNavigate();
  const handleTabClick = (path: string) => {
    navigate(path);
  };
  return (
    <div className="bg-black-background h-[100vh] max-w-[1440px] flex flex-col justify-start items-center">
      <div className="flex gap-3 my-6 ">
      <Link to={"/patientlist"}>
        <div className={`${theme}-tab-icon-container`}>
          <img className={`${theme}-icons-arrow-left`} />
        </div>
        </Link>
        <TabsWrapper TabsInfo={TabsInfo} handleTabClick={handleTabClick}/>
      </div>
     <Outlet />
    </div>
  );
};

export default InfoGraphic;
