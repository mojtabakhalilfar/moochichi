import React from 'react'
import { TMostPopular } from '../home/Mostpopular'
import ProductHome from '../home/ProductHome'

const RelatedProduct = () => {
    const mostpopular: TMostPopular[] = [
        { id: 1, title: "چراغ خواب خوک", image: "/assets/most popular/image5.png", firstPrice: 1200000, finalPrice: 976000, },
        { id: 2, title: "چراغ خواب خوک", image: "/assets/most popular/image6.png", firstPrice: 1200000, finalPrice: 976000, },
        { id: 3, title: "چراغ خواب خوک", image: "/assets/most popular/image7.png", firstPrice: 1200000, finalPrice: 976000, },
        { id: 4, title: "چراغ خواب خوک", image: "/assets/most popular/image8.png", firstPrice: 1200000, finalPrice: 976000, },
        { id: 5, title: "چراغ خواب خوک", image: "/assets/most popular/image9.png", firstPrice: 1200000, finalPrice: 976000, },

    ]
    return (
        <div className='flex flex-col items-center w-full h-auto my-12'>
            <h2 className='font-semibold text-[18px] sm:text-[24px] text-[#2d2728] my-4'>محصولات مرتبط</h2>
            <div className='flex items-center overflow-x-auto w-full space-x-2'>
                {
                    mostpopular.map((items, index) => (
                        <div  key={items.id} className={`${index > 5 ? "hidden sm:flex" : "flex"} whitespace-nowrap flex-shrink-0`}>
                            <ProductHome title={items.title} id={items.id} finalPrice={items.finalPrice} firstPrice={items.firstPrice} image={items.image} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProduct
