import {FC} from "react";

interface BadgeProps {
    color: string;
    children?: React.ReactNode;
}
export const Badge:FC<BadgeProps> = ({color,children}) => {

    return (
        <div className={`text-center ${color} rounded-xl py-1 px-3 text-xs w-fit text-white text-nowrap `}>
            {children}
        </div>
    );
};
