"use client"
import { useShopingCartContext } from '@/context/CartContesxt'
import React, { useState } from 'react'

export const PI_AddToCart = ({ id }: { id: number }) => {
    const [count, setCount] = useState(0)
    const { handleIncreaseProduct,handleDescreaseProduct, handleAddToCart, handleRemoveFromCart, getProduct } = useShopingCartContext()
    return (
        <div className='flex flex-col sm:flex-row-reverse items-center justify-around space-y-2 sm:mb-12'>
            <div className='space-x-2 w-auto'>
                <button onClick={()=>handleIncreaseProduct(id)} className='rounded-[65.6px] w-[38px] sm:w-[56px] aspect-square bg-[#f6f6f6]'>+</button>
                <span className='text-[16px] sm:text-2xl left-5 text-[#100e0c]'>{getProduct(id)}</span>
                <button onClick={()=>handleDescreaseProduct(id)} className='rounded-[65.6px] w-[38px] sm:w-[56px] aspect-square bg-[#f6f6f6]'>-</button>
            </div>
            {
                getProduct(id) > 0 ?
                    <button onClick={() => handleAddToCart(1)} className='w-[342px] sm:w-[380px] sm:h-14 h-[41px] p-3 rounded-[41px] bg-[#ec6880] font-semibold text-[13px] text-white'>
                        افزودن به سبد خرید
                        |
                        {"۷,۵۰۰,۰۰۰ تومان"}
                    </button>
                    :
                    <button onClick={() => handleRemoveFromCart(1)} className='w-[342px] sm:w-[380px] sm:h-14 h-[41px] p-3 rounded-[41px] bg-[#ec6880] font-semibold text-[13px] text-white'>
                        حذف از سبد خرید
                        |
                        {"۷,۵۰۰,۰۰۰ تومان"}
                    </button>
            }

        </div>
    )
}
