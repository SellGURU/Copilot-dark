/* eslint-disable @typescript-eslint/no-explicit-any */
import clinic from '@/assets/images/clinic.png';
import SearchBox from '../searchBox';
import { useSelector } from 'react-redux';

const TopBar = () => {
    const theme = useSelector((state:any) => state.theme.value.name)
    return (
        <>
            <div className="absolute h-auto md:h-[84px] w-full pl-20 bg-[#1E1E1E] border-b border-[#333333] top-0 z-40">
                <div className="flex-wrap gap-4 py-4 md:py-0 md:gap-0 flex justify-between h-full px-10 items-center">
                    <SearchBox placeholder='Search for Repots, Interventions, Biomarkers...' theme={theme}></SearchBox>
                    <div className='flex items-center'>
                        <div className='w-10 h-10 mr-2 bg-[#333333] rounded-full flex justify-center items-center'>
                            <img src={'./Themes/Aurora/icons/notification.svg'}  alt="" />
                        </div>                        
                        <div className='w-10 h-10 mr-2 bg-[#333333] rounded-full flex justify-center items-center'>
                            <img src={clinic} alt="" />
                        </div>
                        <div>
                            <div className="text-[#FFFFFFDE] text-sm">Clinic Longevity 1</div>
                            <div className="text-[#FFFFFFDE] text-xs">Clinic-Longevity-1@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar