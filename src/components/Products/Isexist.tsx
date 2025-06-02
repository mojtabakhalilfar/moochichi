import React, { useEffect, useState } from 'react'

const Isexist = ({handleIseExist}:{handleIseExist:(key:string , valu:any)=>void}) => {
  const [on , setOn]=useState(true)
  useEffect(()=>{
    handleIseExist("issExit" , on)
  },[on])
  return (
    <div className='flex items-center justify-between w-full'>
      <span>نمایش کالاهای موجود</span>
      <button onClick={()=>setOn(!on)}>
        <img src="/assets/icons/Switch.png" alt="" />
      </button>
    </div>
  )
}

export default Isexist 