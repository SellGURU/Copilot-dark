import {FC} from "react";

interface BadgeProps {
    color: string;
    children?: React.ReactNode;
}
export const Badge:FC<BadgeProps> = ({color,children}) => {
    return (
        <div className={`text-center ${color?color:"bg-red-200"} rounded-xl py-2 px-3 text-white text-nowrap `}>
            {children}
        </div>
    );
};
