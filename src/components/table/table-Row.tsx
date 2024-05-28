import {Link} from "react-router-dom";
import {FiExternalLink} from "react-icons/fi";
import {Badge} from "../badge/badge.tsx";
import {FC} from "react";
import {PiChatBold} from "react-icons/pi";
import {twMerge} from "tailwind-merge";
import {useSelector} from "react-redux";

interface TableRowProps {
    patient: string;
    memberId: string;
    age: string;
    sex: string;
    weight: string;
    enroll: string;
    state: string;
    followUp: string;
    heartRate: string;
    pressure: string;
    temperature: string;
    oxygen: string;
    respiration: string;
    action: string;
    externalLink: string;
    stateColor: "green" | "red" | "yellow"
    lastColor?: "yellow" | "none"
    imageSrc: string
    last: string
}

export const TableRow: FC<TableRowProps> = ({
                                                externalLink,
                                                patient,
                                                memberId,
                                                age,
                                                sex,
                                                weight,
                                                enroll,
                                                state,
                                                followUp,
                                                heartRate,
                                                pressure,
                                                temperature,
                                                oxygen,
                                                respiration,
                                                stateColor,
                                                lastColor = "none",
                                                imageSrc,
                                                last
                                            }) => {
    const theme = useSelector((state: any) => state.theme.value.name)
    console.log("theme:", theme)
    return (
        <>
            <tr className="text-white space-y-7 ">

                <td
                    className="flex items-center gap-3 py-2 pl-2 pr-10 text-white">
                    <img className="w-10 h-10 border rounded-full" src={imageSrc}
                         alt="Jese image"/>
                    <div className="">
                        <div className="text-base font-semibold text-nowrap">{patient}</div>
                    </div>
                    <Link to={externalLink}>
                        <FiExternalLink/>
                    </Link>
                </td>
                <td className="px-3 py-2 text-nowrap text-center">
                    {memberId}
                </td>
                <td className="px-3 py-2">
                    <div className="flex items-center justify-center">
                        {age}
                    </div>
                </td>
                <td className="px-3 py-2 text-center">
                    <div className={" flex items-center justify-center"}>

                        {sex}

                    </div>
                </td>
                <td className="px-3 py-2 text-center ">
                    <div className={" flex items-center justify-center"}>

                        {weight}
                    </div>
                </td>
                <td className="px-3 py-2 text-center ">

                    {enroll}
                </td>
                <td className="px-3 py-2 text-center ">

                    {followUp}
                </td>
                <td className="px-3 py-2 text-center ">

                    {last}
                </td>
                <td className="px-3 py-2 text-center ">
                    <Badge color={twMerge(
                        stateColor == "red" && `${theme}-Badge-Red `,
                        stateColor == "yellow" && `${theme}-Badge-Yellow`,
                        stateColor == "green" && `${theme}-Badge-Green`
                    )}>
                        {state}
                    </Badge>
                </td>
                <td className="px-3 py-2 text-center ">

                    {heartRate}
                </td>
                <td className="px-3 py-2 text-center ">

                    {pressure}
                </td>
                <td className="px-3 py-2 text-center ">

                    {temperature}
                </td>
                <td className="px-3 py-2 text-center ">

                    {oxygen}
                </td>
                <td className="px-3 py-2 ">
                    <div className={"flex items-center justify-center"}>
                        <Badge color={twMerge(
                            lastColor == "none" && "bg-inherit",
                            lastColor == "yellow" && `${theme}-Badge-Yellow`,
                        )}>
                            {respiration}
                        </Badge>
                    </div>

                </td>
                <td className="px-3 py-2 flex items-center justify-center">
                    <PiChatBold className={`${theme}-icons-PiChatBold`}/>
                </td>
            </tr>
        </>
    );
};
