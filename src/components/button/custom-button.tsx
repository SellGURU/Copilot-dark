import {FC} from "react";
import {twMerge} from "tailwind-merge";
import {useSelector} from "react-redux";

interface CustomButtonProps {
    children: React.ReactNode;
    className?: string;
}
export const CustomButton:FC<CustomButtonProps> = ({children,className,...props}) => {
    const theme = useSelector((state: any) => state.theme.value.name)

    return (
        <>
        <button className={twMerge(`${theme}-Button-primary`,className)} {...props}>{children}</button>
        </>
    );
};
