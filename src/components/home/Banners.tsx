import Link from 'next/link'
import React from 'react'

type TBanners = {
    id: number,
    image: string
}
const Banners = () => {
    const banners: TBanners[] = [
        { id: 1, image: "/assets/backgrounds/banner/banner1.png" },
        { id: 1, image: "/assets/backgrounds/banner/banner2.png" },
    ]
    return (
        <div className='flex items-center justify-center w-full'>
            <div className='flex flex-col sm:flex-row items-center sm:justify-around w-full sm:w-[90%]'>
                {
                    banners.map((items) => (
                        <Link className='w-[90%] aspect-[2/1] sm:w-[47%] sm:aspect-[3/1] mb-4' href={`${items.id}`}>
                            <img className='w-full h-full' src={items.image} alt={`${items.id}`} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Banners
