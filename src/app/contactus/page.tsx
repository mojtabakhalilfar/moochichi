import React from 'react'

const page = () => {
    return (
        <div className='flex items-center justify-center w-full my-10'>
            <div className='w-[90%] p-4 sm:px-20 sm:py-16 rounded-[32px] bg-[#fff0f7] flex flex-col sm:flex-row sm:items-start sm:space-x-10'>
                <div className='flex flex-col w-full sm:w-[33%]  space-y-2 sm:space-y-6'>
                    <div className='flex flex-col w-full space-y-4'>
                        <h3 className='text-[20px] sm:text-[32px] left-8 text-[#2d2728]'>راه ارتباطی با موچیچی شاپ</h3>
                        <p className=' text-[14px] sm:text-[16px] leading-6 text-[#383838] opacity-70'>از اینکه با ما در ارتباط هستید سپاسگزاریم لطفا از یکی از روش های زیر با ما تماس بگیرید یا از طریق فرم تماس پیغام حود را ارسال کنید.</p>
                    </div>
                    <div className='flex flex-col w-full space-y-6'>
                        <a href='' className='px-4 py-3 rounded-[56px] border border-[#f2e4eb] w-full flex space-x-3'>
                            <img className='w-6 h-6' src="/assets/icons/call-calling.png" alt="" />
                            <span className='font-medium text-[14px] sm:text-[16px] text-[#30303d] leading-6 w-full'>پشتیبانی تلفنی : 321-123-021</span>
                        </a>
                        <a href='' className='px-4 py-3 rounded-[56px] bg-[#ec6880] w-full flex space-x-3'>
                            <img className='w-6 h-6' src="/assets/icons/sms.png" alt="" />
                            <span className='font-medium text-[14px] sm:text-[16px] text-white leading-6'>ایمیل : shikland@info.com</span>
                        </a>
                        <a href='' className='px-4 py-3 rounded-[56px] border border-[#f2e4eb] w-full flex space-x-3'>
                            <img className='w-6 h-6' src="/assets/icons/location2.png" alt="" />
                            <span className='font-medium text-[14px] sm:text-[16px] text-[#30303d] leading-6'>آدرس : ایران ، تهران ، خیابان زعفرانیه</span>
                        </a>
                    </div>

                </div>
                <div className='w-full sm:w-[63%] mt-4 sm:mt-0'>
                    <form className='w-full space-y-4' action="">
                        <Input placeholder='مثلا حسین علیمردانی' label='نام و نام خانوادگی' className="" />
                        <Input placeholder='مثلا ali1234@gmail.com' label='ایمیل' className="" />
                        <Input placeholder='موضوع' label='موضوع' className="" />
                        <div className='w-full flex flex-col space-y-2'>
                            <label className='font-medium text-[14px] leading-6 text-[#2d2728]' htmlFor="">پیام شما</label>
                            <textarea className='w-full h-[202px] rounded-[16px] bg-[#fffafb] border border-[#f2e4eb] px-4 py-1 outline-none' placeholder='پیام خود را بنویسید...' />
                        </div>
                        <input className='px-8 py-2 rounded-[40px] bg-[#ec6880] w-[310px] h-12 font-medium text-[16px] leading-6 text-white' type="submit" value='ارسال پیام' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page


const Input = ({ className, label, placeholder }: { className: React.ReactNode, label: string, placeholder: string }) => {
    return (
        <div className={`${className} space-y-2`}>
            <label className='font-medium text-[14px] leading-6 text-[#2d2728]' htmlFor="">{label}</label>
            <input className='w-full h-11 rounded-[48px] bg-[#fffafb] border border-[#f2e4eb] px-4 py-1 outline-none' placeholder={placeholder} type="text" name="" id="" />
        </div>
    )
}