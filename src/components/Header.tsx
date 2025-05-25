"use client"
import { TCategory } from '@/types/Type'
import Link from 'next/link'
import React from 'react'
import ShowMenu from './Header/ShowMenu'
import Search from './Header/Search'
import { CiShoppingCart, CiUser } from 'react-icons/ci'
import { BiSupport } from 'react-icons/bi'
import { GoArrowLeft } from 'react-icons/go'
import { usePathname } from 'next/navigation'


const Header = () => {
    const pathName = usePathname()


    const menu: TCategory[] = [
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

                <div className='flex'>
                    <div className='w-10 h-4 bg-[#ff6687] rounded-[19px]'></div>
                    <img className='w-[82px] h-5' src="/assets/icons/logo.png" alt="" />
                </div>
                <button className='w-12 aspect-square rounded-[48px] bg-[ec6880] flex items-center justify-center'><img className='w-5 aspect-square' src="/assets/icons/cart.png" alt="" /></button>
            </div>
            <Search />
            <ShowMenu menu={menu} />
        </div>

    const HeaderDesktop =
        <div className='w-full flex flex-col items-center justify-center relative py-4'>
            <div className='flex items-center justify-between w-[95%] py-6'>
                <div className='flex items-center justify-end'>
                    <div className='flex '>
                        <div className='w-10 h-4 bg-[#ff6687] rounded-[19px]'></div>
                        <img className='w-[82px] h-5' src="/assets/icons/logo.png" alt="" />
                    </div>
                    <Search />
                </div>
                <div className='flex justify-between space-x-1'>

                    <button className='btn-header'>
                        <CiShoppingCart className='w-8 aspect-square ' />
                    </button>
                    <button className='btn-header'>
                        <CiUser className='w-8 aspect-square' />
                    </button>
                </div>
            </div>
            <div className={`flex items-center justify-between w-[90%] bg-[#30303d] rounded-[64px] py-4 text-[14px] px-4`}>
                <div className='w-[70%] flex items-center'>

                    {menu.map((items) => (
                        <div className='text-white w-full text-center flex items-center' key={items.id}>
                            <Link className={`w-full text-[14px] hover:text-white ${pathName == items.link? "text-blue-500":"text-[#acacb1]"}`} href={items.link}>{items.title}</Link>
                            <div className='bg-[#535361] w-[5px] h-[5px] rounded-full'></div>
                        </div>

                    ))}
                </div>
                <div>
                    <Link href='/aboutus' className='flex items-center backdrop-brightness-0 backdrop-opacity-10 rounded-[35px] p-2 text-white'>
                        <BiSupport className='w-8 aspect-square' />
                        <span className=''>
                            ارتباط با مجموعه
                        </span>
                        <GoArrowLeft className='w-8 aspect-square' />
                    </Link>
                </div>
            </div>
        </div>

    return (
        <header className='fixed top-0 w-full z-40 bg-white'>
            <div className='flex sm:hidden'>{HeaderMobile}</div>
            <div className='hidden sm:flex'>{HeaderDesktop}</div>
        </header>
    )
}

export default Header
