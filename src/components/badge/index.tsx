import {FC} from "react";

interface BadgeProps {
    color: string;
    theme:string;
    children?: React.ReactNode;
}

export const Badge: FC<BadgeProps> = ({color,theme, children}) => {
    return (
        <div data-color={color} className={`${theme}-Badge-container`}>
            {children}
        </div>
    );
};
