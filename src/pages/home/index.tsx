
import {Pagination} from "@/components/pagination/pagination.tsx";
import { InfoGraphic } from "@/components/overview-infographic/InfoGraphic";

const Home = () => {
    return (
        <>
            <Pagination/>
            <h1>home</h1>
            {/* <TabsWrapper /> */}
            <InfoGraphic />
        </>
    )
}

export default Home