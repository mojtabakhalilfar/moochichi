import Blog from '@/components/blog/Blog'
import Routess from '@/components/Products/Routess'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center w-full'>
        <Routess/>
        <div className='w-[90%] flex flex-col items-center '>
            <Blog/>
        </div>
      
    </div>
  )
}

export default page
