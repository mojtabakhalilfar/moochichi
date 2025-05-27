"use client"
import React, { useEffect, useState } from 'react'

import ProductHome from './ProductHome'
import { TMostPopular } from '@/types/Type'
import Time from './Time'
import axios from 'axios'

const Discount = () => {
    const [data, setData] = useState<Array<TMostPopular>>()
    const [showProduct, setShowProduct] = useState(1)

    useEffect(() => {
        axios.get("http://localhost:8000/discount").then((res) => {
            setData(res.data)
        })
    },[])
    const discount: TMostPopular[] = [
        { id: 1, title: "چراغ خواب خوک", image: "/assets/most popular/image5.png", firstPrice: 1200000, finalPrice: 976000, },
        { id: 2, title: "چراغ خواب خوک", image: "/assets/most popular/image6.png", firstPrice: 1200000, finalPrice: 976000, },
        { id: 3, title: "چراغ خواب خوک", image: "/assets/most popular/image7.png", firstPrice: 1200000, finalPrice: 976000, },
        { id: 4, title: "چراغ خواب خوک", image: "/assets/most popular/image8.png", firstPrice: 1200000, finalPrice: 976000, },
        { id: 5, title: "چراغ خواب خوک", image: "/assets/most popular/image9.png", firstPrice: 1200000, finalPrice: 976000, },

    ]
    console.log(data)
    const preve = () => {
        if (showProduct == 1) setShowProduct(discount.length)
        else setShowProduct(showProduct - 1)
    }
    const next = () => {
        if (showProduct == discount.length) setShowProduct(1)
        else setShowProduct(showProduct + 1)

    }
    return (
        <div className='flex flex-col items-center justify-center mt-24 sm:mt-60 relative'>
            <h3 className=' font-semibold text-[18px] sm:text-[24px] sm:relative top-10 mb-5 sm:pb-0'>جشنواره پرتخفیف موچیچی</h3>
            <div className='bg-[url(/assets/backgrounds/Vector61.png)] sm:bg-[url(/assets/backgrounds/Vector6.png)] bg-center bg-contain bg-no-repeat h-[542px] sm:h-auto w-[95%] flex flex-col items-center justify-around pb-24 space-y-4 relative'>
                <img className='absolute top-[-10%] sm:top-[0%] left-[5%]' src="/assets/icons/grape2.png" alt="" />
                <div className='flex items-center justify-around w-[60%] sm:w-[20%] text-white sm:mt-32'>
                    <Time />
                </div>
                <div className='flex items-center justify-around w-[70%] sm:w-[90%] text-white space-x-4'>
                    <button className='sm:hidden' onClick={next}>n</button>
                    {data &&
                        data.map((items) => (
                            <div key={items.id} className={`${items.id == showProduct ? "flex" : "hidden sm:flex"}`}>
                                <ProductHome
                                    id={items.id}
                                    // finalPrice={items.finalPrice}
                                    finalPrice={items.finalPrice}
                                    firstPrice={items.firstPrice}
                                    image={items.image}
                                    title={items.title}
                                />
                            </div>
                        ))
                    }
                    <button className='sm:hidden' onClick={preve}>p</button>
                </div>
            </div>
        </div>
    )
}

export default Discount

