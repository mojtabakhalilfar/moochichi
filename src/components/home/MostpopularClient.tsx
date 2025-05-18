"use client"

import { TCategory } from "@/types/Type"
import { useState } from "react"

const MostpopularClient = ({ menu }: { menu: TCategory[] }) => {
  const [clicked, setClicked] = useState<number>(1)

  return (
    <div className="rounded-[49px] bg-[#fff0f7] w-[90%] sm:w-full px-2 py-1 overflow-x-auto scrollbar-hide flex items-center space-x-2 ">
      {menu.map((item) => (
        <button
          key={item.id}
          onClick={() => setClicked(item.id)}
          className={`whitespace-nowrap px-4 py-2 text-[14px] rounded-[43px] transition-all duration-200 ${
            clicked === item.id ? "bg-[#ff6687] text-white" : "bg-transparent text-[#a89c9f]"
          }`}
        >
          {item.title}
        </button>
      ))}
    </div>
  )
}

export default MostpopularClient
