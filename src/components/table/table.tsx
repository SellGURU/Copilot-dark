import {TableRow} from "./table-Row.tsx";
import {CustomButton} from "@/components/button/custom-button.tsx";
import { TbFilterPlus } from "react-icons/tb";
import { RiUserAddLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";

export  const Table =()=>{
    const tdListNames = [
        "Patient Name (48)",
        "Member ID",
        "Age",
        "sex",
        "Weight",
        "Enroll Date",
        "Last Follow-up",
        "Heart Rate",
        "Blood Pressure",
        "Temperature",
        "Blood Oxygen",
        "Respiration Rate",
        "Action"
    ]
    const sortItems=(option:string)=>{
    //     sort base on option
    //     TODO: write the sort
        console.log(option)
    }
    return (
        <>


            <div className="relative shadow-md sm:rounded-lg p-4 bg-[#121212]">
                <div
                    className="flex overflow-hidden  items-center justify-center flex-row gap-2 md:justify-end flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 ">

                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div
                            className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">

                           <IoMdSearch className={"w-4 h-4 text-gray-500"}/>
                        </div>
                        <input type="text" id="table-search-users"
                               className="block p-2 ps-10 border-[#FFFFFF] border-opacity-15 text-sm text-gray-900 border rounded-lg w-80 bg-[#121212] focus:ring-blue-500 focus:border-blue-500"
                               placeholder="Search for users"/>
                    </div>
                    <CustomButton className={""} >
                        <TbFilterPlus className={"w-5 h-5"}/>
                        Apply Filter
                    </CustomButton>
                    <CustomButton className={""} >
                        <RiUserAddLine className={"w-5 h-5"}/>
                        Add  Patient                    </CustomButton>
                </div>
                <div className={ "overflow-x-auto"}>
                    <table className="w-full text-sm text-left rtl:text-right bg-[#121212]">
                        <thead className="text-xs text-gray-700 uppercase  dark:text-gray-400 ">
                        <tr className={"text-nowrap text-[##FFFFFF]"}>
                            {tdListNames.map(name => {
                                return (
                                    <th onClick={() => sortItems(name)}
                                        className="px-6 py-3 text-xs font-medium cursor-pointer">
                                        {name}
                                    </th>
                                )
                            })}

                        </tr>
                        </thead>
                        <tbody>
                        <TableRow patient={""} memberId={""} age={""} sex={""} weight={""} enroll={""} last={""}
                                  followUp={""} heartRate={""} pressure={""} temperature={""} oxygen={""}
                                  respiration={""} action={""} externalLink={""}/>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}