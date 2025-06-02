
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeSlider({handleMin , handleMax}:{handleMin:(key:string , min:number)=>void , handleMax:(key:string , max:number)=>void}) {
  const [value, setValue] = React.useState<number[]>([2000, 3700]);

  const handleChange = (event: Event, newValue: number[]) => {
    setValue(newValue);
  };
  React.useEffect(()=>{
    handleMin("minPrice",value[0])
    handleMax("maxPrice",value[1])
  },[value])

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        sx={{width:"90%" , color: '#ff6687' }}
        min={1000}
        max={10000}
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <div dir="rtl" className="flex items-center mt-4 space-x-3">
        <label htmlFor="">از قیمت : </label>
        <input value={value[0]} onChange={(e) => setValue([Number(e.target.value), value[1]])} className="outline-[#ff6687] bg-[#f8f9fb] rounded-[8px] w-[70%] px-4 py-2" type="text" />
      </div>
      <div dir="rtl" className="flex items-center mt-4 space-x-3">
        <label htmlFor="">تا قیمت : </label>
        <input value={value[1]} onChange={(e) => setValue([value[0], Number(e.target.value)])} className="outline-[#ff6687] bg-[#f8f9fb] rounded-[8px] w-[70%] px-4 py-2" type="text" />
      </div>
    </Box>
  );
}

