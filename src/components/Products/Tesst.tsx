"use client"

import { useState } from "react";

export default function ProductDescription() {
  const [showMore, setShowMore] = useState(false);

  const shortText = `چراغ خواب گربه سیلیکونی یک وسیله دکوراتیو و کاربردی است که از جنس سیلیکون نرم ساخته شده و به شکل گربه طراحی شده است.`;
  const fullText = `چراغ خواب گربه سیلیکونی یک وسیله دکوراتیو و کاربردی است که از جنس سیلیکون نرم ساخته شده و به شکل گربه طراحی شده است. این چراغ با نور ملایم و قابل تنظیم، فضایی آرام برای خواب ایجاد می‌کند. معمولاً از طریق پورت USB شارژ می‌شود و به دلیل طراحی نرم و ایمن، مناسب کودکان و بزرگسالان است.`;

  return (
    <div className="max-w-md mx-auto p-4 font-sans rtl text-right relative">
      <h2 className="text-lg font-semibold mb-4 flex items-center justify-center space-x-2 space-x-reverse">
        <span>درباره محصول</span>
        <span className="text-pink-400 text-2xl select-none">👀👀</span>
      </h2>

      <div className="relative">
        {!showMore ? (
          <>
            <p className="text-base leading-relaxed">{shortText}</p>

            {/* گرادیان پایین متن */}
            <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none bg-gradient-to-t from-white to-transparent" />
          </>
        ) : (
          <p className="text-base leading-relaxed">{fullText}</p>
        )}
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-4 text-pink-500 hover:text-pink-600 font-semibold focus:outline-none"
      >
        {showMore ? "خواندن کمتر" : "مطالعه بیشتر +"}
      </button>
    </div>
  );
}

