import Routess from '@/components/Products/Routess';
import React from 'react'

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='flex items-center justify-center'>
            <div className='w-[90%] flex flex-col items-center justify-center'>
                <Routess />
                {children}

            </div>
        </div>
    )
}

export default layout
