import React, { useState, ChangeEvent } from "react";

type DualRangeSliderProps = {
  min?: number;
  max?: number;
  step?: number;
  initialMin?: number;
  initialMax?: number;
  onChange?: (minValue: number, maxValue: number) => void;
};

const DualRangeSlider: React.FC<DualRangeSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  initialMin = 20,
  initialMax = 80,
  onChange,
}) => {
  const [minValue, setMinValue] = useState<number>(initialMin);
  const [maxValue, setMaxValue] = useState<number>(initialMax);

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - step);
    setMinValue(value);
    if (onChange) onChange(value, maxValue);
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + step);
    setMaxValue(value);
    if (onChange) onChange(minValue, value);
  };

  return (
    <div dir="ltr" className="w-full max-w-xl mx-auto px-4 py-6">
      <div className='w-full flex justify-between px-3 items-center'>
        <span>بازه قیمتی</span>
        <button>1</button>
      </div>
      <div className="relative h-10 flex items-center">
        {/* پس‌زمینه کلی */}
        <div dir="rtl" className="absolute w-full h-1 bg-gray-300 rounded-full" />

        {/* نوار بین دو مقدار */}
        <div
          className="absolute h-1 bg-pink-500 rounded-full"
          style={{
            left: `${(minValue / max) * 100}%`,
            width: `${((maxValue - minValue) / (max - min)) * 100}%`,
          }}
        />

        {/* input سمت چپ */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinChange}
          className="range-slider absolute w-full appearance-none bg-transparent"
        />

        {/* input سمت راست */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className="range-slider absolute w-full appearance-none bg-transparent"
        />
      </div>

      <div dir="rtl" className="flex justify-between mt-4 text-sm text-gray-700">
        <span>از: {minValue} هزار تومان</span>
        <span>تا: {maxValue} هزار تومان</span>
      </div>

      <div dir="rtl" className="flex items-center mt-4 space-x-3">
        <label htmlFor="">از قیمت : </label>
        <input value={minValue} onChange={(e) => setMinValue(e.target.value)} className="outline-[#ff6687] bg-[#f8f9fb] rounded-[8px] w-[70%] px-4 py-2" type="text" />
      </div>      <div dir="rtl" className="flex items-center mt-4 space-x-3">
        <label htmlFor="">تا قیمت : </label>
        <input value={maxValue} onChange={(e) => setMaxValue(e.target.value)} className="outline-[#ff6687] bg-[#f8f9fb] rounded-[8px] w-[70%] px-4 py-2" type="text" />
      </div>
    </div>
  );
};

export default DualRangeSlider;
