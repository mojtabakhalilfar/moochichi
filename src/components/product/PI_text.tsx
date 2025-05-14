import { count } from 'console'
import React from 'react'
import PI_SelectedColor from './PI_SelectedColor'
import { PI_AddToCart } from './PI_AddToCart'

const PI_text = () => {

    const product = {
        title: 'چراغ خواب گربه سیلیکونی',
        tag: "چراغ خواب",
        id: 1245987,
        features: [
            "جنس : پلاستیکی",
            "کیفیت کالا : اورجینال - درجه یک",
            "ابعاد : ۱۵x۱۵x۱۵ سانتی‌متر"
        ],
        colors: [
            { id: 1, title: "آبی", code: "bg-[#6691FF]" },
            { id: 2, title: "نارنجی", code: "bg-[#F29665]" },
            { id: 3, title: "سبز", code: "bg-[#BAE399]" },
        ],
        count: 0
    }

    return (
        <div className='relative'>
            <div className='flex flex-col'>
                <span className='font-bold text-[18px] text-[#100E0C] leading-8 text-right'>{product.title}</span>
                <p className='font-medium text-[12px] text-[#929292] leading-[180%]'>شناسه کالا : <span className='text-[#14151b]'>{product.id}</span></p>
                <p className='font-medium text-[12px] text-[#929292] leading-[180%]'>برچسب : <span className='text-[#EC6880]'>{product.tag}</span></p>
                <div className='flex flex-col'>
                    <span className='font-medium text-[16px] text-[#14151b] leading-[180%]'>ویژگی های محصول</span>
                    {
                        product.features.map((item) => (
                            <span className='font-medium text-[12px] text-[#606060] leading-[180%]'>{item}</span>
                        ))
                    }
                </div>
            </div>
            <div>
                <PI_SelectedColor colors={product.colors} key={product.id}/>
            </div>
            <div>
                <PI_AddToCart/>
            </div>
            <div className='absolute left-0 top-0 flex flex-col items-end'>
                <span className='flex'>امتیاز : {4.5} <img src="/assets/product/star.png" alt="" /></span>
                <span className='flex'>ضمانت اصالت و کیفیت کالا <img src="/assets/product/shield-tick.png" alt="" /></span>
            </div>
        </div>
    )
}

export default PI_text
