"use client"
import { useShopingCartContext } from '@/context/CartContesxt'
import { TProduct, TProductCart } from '@/types/Type'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ProductInCart = ({ id, count, color }: TProductCart) => {
    const colors = [
        {
            id: 1,
            title: "آبی",
            code: "bg-[#6691FF]"
        },
        {
            id: 2,
            title: "نارنجی",
            code: "bg-[#F29665]"
        },
        {
            id: 3,
            title: "سبز",
            code: "bg-[#BAE399]"
        }
    ]
    const selectedColor = colors.find(item=>item.id==color) 
    const [data, setData] = useState<TProduct>()
    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get(`http://localhost:8000/product?id=${id}`)
            setData(res.data[0])
        }
        fetchProduct()
    }, [id])
    const { handleIncreaseProduct, handleDescreaseProduct, handleRemoveFromCart } = useShopingCartContext()
    return (
        <div className=''>
            <div className={`flex flex-col items-center bg-[#fff8fd] rounded-[11.31px] p-2 flex-shrink-0`}>
                <Link href={`/product/${id}`}>
                    <img className='w-[156px] h-[140px] sm:w-[220px] sm:h-[223px] rounded-[5.6px] sm:rounded-[8px] object-cover' src={data && data?.image[0]?.image} alt={data?.title} />
                </Link>
                <h3 className='text-[14px] text-[#2d2728] my-2'>{data?.title } {data?.id}</h3>
                <div className='flex justify-between w-full'>
                    <div className='text-[12px] text-black font-medium flex justify-between items-center w-3/5'>
                        <span >{data?.finalPrice?.toLocaleString() || 10000} ت</span>
                        <del className='text-[10px] text-[#a89c9f] my-1'>{data?.firstPrice?.toLocaleString() || 10000} ت</del>
                    </div>
                    <div className={``}>
                        <div className={`aspect-square h-3 sm:h-5 rounded-xl ${selectedColor?.code}`}></div>
                        <span>{selectedColor?.title}</span>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-2 w-full text-white'>
                    <button className='bg-green-600 w-full h-full rounded-2xl sm:rounded-3xl' onClick={() => handleIncreaseProduct(id, color)}>+</button>
                    <span className='text-center text-black'>{count}</span>
                    <button className='bg-red-600 rounded-2xl sm:rounded-3xl' onClick={() => handleDescreaseProduct(id, color)}>-</button>
                    <button className='bg-red-400 col-span-3 h-full  rounded-2xl sm:rounded-3xl py-1 sm:py-2' onClick={() => handleRemoveFromCart(id, color)}>delete</button>
                </div>
            </div>
        </div >
    )
}

export default ProductInCart
