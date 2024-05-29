import {RiUserFill} from "react-icons/ri";
import {CardWrapper} from "@/components";

export const GeneralReportCard = () => {
    // TODO:fixed the props
    return (
        <CardWrapper>
            <div className={"text-primary-text flex items-start justify-center flex-col  gap-2"}>
                <div className={"flex items-center justify-between w-full text-4xl"}>
                    <h1 className={"font-medium text-4xl text-white"}>185</h1>
                    <div className={"flex justify-center items-center p-2 rounded-full bg-black"}>
                        <RiUserFill className={"text-brand-primary-color w-5 h-5"}/>
                    </div>
                </div>
                <h1 className={"text-[14px] font-medium"}>Total Enrollment</h1>
                <div className={"text-xs font-medium"}>2 new patient added!</div>
            </div>
        </CardWrapper>
    );
};
