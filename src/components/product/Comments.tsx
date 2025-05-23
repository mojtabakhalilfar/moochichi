import React from 'react'
import ListComment from './ListComment'

type Props = {
  productId: number
}

export default function Comments({ productId }: Props) {
  return (
    <div className='flex flex-col items-center w-full px-3 sm:px-10 space-y-4 my-10'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-start gap-2'>
          <img className='w-5 h-5' src="/assets/icons/grape2.png" alt="" />
          <h2 className='text-[#14151b] text-[16px] font-medium leading-[180%]'>دیدگاه کاربران</h2>
        </div>
        <div className='flex flex-col items-end'>
          <span className='text-[12px] font-medium'>امتیاز ۴ از ۵ از بین ۴۰ دیدگاه</span>
          <img className='w-24 h-4' src="/assets/icons/stars.png" alt="" />
        </div>
      </div>
      <ListComment productId={productId}/>
    </div>
  )
}
