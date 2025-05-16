import Link from 'next/link'
import React from 'react'

const NewBolg = () => {
    return (
        <div className='flex flex-col items-start w-full '>
            <h2 className='text-2xl font-bold text-[#100e0c] my-4'>تازه ترین مقاله </h2>
            <div className='flex flex-col sm:flex-row items-center space-x-4 sm:space-y-4'>
                <img className='w-full h-[255px] rounded-[20px] sm:w-661 sm:h-[423px] sm:rounded-[32px]' src="/assets/blog/image%2022.png" alt="" />
                <div className='text-[#a89c9f] space-y-4'>
                    <span className='text-[14px] leading-[180%] text-right'> دسته بندی: <b>آموزشی</b></span>
                    <h2 className='font-bold text-[24px] text-[#2D2728] text-center sm:text-right'>مزایای خرید اینترنتی لوازم تحریر</h2>
                    <p className='text-[16px] leading-7 text-justify'>استایل در واقع تمامی آن چیزی است که فرد از خودش به نمایش می گذارد و شاید برایتان جالب باشد که تنها محدود به مدل مو و لباس نیست و همه جوانب فرد حتی نحوه صحبت کردن آن هم در بر می گیرد.  اما در دنیای مد و فشن ، شاید این تعریف کمی تغیر کرده باشد و بیشتر بر روی ظاهر و سبک لباس پوشیدن افراد زوم کرده باشد. استایل به آن چیزی گفته می‌شود که یک شخص بر اساس سلیقه و علایق شخصی خود، یک مدل مو و یا لباس را انتخاب  می کند و لوازم، اکسسوری و لباس‌های مختلف را باهم ست می‌کند که نشان دهنده ی شخصیت دورنی و طرز فکر اوست.</p>
                    <Link className='w-[179px] h-11 rounded-[43px] bg-[#ff6687] sm:w-[250px] text-[16px] font-semibold text-white flex items-center justify-center' href=''>خواندن مقاله</Link>
                </div>
            </div>
        </div>
    )
}

export default NewBolg
