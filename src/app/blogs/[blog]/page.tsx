import Blog from '@/components/blog/Blog'
import RelatedBlog from '@/components/blog/RelatedBlog'
import Comments from '@/components/product/Comments'
import Routess from '@/components/Products/Routess'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center w-full'>
        <Routess/>
        <div className='w-[90%] flex flex-col items-center space-y-4'>
            <Blog/>
            <RelatedBlog />
            <Comments/>
        </div>
      
    </div>
  )
}

export default page
