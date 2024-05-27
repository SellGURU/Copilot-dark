import {FC} from "react";
import {twMerge} from "tailwind-merge";

interface CustomButtonProps {
    children: React.ReactNode;
    className?: string;
}
export const CustomButton:FC<CustomButtonProps> = ({children,className,...props}) => {
    return (
        <>
        <button className={twMerge(`bg-[#03DAC5] w-fit py-2 gap-2 px-3 border rounded-xl border-black text-[#121212] disabled:opacity-50 flex items-center justify-between`,className)} {...props}>{children}</button>
        </>
    );
};
