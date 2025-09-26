import Blog from '@/components/blog/Blog'
import RelatedBlog from '@/components/blog/RelatedBlog'
import Comments from '@/components/product/Comments'
import Routess from '@/components/Products/Routess'
import { TParams } from '@/types/Type'
import React from 'react'

const page = async({ params }: TParams) => {
  const {id}= await params
  console.log(id)

  return (
    <div className='flex flex-col items-center w-full'>
        <Routess/>
        <div className='w-[90%] flex flex-col items-center space-y-4'>
            <Blog id={id}/>
            <RelatedBlog />
            {/* <Comments api='http://localhost:8000/commentsB' productId={parseInt(id)} /> */}
            <Comments api='https://mochichi-json-api.onrender.com/commentsB' productId={parseInt(id)} />
        </div>
      
    </div>
  )
}

export default page
