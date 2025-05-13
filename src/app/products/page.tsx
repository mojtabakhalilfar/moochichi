import Filter from '@/components/Products/Filter'
import Products from '@/components/Products/Products'
import Sort from '@/components/Products/Sort'
import React from 'react'

export default function page() {

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className='grid grid-cols-4 sm:grid-cols-12 space-y-8 '>
                <Filter className="sm:col-span-3 sm:row-span-10"/>
                <Sort className="col-span-2 sm:col-span-9"/>
                <Products className="col-span-4 sm:col-span-9"/>
            </div>
        </div>
    )
}
