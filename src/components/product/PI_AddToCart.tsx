import React from 'react'

export const PI_AddToCart = () => {
    return (
        <div className='flex flex-col sm:flex-row-reverse items-center justify-around space-y-2 sm:mb-12'>
            <div className='space-x-2 w-auto'>
                <button className='rounded-[65.6px] w-[38px] sm:w-[56px] aspect-square bg-[#f6f6f6]'>+</button>
                <span className='text-[16px] sm:text-2xl left-5 text-[#100e0c]'>0</span>
                <button className='rounded-[65.6px] w-[38px] sm:w-[56px] aspect-square bg-[#f6f6f6]'>-</button>
            </div>
            <button className='w-[342px] sm:w-[380px] sm:h-14 h-[41px] p-3 rounded-[41px] bg-[#ec6880] font-semibold text-[13px] text-white'>
                افزودن به سبد خرید
                |
                {"۷,۵۰۰,۰۰۰ تومان"}
            </button>
        </div>
    )
}
