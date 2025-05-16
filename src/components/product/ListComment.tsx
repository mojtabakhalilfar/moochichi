import React from 'react'

const ListComment = () => {
    const comments = [
        { id: 1, parentId: null, text: "این یک کامنت است", createdAt: new Date("2024-05-10T10:00:00") },
        { id: 2, parentId: 1, text: "پاسخ به کامنت 1", createdAt: new Date("2024-05-10T10:05:00") },
        { id: 3, parentId: null, text: "کامنت دیگری", createdAt: new Date("2024-05-10T11:00:00") },
        { id: 4, parentId: 3, text: "پاسخ به کامنت 3", createdAt: new Date("2024-05-10T11:02:00") },
    ]
    return (
        <div className='flex flex-col items-start w-full'>
            <h2 className='flex flex-row-reverse'>دیدگاه های کاربران <img src="/assets/icons/message-text.png" alt="" /></h2>
            <Comment />
        </div>
    )
}

export default ListComment


const Comment = () => {
    return (
        <div className='w-full rounded-[8px] px-6 py-4 border border-[#e7ebf0]'>
            <div className='flex'>
                <img className='w-12 h-12 rounded-[222px]' src="/assets/icons/user2.png" alt="" />
                <span className='text-[16px] text-[#100e0c] leading-8'>زینب اطهر</span>
                <span className='font-medium text-xs leading-8 text-[#929292]'>24 خرداد 1403</span>
            </div>
            <div className='min-h-12'>

            </div>
            <div className='flex flex-col sm:flex-row items-center sm:justify-between'>
                <div className='flex space-x-4'>
                    <span>این نظر برای شما مفید بود ؟</span>
                    <div className='space-x-1 flex items-center text-[20px] text-[#adadad]'><button><img className='rotate-180' src="/assets/icons/dislike.png" alt="" /></button><span>0</span></div>
                    <div className='space-x-1 flex items-center text-[20px] text-[#adadad]'><span>0</span><button><img  src="/assets/icons/dislike.png" alt="" /></button></div>
                </div>
                <div className='font-medium text-[14px] text-[#ff6687] leading-[180%]'><button>پاسخ به این نظر</button></div>
            </div>
        </div>
    )
}