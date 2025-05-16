
import AboutProduct from '@/components/product/AboutProduct'
import Navar from '@/components/product/Navar'
import PInformation from '@/components/product/PInformation'
import ProductDescription from '@/components/Products/Tesst'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex flex-col items-center w-full h-auto'>
        <PInformation/>
        <Navar />
        <AboutProduct/>
        {/* <ProductDescription /> */}
      </div>
    </div>
  )
}

export default page
