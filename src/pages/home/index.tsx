import { TabsWrapper } from "@/components/Tabs/Tabswrapper";
import {Pagination} from "@/components/pagination/pagination.tsx";

const Home = () => {
    return (
        <>

            <Pagination/>
            <h1>home</h1>
            <TabsWrapper />
        </>
    )
}

export default Home