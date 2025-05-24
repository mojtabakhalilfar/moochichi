'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Comment from './Comment'
import FormComment from './FormComment'

type CommentType = {
  id: number
  parentId: number | null
  text: string
  createdAt: string
  writer?: string
  phone?: string
  image?: string
  like: number
  dislike: number
}

type Props = {
  productId: number
}

let nextId = 1000

const ListComment: React.FC<Props> = ({ productId }) => {
  const [comments, setComments] = useState<CommentType[]>([])

  const fetchComments = async () => {
    const res = await axios.get(`http://localhost:8000/commentsP`)
    const productComments = res.data[productId] || []
    setComments(productComments)
  }

  useEffect(() => {
    fetchComments()
  }, [productId])

  const saveCommentToServer = async (newComment: CommentType) => {
    const res = await axios.get(`http://localhost:8000/commentsP`)
    const allComments = res.data
    const productComments = allComments[productId] || []
    const updatedComments = [...productComments, newComment]

    await axios.put(`http://localhost:8000/commentsP`, {
      ...allComments,
      [productId]: updatedComments
    })
    setComments(updatedComments)
  }

  const handleAddComment = (name: string, phone: string, text: string) => {
    const newComment: CommentType = {
      id: nextId++,
      parentId: null,
      text,
      createdAt: new Date().toISOString(),
      writer: name,
      phone,
      image: "/assets/icons/user2.png",
      like: 0,
      dislike: 0,
    }
    saveCommentToServer(newComment)
  }

  const handleReply = (text: string, parentId: number) => {
    const reply: CommentType = {
      id: nextId++,
      parentId,
      text,
      createdAt: new Date().toISOString(),
      writer: "کاربر مهمان",
      image: "/assets/icons/user2.png",
      like: 0,
      dislike: 0,
    }
    saveCommentToServer(reply)
  }

  const renderComments = (parentId: number | null) => {
    return comments
      .filter(c => c.parentId === parentId)
      .map(c => (
        <div key={c.id} className={`w-full ${c.parentId ? 'ml-6 border-r pr-4' : ''}`}>
          <Comment comment={c} onReply={handleReply} />
          {renderComments(c.id)}
        </div>
      ))
  }

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
