"use client"
import React, { useState } from 'react'
import BlogInBlogs from './BlogInBlogs'

type TBlog = {
    id: number,
    title: string,
    tags: Array<string>,
    image: string
}

const Blogs = () => {
    const [indexPage, setIndexPage] = useState(8)
    const [index, setIndex] = useState(4)
    const blogs: TBlog[] = [
        { id: 1, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image1.png" },
        { id: 2, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image2.png" },
        { id: 3, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image3.png" },
        { id: 4, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image1.png" },
        { id: 5, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image2.png" },
        { id: 6, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image3.png" },
        { id: 7, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image1.png" },
        { id: 8, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image2.png" },
    ]

    const increase = () => {
        console.log(indexPage)
        setIndexPage(indexPage + 8)
    }
    const descrease = () => {
        console.log(indexPage)
        if (indexPage > 8) setIndexPage(indexPage - 8)

    }

    return (
        <div className='flex flex-col items-start w-full '>
            <h2 className='text-2xl font-bold text-[#100e0c] my-4'>تازه ترین مقاله </h2>
            <div className='w-full'>
                <div className='flex flex-col sm:grid grid-cols-4 gap-4 w-full'>
                    {
                        blogs.map((item, i) => (
                            i < index ?
                                <BlogInBlogs alt={item.title} id={item.id} src={item.image} tags={item.tags} title={item.title} key={item.id} />
                                : ""
                        ))
                    }
                </div>
                <div className='flex items-center justify-center w-full'>
                    <button onClick={() => setIndex(index + 4)} className='sm:hidden w-[179px] h-11 rounded-[43px] bg-[#ff6687] font-semibold text-[16px] text-white'>مشاهده بیشتر</button>
                    <div className='hidden sm:flex flex-row-reverse justify-center space-x-2 w-full my-4'>
                        <button onClick={descrease} className='w-10 h-10 rounded-[40px] opacity-30 border border-[#100e0c] flex items-center justify-center'>
                            <img className='w-4 h-4' src="/assets/icons/arrow-left.png" alt="" />
                        </button>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                                <button onClick={() => setIndexPage(item * 8)} className='w-10 h-10 rounded-[40px] opacity-30 border border-[#100e0c] flex items-center justify-center'>
                                    <span className='w-4 h-4'>{item}</span>
                                </button>
                            ))
                        }
                        <button onClick={increase} className='w-10 h-10 rounded-[40px] opacity-30 border border-[#100e0c] flex items-center justify-center'>
                            <img className='w-4 h-4 rotate-180' src="/assets/icons/arrow-left.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
