"use client";

import Filter from '@/components/Products/Filter'
import Products from '@/components/Products/Products'
import Sort from '@/components/Products/Sort'
import { TCategoris, TCParams } from '@/types/Type'
import React, { useEffect, useState } from 'react'

export default function Page({ params }: TCParams) {
  const { category } = params;

  const [data, setData] = useState<TCategoris | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/categoris")
      .then(res => res.json())
      .then(setData);
  }, []);

  const filter = (list: string) => {
    console.log("From child:", list);
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='grid grid-cols-4 sm:grid-cols-12 space-y-8 '>
        <Filter sendData={filter} className="col-span-3 sm:col-span-3 sm:row-span-10 " />
        <Sort number={data[category].length} className="col-span-1 sm:col-span-9 sm:mr-16" />
        <Products products={data[category]} category={category} className="col-span-4 sm:col-span-9" />
      </div>
    </div>
  );
}


// import Filter from '@/components/Products/Filter'
// import Products from '@/components/Products/Products'
// import Sort from '@/components/Products/Sort'
// import { TCategoris, TCParams } from '@/types/Type'
// import React from 'react'

// export default async function page({params}:TCParams) {
//     const {category} = await params
//     const result = await fetch("http://localhost:8000/categoris")
//     const data = await result.json() as TCategoris
//     const filter = (list:string)=>{
//         console.log(list)
//     }  
//     return (
//         <div className='flex flex-col items-center justify-center w-full'>
//             <div className='grid grid-cols-4 sm:grid-cols-12 space-y-8 '>
//                 <Filter sendData={filter} className="col-span-3 sm:col-span-3 sm:row-span-10 "/>
//                 <Sort number={data[category].length} className="col-span-1 sm:col-span-9 sm:mr-16"/>
//                 <Products products={data[category]} category={category} className="col-span-4 sm:col-span-9"/>
//             </div>
//         </div>
//     )
// }
