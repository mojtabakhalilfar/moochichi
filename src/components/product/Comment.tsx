'use client'
import React, { useState } from 'react'
import { CommentType } from '@/types/Type'

type Props = {
  comment: CommentType
  onReply: (text: string, parentId: number) => void
}

const Comment: React.FC<Props> = ({ comment, onReply }) => {
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [replyText, setReplyText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!replyText.trim()) return
    onReply(replyText, comment.id)
    setReplyText("")
    setShowReplyForm(false)
  }

  return (
    <div className='w-full rounded-xl px-6 py-4 border border-[#e7ebf0] bg-white shadow-sm mb-4'>
      <div className='flex items-center gap-3 mb-2'>
        <img className='w-10 h-10 rounded-full' src={comment.image || "/assets/icons/user2.png"} alt="" />
        <div className='flex flex-col'>
          <span className='font-semibold text-sm text-gray-800'>{comment.writer || "کاربر مهمان"}</span>
          <span className='text-xs text-gray-400'>{new Date(comment.createdAt).toLocaleDateString('fa-IR')}</span>
        </div>
      </div>
      <p className='text-sm text-gray-700 mb-3'>{comment.text}</p>

      <div className='flex flex-wrap items-center justify-between text-sm text-gray-500'>
        <div className='flex items-center gap-2'>
          <span>آیا این نظر مفید بود؟</span>
          <button className='flex items-center gap-1'><img className='w-4' src="/assets/icons/like.png" /> {comment.like ?? 0}</button>
          <button className='flex items-center gap-1'><img className='w-4' src="/assets/icons/dislike.png" /> {comment.dislike ?? 0}</button>
        </div>
        <button onClick={() => setShowReplyForm(!showReplyForm)} className='text-[#ff6687] font-medium'>
          پاسخ به این نظر
        </button>
      </div>

      {showReplyForm && (
        <form onSubmit={handleSubmit} className='mt-4 flex flex-col gap-2'>
          <textarea
            className='w-full h-24 rounded-md border border-[#e7ebf0] p-3 text-sm outline-none'
            placeholder='پاسخ خود را بنویسید...'
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <div className='flex gap-2'>
            <button type="submit" className='text-white bg-[#ff6687] px-4 py-2 rounded-full text-sm'>
              ارسال پاسخ
            </button>
            <button type="button" onClick={() => setShowReplyForm(false)} className='text-gray-500 text-sm'>
              انصراف
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default Comment
