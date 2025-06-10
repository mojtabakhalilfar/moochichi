"use client"
import { useShopingCartContext } from '@/context/CartContesxt'
import React, { useState } from 'react'

export const PI_AddToCart = ({ id , colorId}: { id: number , colorId:number }) => {
    // const [count, setCount] = useState(0)
    const { handleIncreaseProduct,handleDescreaseProduct, handleAddToCart, handleRemoveFromCart, getProduct } = useShopingCartContext()
    return (
        <div className='flex flex-col sm:flex-row-reverse items-center justify-around space-y-2 sm:mb-12'>
            <div className='space-x-2 w-auto'>
                <button onClick={()=>handleIncreaseProduct(id , colorId)} className='rounded-[65.6px] w-[38px] sm:w-[56px] aspect-square bg-[#f6f6f6]'>+</button>
                <span className='text-[16px] sm:text-2xl left-5 text-[#100e0c]'>{getProduct(id , colorId)}</span>
                <button onClick={()=>handleDescreaseProduct(id , colorId)} className='rounded-[65.6px] w-[38px] sm:w-[56px] aspect-square bg-[#f6f6f6]'>-</button>
            </div>
            {
                getProduct(id , colorId) === 0 ?
                    <button onClick={() => handleAddToCart(id , colorId)} className='w-[342px] sm:w-[380px] sm:h-14 h-[41px] p-3 rounded-[41px] bg-[#ec6880] font-semibold text-[13px] text-white'>
                        افزودن به سبد خرید
                        |
                        {"۷,۵۰۰,۰۰۰ تومان"}
                    </button>
                    :
                    <button onClick={() => handleRemoveFromCart(id ,colorId)} className='w-[342px] sm:w-[380px] sm:h-14 h-[41px] p-3 rounded-[41px] bg-[#ec6880] font-semibold text-[13px] text-white'>
                        حذف از سبد خرید
                        |
                        {"۷,۵۰۰,۰۰۰ تومان"}
                    </button>
            }

        </div>
    )
}
