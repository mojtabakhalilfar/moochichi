'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Comment from './Comment'
import FormComment from './FormComment'
import { CommentType } from '@/types/Type'

type Props = {
  productId: number
}

const ListComment: React.FC<Props> = ({ productId }) => {
  const [comments, setComments] = useState<CommentType[]>([])

  useEffect(() => {
    axios.get(`http://localhost:8000/commentsP`)
      .then(res => {
        const productComments = res.data[String(productId)] || []
        setComments(productComments)
      })
      .catch(err => console.error('Error loading comments:', err))
  }, [productId])

  const handleReply = (text: string, parentId: number) => {
    const newComment: CommentType = {
      id: Date.now(),
      parentId,
      text,
      createdAt: new Date().toISOString(),
      writer: "کاربر مهمان",
      image: "/assets/icons/user2.png",
      like: 0,
      dislike: 0
    }
    setComments(prev => [...prev, newComment])
  }

  const handleAddComment = (name: string, phone: string, text: string) => {
    const newComment: CommentType = {
      id: Date.now(),
      parentId: null,
      text,
      createdAt: new Date().toISOString(),
      writer: name,
      phone,
      image: "/assets/icons/user2.png",
      like: 0,
      dislike: 0
    }
    setComments(prev => [...prev, newComment])
  }

  const renderComments = (parentId: number | null): React.ReactNode =>
    comments
      .filter(c => c.parentId === parentId)
      .map(c => (
        <div key={c.id} className={`w-full ${c.parentId ? 'ml-6 border-r pr-4' : ''}`}>
          <Comment comment={c} onReply={handleReply} />
          {renderComments(c.id)}
        </div>
      ))

  return (
    <div className='flex flex-col items-start w-full gap-6'>
      <h2 className='flex items-center gap-2 text-[16px] font-semibold'>
        <img src="/assets/icons/message-text.png" className='w-5 h-5' />
        دیدگاه‌های کاربران
      </h2>

      <FormComment onSubmitComment={handleAddComment} />

      {renderComments(null)}
    </div>
  )
}

export default ListComment
