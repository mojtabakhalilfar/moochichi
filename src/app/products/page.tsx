import Filter from '@/components/Products/Filter'
import Products from '@/components/Products/Products'
import Routess from '@/components/Products/Routess'
import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center w-[90%]'>
                <Products />
                <Filter />
            </div>
        </div>
    )
}
