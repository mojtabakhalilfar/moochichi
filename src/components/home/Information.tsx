import React from 'react'

import Link from 'next/link'
import { TCategory } from '@/types/Type'


const Information = async() => {
    const result = await fetch("http://localhost:8000/category")
    const menu = await result.json() as TCategory[]
    // const menu: TCategory[] = [
    //     { id: 2, title: "لوازم تحریر", link: "/stationery", image: "/assets/category/pen.png" },
    //     { id: 3, title: "دکوری خاص", link: "/special", image: "/assets/category/joje.png" },
    //     { id: 4, title: "استیکر", link: "/sticker", image: "/assets/category/sticker.png" },
    //     { id: 5, title: "کیف و کوله", link: "/bags", image: "/assets/category/bag.png" },
    //     { id: 6, title: "چراغ خواب", link: "/bedlight", image: "/assets/category/lamp.png" },
    //     { id: 7, title: "لوازم آرایشی", link: "/makeup", image: "/assets/category/lip.png" },
    //     { id: 8, title: "لوازم جانبی", link: "/lateral", image: "/assets/category/mobile.png" },
    //     { id: 9, title: "اکسسوری خاص", link: "/accessory", image: "/assets/category/accessory.png" }
    // ]

    return (
        <div className='flex items-center justify-center w-full'>
            <div className='flex flex-col items-center w-[95%]'>
                <img className='w-[147px] h-10 sm:w-[170px] ' src="/assets/icons/logo.png" alt="" />
                <p className='text-2xl sm:text-[45px] font-semibold text-black my-4'>
                    فروشگاه<span className='text-[#FF6687]'> اکسسوری </span>های خاص
                </p>
                <p className='text-[#a89c9f] text-[14px] text-center px-[12%] sm:px-[30%] my-4'>موچیچی وارد کننده انواع اکسسوری - لوازم جانبی و لوازم تحریر خارجی میباشد و این یک متن تستی است جهت نمایش موچیچی</p>
                <div className='w-[250x] h-11 bg-[#FF6687] p-4 flex items-center justify-center rounded-[43px]'>
                    <span className=' text-white'>مشاهده محصولات</span>
                </div>
                <div className="bg-[url(/assets/backgrounds/Vector51.png)] sm:bg-[url(/assets/backgrounds/Vector%205.png)]  bg-center bg-contain bg-no-repeat h-auto w-full flex flex-col items-center sm:justify-center mt-24 sm:mt-60 relative">
                    <div className='w-full flex flex-col items-center sm:justify-center py-20'>
                        <span className='font-semibold text-[18px] text-white my-3'>دسته بندی محصولات</span>
                        <div className='sm:w-[70%] grid grid-cols-2 gap-4 sm:flex sm:items-center sm:justify-around'>
                            {
                                menu.map((items, index) => (
                                    <Link className={`w-[114px] h-[139px] sm:w-[133px] sm:h-[161px] bg-white rounded-[17.26] flex flex-col items-center py-4 ${index > 6 ? "sm:hidden" : "flex"}`} key={items.id} href={items.link}>
                                        <img className='w-[86.31px]h-[78.54] sm:w-[100px] sm:[91px] rounded-[8.63px] sm:rounded-[10px]' src={items.image} alt={items.title} />
                                        <span className='text-[13.23px] font-medium text-[#2d2728]'>{items.title}</span>
                                    </Link>
                                ))
                            }
                        </div>

                    </div>
                    <img className='w-[271px] h-[204px] sm:w-[722px] sm:h-[454px] absolute top-[-8%] sm:top-[-50%] -z-10' src="/assets/backgrounds/Frame11.png" alt="" />
                    <img className='absolute -bottom-4' src="/assets/icons/grape.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Information
