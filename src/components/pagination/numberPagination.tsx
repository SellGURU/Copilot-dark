import {DetailedHTMLProps, FC, LiHTMLAttributes} from "react";

interface NumberPaginationProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    number: number,
    isCurrent: boolean,
    theme:string
}

export const NumberPagination: FC<NumberPaginationProps> = ({number, theme, isCurrent, ...props}) => {
    console.log(number)
    return (
        <li {...props}>
            <button aria-current="page"
               className={`${isCurrent?`${theme}-number-pagination-select `:`${theme}-number-pagination`} `}>{number}</button>
        </li>
    );
};
