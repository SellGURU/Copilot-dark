import {DetailedHTMLProps, FC, LiHTMLAttributes} from "react";

interface NumberPaginationProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    number: number,
    isCurrent: boolean,
    href: string
    theme:string
}

export const NumberPagination: FC<NumberPaginationProps> = ({number, href,theme, isCurrent, ...props}) => {
    return (
        <li {...props}>
            <a href={href ? href : ""} aria-current="page"
               className={`${isCurrent?`${theme}-number-pagination-select `:`${theme}-number-pagination`} `}>{number}</a>
        </li>
    );
};
