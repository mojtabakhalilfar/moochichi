"use client"
import ProductInCart from '@/components/cart/ProductInCart'
import { useShopingCartContext } from '@/context/CartContesxt'
import React from 'react'

const page = () => {
  const { cartItems } = useShopingCartContext()
  return (
    <div className='min-h-[60vh] max-h-max flex items-center justify-center'>
      <div className='grid grid-cols-2 sm:grid-cols-5 w-[90%]'>
        {
          cartItems?.map((item) => (
            <ProductInCart id={item.id} color={item.color} count={item.count} key={item.id} />
          ))
        }
      </div>
      <div>

      </div>
    </div>
  )
}

export default page
