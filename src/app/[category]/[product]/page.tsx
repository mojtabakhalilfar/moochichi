
import AboutProduct from '@/components/product/AboutProduct'
import Comments from '@/components/product/Comments'
import Navar from '@/components/product/Navar'
import PInformation from '@/components/product/PInformation'
import RelatedProduct from '@/components/product/RelatedProduct'
import Page from '@/components/Products/Tesst'
import ProductDescription from '@/components/Products/Tesst'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex flex-col items-center w-full h-auto'>
        <PInformation/>
        <Navar />
        <AboutProduct/>
        <RelatedProduct/>
        <Comments/>
        {/* <ProductDescription /> */}
        <Page />
      </div>
    </div>
  )
}

export default page
