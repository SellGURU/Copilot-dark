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
        <div className={`${theme}-SideMenu-container`}>
            <nav className={`${theme}-SideMenu-nav`}>
                <div className={`${theme}-SideMenu-logo-container`}>
                    <img src={icon} alt="" />
                </div>
                <div className={`${theme}-SideMenu-MenuList-container`}>
                    {menus.map((menu) => {
                        return (
                            <>
                                <div onClick={() => changeMenu(menu)} data-mode={activeMenu.name == menu.name?'active':''} className={`${theme}-SideMenu-MenuList-menu-container`}>
                                    <img data-mode={activeMenu.name == menu.name?'active':''} className={`${theme}-icons-${menu.icon}`}  alt="" />
                                </div>
                            </>
                        )
                    })}

                </div>

                <div className={`${theme}-SideMenu-MenuList2-container`}>
                    <div className={`${theme}-SideMenu-MenuList2-Line-Container`}>
                        <div className={`${theme}-SideMenu-MenuList2-Line`}></div>
                    </div>
                    <div  className={`${theme}-SideMenu-MenuList2-logOut`}>
                        <img className={`${theme}-icons-logOut`}  alt="" />
                    </div>
                </div>
            </nav>   
            <div className={`${theme}-SideMenu-content`}>
                <Outlet></Outlet>
            </div> 

        </div>
        </>
    )
}
export default SideMenu