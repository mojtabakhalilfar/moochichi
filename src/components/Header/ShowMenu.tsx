"use client"
import { TCategory } from '@/types/Type'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const ShowMenu = ({menu}:{menu:TCategory[]}) => {
        const pathName = usePathname()
        const [showNavbar, setShowNavbar] = useState(false)
    return (
        <div className='w-full h-full'>
            <div className='w-12 h-12 absolute top-0 right-2'>
                <button onClick={() => setShowNavbar(!showNavbar)} className='w-full h-full rounded-[48px] flex items-center justify-center'><img className='w-5 aspect-square' src="/assets/icons/menu-svgrepo-com.svg" alt="" /></button>
            </div>
            <div className={`${showNavbar ? "flex" : "hidden"} flex-col items-center w-full absolute top-12 bg-[#30303d]`}>
                {menu.map((items) => (
                    <div onClick={() => setShowNavbar(!showNavbar)} key={items.id}><Link className={`w-full text-center my-2 text-[14px] hover:text-white ${pathName==items.link ?"text-blue-500":"text-[#acacb1]"}`} href={items.link}>{items.title}</Link></div>
                ))}
            </div>
        </div>
    )
}

export default ShowMenu
