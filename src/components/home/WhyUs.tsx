import { TWhyus } from '@/types/Type'
import React from 'react'



const WhyUs = ({ children }: { children: React.ReactNode | null }) => {

    const contact: TWhyus[] = [
        { id: 1, title: "پرداخت امن با درگاه امن", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله است", icon: "/assets/icons/wallet-check.png" },
        { id: 2, title: "رضایت بیش از ۱ میلیون مشتری", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله است", icon: "/assets/icons/grammerly.png" },
        { id: 3, title: "پشتیبانی ۲۴ ساعته", description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله است", icon: "/assets/icons/24-support.png" },
    ]

    return (
        <div className='flex flex-col items-center justify-center my-40 w-full'>
            <div className='flex flex-col items-center w-[70%]'>
                <div className='flex flex-col sm:flex-row items-center sm:items-end w-full mb-4'>
                    <img className='w-12 h-12' src="/assets/icons/grape2.png" alt="" />
                    <p className='text-[18px] sm:text-[24px] font-semibold text-black'>چرا <span className='text-[#ff6687]'>موچیچی</span> بهترین انتخاب شماست؟</p>
                </div>
                <div className='flex flex-col sm:flex-row items-center justify-around space-y-10 sm:space-y-0 sm:space-x-10 py-4 w-full'>
                    {
                        contact.map((items) => (
                            <Answer key={items.id} icon={items.icon} title={items.title} description={items.description} id={items.id} />
                        ))
                    }
                </div>
            </div>
            <div className='flex items-center justify-center w-[70%]'>
                {children && <div>{children}</div>}
            </div>
            <div className='bg-[#ff6687] w-full sm:w-[80%] sm:rounded-[71px] h-auto text-white flex flex-col sm:flex-row sm:justify-between sm:px-7 items-center space-y-2 py-6 mt-4'>
                <p className='font-semibold text-[16px]'>اینستاگرام مارو دنبال کن حتما ...</p>
                <div className='flex space-x-2'>
                    <span className='text-[20px] font-semibold'>Moochichi_shop</span>
                    <img src="/assets/icons/instagram.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default WhyUs

export const Answer = ({ id, icon, title, description }: { id: number, icon: string, title: string, description: string }) => {
    return (
        <div className='flex flex-col items-start space-y-2 sm:w-[90%]'>
            <img className='w-[35px] aspect-square' src={icon} alt={title} />
            <span className='font-semibold text-[16px] text-[#121111]'>{title}</span>
            <p className='text-[13px] text-[#605b5b] leading-[22px]'>{description}</p>
        </div>
    )
}