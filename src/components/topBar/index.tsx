import clinic from '@/assets/images/clinic.png';

const TopBar = () => {
    return (
        <>
            <div className="absolute h-auto md:h-[84px] w-full pl-20 bg-[#1E1E1E] border-b border-[#333333] top-0 z-40">
                <div className="flex-wrap gap-4 py-4 md:py-0 md:gap-0 flex justify-between h-full px-10 items-center">
                    <div className="h-full flex items-center relative">
                        <input type="text" placeholder="Search for Repots, Interventions, Biomarkers..." className=" pl-10 pr-4 text-xs relative text-white/60 bg-[#272727] border border-[#333333] w-[360px] h-11 rounded-[12px]" />
                        <img className="absolute left-2" src="./Themes/Aurora/icons/search-normal.svg" alt="" />
                    </div>
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