import React from 'react'
import FilterLayout from './FilterLayout'
import { TList } from '@/types/Type'

type TCategory = Omit<TList, "link"> & { color: string }
const Color = ({handleColor}:{handleColor:(key:string , valu:any)=>void}) => {
    const category: TCategory[] = [
        { id: 1, title: "سفید", color: "border bg-[#ffffff]" },
        { id: 2, title: "مشکی", color: "bg-[#111111]" },
        { id: 3, title: "آبی", color: "bg-[#6691FF]" },
        { id: 4, title: "کرم", color: "bg-[#FFDAA7]" },
        { id: 5, title: "نارنجی", color: "bg-[#F29665]" },
        { id: 6, title: "قرمز", color: "bg-[#FF5C5F]" },
        { id: 7, title: "سبز", color: "bg-[#BAE399]" },

    ]
    return (
        <FilterLayout title='رنگ' search='رنگ'>
            {
                category.map((item) => (
                    <div key={item.id} className='flex items-center justify-between'>
                        <div className='space-x-1'>
                            <input value={item.id} onChange={(e) => handleColor("color", e.target.value)} type="checkbox" name="" id={item.id.toString()} />
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
