import React from 'react'


const Navar = () => {
    const information: { id: number, title: string, image: string }[] = [
        { id: 1, title: "پشتیبانی آنلاین", image: "/assets/product/headphone.png" },
        { id: 2, title: "تضمین کیفیت", image: "/assets/product/like-shapes.png" },
        { id: 3, title: "ارسال سریع", image: "/assets/product/group.png" },
        { id: 4, title: "تخفیف خرید بالای 4 محصول", image: "/assets/product/ticketdiscount.png" },
    ]
    return (
        <div className='relative w-full overflow-auto scrollbar-hide flex space-x-10 my-2 sm:my-7 sm:bg-[#30303D] sm:rounded-[160px] sm:px-[50px] sm:py-[20px] sm:justify-evenly'>
            {
                information.map((item) => (
                    <div key={item.id} className='bg-[#30303D] rounded-[64px] p-1 pl-4 flex items-center h-[56px] w-[240px]  space-x-2'>
                        <div className='w-12 aspect-square p-[13px] rounded-[42px] bg-gray-700'>
                            <img className='w-5 aspect-square' src={item.image} />
                        </div>
                        <span className='text-white text-nowrap text-[16px]'>{item.title}</span>
                    </div>
                ))
            }
            <img className='sm:flex hidden absolute top-[-20%] left-10 w-11 h-11 z-auto' src="/assets/icons/grape2.png" alt="" />
        </div>
    )
}

export default Navar
