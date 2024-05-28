import {DetailedHTMLProps, FC, LiHTMLAttributes} from "react";
import {useSelector} from "react-redux";

interface NumberPaginationProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    number: number,
    isCurrent: boolean,
    href: string
}

export const NumberPagination: FC<NumberPaginationProps> = ({number, href, isCurrent, ...props}) => {
    const theme = useSelector((state:any) => state.theme.value.name)

    return (
        <li {...props}>
            <a href={href ? href : ""} aria-current="page"
               className={`${isCurrent?`${theme}-number-pagination-select `:`${theme}-number-pagination`} `}>{number}</a>
        </li>
    );
};
