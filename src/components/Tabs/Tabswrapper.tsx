import { useState } from 'react'
import arrowleft from "../../assets/icons/arrow-left.png";
import { TabsInfo } from '.';
import { Tab } from './Tab';
export const TabsWrapper = () => {
    const [active, setActive] = useState<string>('Biomarker')
  return (
    <div className='flex gap-1 '>
        <div className='bg-tabs-bg flex items-center justify-center px-4 py-3 border   rounded-xl'>
            <img className='object-contain ' src={arrowleft} alt="" />
        </div>
        <div className='  flex  bg-tabs-bg  rounded-2xl  '>
            {TabsInfo.map((item , index)=>(
                <Tab key={item.text} text={item.text} icon = {item.icon} active={active} setActive={setActive} isFirst={index === 0}
                isLast={index === TabsInfo.length - 1} />
            ))}
        </div>
    </div>
  )
}
