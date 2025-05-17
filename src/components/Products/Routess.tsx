import React from 'react'

const Routess = () => {
    const routes:Array<string> = ['صفحه اصلی','لوازم التحریر']
  return (
    <div className='w-full h-20'>
      <div className='space-x-2 w-full flex '>
        {
            routes.map((item , index)=>(
                <p key={index} className={`${index == routes.length-1?"text-[#14151b] font-medium":"text-[#929292]"} text-[16px]`}>{item} <span className={`${index == routes.length-1?"hidden":""}`}>|</span></p>
                
            ))
        }
      </div>
    </div>
  )
}

export default Routess
