import {RiUserFill} from "react-icons/ri";

export const GeneralReportCard = () => {
    return (
        <div className={"bg-[#383838] p-5 "}>
            <div className={"flex items-center justify-between"}>
                <h1 className={"font-medium text-4xl text-white"}>185</h1>
                <div className={"flex justify-center items-center p-2 rounded-full bg-black"}>

                    <RiUserFill className={"text-[#03DAC5] w-5 h-5"}/>
                </div>
            </div>
            <h1></h1>
            <div></div>
        </div>
    );
};
