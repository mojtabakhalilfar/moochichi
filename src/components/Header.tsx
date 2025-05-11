"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export type TMenu= {
    id: number,
    title: string,
    link: string
}

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const menu: TMenu[] = [
        { id: 1, title: "صفحه اصلی", link: "/" },
        { id: 2, title: "لوازم تحریر", link: "/stationery" },
        { id: 3, title: "دکوری خاص", link: "/special" },
        { id: 4, title: "استیکر", link: "/sticker" },
        { id: 5, title: "کیف و کوله", link: "/bags" },
        { id: 6, title: "چراغ خواب", link: "/bedlight" },
        { id: 7, title: "لوازم آرایشی", link: "/makeup" },
        { id: 8, title: "لوازم جانبی", link: "/lateral" },
        { id: 9, title: "اکسسوری خاص", link: "/accessory" }
    ]

    const HeaderMobile =
        <div className='w-full flex flex-col items-center justify-center relative'>
            <div className='flex items-center justify-between w-[342px] h-[48px]'>
                <div className='w-12 h-12 relative'>
                    <button onClick={() => setShowNavbar(!showNavbar)} className='w-full h-full rounded-[48px] bg-[ec6880] flex items-center justify-center'><img className='w-5 aspect-square' src="/assets/icons/" alt="" /></button>
                </div>
                <div className='flex'>
                    <div className='w-10 h-4 bg-[#ff6687] rounded-[19px]'></div>
                    <img className='w-[82px] h-5' src="/assets/icons/logo.png" alt="" />
                </div>
                <button className='w-12 aspect-square rounded-[48px] bg-[ec6880] flex items-center justify-center'><img className='w-5 aspect-square' src="/assets/icons/cart.png" alt="" /></button>
            </div>
            <div className='w-[342px] h-12 relative'>
                <input className='w-full h-full rounded-[64px] bg-[#f6f6f6] text-[#a89c9f] border-none outline-none px-6' placeholder='جستجو در فروشگاه ...' type="text" />
                <button className='absolute left-4 top-3'><img className='w-5 h-5' src="/assets/icons/search-normal.png" /></button>
            </div>
            <div className={`${showNavbar ? "flex" : "hidden"} flex-col items-center w-full absolute top-[50%] bg-[#30303d]`}>
                {menu.map((items) => (
                    <div className='text-white w-full text-center my-2' key={items.id}><Link className='w-full text-[14px] text-[#acacb1] hover:text-white' href={items.link}>{items.title}</Link></div>
                ))}
            </div>
        </div>

    const HeaderDesktop =
        <div className='w-full flex flex-col items-center justify-center relative py-4'>
            <div className='flex items-center justify-between w-[95%] py-6'>
                <div className='flex items-center justify-end'>
                    <div className='flex '>
                        <div className='w-10 h-4 bg-[#ff6687] rounded-[19px]'></div>
                        <img className='w-[82px] h-5' src="/assets/icons/logo.png" alt="" />
                    </div>
                    <div className='w-[500px] h-12 relative mx-4'>
                        <input className='w-full h-full rounded-[64px] bg-[#f6f6f6] text-[#a89c9f] border-none outline-none px-6' placeholder='جستجو در فروشگاه ...' type="text" />
                        <button className='absolute left-4 top-3'><img className='w-5 h-5' src="/assets/icons/search-normal.png" /></button>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <button className='w-12 aspect-square rounded-[48px] bg-[ec6880] flex items-center justify-center'>
                        <img className='w-5 aspect-square' src="/assets/icons/cart.png" alt="" />
                    </button>
                    <button className='w-12 aspect-square rounded-[48px] bg-[ec6880] flex items-center justify-center'>
                        <img className='w-5 h-5' src="/public/assets/icons/user.png" alt="" />
                    </button>
                </div>
            </div>
            <div className={`flex items-center justify-between w-[90%] bg-[#30303d] rounded-[64px] py-4 text-[14px] px-4`}>
                <div className='w-[70%] flex items-center'>

                    {menu.map((items) => (
                        <div className='text-white w-full text-center flex items-center' key={items.id}>
                            <Link className='w-full text-[14px] text-[#acacb1] hover:text-white' href={items.link}>{items.title}</Link>
                            <div className='bg-[#535361] w-[5px] h-[5px] rounded-full'></div>
                        </div>

                    ))}
                </div>
                <div>
                    <button className='flex items-center backdrop-brightness-0 backdrop-opacity-10 rounded-[35px] p-2'>
                        <img src="/assets/icons/24-support.png" alt="" />
                        <span className='text-white'>
                            ارتباط با مجموعه
                        </span>
                        <img src="/assets/icons/arrow-left.png" alt="" />
                    </button>
                </div>
            </div>
        </div>

    return (
        <div className='fixed top-0 w-full z-40 bg-white'>
            <div className='flex sm:hidden'>{HeaderMobile}</div>
            <div className='hidden sm:flex'>{HeaderDesktop}</div>
        </div>
    )
}

export default Header
