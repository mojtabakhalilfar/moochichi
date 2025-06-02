// components/Products/FilterClientWrapper.tsx
"use client"

import Filter from './Filter'
import Sort from './Sort'
import Products from './Products'
import { TCategoris } from '@/types/Type'
import { useState } from 'react'

export default function FilterClientWrapper({ data, category }: { data: TCategoris, category: string }) {
  const [filteredData, setFilteredData] = useState(data[category])

  const handleFilter = (value: string) => {
    console.log("From child:", value)
    // 🔻 مثلاً فیلتر بر اساس name یا color انجام بده
    const newData = data[category].filter(item => item.title.includes(value))
    setFilteredData(newData)
  }

  return (
    <>
      <Filter sendData={handleFilter} className="col-span-3 sm:col-span-3 sm:row-span-10" />
      <Sort number={filteredData.length} className="col-span-1 sm:col-span-9 sm:mr-16" />
      <Products products={filteredData} category={category} className="col-span-4 sm:col-span-9" />
    </>
  )
}
