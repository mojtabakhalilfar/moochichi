"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { TMenu } from '../Header'


type TMostPopular = {
    id: number,
    title: string,
    image: string,
    firstPrice: number,
    finalPrice: number,
}
const Mostpopular = () => {
    const [clicked, setClicked] = useState<number>(1)
    const mostpopular: TMostPopular[] = [
        { id: 1, title: "چراغ خواب خوک", image: "/assets/most popular/image5.png", firstPrice: 1200000, finalPrice: 976000, },
        { id: 2, title: "چراغ خواب خوک", image: "/assets/most popular/image6.png", firstPrice: 1200000, finalPrice: 976000, },
        { id: 3, title: "چراغ خواب خوک", image: "/assets/most popular/image7.png", firstPrice: 1200000, finalPrice: 976000, },
        { id: 4, title: "چراغ خواب خوک", image: "/assets/most popular/image8.png", firstPrice: 1200000, finalPrice: 976000, },
        { id: 5, title: "چراغ خواب خوک", image: "/assets/most popular/image9.png", firstPrice: 1200000, finalPrice: 976000, },

    ]

    const menu: TMenu[] = [
        { id: 1, title: "همه محصولات", link: "/stationery", },
        { id: 2, title: "لوازم تحریر", link: "/stationery", },
        { id: 3, title: "دکوری خاص", link: "/special", },
        { id: 4, title: "استیکر", link: "/sticker", },
        { id: 5, title: "کیف و کوله", link: "/bags", },
        { id: 6, title: "چراغ خواب", link: "/bedlight", },
        { id: 7, title: "لوازم آرایشی", link: "/makeup", },
        { id: 8, title: "لوازم جانبی", link: "/lateral", },
        { id: 9, title: "اکسسوری خاص", link: "/accessory", }
    ]

    return (
        <div className='flex flex-col justify-center items-center my-8 w-full'>
            <div className='flex flex-col justify-center items-center w-full'>
                <span className='font-semibold text-[18px] text-[#2d2728] my-4'>محبوب ترین مرتبط</span>
                <div className="rounded-[49px] bg-[#fff0f7] w-[90%] sm:w-[60%] px-2 py-1 overflow-x-auto flex items-center space-x-2 scrollbar-hide">
                    {menu.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setClicked(item.id)}
                            className={`whitespace-nowrap px-4 py-2 text-[14px] rounded-[43px] transition-all duration-200 ${clicked === item.id
                                    ? "bg-[#ff6687] text-white"
                                    : "bg-transparent text-[#a89c9f]"
                                }`}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
                <div className='grid grid-cols-2 gap-4 my-4 sm:flex items-center justify-around'>
                    {
                        mostpopular.map((items, index) => (
                            <div className={`${index > 3 ? "hidden sm:flex" : "flex"} flex-col bg-[fff8fd] rounded-[11.31px]`} key={items.id}>
                                <Link href={`product${items.id}`}>

                                    <img className='w-[156px] h-[140px] sm:w-[220px] sm:h-[223px] rounded-[5.6px] sm:rounded-[8px]' src={items.image} alt={items.title} />
                                </Link>
                                <span className='text-[14px] text-[#2d2728] my-2'>{items.title}</span>
                                <div className='flex justify-between'>
                                    <button>
                                        <img className='' src="/assets/icons/shopping-cart.png" alt="" />
                                    </button>
                                    <div className='text-[12px] font-medium flex flex-col'>
                                        <span>{items.finalPrice.toLocaleString()} ت</span>
                                        <span className='text-[10px] text-[#a89c9f] my-1'>{items.firstPrice.toLocaleString()} ت</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className='bg-[#ff6687] rounded-[43px] w-[179px] h-11 my-4 text-white font-semibold twxt-[16px]'>مشاهده بیشتر</button>
            </div>
        </div>
    )
}

export default Mostpopular
