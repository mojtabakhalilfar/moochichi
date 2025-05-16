// components/CommentList.tsx
"use client"
import React from "react"

type Comment = {
  id: number
  parentId: number | null
  text: string
  createdAt: Date
}

type Props = {
  comments: Comment[]
}

const CommentItem = ({ comment, replies }: { comment: Comment; replies: Comment[] }) => {
  return (
    <div className="mb-4 border rounded p-3 bg-white">
      <div className="text-sm text-gray-700">{comment.text}</div>
      <div className="text-xs text-gray-400 mt-1">{comment.createdAt.toLocaleString()}</div>

      {replies.length > 0 && (
        <div className="mt-2 pl-4 border-l border-gray-200 space-y-2">
          {replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              replies={[]} // فعلاً فقط یه لایه پاسخ
            />
          ))}
        </div>
      )}
    </div>
  )
}

const CommentList = ({ comments }: Props) => {
  const rootComments = comments
    .filter((c) => c.parentId === null)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()) // جدیدتر بالاتر

  const getReplies = (commentId: number) =>
    comments
      .filter((c) => c.parentId === commentId)
      .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime()) // پاسخ‌ها به ترتیب قدیمی‌تر به جدیدتر

  return (
    <div className="space-y-4">
      {rootComments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          replies={getReplies(comment.id)}
        />
      ))}
    </div>
  )
}

export default CommentList
