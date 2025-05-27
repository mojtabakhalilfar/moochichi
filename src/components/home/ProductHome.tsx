import { TMostPopular, TProductHome } from '@/types/Type'
import Link from 'next/link'
import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'


const ProductHome = ({id , title , finalPrice ,firstPrice ,image  , category}:TProductHome) => {
    return (
        <div className={`flex flex-col bg-[#fff8fd] rounded-[11.31px] p-2 flex-shrink-0`}>
            <Link href={`/relation/${id}`}>

                <img className='w-[156px] h-[140px] sm:w-[220px] sm:h-[223px] rounded-[5.6px] sm:rounded-[8px] object-cover' src={image} alt={title} />
            </Link>
            <h3 className='text-[14px] text-[#2d2728] my-2'>{title}</h3>
            <div className='flex justify-between'>
                <button>
                    <FaCartShopping className='w-5 h-5 text-[#ff6687]' />
                </button>
                <div className='text-[12px] text-black font-medium flex flex-col'>
                    <span >{finalPrice?.toLocaleString()} ت</span>
                    <del className='text-[10px] text-[#a89c9f] my-1'>{firstPrice?.toLocaleString()} ت</del>
                </div>
            </div>
        </div>
    )
}

export default ProductHome
