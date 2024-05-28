import {NumberPagination} from "@/components/pagination/numberPagination.tsx";
import {useSelector} from "react-redux";

export const Pagination = () => {
    const theme = useSelector((state:any) => state.theme.value.name)

    return (


        <nav aria-label="Page navigation">
            <ul className="flex items-center -space-x-px h-10 text-base">
                <li>
                    <a href="#"
                            className={`${theme}-number-pagination-arrow`}>
                        <span className="sr-only">Previous</span>
                        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                    </a>
                </li>
                <NumberPagination number={1} isCurrent={false} href={""}/>
                <NumberPagination number={1} isCurrent={true} href={""}/>
                <NumberPagination number={1} isCurrent={false} href={""}/>

                <li>
                    <a href="#"
                       className={`${theme}-number-pagination-arrow`}>
                        <span className="sr-only">Next</span>
                        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>


    );
};
