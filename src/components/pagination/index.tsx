import {NumberPagination} from "@/components/pagination/numberPagination.tsx";

interface PaginationProps {
    theme: string;
    table: any
}

const Pagination: React.FC<PaginationProps> = ({theme, table,}) => {
    const countPage  =table.getPageCount() as number
    return (
        <nav aria-label="Page navigation ">
            <ul className="flex items-center -space-x-px h-8 text-base">
                <li>
                    <button
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                        data-diraction-arow={"right"}
                        className={`${theme}-number-pagination-arrow-container`}>
                        <span className="sr-only">Previous</span>
                        <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                    </button>
                </li>
                {Array.from({ length:countPage }).map((_value:any,index:number)=>{
                    return(
                        <NumberPagination onClick={()=>table.setPageIndex(index)} theme={theme} number={index+1} isCurrent={table.getState().pagination.pageIndex===index} />
                    )
                })}
                <li>
                    <button
                        onClick={() => table.nextPage()}
                        data-diraction-arow={"left"}
                        disabled={!table.getCanNextPage()}
                        className={`${theme}-number-pagination-arrow-container`}>
                            <span className="sr-only">Next</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                    </button>
                </li>
            </ul>
        </nav>


    );
};

export default Pagination
