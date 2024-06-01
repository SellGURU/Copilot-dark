/* eslint-disable @typescript-eslint/no-explicit-any */
import {Table} from "@/components";
import {GeneralReportCard} from "@/components/general-report/general-report-card.tsx";

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
            <div className={"py-5 px-10 space-y-5"}>
                <h1 className={"text-base text-primary-text font-medium"}>General Report</h1>
                <div className={"flex  items-center justify-between "}>
                    <GeneralReportCard/>
                    <GeneralReportCard/>
                    <GeneralReportCard/>
                    <GeneralReportCard/>
                </div>
            </div>

            <div className={"flex items-center w-full overflow-x-auto justify-center flex-col"}>
                <Table/>
            </div>

        </div>
    )
}

export default Develop