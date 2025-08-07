import React from 'react'
import { TBlogs } from '../../types/Type'
import BlogInBlogs from '../blogs/BlogInBlogs'

const RelatedBlog = () => {
    const mostpopular: TBlogs[] = [
        { id: 1, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image1.png" },
        { id: 2, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image2.png" },
        { id: 3, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image3.png" },
        { id: 4, title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["آموزشی"], image: "/assets/blog/image1.png" },
    ]
    return (
        <div className='flex flex-col items-center w-full h-auto my-12'>
            <h2 className='font-semibold text-[18px] sm:text-[24px] text-[#2d2728] my-4'>مقالات مرتبط</h2>
            <div className='flex items-center flex-col sm:flex-row sm:justify-center overflow-x-auto w-full space-y-4 sm:space-x-4'>
                {
                    mostpopular.map((item, index) => (
                        <div key={item.id} className={`${index > 3 ? "hidden sm:flex" : "flex"} whitespace-nowrap`}>
                            <BlogInBlogs
                                alt={item.title}
                                id={item.id}
                                src={item.image}
                                tags={item.tags}
                                title={item.title}
                                key={item.id} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedBlog
