import Link from 'next/link'
import React from 'react'

const BlogInBlogs = ({src , alt , title , tags , id}: {src:string , alt: string , title:string , tags:Array<string> , id:number}) => {
    return (
        <div className='w-full'>
            <img src={src} className="w-full h-[218px] rounded-[14px]" alt={alt} />
            <h2 className='font-medium text-[18px] text-[#2d2728]'>{title}</h2>
            <div className='flex items-center justify-between w-full'>
                <div className='text-[14px] text-[#a89c9f] leading-[180%]'>
                    دسته بندی:
                   {
                    tags.map((item)=>(
                        <span >{item}</span>
                    ))
                   }
                </div>
               <Link href={`/blogs/blog${id}`}>
               <img src="/assets/icons/arrow-left.png" alt="" />
               </Link> 
               
            </div>
        </div>
    )
}

export default BlogInBlogs
