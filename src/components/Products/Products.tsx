import React from 'react'

import ProductHome from '../home/ProductHome'
import { TMostPopular } from '@/types/Type'

const Products = async ({ className, products ,category }: { className: React.ReactNode, products: TMostPopular[],category:string }) => {

  return (
    <div className={` flex items-center justify-center ${className}`}>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
        {
          products &&
          products.map((item, index) => (
            <ProductHome {...item} category={category} key={item.id}  />
          ))
        }
      </div>
    </div>
  )
}

export default Products
