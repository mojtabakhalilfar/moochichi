import React from 'react'
import { TMenu } from '../Header'
import FilterLayout from './FilterLayout'

type TCategory = Omit<TMenu, "link"> & { color: string }
const Color = () => {
    const category: TCategory[] = [
        { id: 1, title: "سفید", color: "border bg-[#ffffff]" },
        { id: 1, title: "مشکی", color: "bg-[#111111]" },
        { id: 1, title: "آبی", color: "bg-[#6691FF]" },
        { id: 1, title: "کرم", color: "bg-[#FFDAA7]" },
        { id: 1, title: "نارنجی", color: "bg-[#F29665]" },
        { id: 1, title: "قرمز", color: "bg-[#FF5C5F]" },
        { id: 1, title: "سبز", color: "bg-[#BAE399]" },

    ]
    return (
        <FilterLayout title='رنگ' search='رنگ'>
            {
                category.map((item) => (
                    <div key={item.id} className='flex items-center justify-between'>
                        <div className='space-x-1'>
                            <input value={1} onChange={(e) => console.log(e.target.id)} type="checkbox" name="" id={item.id.toString()} />
                            <label htmlFor="">{item.title}</label>
                        </div>
                        <div className={`w-5 aspect-square rounded-[5.14px] ${item.color}`}>

                        </div>
                    </div>
                ))
            }
        </FilterLayout>
    )
}

export default Color
