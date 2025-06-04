import FilterClientWrapper from "@/components/Products/FilterClientWrapper"
import { TCategoris, TCParams } from "@/types/Type"

export default async function Page({ params }: TCParams) {
  const { category } =await params
  const result = await fetch("http://localhost:8000/categoris", { cache: "no-store" }) // جلوگیری از کش شدن
  const data = (await result.json()) as TCategoris

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="grid grid-cols-4 sm:grid-cols-12 space-y-8">
        <FilterClientWrapper data={data} category={category} />
      </div>
    </div>
  )
}

