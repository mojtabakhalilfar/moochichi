import { TBlog } from '@/types/Type'
import Link from 'next/link'
import React from 'react'

const  Article = async() => {
    const result = await fetch("http://localhost:8000/articleHome")
    const article = await result.json() as TBlog[]
    console.log(article)
    // const article:TArticle[] = [
    //     { id: 1, image: "/assets/article/image1.png", title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["دسته بندی: آموزشی"] },
    //     { id: 2, image: "/assets/article/image2.png", title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["دسته بندی: آموزشی"] },
    //     { id: 3, image: "/assets/article/image3.png", title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["دسته بندی: آموزشی"] },
    // ]
    return (
        <div className='flex items-center justify-center my-12'>
            <div className='flex flex-col items-center w-[90%] space-y-8'>
                <span className='font-semibold text-[18px] text-[#2d2728]'>مقالات آموزشی موچیچی</span>
                <div className='space-y-5 sm:space-y-0 sm:space-x-5  flex flex-col sm:flex-row items-center'>
                    {
                        article.map((items)=>(
                            <Link key={items.id} className='space-y-5' href={`/blogs/${items.id}`}>
                                <img className='rounded-[14px] w-[342px] sm:w-[353px] h-[218px]' src={items.image} alt={items.title} />
                                <span className='font-medium text-[18px] text-[#2d2728] px-4'>{items.title}</span>
                                <div className='flex justify-between px-4'>
                                    <div className='text-[14px] text-[#a89c9f] '>
                                        {/* <span>دسته بندی: </span> */}
                                        {items.tags.map((tag)=>(
                                            <span>{tag}</span>
                                        ))}
                                    </div>
                                    <img className='' src="/assets/icons/arrow-left.png" alt="" />
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <button className='text-[14px] font-medium text-white bg-[#ff6687] px-20 py-4 rounded-[43px] mt-4'>مقالات بیشتر</button>
            </div>

        </div>
    )
}

export default Article
