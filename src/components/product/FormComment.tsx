'use client'
import React, { useState } from 'react'

type Props = {
  onSubmitComment: (name: string, phone: string, text: string) => void
}

const FormComment: React.FC<Props> = ({ onSubmitComment }) => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [text, setText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim() || !text.trim()) {
      alert("لطفاً تمام فیلدها را پر کنید.")
      return
    }

    onSubmitComment(name, phone, text)

    setName("")
    setPhone("")
    setText("")
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center sm:items-start w-full space-y-2'>
      <div className='flex flex-col sm:grid grid-cols-2 gap-4 w-full h-auto'>
        <div className='relative'>
          <input
            className='w-full rounded-[56px] bg-[#fffafb] border border-[#fff0f7] py-4 px-6 outline-none'
            placeholder='نام و نام خانوادگی'
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <img className='absolute left-4 top-[30%] w-5 h-5' src="/assets/icons/user.png" alt="" />
        </div>
        <div className='relative'>
          <input
            className='w-full rounded-[56px] bg-[#fffafb] border border-[#fff0f7] py-4 px-6 outline-none'
            placeholder='شماره تماس'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
          />
          <img className='absolute left-4 top-[30%] w-5 h-5' src="/assets/icons/mobile.png" alt="" />
        </div>
        <div className='sm:col-span-2 aspect-[6/1]'>
          <textarea
            className='w-full h-full rounded-[16px] bg-[#fffafb] border border-[#fff0f7] py-4 px-6 outline-none'
            placeholder='متن دیدگاه خود را وارد کنید'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <input
        className='font-medium text-[14px] text-white leading-[180%] w-[342px] h-11 px-6 py-3 rounded-[48px] bg-[#ff6687]'
        type="submit"
        value="ثبت دیدگاه"
      />
    </form>
  )
}

export default FormComment
