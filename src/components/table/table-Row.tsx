import {Link} from "react-router-dom";
import {FiExternalLink} from "react-icons/fi";
import {Badge} from "../badge/badge.tsx";
import {FC} from "react";

interface TableRowProps {
    patient:string;
    memberId:string;
    age:string;
    sex:string;
    weight:string;
    enroll:string;
    last:string;
    followUp:string;
    heartRate:string;
    pressure:string;
    temperature:string;
    oxygen:string;
    respiration:string;
    action:string;
    externalLink:string;
}
export const TableRow:FC<TableRowProps> = ({externalLink,patient,memberId,age,sex,weight,enroll,last,followUp, heartRate,pressure,temperature,oxygen,respiration,action}) => {
    return (
        <>
            <tr className="text-white bg-[#121212] ">

                <td scope="row"
                    className="flex items-center gap-3 px-6 py-4 justify-center text-white">
                    <img className="w-10 h-10 border rounded-full" src="/docs/images/people/profile-picture-1.jpg"
                         alt="Jese image"/>
                    <div className="">
                        <div className="text-base font-semibold text-nowrap">{patient}</div>
                    </div>
                    <Link to={externalLink}>
                        <FiExternalLink/>
                    </Link>
                </td>
                <td className="px-6 py-4 text-nowrap">
                    {memberId}
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center justify-center">
                        {age}

                    </div>

                </td>
                <td className="px-6 py-4 text-center ">
                    {sex}
                </td>
                <td className="px-6 py-4 text-center ">

                    {weight}
                </td>
                <td className="px-6 py-4 text-center ">

                    {enroll}
                </td>
                <td className="px-6 py-4 text-center ">

                    {followUp}
                </td>
                <td className="px-6 py-4 text-center ">

                    <Badge color={"bg-yellow-400"}>
                        {last}
                    </Badge>
                </td>
                <td className="px-6 py-4 text-center ">

                    {heartRate}
                </td>
                <td className="px-6 py-4 text-center ">

                    {pressure}
                </td>
                <td className="px-6 py-4 text-center ">

                    {temperature}
                </td>
                <td className="px-6 py-4 text-center ">

                    {oxygen}
                </td>
                <td className="px-6 py-4 text-center ">

                    <Badge color={"bg-yellow-400"}>
                        {respiration}
                    </Badge>
                </td>
                <td className="px-6 py-4 text-center ">
                    <Badge color={"bg-yellow-400"}>
                        {action}
                    </Badge>
                </td>

            </tr>
        </>
    );
};
