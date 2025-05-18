import { TBlog } from '@/types/Type'
import Link from 'next/link'
import React from 'react'

const NewBolg = async () => {


    
    const result = await fetch(`http://localhost:8000/newblog`)
    const article = await result.json() as TBlog
    return (
        <div className='flex flex-col items-start w-full '>
            <h2 className='text-2xl font-bold text-[#100e0c] my-4'>تازه ترین مقاله</h2>
            <div className='flex flex-col sm:flex-row items-center space-x-4 sm:space-y-4'>
                <img className='w-full h-[255px] rounded-[20px] sm:w-661 sm:h-[423px] sm:rounded-[32px]' src={article.image} alt="" />
                <div className='text-[#a89c9f] space-y-4 sm:px-6 sm:space-y-10'>
                    <span className='text-[14px] leading-[180%] text-right'> دسته بندی: {
                    article.tags.map((item)=>(
                        <span>{item}</span>
                    ))
                    }</span>
                    <h2 className='font-bold text-[24px] text-[#2D2728] text-center sm:text-right'>{article.title}</h2>
                    <p className='text-[16px] leading-7 text-justify'>{article.introduction}</p>
                    <Link className='w-[179px] h-11 rounded-[43px] bg-[#ff6687] sm:w-[250px] text-[16px] font-semibold text-white flex items-center justify-center' href={`/blogs/${article.id}`}>خواندن مقاله</Link>
                </div>
            </div>
        </div>
    )
}

export default NewBolg
