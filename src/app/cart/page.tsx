"use client"
import { useShopingCartContext } from '@/context/CartContesxt'
import React from 'react'

const page = () => {
    const {cartItems}  = useShopingCartContext()
    console.log(cartItems)
  return (
    <div className='min-h-[60vh] max-h-max'>
        
    </div>
  )
}

export default page
