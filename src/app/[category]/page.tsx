import Filter from '@/components/Products/Filter'
import Products from '@/components/Products/Products'
import Sort from '@/components/Products/Sort'
import { TCParams } from '@/types/Type'
import React from 'react'

export default async function page({params}:TCParams) {
    const {category} = await params
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className='grid grid-cols-4 sm:grid-cols-12 space-y-8 '>
                <Filter className="col-span-3 sm:col-span-3 sm:row-span-10 "/>
                <Sort className="col-span-1 sm:col-span-9 sm:mr-16"/>
                <Products category={category} className="col-span-4 sm:col-span-9"/>
            </div>
        </div>
    )
}
