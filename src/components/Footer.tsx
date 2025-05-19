import Link from 'next/link'
import React from 'react'

type TList = {
    id: number,
    title: string,
    link: string
}

export default function Footer() {
    const list: TList[] = [
        { id: 1, title: "صفحه اصلی", link: "/" },
        { id: 2, title: "فروشگاه", link: "/shop" },
        { id: 3, title: "مجله", link: "" },
        { id: 4, title: "درباره ما", link: "/aboutus" },
        { id: 5, title: "تماس با ما", link: "call" },
    ]
    return (
        <div className='flex items-center justify-center w-full'>
            <footer className='w-[90%] bg-[#30303d] rounded-t-[32px] text-[#e7e7e7] flex flex-col items-center'>
                <section className='py-4'>
                    <img src="/assets/icons/logo.png" alt="" />
                </section>
                <section className='mt-4 text-center'>
                    <p className='w-[90%] sm:w-full text-[12px] sm:text-[14px] leading-[180%]'>لورم ایپسوم متن ساختگی برای طراحان میباشد که با استفاده از آن متن تستی مینویسند!</p>
                </section>
                <section className='grid grid-cols-2 gap-x-10 my-4 sm:flex sm:list-none'>
                    {
                        list.map((items) => (
                            <Link  key={items.id} className='text-[16px]' href={items.link}><li>{items.title}</li></Link>
                        ))
                    }
                </section>
                <section className='space-y-2 w-full flex flex-col sm:flex-row items-center sm:justify-center'>
                    <div className='space-y-2 flex flex-col items-start w-[90%] sm:w-full sm:px-32'>
                        <div className='flex items-center space-x-2'>
                            <img className='w-[56px] aspect-square' src="/assets/icons/call.png" alt="" />
                            <span className='w-full  text-[16px]'>098-123-456</span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <img className='w-[56px] aspect-square' src="/assets/icons/location.png" alt="" />
                            <span className='w-full text-[16px]'>ایران ، تهران ، خیابان فرشته</span>
                        </div>
                    </div>
                    <div className='flex justify-center w-full'>
                        <img className='w-[73px] h-[96px]' src="/assets/icons/eNamad.png" alt="" />
                        <img className='w-[73px] h-[96px]' src="/assets/icons/zarin%20pal.png" alt="" />
                    </div>
                </section>
                <section className='bg-[#ff6687] w-full py-4 flex flex-col items-center'>
                    <div className='flex items-center justify-center space-x-2 mb-7'>
                        <img className='w-[24px] aspect-square' src="/assets/icons/instagram.png" alt="" />
                        <img className='w-[24px] aspect-square' src="/assets/icons/facebook.png" alt="" />
                        <img className='w-[24px] aspect-square' src="/assets/icons/whatsapp.png" alt="" />
                    </div>
                    <span className='text-center text-[14px]'>تمام حقوق این وب سایت متعلق به شیکلند میباشد</span>
                </section>
            </footer>
        </div>

    )
}
