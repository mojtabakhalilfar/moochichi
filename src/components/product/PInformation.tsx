import React from 'react'
import PI_Image from './PI_Image'

const PInformation = () => {
    return (
        <div className='flex flex-col sm:flex-row h-auto w-full '>
            <div className='flex flex-col sm:grid sm:grid-cols-2'>
                <PI_Image/>
            </div>
        </div>
    )
}

export default PInformation


