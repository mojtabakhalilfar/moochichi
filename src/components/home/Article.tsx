import Link from 'next/link'
import React from 'react'

type TArticle = {
    id: number,
    image: string,
    title: string,
    tags: Array<string>
}

const Article = () => {

    const article:TArticle[] = [
        { id: 1, image: "/assets/article/image1.png", title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["دسته بندی: آموزشی"] },
        { id: 2, image: "/assets/article/image2.png", title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["دسته بندی: آموزشی"] },
        { id: 3, image: "/assets/article/image3.png", title: "مزایای خرید اینترنتی لوازم تحریر", tags: ["دسته بندی: آموزشی"] },
    ]
    return (
        <div className='flex items-center justify-center'>
            <div className='flex flex-col items-center w-[90%] space-y-8'>
                <span className='font-semibold text-[18px] text-[#2d2728]'>مقالات آموزشی موچیچی</span>
                <div>
                    {
                        article.map((items)=>(
                            <Link href={`articles/article${items.id}`}>
                                <img src={items.image} alt={items.title} />
                                <span>{items.title}</span>
                                <div>
                                    <div>
                                        {items.tags.map((tag)=>(
                                            <span>{tag}</span>
                                        ))}
                                    </div>
                                    <img src="/assets/icons/arrow-left.png" alt="" />
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Article
