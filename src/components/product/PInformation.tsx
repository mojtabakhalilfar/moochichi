import React from 'react'
import PI_Image from './PI_Image'
import PI_text from './PI_text'
import { TButtons, TProductText } from '@/types/Type'

const PInformation = ({images ,product}:{images:TButtons[] , product:TProductText}) => {
    return (
        <div className='flex flex-col sm:flex-row w-full'>
            <div className='flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-8 w-full py-6'>
                <PI_Image images={images}/>
                <PI_text product={product}/>
            </div>
        </div>
    )
}

export default PInformation


