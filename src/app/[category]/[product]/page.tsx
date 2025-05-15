
import Navar from '@/components/product/Navar'
import PInformation from '@/components/product/PInformation'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex flex-col items-center w-full h-auto'>
        <PInformation/>
        <Navar />
      </div>
    </div>
  )
}

export default page
