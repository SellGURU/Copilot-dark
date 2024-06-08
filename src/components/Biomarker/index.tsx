import React from 'react'
import { ProfileInfoCard } from './profileInfoCard'
import SearchBox from '../searchBox'
import TabsWrapper from '../tabs'
import { TabsInfo } from './Data'
export const Biomarker = () => {
  return (
    <div className='flex flex-col items-start gap-4'>
        <ProfileInfoCard />
        <div className='flex items-center gap-2'>
            <SearchBox theme='Aurora' placeholder='Quick alphabetical search for biomarkers' />
            <div className='rounded-xl bg-black-primary border border-main-border flex text-xs text-primary-text'>
                <div className='border-r border-main-border px-4 py-1'>
                    <div className='bg-black-secondary py-[10px] px-6 rounded-2xl'>Critical</div>
                </div>
                <div className='border-r border-main-border px-4 py-1'>
                    <div className='bg-black-secondary rounded-2xl py-[10px] px-6'>Low</div>
                </div>
                <div className='px-4 py-1'>
                    <div className='bg-black-secondary rounded-2xl py-[10px] px-6'>Medium</div>
                </div>
            </div>
        </div>
        <TabsWrapper TabsInfo={TabsInfo} />
    </div>
  )
}
