import WhyUs from '@/components/home/WhyUs'
import {TBestchoice} from '../../types/Type'
import React from 'react'

export default function page() {
    const data: TBestchoice[] = [
        { id: 1, title: "ماموریت ما", icon: "/assets/aboutUs/Vector1.png", description: "هدف موچی‌چی ایجاد دنیایی شاد و رنگارنگ است. این فروشگاه با ارائه محصولات فانتزی و خاص، سعی در زیباسازی زندگی روزمره مشتریان دارد. موچی‌چی به دنبال ایجاد تجربه‌ای متفاوت است که بتواند لحظاتی شاد و خلاقانه برای مشتریان خود به ارمغان بیاورد." },
        { id: 2, title: "چشم انداز ما", icon: "/assets/aboutUs/Vector2.png", description: "تبدیل شدن به برندی الهام‌بخش در ایران و منطقه که با محصولات فانتزی و منحصربه‌فرد خود، لحظات شادی و خلاقیت را به زندگی مشتریان وارد می‌کند و دنیایی رنگارنگ را در خانه و محل کار افراد ایجاد می‌کند" },
    ]
    return (
        <div className='flex flex-col items-center space-y-10 my-10'>
            <h1 className='text-center font-semibold text-[20px] sm:text-[32px] text-black w-[60%]'>
                <span className='text-[#ec6880]'>موچیچی</span>
                ، جایی برای رنگ و شادی در هر لحظه‌ی زندگی
            </h1>
            <div className='flex flex-col items-center sm:flex-row sm:justify-center space-y-4 sm:space-x-4'>
                <div className='hidden sm:flex items-center justify-center w-[195px] h-[190px] rounded-[24px] bg-[#fff0f7]'>
                    <img className='w-[133px] aspect-square' src="/assets/aboutUs/sticker.png" alt="" />
                </div>
                <div className='flex items-center justify-between sm:flex-col sm:justify-evenly w-full sm:w-auto h-[153px] sm:h-[413px]'>
                    <div className='rounded-3xl w-[127px] h-[127px] bg-[#FFF0F7] sm:w-[195px] flex items-center justify-center'>
                        <img className='w-[91px] aspect-square sm:w-[129px] sm:h-[134px]' src="/assets/aboutUs/backpack.png" alt="" />
                    </div>
                    <div className='w-[197px] h-[127px] sm:h-[197px] rounded-3xl bg-[#fff0f7] flex items-center justify-center'>
                        <img className='w-[115px] aspect-square sm:w-[159]' src="/assets/aboutUs/pen.png" alt="" />
                    </div>
                </div>
                <div className='w-[342px] h-[153px] rounded-3xl bg-[#ec6880] sm:w-[212px] sm:h-[413px] flex flex-col justify-end items-center'>
                    <img className='w-[116px] h-[149px] sm:w-[225px] sm:h-[288px]' src="/assets/aboutUs/golabi.png" alt="" />
                </div>
                <div className='flex items-center justify-between sm:flex-col sm:justify-evenly w-full sm:w-auto h-[153px] sm:h-[413px]'>
                    <div className='rounded-3xl w-[127px] h-[127px] bg-[#FFF0F7] sm:w-[195px] flex items-center justify-center'>
                        <img className='w-[91px] aspect-square sm:w-[88px]' src="/assets/aboutUs/joje.png" alt="" />
                    </div>
                    <div className='w-[197px] h-[127px] sm:h-[197px] rounded-3xl bg-[#fff0f7] flex items-center justify-center'>
                        <img className='w-[115px] aspect-square sm:w-[159]' src="/assets/aboutUs/mobile.png" alt="" />
                    </div>
                </div>
                <div className='hidden sm:flex items-center justify-center w-[195px] h-[190px] rounded-[24px] bg-[#fff0f7]'>
                    <img src="/assets/aboutUs/captain.png" alt="" />
                </div>
            </div>
            <WhyUs>
                <div className='flex flex-col justify-around space-y-10 py-4 w-full'>
                    {
                        data.map((items) => (
                            <div key={items.id} className='flex flex-col items-start space-y-2'>
                                <div className='space-y-2'>
                                    <img className='w-[35px] aspect-square' src={items.icon} alt={items.title} />
                                    <span className='font-semibold text-[16px] text-[#121111]'>{items.title}</span>
                                </div>
                                <p className='text-[14px] sm:text-[18px] text-[#605b5b] leading-8 sm:leading-10'>{items.description}</p>
                            </div>
                        ))
                    }
                </div>
            </WhyUs>
        </div>
    )
}
