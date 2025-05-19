import React, { useState } from 'react'
import { TMenu } from '../Header'
import FilterLayout from './FilterLayout'

type TCategory = Omit<TMenu, "link">
const Category = () => {
    const [show, setShow] = useState(false)
    const category: TCategory[] = [
        { id: 1, title: "صفحه اصلی", },
        { id: 2, title: "لوازم تحریر", },
        { id: 3, title: "دکوری خاص", },
        { id: 4, title: "استیکر", },
        { id: 5, title: "کیف و کوله", },
        { id: 6, title: "چراغ خواب", },
        { id: 7, title: "لوازم آرایشی", },
        { id: 8, title: "لوازم جانبی", },
        { id: 9, title: "اکسسوری خاص", }
    ]
    return (
        <FilterLayout title='دسته بندی' search='دسته بندی'>
            {
                category.map((item) => (
                    <div key={item.id} className='space-x-1'>
                        <input value={1} onChange={(e) => console.log(e.target.id)} type="checkbox" name="" id={item.id.toString()} />
                        <label htmlFor="">{item.title}</label>
                    </div>
                ))
            }
        </FilterLayout>
    )
}

export default Category
