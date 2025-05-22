
import AboutProduct from '@/components/product/AboutProduct'
import Comments from '@/components/product/Comments'
import Navar from '@/components/product/Navar'
import PInformation from '@/components/product/PInformation'
import RelatedProduct from '@/components/product/RelatedProduct'
import { TPParams, TProduct } from '@/types/Type'


import React from 'react'

const page = async ({ params }: TPParams) => {

  const { product } = await params
  const id: number = parseInt(product) % 11
  const result = await fetch(`http://localhost:8000/product?id=${id}`)
  const data = (await result.json())[0] as TProduct
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex flex-col items-center w-full h-auto'>
        <PInformation images={data?.image} product={{colors:data?.colors , count:data?.count , features:data?.features , id:data?.id ,tag:data?.tag , title:data?.title}} />
        <Navar />
        <AboutProduct />
        <RelatedProduct mostpopular={data.relatedproducts}/>
        <Comments />
      </div>
    </div>
  )
}

export default page
