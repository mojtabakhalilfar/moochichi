"use client"
import React, { useState } from 'react'

const AP_Mobile = ({ shortText, fullText }: { shortText: string, fullText: string }) => {
    const [showMore, setShowMore] = useState(false)
    return (
        <div className='flex flex-col sm:hidden'>
            <div className={`relative`}>
                {!showMore ? (
                    <>
                        <p className="text-base leading-8 ">{shortText}</p>

                        {/* گرادیان پایین متن */}
                        <div className="absolute bottom-0 left-0 right-0 h-[100%] pointer-events-none bg-gradient-to-t from-white to-transparent" />
                    </>
                ) : (
                    <p className="text-base leading-8">{fullText}</p>
                )}
            </div>

            <button
                onClick={() => setShowMore(!showMore)}
                className="mt-4 text-pink-500 hover:text-pink-600 font-semibold focus:outline-none"
            >
                {showMore ? "خواندن کمتر" : "مطالعه بیشتر +"}
            </button>
        </div>
    )
}

export default AP_Mobile
