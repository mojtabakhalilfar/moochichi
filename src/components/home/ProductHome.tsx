import { TDiscount } from '@/types/Type'
import Link from 'next/link'
import React from 'react'


const ProductHome = ({id , title , finalPrice ,firstPrice ,image}:TDiscount) => {
    return (
        <div className={`flex flex-col bg-[#fff8fd] rounded-[11.31px] p-2 flex-shrink-0`} key={id}>
            <Link href={`product${id}`}>

                <img className='w-[156px] h-[140px] sm:w-[220px] sm:h-[223px] rounded-[5.6px] sm:rounded-[8px] object-cover' src={image} alt={title} />
            </Link>
            <h3 className='text-[14px] text-[#2d2728] my-2'>{title}</h3>
            <div className='flex justify-between'>
                <button>
                    <img className='' src="/assets/icons/shopping-cart.png" alt="" />
                </button>
                <div className='text-[12px] font-medium flex flex-col'>
                    <span>{finalPrice.toLocaleString()} ت</span>
                    <span className='text-[10px] text-[#a89c9f] my-1'>{firstPrice.toLocaleString()} ت</span>
                </div>
            </div>
        </div>
    )
}

export default ProductHome
