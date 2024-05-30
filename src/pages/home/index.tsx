
import {Pagination} from "@/components/pagination/pagination.tsx";
import { InfoGraphic } from "@/components/overview-infographic/InfoGraphic";

const Home = () => {
    return (
        <div className="bg-black-background">
        <Pagination/>
            <h1>home</h1>
            {/* <TabsWrapper /> */}
            <InfoGraphic />
            </div>
    )
}

export default Home