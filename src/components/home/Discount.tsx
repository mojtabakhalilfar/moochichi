"use client"
import React, { useState } from 'react'

import ProductHome from './ProductHome'
import { TDiscount } from '@/types/Type'

const Discount = () => {
    const [showProduct, setShowProduct] = useState(1)
    const discount: TDiscount[] = [
        { id: 1, title: "چراغ خواب خوک", image: "/assets/most popular/image5.png", firstPrice: 1200000, finalPrice: 976000, },
        { id: 2, title: "چراغ خواب خوک", image: "/assets/most popular/image6.png", firstPrice: 1200000, finalPrice: 976000, },
        { id: 3, title: "چراغ خواب خوک", image: "/assets/most popular/image7.png", firstPrice: 1200000, finalPrice: 976000, },
        { id: 4, title: "چراغ خواب خوک", image: "/assets/most popular/image8.png", firstPrice: 1200000, finalPrice: 976000, },
        { id: 5, title: "چراغ خواب خوک", image: "/assets/most popular/image9.png", firstPrice: 1200000, finalPrice: 976000, },

    ]

    const preve = () => {
        if (showProduct == 1) setShowProduct(discount.length)
        else setShowProduct(showProduct - 1)
    }
    const next = () => {
        if (showProduct == discount.length) setShowProduct(1)
        else setShowProduct(showProduct + 1)

    }
    return (
        <div className='flex flex-col items-center justify-center mt-24 sm:mt-60 relative'>

            <h3 className=' font-semibold text-[18px] sm:text-[24px] sm:relative top-10 mb-5 sm:pb-0'>جشنواره پرتخفیف موچیچی</h3>
            <div className='bg-[url(/assets/backgrounds/Vector61.png)] sm:bg-[url(/assets/backgrounds/Vector6.png)] bg-center bg-contain bg-no-repeat h-[542px] sm:h-auto w-[95%] flex flex-col items-center justify-around pb-24 space-y-4 relative'>
                <img className='absolute top-[-10%] sm:top-[0%] left-[5%]' src="/assets/icons/grape2.png" alt="" />
                <div className='flex items-center justify-around w-[60%] sm:w-[20%] text-white sm:mt-32'>
                    {boxTime({ time: 12, title: "ثانیه" })}
                    :
                    {boxTime({ time: 12, title: "دقیقه" })}
                    :
                    {boxTime({ time: 12, title: "ساعت" })}
                </div>
                <div className='flex items-center justify-around w-[70%] sm:w-[90%] text-white space-x-4'>
                    <button className='sm:hidden' onClick={next}>n</button>
                    {
                        discount.map((items) => (
                            <div className={`${items.id == showProduct ? "flex" : "hidden sm:flex"}`}>
                                <ProductHome
                                    finalPrice={items.finalPrice}
                                    id={items.id}
                                    firstPrice={items.firstPrice}
                                    image={items.image}
                                    title={items.title}
                                    key={items.id} />
                            </div>
                        ))
                    }
                    <button className='sm:hidden' onClick={preve}>p</button>
                </div>
            </div>
        </div>
    )
}

export default Discount

const boxTime = ({ time, title }: { time: number, title: string }) => {
    return (
        <div className='w-[62px] aspect-square space-x-1 rounded-[6px] bg-gray-700 text-white flex flex-col items-center justify-around'>
            <span className='font-semibold text-[18px]'>{time}</span>
            <span className='text-[12px]'>{title}</span>
        </div>
    )
}