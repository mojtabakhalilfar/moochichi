import { useEffect, useState } from "react";

export const BoxTime = ({ time, title, intervalMs }: { time: number, title: string, intervalMs: number }) => {
    const [timer, setTimer] = useState<number>(time)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => prev - 1)
        }, intervalMs)

        return () => clearInterval(interval) 

    }, [intervalMs])
    if (timer < 0) {
        title == "ثانیه" && setTimer(60)
        title == "دقیقه" && setTimer(59)
    }

    return (
        <div className='w-[62px] aspect-square space-x-1 rounded-[6px] bg-gray-700 text-white flex flex-col items-center justify-around'>
            <span className='font-semibold text-[18px]'>{timer}</span>
            <span className='text-[12px]'>{title}</span>
        </div>
    )
}