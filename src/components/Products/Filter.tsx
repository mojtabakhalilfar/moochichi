"use client";

import React, { useEffect, useState } from 'react';
import DualRangeSlider from './DualRangeSlider';
import Isexist from './Isexist';
import Category from './Category';
import Color from './Color';

type FilterProps = {
  className: string;
  sendData: (data: FState) => void;
};

export type FState = {
  minPrice: number,
  maxPrice: number,
  isExit: boolean,
  category: string,
  color: string,


}
const Filter = ({ className, sendData }: FilterProps) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    minPrice: 0,
    maxPrice: 10000000000,
    isExit: true,
    category: "",
    color: ""
  })
  const handleState = (key: string, value: any) => {
    setData(prev => ({ ...prev, [key]: value }));
  };
  useEffect(() => {
    sendData(data)
  }, [data])
  return (
    <div dir='rtl' className={`${className} h-auto relative`}>
      <div className='flex sm:justify-between px-8'>
        <button onClick={() => setShow(!show)} className='flex'>
          <img className='flex sm:hidden h-4 w-4' src="/assets/icons/filter05.png" alt="" />
          <img className='hidden sm:flex h-5 w-5' src="/assets/icons/filter.png" alt="" />
          <span className='text-nowrap'>فیلتر ها</span>
        </button>
        <button className='hidden sm:flex text-[#FF6687] text-[14px]'>
          <span>حذف فیلتر </span>
          <img className='rotate-90 h-6 w-6' src="/assets/icons/add.png" alt="" />
        </button>
      </div>
      <div className={`w-full sm:flex flex-col items-start space-y-2 py-4 ${show ? "flex" : "hidden"} absolute sm:static top-8 bg-white z-20 border border-gray-200`}>
        <div className='flex flex-col w-[85%] h-auto bg-[#fafafa] rounded-[12px] p-4'>
          <DualRangeSlider handleMin={handleState} handleMax={handleState} />
        </div>
        <div className='flex flex-col w-[85%] bg-[#fafafa] rounded-[12px] p-4'>
          <Isexist handleIseExist={handleState} />
        </div>
        <div className='flex flex-col w-[85%] bg-[#fafafa] rounded-[12px] p-4'>
          <Category handleCategory={handleState} />
        </div>
        <div className='flex flex-col w-[85%] bg-[#fafafa] rounded-[12px] p-4'>
          <Color handleColor={handleState} />
        </div>
      </div>
    </div>
  );
};

export default Filter;

