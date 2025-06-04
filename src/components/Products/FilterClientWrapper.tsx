// components/Products/FilterClientWrapper.tsx
"use client"

import Filter, { FState } from './Filter'
import Sort from './Sort'
import Products from './Products'
import { TCategoris } from '@/types/Type'
import { useState } from 'react'

export default function FilterClientWrapper({ data, category }: { data: TCategoris, category: string }) {
  const [filteredData, setFilteredData] = useState(data[category])

const handleFilter = (filterState: FState) => {
  console.log(filterState)
  console.log(data[category][0])
//   const newFilteredData = data[category].filter(product => {
//     return (
//       (product.finalPrice || 100000) >= filterState.minPrice &&
//       (product.finalPrice || 0) <= filterState.maxPrice &&
//       (filterState.category === "" || product.category === filterState.category) &&
//       (filterState.color === "" || product.color === filterState.color) &&
//       (filterState.isExit ? product.isExit === true : true)
//     );
//   }

// );

//   setFilteredData(newFilteredData);
};


  return (
    <>
      <Filter sendData={handleFilter} className="col-span-3 sm:col-span-3 sm:row-span-10" />
      <Sort number={filteredData.length} className="col-span-1 sm:col-span-9 sm:mr-16" />
      <Products products={filteredData} category={category} className="col-span-4 sm:col-span-9" />
    </>
  )
}
