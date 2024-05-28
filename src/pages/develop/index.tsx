/* eslint-disable @typescript-eslint/no-explicit-any */
import {Table} from "@/components/table/table.tsx";
import {Pagination} from "@/components/pagination/pagination.tsx";

const Develop = () => {
    return (
        <div>
            <div>
                {/*<Button theme={theme}>button</Button>*/}
            </div>
            {/*<div className={"flex items-center justify-evenly"}>*/}

            {/*<GeneralReportCard/>*/}
            {/*<GeneralReportCard/>*/}
            {/*<GeneralReportCard/>*/}

            {/*</div>*/}

            {/*<div className={"w-1/2"}>*/}

            {/*</div>*/}
            <div className={"flex items-center justify-center flex-col"}>
                <Table/>
                <Pagination/>
            </div>

        </div>
    )
}

export default Develop