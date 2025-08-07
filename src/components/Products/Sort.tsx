"use client"
import { TList } from '@/types/Type'
import React, { useState } from 'react'



const Sort = ({ className , number}: { className: React.ReactNode , number:number}) => {
  const [selected, setSelected] = useState(2)
  const [show, setShow] = useState(false)
  const listOfSort: Omit<TList, "link">[] = [
    { id: 1, title: "پربازدیدترین" },
    { id: 2, title: "جدیدترین" },
    { id: 3, title: "پرفروش ترین" },
    { id: 4, title: "ارزان ترین" },
    { id: 5, title: "گران ترین" },
    { id: 6, title: "منتخب" },
  ]
  return (
    <div className={`${className} flex items-center justify-between relative`}>
      <div className='w-[85%] flex items-center justify-between'>
        <div className='flex items-center'>
          <div className={`flex ${show?"flex-col":"flex-row"} sm:flex-row items-center`}>
            <button className='w-4 h-4 absolute sm:static top-0 right-5' onClick={()=>setShow(!show)}>
              <img className='w-full h-full' src="/assets/icons/sort.png" alt="" />
            </button>
            {
              listOfSort.map((item) => (
                <span key={item.id} className={`${item.id == selected ? show?"hidden":"flex" : "hidden"} text-nowrap sm:hidden  absolute sm:static top-0 right-10`}>{item.title}</span>
              ))
            }
          <div className='flex flex-col sm:flex-row  absolute sm:static top-4 right-0 bg-amber-50 sm:bg-none px-4 py-2'>
            <span className='hidden sm:flex text-nowrap'>مرتب سازی :  </span>
            <div className={`${show?"flex":"hidden"} sm:flex flex-col sm:flex-row items-center`}>
            {
              listOfSort.map((item, index) => (
                <div key={item.id} className={`text-[14px] flex`}>
                  <button className={`${item.id == selected ? "text-[#EC6880] border-b-2 rounded-b-[1px] border-[#EC6880]" : "text-[#404040]"}`} onClick={() => {setSelected(item.id); setShow(false) } }>{item.title}</button>
                  <span className={`${index == listOfSort.length - 1 ? "hidden" : "hidden sm:flex"} mx-2 `} >   |   </span>
                </div>
              ))
            }
            </div>
          </div>
          </div>
        </div>
        <div className='hidden sm:flex'>
          <span>{number} محصول موجود است</span>
        </div>
      </div>
    </div>

  )
}

export default Sort
