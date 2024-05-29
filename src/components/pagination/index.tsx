import {NumberPagination} from "@/components/pagination/numberPagination.tsx";
import {useSelector} from "react-redux";

export const Pagination = () => {
    const theme = useSelector((state: any) => state.theme.value.name)

    return (


        <nav aria-label="Page navigation ">
            <ul className="flex items-center -space-x-px h-8 text-base">
                <li>
                    <a href="#"
                       data-diraction-arow={"right"}
                       className={`${theme}-number-pagination-arrow-container`}>
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
                       data-diraction-arow={"left"}
                       className={`${theme}-number-pagination-arrow-container`}>
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


// <nav aria-label="Page navigation example">
//     <ul className="flex items-center -space-x-px h-8 text-sm">
//         <li>
//             <a href="#"
//                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                 <span className="sr-only">Previous</span>
//                 <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
//                      fill="none" viewBox="0 0 6 10">
//                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                           d="M5 1 1 5l4 4"/>
//                 </svg>
//             </a>
//         </li>
//         <li>
//             <a href="#"
//                className="flex items-center justify-center px-3 h-8 leading-tight ">1</a>
//         </li>
//         <li>
//             <a href="#"
//                className="flex items-center justify-center px-3 h-8 leading-tight ">2</a>
//         </li>
//         <li>
//             <a href="#" aria-current="page"
//                className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 ">3</a>
//         </li>
//         <li>
//             <a href="#"
//                className="flex items-center justify-center px-3 h-8 leading-tight ">4</a>
//         </li>
//         <li>
//             <a href="#"
//                className="flex items-center justify-center px-3 h-8 leading-tight ">5</a>
//         </li>
//         <li>
//             <a href="#"
//                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                 <span className="sr-only">Next</span>
//                 <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
//                      fill="none" viewBox="0 0 6 10">
//                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                           d="m1 9 4-4-4-4"/>
//                 </svg>
//             </a>
//         </li>
//     </ul>
// </nav>

