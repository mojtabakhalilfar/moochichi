import React from 'react'
import ListComment from './ListComment'
import { FaStar } from 'react-icons/fa6'

type Props = {
  productId: number
  api : string
}

export default function Comments({ productId , api }: Props) {
  return (
    <div className='flex flex-col items-center w-full px-3 sm:px-10 space-y-4 my-10'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-start gap-2'>
          <img className='w-5 h-5' src="/assets/icons/grape2.png" alt="" />
          <h2 className='text-[#14151b] text-[16px] font-medium leading-[180%]'>دیدگاه کاربران</h2>
        </div>
        <div className='flex flex-col items-end'>
          <span className='text-[12px] font-medium'>امتیاز ۴ از ۵ از بین ۴۰ دیدگاه</span>
          <FaStar className='w-5 h-5 text-yellow-600'/>
        </div>
      </div>
      <ListComment api={api} productId={productId}/>
    </div>
  )
}
