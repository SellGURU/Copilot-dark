import React, {FC} from "react";
import {useSelector} from "react-redux";

interface CardWrapperProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;

}

export const CardWrapper: FC<CardWrapperProps> = ({className = "", children, ...props}) => {
    const theme = useSelector((state: any) => state.theme.value.name)

    return (

        <div {...props} className={`${theme}-cardWrapper-container  ${className}`}>
            {children}
        </div>
    );
};
