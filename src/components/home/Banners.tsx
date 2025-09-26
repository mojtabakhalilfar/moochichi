import { TBanners } from '@/types/Type'
import Link from 'next/link'
import React from 'react'


const Banners = async() => {
    // const resul = await fetch("http://localhost:8000/banner")
    const resul = await fetch("https://mochichi-json-api.onrender.com/banner")
    const banners = await resul.json() as TBanners[]
    return (
        <div className='flex items-center justify-center w-full'>
            <div className='flex flex-col sm:flex-row items-center sm:justify-around w-full sm:w-[90%]'>
                {
                    banners.map((items) => (
                        <Link key={items.id} className='w-[90%] aspect-[2/1] sm:w-[47%] sm:aspect-[3/1] mb-4' href={`${items.id}`}>
                            <img className='w-full h-full' src={items.image} alt={`${items.id}`} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Banners
