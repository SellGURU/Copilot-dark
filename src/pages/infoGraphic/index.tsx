
import { InfoGraphicSection } from "@/components/infographic/infoGraphicSection"
import TabsWrapper from "@/components/Tabs";
const InfoGraphic = () => {
    return (
       <div className="bg-black-background max-w-[1440px] mx-auto my-4 ">
        <TabsWrapper/>
        <InfoGraphicSection />
       </div>
    )
}

export default InfoGraphic 