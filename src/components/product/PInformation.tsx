import React from 'react'
import PI_Image from './PI_Image'
import PI_text from './PI_text'

const PInformation = () => {
    return (
        <div className='flex flex-col sm:flex-row w-full'>
            <div className='flex flex-col sm:grid sm:grid-cols-2 w-full py-6'>
                <PI_Image/>
                <PI_text/>
            </div>
        </div>
    )
}

export default PInformation


