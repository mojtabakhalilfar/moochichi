

import React from 'react'
import AP_Mobile from './AP_Mobile'

const AboutProduct = () => {

    const fullText = `چراغ خواب گربه سیلیکونی یک وسیله دکوراتیو و کاربردی است که از جنس سیلیکون نرم ساخته شده و به شکل گربه طراحی شده است. این چراغ با نور ملایم و قابل تنظیم، فضایی آرام برای خواب ایجاد می‌کند. معمولاً از طریق پورت USB شارژ می‌شود و به دلیل طراحی نرم و ایمن، مناسب برای کودکان است. شکل بامزه این چراغ آن را به گزینه‌ای جذاب برای تزئین اتاق تبدیل می‌کند.چراغ خواب گربه سیلیکونی یک وسیله دکوراتیو و کاربردی است که از جنس سیلیکون نرم ساخته شده و به شکل گربه طراحی شده است. این چراغ با نور ملایم و قابل تنظیم، فضایی آرام برای خواب ایجاد می‌کند. معمولاً از طریق پورت USB شارژ می‌شود و به دلیل طراحی نرم و ایمن، مناسب برای کودکان است. شکل بامزه این چراغ آن را به گزینه‌ای جذاب برای تزئین اتاق تبدیل می‌کند.`
    const shortText = fullText.substring(0, 300)
    console.log(fullText.length)
    return (
        <div className='flex flex-col items-center my-16 w-[90%] sm:w-[80%]'>
            <div className='relative p-5 px-10'>
                <img className='w-9 aspect-square absolute top-0 right-0' src="/assets/icons/eye.png" alt="" />
                <span className='text-[#2d2728] font-semibold text-[18px] sm:text-[24px]'>درباره محصول</span>
                <img className='w-9 aspect-square absolute top-0 left-0 rotate-90' src="/assets/icons/eye.png" alt="" />
            </div>
            <AP_Mobile fullText={fullText} shortText={shortText} />
            <p className="text-base text-center hidden sm:flex leading-8 ">{fullText}</p>
        </div>
    )
}

export default AboutProduct
