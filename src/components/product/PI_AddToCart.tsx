import React from 'react'

export const PI_AddToCart = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='space-x-2'>
                <button className='rounded-[65.6px] w-[38px] aspect-square bg-[#f6f6f6]'>+</button>
                <span className='text-[16px] left-5 text-[#100e0c]'>0</span>
                <button className='rounded-[65.6px] w-[38px] aspect-square bg-[#f6f6f6]'>-</button>
            </div>
            <button className='w-[342px] h-[41px] p-3 rounded-[41px] bg-[#ec6880] font-semibold text-[13px] text-white'>
                افزودن به سبد خرید
                |
                {"۷,۵۰۰,۰۰۰ تومان"}
            </button>
        </div>
    )
}
