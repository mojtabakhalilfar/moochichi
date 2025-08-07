"use client"
import ProductInCart from '@/components/cart/ProductInCart'
import { useShopingCartContext } from '@/context/CartContesxt'
import { TCodeOffer } from '@/types/Type'
import React, { useEffect, useState } from 'react'


const page = () => {
  const codes:TCodeOffer[] =[
    {code :"offer10" , amount:90},
    {code :"offer20" , amount:80},
    {code :"offer30" , amount:70},
    {code :"offer40" , amount:60},
  ]  

  const [price, setPrice] = useState(0)
  const [pricefinal, setPricefinal] = useState(0)
  const [code , setCode]= useState<string>()
  const { cartItems , handleClearCart } = useShopingCartContext()

  const calculater = (count: number, price: number) => {
    setPrice(current => {
      return (current + count * price)
    })
  }
  useEffect(()=>{
    setPricefinal(price)
  },[price])
  const offerfunc= ()=>{
    const amount= codes.find(item=>item.code==code)?.amount
    if(amount){

      setPricefinal( amount*price/100)
    }else{
      setPricefinal(price)
    }
  }
  return (
    <div className='min-h-[70vh] max-h-max flex flex-col items-center justify-center'>
      <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 w-[90%] border border-gray-300 rounded-2xl'>
        {
          cartItems?.map((item) => (
            <ProductInCart calc={calculater} id={item.id} color={item.color} count={item.count} key={item.id} />
          ))
        }
      </div>
      <div className='flex flex-col sm:grid grid-cols-4 gap-2 w-4/5 py-5'>
        <span className='text-center'>مبلغ کل : {price} تومان</span>
        <div className='h-12 col-span-2 space-x-2 flex items-center'>
          <input onChange={(e)=>setCode(e.target.value)} className='h-full w-full border border-gray-300 outline-none px-2' placeholder='کد تخفیف رو وارد کنید' type="text" />
          <button onClick={offerfunc} className='w-12 h-full border border-gray-300 bg-amber-300 '>اعمال</button>
        </div>
        <span className='text-center'>مبلغ نهایی : {pricefinal} تومان</span>
        <button className='py-3 px-6 bg-green-500 rounded-xl text-white'>پرداخت</button>
        <button onClick={handleClearCart} className='py-3 px-3 bg-red-500 rounded-xl text-white'>پاک کردن سبد خرید</button>
      </div>
    </div>
  )
}

export default page
