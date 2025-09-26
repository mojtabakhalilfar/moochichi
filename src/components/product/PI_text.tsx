"use client"
import React, { useState } from 'react'
import PI_SelectedColor from './PI_SelectedColor'
import { PI_AddToCart } from './PI_AddToCart'
import { TProductText } from '@/types/Type'
import { FaStar } from 'react-icons/fa'
import { IoShieldCheckmark } from 'react-icons/io5'


const PI_text = ({product}:{product :TProductText}) => {
    const [selectedColor , setSelectedColor]=useState<number>()
    const selectedColorfunc =(colorID:number)=>{
        setSelectedColor(colorID)
    }


    return (
        <div className='relative flex flex-col justify-evenly space-y-2 sm:px-4 aspect-square sm:space-y-12 sm:py-12'>
            <div className='flex flex-col space-y-1 sm:space-y-4 h-auto'>
                <span className='font-bold text-[18px] sm:text-[32px] text-[#100E0C] leading-8 text-right '>{product?.title}</span>
                <div className='flex  flex-col sm:flex-row sm:space-x-4 sm:mb-6'>
                    <p className='font-medium text-[12px] sm:text-[14px] text-[#929292] leading-[180%]'>شناسه کالا : <span className='text-[#14151b]'>{product?.id + 1000}</span></p>
                    <p className='font-medium text-[12px] sm:text-[14px] text-[#929292] leading-[180%]'>برچسب : <span className='text-[#EC6880]'>{product?.tag}</span></p>
                </div>
                <div className='flex flex-col space-y-2 sm:space-y-3'>
                    <span className='font-medium text-[16px] text-[#14151b] leading-[180%] sm:mb-1'>ویژگی های محصول</span>
                    {
                        product && product.features.map((item) => (
                            <span className='font-medium text-[12px] sm:text-[12px] text-[#606060] leading-[180%]'>{item}</span>
                        ))
                    }
                </div>
            </div>
            <PI_SelectedColor colors={product?.colors} selectedfunc={selectedColorfunc}/>
            <PI_AddToCart id={product.id} colorId={selectedColor ? selectedColor : 1}/>
            <div className='absolute left-0 sm:left-[15%] top-0 sm:top-[20%] flex flex-col items-end text-[12px] sm:text-[14px] space-y-2'>
                <span className='flex items-center'>امتیاز : {4.5} <FaStar className='w-5 h-5 text-yellow-600'/></span>
                <span className='flex'>ضمانت اصالت و کیفیت کالا <IoShieldCheckmark className='w-5 h-5 text-blue-600'/></span>
            </div>
        </div>
    )
}

export default PI_text
