"use client"

import React, { useState } from 'react'

const ButtonMore = () => {
    const [index , setIndex]=useState(0)
  return (
    <div>
      <button onClick={()=>setIndex(index+4)} className='w-[179px] h-11 rounded-[43px] bg-[#ff6687] font-semibold text-[16px] text-white'>مشاهده بیشتر</button>
    </div>
  )
}

export default ButtonMore
