/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from "react-router-dom"
import icon from '@/assets/images/icon.png';
import { menus } from "./menu";
import { useSelector } from "react-redux";
import { useState } from "react";

const SideMenu = () => {
    const theme = useSelector((state:any) => state.theme.value.name)
    const [activeMenu,setActiveMenu] = useState(menus[0])

    const changeMenu = (menu:any) => {
        setActiveMenu(menu)
    } 
    return (
        <>
        <div className="flex">
            <nav className="w-[80px] relative bg-[#1E1E1E]  h-screen border-[#3C3C3C] border-r ">
                <div className="flex mt-5 w-full justify-center">
                    <img src={icon} alt="" />
                </div>
                <div className="mt-10">
                    {menus.map((menu) => {
                        return (
                            <>
                                <div onClick={() => changeMenu(menu)} className={`w-full items-center cursor-pointer h-12 flex justify-center ${activeMenu.name == menu.name? 'bg-[#1ABEFF1A]':''}`}>
                                    <img data-mode={activeMenu.name == menu.name?'active':''} className={`${theme}-icons-${menu.icon}`}  alt="" />
                                </div>
                            </>
                        )
                    })}

                </div>

                <div className="absolute w-full bottom-5">
                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-[50px] h-[1px] bg-[#3C3C3C]"></div>

                    </div>
                    <div  className="w-full items-center cursor-pointer h-12 flex justify-center">
                        <img className={`${theme}-icons-logOut`}  alt="" />
                    </div>
                </div>
            </nav>   
            <div className="w-full">
                <Outlet></Outlet>
            </div> 

        </div>
        </>
    )
}
export default SideMenu