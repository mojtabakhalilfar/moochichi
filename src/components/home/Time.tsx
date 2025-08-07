import React from 'react'
import { BoxTime } from './BoxTime'

const Time = () => {

    return (
        <div className='flex items-center space-x-2'>
            <BoxTime time= {60} title= "ثانیه" intervalMs={1000}/>
            <BoxTime time= {59} title= "دقیقه" intervalMs={60000}/>
            <BoxTime time= {11} title= "ساعت" intervalMs={3600000}/>
        </div>
    )
}

export default Time

