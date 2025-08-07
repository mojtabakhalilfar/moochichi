import { TBlog} from '@/types/Type'
import React from 'react'

const Blog = async ({ id }: { id: string }) => {


    const result = await fetch(`http://localhost:8000/blog/${id}`)
    const data = await result.json() as TBlog
    return (
        <div className='flex flex-col items-center justify-evenly w-full h-auto space-y-8'>
            <img className='w-[310px] h-[190px] rounded-[22px] sm:w-full sm:h-auto sm:aspect-[13/6] object-cover' src="/assets/blog/image1.png" alt="" />
            <div className='w-full'>
                <h1 className='font-bold text-[16px] sm:text-[24px] leading-[36px] text-[#2a2e2c] w-[60%]'></h1>
                <div className='flex items-start text-[14px] sm:text-[14px] leading-[180%] text-[#a89c9f] space-x-2'>
                    <div>دسته بندی:
                        {
                            data?.tags.map((item) => (
                                <span>{item}</span>
                            ))
                        }
                    </div>
                    <div className=' flex items-center justify-start'>
                        <img src={data?.image} alt={data?.title} />
                        <span>{data?.date}</span>
                    </div>
                </div>
            </div>
            <p className='font-light text-[14px] sm:text-[16px] leading-9 text-[#2a2e2c]'>{data?.introduction}</p>

            {
                data.paragraph.map((item) => (
                    <div>
                        <h2 className='font-semibold text-[14px] sm:text-[20px] leading-9 text-[#ff6687]'>{item?.title}</h2>
                        <p className='font-light text-[14px] sm:text-[16px] leading-9 text-[#2a2e2c]'>{item?.text}</p>
                    </div>
                ))
            }

            <div className='w-full flex justify-end'>
                <div className='bg-[#fff0f7] rounded-[50px] flex items-center justify-evenly p-2 space-x-2'>
                    <button className='space-x-8 w-[115px] h-[34px] rounded-[47px] bg-[#ff6687] flex items-center justify-center'>
                        <img className='w-5 h-5' src="/assets/icons/share.png" alt="" />
                        <span className='text-[14px] font-medium text-white'>اشتراک</span>
                    </button>
                    <a href='#'>
                        <img className='w-5 h-5' src="/assets/icons/instagram.png" alt="" />
                    </a>
                    <a href='#'>
                        <img className='w-5 h-5' src="/assets/icons/x.png" alt="" />
                    </a>
                    <a href='#'>
                        <img className='w-5 h-5' src="/assets/icons/facebook.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Blog

