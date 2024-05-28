import {TableRow} from "./table-Row.tsx";
import {CustomButton} from "@/components/button/custom-button.tsx";
import {TbFilterPlus} from "react-icons/tb";
import {RiUserAddLine} from "react-icons/ri";
import {IoMdSearch} from "react-icons/io";
import {useSelector} from "react-redux";

export const Table = () => {
    const tdListNames = [
        "Patient Name (48)",
        "Member ID",
        "Age",
        "sex",
        "Weight",
        "Enroll Date",
        "Last Follow-up",
        "",
        "Heart Rate",
        "Blood Pressure",
        "Temperature",
        "Blood Oxygen",
        "Respiration Rate",
        "Action",

    ]
    const sortItems = (option: string) => {
        //     sort base on option
        //     TODO: write the sort
        console.log(option)
    }
    const theme = useSelector((state: any) => state.theme.value.name)

    return (
        <div className={" "}>
            <div className=" w-[1276px] top-0 shadow-md sm:rounded-lg p-4 ">
                <div className={`${theme}-Table-header-section`}>
                    <label htmlFor="table-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative">
                        <div
                            className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <IoMdSearch className={"w-4 h-4 text-gray-500"}/>
                        </div>
                        <input
                            type="text"
                            id="table-search-users"
                            className={`${theme}-Table-search`}
                            placeholder="Search for users"
                        />
                    </div>
                    <CustomButton className={"hi"}>
                        <TbFilterPlus className={"w-5 h-5"}/>
                        Apply Filter
                    </CustomButton>
                    <CustomButton className={"hi"}>
                        <RiUserAddLine className={"w-5 h-5"}/>
                        Add Patient{" "}
                    </CustomButton>
                </div>
                <div className={`${theme}-Table-container`}>
                    <table
                        className={`${theme}-table`}>
                        <thead className="text-xs text-gray-700  ">
                        <tr className={"text-nowrap text-[#FFFFFF]"}>
                            {tdListNames.map((name) => {
                                return (
                                    <th
                                        onClick={() => sortItems(name)}
                                        className={`${theme}-Table-header`}
                                    >
                                        {name}
                                    </th>
                                );
                            })}
                        </tr>
                        </thead>
                        <tbody>
                        <TableRow
                            imageSrc={"/pic/ava1.svg"}
                            stateColor={"red"}
                            patient={"Michael Brown"}
                            memberId={"021548461651"}
                            age={"48"}
                            sex={"Male"}
                            weight={"56.3"}
                            enroll={"04/25/2024"}
                            last={""}
                            state={"Critical"}
                            followUp={"hi"}
                            heartRate={"54"}
                            pressure={"113/62"}
                            temperature={"36.9"}
                            oxygen={"92"}
                            respiration={"10"}
                            action={"1"}
                            externalLink={"#"}
                        />
                        <TableRow
                            imageSrc={"/pic/ava1.svg"}
                            stateColor={"red"}
                            patient={"Michael Brown"}
                            memberId={"021548461651"}
                            age={"48"}
                            sex={"Male"}
                            weight={"56.3"}
                            enroll={"04/25/2024"}
                            last={""}
                            state={"Critical"}
                            followUp={"hi"}
                            heartRate={"54"}
                            pressure={"113/62"}
                            temperature={"36.9"}
                            oxygen={"92"}
                            respiration={"10"}
                            action={"1"}
                            externalLink={"#"}
                        />
                        <TableRow
                            imageSrc={"/pic/ava1.svg"}
                            stateColor={"yellow"}
                            patient={"Michael Brown"}
                            memberId={"021548461651"}
                            age={"48"}
                            sex={"Male"}
                            weight={"56.3"}
                            enroll={"04/25/2024"}
                            last={""}
                            state={"Critical"}
                            followUp={"hi"}
                            heartRate={"54"}
                            pressure={"113/62"}
                            temperature={"36.9"}
                            oxygen={"92"}
                            respiration={"10"}
                            action={"1"}
                            externalLink={"#"}
                        />
                        <TableRow
                            imageSrc={"/pic/ava2.svg"}
                            stateColor={"green"}
                            patient={"Michael Brown"}
                            memberId={"021548461651"}
                            age={"48"}
                            sex={"Male"}
                            weight={"56.3"}
                            enroll={"04/25/2024"}
                            last={""}
                            state={"Critical"}
                            followUp={"hi"}
                            heartRate={"54"}
                            pressure={"113/62"}
                            temperature={"36.9"}
                            oxygen={"92"}
                            respiration={"10"}
                            action={"1"}
                            externalLink={"#"}
                        />
                        <TableRow
                            imageSrc={"/pic/ava1.svg"}
                            lastColor={"yellow"}
                              stateColor={"green"}
                            patient={"Michael Brown"}
                            memberId={"021548461651"}
                            age={"48"}
                            sex={"Male"}
                            weight={"56.3"}
                            enroll={"04/25/2024"}
                            last={""}
                            state={"Critical"}
                            followUp={"hi"}
                            heartRate={"54"}
                            pressure={"113/62"}
                            temperature={"36.9"}
                            oxygen={"92"}
                            respiration={"10"}
                            action={"1"}
                            externalLink={"#"}
                        />
                        <TableRow
                            imageSrc={"/pic/ava2.svg"}
                              stateColor={"green"}
                            patient={"Michael Brown"}
                            memberId={"021548461651"}
                            age={"48"}
                            sex={"Male"}
                            weight={"56.3"}
                            enroll={"04/25/2024"}
                            last={""}
                            state={"Critical"}
                            followUp={"hi"}
                            heartRate={"54"}
                            pressure={"113/62"}
                            temperature={"36.9"}
                            oxygen={"92"}
                            respiration={"10"}
                            action={"1"}
                            externalLink={"#"}
                        />

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}