"use client"

import { TProduct } from '@/types/Type'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  const [text, setText] = useState("")
  const [results, setResults] = useState<TProduct[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      if (text.length > 2) {
        try {
          // const response = await fetch(`http://localhost:8000/product?title_like=${text}&_limit=5`)
          const response = await fetch(`https://mochichi-json-api.onrender.com/product?title_like=${text}&_limit=5`)
          const data = await response.json()
          setResults(data)
        } catch (error) {
          console.error("خطا در دریافت محصولات:", error)
        }
      } else {
        setResults([])
      }
    }

    fetchProducts()
  }, [text])

  return (
    <div className='w-[342px] sm:w-[500px] h-32 sm:h-12 sm:mx-4 relative'>
      <input
      value={text}
        onChange={(e) => setText(e.target.value)}
        className='w-full h-full rounded-[64px] bg-[#f6f6f6] text-[#a89c9f] border-none outline-none px-6'
        placeholder='جستجو در فروشگاه ...'
        type="text"
      />
      <button className='absolute left-4 top-4 sm:top-3'>
        <FiSearch className='w-5 h-5 opacity-40'/>
      </button>

{results.length > 0 && (
  <div className='absolute top-full mt-2 bg-white rounded-xl shadow-xl w-full max-h-80 overflow-y-auto z-50 border border-gray-200'>
    {results.map((item) => (
      <Link href={`/pproduct/${item.id}`} onClick={()=>setText("")}
        key={item.id}
        className='flex items-center gap-4 p-3 hover:bg-gray-100 transition-all duration-150 cursor-pointer border-b last:border-none'
      >
        <img
          src={item.image?.[0]?.image || "/assets/icons/image-placeholder.png"}
          alt={item.title}
          className='w-12 h-12 rounded-md object-cover'
        />
        <div className='flex flex-col'>
          <span className='text-sm font-medium text-gray-800'>{item.title}</span>
          {item && (
            <span className='text-xs text-pink-500'>{1000000} ت</span>
          )}
        </div>
      </Link>
    ))}
  </div>
)}

    </div>
  )
}

export default Search
