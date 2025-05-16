import React from 'react'
import FormComment from './FormComment'

export default function Comments() {
    return (
        <div className='flex flex-col items-center w-full px-3 sm:px-10 space-y-4'>
            <div className='flex items-center justify-between w-full'>
                <div className='flex items-start space-x-1'>
                    <img className='w-5 h-5' src="/assets/icons/grape2.png" alt="" />
                    <h2 className='text-[#14151b] text-[16px] font-medium leading-[180%]'>دیدگاه کاربران</h2>

                </div>
                <div className='flex flex-col items-end space-x-1'>
                    <span className='text-[12px] font-medium'>امتیاز 4 از 5 از بین 40 دیدگاه</span>
                    <img className='w-24 h-4' src="/assets/icons/stars.png" alt="" />
                </div>
            </div>
            <FormComment/>
        </div>
    )
}
