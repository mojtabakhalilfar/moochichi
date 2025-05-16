import CommentList from "../product/CommentItem"

const comments = [
  { id: 1, parentId: null, text: "این یک کامنت است", createdAt: new Date("2024-05-10T10:00:00") },
  { id: 2, parentId: 1, text: "پاسخ به کامنت 1", createdAt: new Date("2024-05-10T10:05:00") },
  { id: 3, parentId: null, text: "کامنت دیگری", createdAt: new Date("2024-05-10T11:00:00") },
  { id: 4, parentId: 3, text: "پاسخ به کامنت 3", createdAt: new Date("2024-05-10T11:02:00") },
]

export default function Page() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <CommentList comments={comments} />
    </div>
  )
}
