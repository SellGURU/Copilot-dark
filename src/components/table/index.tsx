/* eslint-disable @typescript-eslint/no-explicit-any */
import {TableRow} from "./table-Row.tsx";
import {TbFilterPlus} from "react-icons/tb";
import {RiUserAddLine} from "react-icons/ri";
import {useSelector} from "react-redux";
import {Pagination, SearchBox} from "@/components";
import {tdListNames} from "./tableTd.ts"
import { Button } from "symphony-ui";

export const Table = () => {

    const sortItems = (option: string) => {
        //     sort base on option
        //     TODO: write the sort
        console.log(option)
    }
    const theme = useSelector((state: any) => state.theme.value.name)

    return (
        <div className={" flex items-center justify-center gap-3 flex-col"}>
            <div className=" w-full top-0 shadow-md sm:rounded-lg ">
                <div className={`${theme}-Table-header-section`}>
                    <label htmlFor="table-search" className="sr-only">
                        Search
                    </label>
                    <SearchBox theme={theme} placeholder="Search for users"></SearchBox>
                    {/* <CustomButton className={"hi"}>
                        <TbFilterPlus className={"w-5 h-5"}/>
                        Apply Filter
                    </CustomButton> */}
                    <Button theme={theme}>
                        <TbFilterPlus className={"w-5 h-5"}/>
                        Apply Filter                        
                    </Button>
                    <Button theme={theme}>
                        <RiUserAddLine className={"w-5 h-5"}/>
                        Add Patient{" "}
                    </Button>
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
            <Pagination theme={theme}/>
        </div>
    );
}