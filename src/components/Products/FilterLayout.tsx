import React, { useState } from 'react'

const FilterLayout = ({children , title  , search}:{children:React.ReactNode , title:string , search: string}) => {
    const [show, setShow] = useState(false)

    return (

        <div className='flex w-full flex-col items-center space-y-2'>
            <div className='w-full flex justify-between px-3 items-center'>
                <span>{title}</span>
                <button onClick={()=>setShow(!show)}>
                    <img className={`${show?"":"rotate-180 transition-all"}`} src={`/assets/icons/arrow-square-down.png`} alt="" />
                </button>
            </div>
            <div className={`${show?"flex":"hidden"} flex-col w-full`}>
                <div className='w-full h-full relative'>
                    <input className='w-full h-full py-2 px-2 border border-[#fff0f7] rounded-[8px] outline-none pl-[15%] ' type='text' placeholder={`جستجو ${search}`} />
                    <img className='absolute left-[5%] top-[30%]' src="/assets/icons/search-normal.png" alt="" />
                </div>
                <div className='h-[150px] overflow-y-scroll w-full px-4 space-y-1'>
                    {children}
                </div>

            </div>
        </div>
    )
}

export default FilterLayout
