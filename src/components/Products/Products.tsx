import React from 'react'

import ProductHome from '../home/ProductHome'
import { TCategoris, TMostPopular } from '@/types/Type'

const Products = async ({ className, category }: { className: React.ReactNode, category: string }) => {

  const result = await fetch("http://localhost:8000/categoris")
  const data = await result.json() as TCategoris
  const products = data[category]
  // console.log(data)
  //     const products : TMostPopular[]=[
  //     { id: 1, title: "چراغ خواب خوک", image: "/assets/most popular/image5.png", firstPrice: 1200000, finalPrice: 976000, },
  //     { id: 2, title: "چراغ خواب خوک", image: "/assets/most popular/image6.png", firstPrice: 1200000, finalPrice: 976000, },
  //     { id: 3, title: "چراغ خواب خوک", image: "/assets/most popular/image7.png", firstPrice: 1200000, finalPrice: 976000, },
  //     { id: 4, title: "چراغ خواب خوک", image: "/assets/most popular/image8.png", firstPrice: 1200000, finalPrice: 976000, },
  //     { id: 5, title: "چراغ خواب خوک", image: "/assets/most popular/image9.png", firstPrice: 1200000, finalPrice: 976000, },
  //     { id: 6, title: "چراغ خواب خوک", image: "/assets/most popular/image5.png", firstPrice: 1200000, finalPrice: 976000, },
  //     { id: 7, title: "چراغ خواب خوک", image: "/assets/most popular/image6.png", firstPrice: 1200000, finalPrice: 976000, },
  //     { id: 8, title: "چراغ خواب خوک", image: "/assets/most popular/image7.png", firstPrice: 1200000, finalPrice: 976000, },
  //     { id: 9, title: "چراغ خواب خوک", image: "/assets/most popular/image8.png", firstPrice: 1200000, finalPrice: 976000, },
  //     { id: 10, title: "چراغ خواب خوک", image: "/assets/most popular/image9.png", firstPrice: 1200000, finalPrice: 976000, },
  //     { id: 11, title: "چراغ خواب خوک", image: "/assets/most popular/image5.png", firstPrice: 1200000, finalPrice: 976000, },
  //     { id: 12, title: "چراغ خواب خوک", image: "/assets/most popular/image6.png", firstPrice: 1200000, finalPrice: 976000, },
  //     { id: 13, title: "چراغ خواب خوک", image: "/assets/most popular/image7.png", firstPrice: 1200000, finalPrice: 976000, },
  //     { id: 14, title: "چراغ خواب خوک", image: "/assets/most popular/image8.png", firstPrice: 1200000, finalPrice: 976000, },
  //     { id: 15, title: "چراغ خواب خوک", image: "/assets/most popular/image9.png", firstPrice: 1200000, finalPrice: 976000, },
  // ]
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
