"use client";

import React, { useState } from 'react';
import DualRangeSlider from './DualRangeSlider';
import Isexist from './Isexist';
import Category from './Category';
import Color from './Color';

type FilterProps = {
  className: string;
  sendData: (value: string) => void;
};

const Filter = ({ className, sendData }: FilterProps) => {
  const [show, setShow] = useState(false);

  return (
    <div dir='rtl' className={`${className} h-auto relative`}>
      <div className='flex sm:justify-between px-8'>
        <button onClick={() => setShow(!show)} className='flex'>
          <img className='flex sm:hidden h-4 w-4' src="/assets/icons/filter05.png" alt="" />
          <img className='hidden sm:flex h-5 w-5' src="/assets/icons/filter.png" alt="" />
          <span className='text-nowrap'>فیلتر ها</span>
        </button>
        <button onClick={() => sendData("ali")} className='hidden sm:flex text-[#FF6687] text-[14px]'>
          <span>حذف فیلتر </span>
          <img className='rotate-90 h-6 w-6' src="/assets/icons/add.png" alt="" />
        </button>
      </div>
      <div className={`w-full sm:flex flex-col items-start space-y-2 py-4 ${show ? "flex" : "hidden"} absolute sm:static top-8 bg-white z-20 border border-gray-200`}>
        <div className='flex flex-col w-[85%] h-auto bg-[#fafafa] rounded-[12px] p-4'>
          <DualRangeSlider />
        </div>
        <div className='flex flex-col w-[85%] bg-[#fafafa] rounded-[12px] p-4'>
          <Isexist />
        </div>
        <div className='flex flex-col w-[85%] bg-[#fafafa] rounded-[12px] p-4'>
          <Category />
        </div>
        <div className='flex flex-col w-[85%] bg-[#fafafa] rounded-[12px] p-4'>
          <Color />
        </div>
      </div>
    </div>
  );
};

export default Filter;



// "use client"

// import React, { useEffect, useState } from 'react'
// import DualRangeSlider from './DualRangeSlider';
// import Isexist from './Isexist';
// import Category from './Category';
// import Color from './Color';


// type TSendData = {
//     sendData : (value: string)=> void
// }
// const Filter = ({ className , sendData }: { className: React.ReactNode , sendData:TSendData}) => {
//     const [show , setShow]=useState(false)
//     // const sendData = ()=>{

//     // }
//     // useEffect(()=>{
//     //     ()=>sendData("ali")
//     // },[])
//     return (
//         <div dir='rtl' className={`${className} h-auto relative `}>
//             <div className='flex sm:justify-between px-8'>
//                 <button onClick={()=>setShow(!show)} className='flex'>
//                     <img className='flex sm:hidden h-4 w-4' src="/assets/icons/filter05.png" alt="" />
//                     <img className='hidden sm:flex h-5 w-5' src="/assets/icons/filter.png" alt="" />
//                     <span className='text-nowrap'>فیلتر ها</span>
//                 </button>
//                 <button onClick={()=>sendData("ali")} className='hidden sm:flex text-[#FF6687] text-[14px]'>
//                     <span>حذف فیلتر </span>
//                     <img className='rotate-90 h-6 w-6' src="/assets/icons/add.png" alt="" />
//                 </button>
//             </div>
//             <div className={`w-full sm:flex flex-col items-start space-y-2  py-4 ${show?"flex" : "hidden"} absolute sm:static top-8 bg-white z-20 border border-gray-200`}>
//                 <div className='flex flex-col w-[85%] h-auto bg-[#fafafa] rounded-[12px] p-4'>
//                     <DualRangeSlider />
//                 </div>
//                 <div className='flex flex-col w-[85%] bg-[#fafafa] rounded-[12px] p-4'>
//                     <Isexist/>
//                 </div>
//                 <div className='flex flex-col w-[85%] bg-[#fafafa] rounded-[12px] p-4'>
//                     <Category />
//                 </div>
//                 <div className='flex flex-col w-[85%] bg-[#fafafa] rounded-[12px] p-4'>
//                     <Color/>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Filter
