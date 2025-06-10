"use client"
import React, { useEffect, useState } from 'react'

const PI_SelectedColor = ({colors , selectedfunc}:{colors:Array<{ id: number, title: string, code: string }> , selectedfunc:(colorId:number)=>void}) => {
    const [selected , setSelected]=useState<number>(1)
    useEffect(()=>{
      selectedfunc(selected)
    },[selected])
  return (
    <div className='my-4'>
      <span className='font-medium text-[16px] text-[#14151b] leading-[180%]'>انتخاب رنگ</span>
      <div className='flex py-4'>
        {
            colors.map((item)=>(
                <div key={item.id} className={` rounded-[24px] px-3 py-1 space-x-2 ${item.id == selected ? "border border-[#ec6880]":""} flex`} onClick={()=>setSelected(item.id)}>
                    <div className={`${item.code} w-5 h-5 rounded-[6px]`}>{}</div>
                    <span className='text-[14px] text-[#100e0c] left-6'>{item.title}</span>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default PI_SelectedColor
