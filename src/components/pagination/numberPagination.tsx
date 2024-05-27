import {DetailedHTMLProps, FC, LiHTMLAttributes} from "react";

interface NumberPaginationProps extends  DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>{
    number: number,
    isCurrent: boolean,
    href:string
}
export const NumberPagination:FC<NumberPaginationProps> = ({number,href,isCurrent,...props}) => {
    return (
        <li {...props}>
            <a href={href?href:""} aria-current="page"
               className={`${isCurrent?"z-10 text-blue-600  border-blue-300 bg-[#121212] opacity-85 ":"bg-[#121212] opacity-95 "}flex text-white items-center justify-center px-4 h-10 leading-tight border hover:bg-gray-100 hover:text-gray-700`}>{number}</a>
        </li>
    );
};
