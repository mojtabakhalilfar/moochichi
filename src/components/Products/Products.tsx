import React from 'react'

import ProductHome from '../home/ProductHome'
import { TCategoris, TMostPopular } from '@/types/Type'

const Products = async ({ className, category }: { className: React.ReactNode, category: string }) => {

  const result = await fetch("http://localhost:8000/categoris")
  const data = await result.json() as TCategoris
  const products = data[category]

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
