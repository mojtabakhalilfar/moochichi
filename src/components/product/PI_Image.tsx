"use client"

import { TButtons } from '@/types/Type'
import React, { useState } from 'react'


const PI_Image = ({images}:{images:TButtons[]}) => {
  const [selected, setSelected] = useState(0)


  const buttons: TButtons[] = [
    { id: 1, image: '/assets/product/heart.png' },
    { id: 2, image: '/assets/product/slider-vertical.png' },
    { id: 3, image: '/assets/product/share.png' },
    { id: 4, image: '/assets/product/notification-bing.png' },
  ]

  // const images: TButtons[] = [
  //   { id: 0, image: '/assets/product/image5.png' },
  //   { id: 1, image: '/assets/product/image1.png' },
  //   { id: 2, image: '/assets/product/image2.png' },
  //   { id: 3, image: '/assets/product/image3.png' },
  //   { id: 4, image: '/assets/product/image4.png' },
  // ]

  const functionButton = (e: number) => {

    console.log(e)
  }

  return (
    <div className='flex flex-col sm:flex-row-reverse items-center justify-center w-full h-auto space-y-2 mb-4 sm:ml-4'>
      <div className='w-[342px] sm:w-[533px] aspect-square relative flex items-center justify-center'>
        <img className='w-full h-full rounded-[24px]' src={images[selected]?.image} alt="" />
        <div className='absolute top-[5%] right-3 flex flex-col items-center justify-center space-y-2'>
          {
            buttons.map((item) => (
              <button key={item.id} className='w-12 aspect-square rounded-[1220px] text-[#100e0c] bg-[#fafafa] z-10 flex items-center justify-center' onClick={() => functionButton(item.id)}>
                <img className='w-6 aspect-square' src={item.image} alt={`icon${item.id}`} />
              </button>
            ))
          }
        </div>
      </div>
      <div className=' h-full flex sm:flex-col items-center space-x-1 sm:space-x-0 sm:space-y-1 justify-evenly sm:px-4 sm:py-[10%]'>
        {/* <button>
          <img className='h-6 w-6 hidden sm:flex' src="/assets/icons/arrow-square-down.png" alt="" />
        </button> */}
        {images &&
          images.map((item, index) => (
            <img onClick={() => setSelected(item.id)} className={`w-[72px] sm:w-[88px] aspect-square rounded-[9px] ${index > 2 ? "hidden" : "flex"} ${index > 3 ? "sm:hidden" : "sm:flex"}`} src={item.image} alt={`image${item.id}`} key={item.id}/>
          ))
        }
        {/* <button className={`w-[72px] aspect-square rounded-[9px] bg-red-500 sm:hidden`}></button>
        <button>
          <img className='h-6 w-6 hidden sm:flex  rotate-180' src="/assets/icons/arrow-square-down.png" alt="" />
        </button> */}
      </div>
    </div>
  )
}

export default PI_Image