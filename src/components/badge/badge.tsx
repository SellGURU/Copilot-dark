import {FC} from "react";
import {twMerge} from "tailwind-merge";
import {useSelector} from "react-redux";

interface BadgeProps {
    color: string;
    children?: React.ReactNode;
}

export const Badge: FC<BadgeProps> = ({color, children}) => {
    const theme = useSelector((state: any) => state.theme.value.name)

    return (
        <div className={twMerge(
            color == "red" && `${theme}-Badge-Red  text-center`,
            color == "yellow" && `${theme}-Badge-Yellow text-center`,
            color == "green" && `${theme}-Badge-Green text-center`,
            color== "none" && "bg-inherit text-center"
            )}>
            {children}
        </div>
    );
};
