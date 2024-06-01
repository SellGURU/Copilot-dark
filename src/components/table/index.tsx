/* eslint-disable @typescript-eslint/no-explicit-any */
import {TableRow} from "./table-Row.tsx";
import {CustomButton} from "@/components/button/custom-button.tsx";
import {TbFilterPlus} from "react-icons/tb";
import {RiUserAddLine} from "react-icons/ri";
import {useSelector} from "react-redux";
import {Pagination, SearchBox} from "@/components";
import {tdListNames} from "./tableTd.ts"
import {fakeData} from "@/components/table/fakeData.ts";

export const Table = () => {

    const sortItems = (option: string) => {
        //     sort base on option
        //     TODO: write the sort
        console.log(option)
    }
    const theme = useSelector((state: any) => state.theme.value.name)

    return (
        <div className={" flex items-center justify-center gap-3 flex-col"}>
            <div className=" w-full top-0 shadow-md sm:rounded-lg p-4 ">
                <div className={`${theme}-Table-header-section`}>
                    <label htmlFor="table-search" className="sr-only">
                        Search
                    </label>
                    <SearchBox theme={theme} placeholder="Search for users"></SearchBox>
                    <CustomButton >
                        <TbFilterPlus className={"w-5 h-5"}/>
                        Apply Filter
                    </CustomButton>
                    <CustomButton>
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
                        {fakeData.map(item=>{
                            return( <TableRow
                                key={item.id}
                                imageSrc={"/pic/ava1.svg"}
                                stateColor={item.stateColor}
                                patient={item.patient}
                                memberId={ item.memberId }
                                age={ item.age }
                                sex={ item.sex}
                                weight={ item.weight }
                                enroll={item.enroll}
                                last={item.last}
                                state={item.state}
                                followUp={item.followUp}
                                heartRate={item.heartRate}
                                pressure={item.pressure}
                                temperature={item.temperature}
                                oxygen={item.oxygen}
                                respiration={item.respiration}
                                action={"1"}
                                externalLink={"#"}
                            />)
                        })}

                        </tbody>
                    </table>

                </div>
            </div>
            <Pagination/>
        </div>
    );
}