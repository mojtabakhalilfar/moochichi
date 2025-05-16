import Blogs from '@/components/blogs/Blogs'
import NewBolg from '@/components/blogs/NewBolg'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full py-14'>
        <div className='flex flex-col items-center w-[85%]'>
          <NewBolg />
          <Blogs />
        </div>
    </div>
  )
}

export default page
