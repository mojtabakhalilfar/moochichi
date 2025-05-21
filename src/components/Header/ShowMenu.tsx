"use client"
import { TCategory } from '@/types/Type'
import Link from 'next/link'
import React, { useState } from 'react'

const ShowMenu = ({menu}:{menu:TCategory[]}) => {
        const [showNavbar, setShowNavbar] = useState(false)
    return (
        <div className='w-full h-full'>
            <div className='w-12 h-12 absolute top-0 right-2'>
                <button onClick={() => setShowNavbar(!showNavbar)} className='w-full h-full rounded-[48px] bg-[ec6880] flex items-center justify-center'><img className='w-5 aspect-square' src="/assets/icons/" alt="" /></button>
            </div>
            <div className={`${showNavbar ? "flex" : "hidden"} flex-col items-center w-full absolute top-[50%] bg-[#30303d]`}>
                {menu.map((items) => (
                    <div className='text-white w-full text-center my-2' key={items.id}><Link className='w-full text-[14px] text-[#acacb1] hover:text-white' href={items.link}>{items.title}</Link></div>
                ))}
            </div>
        </div>
    )
}

export default ShowMenu
