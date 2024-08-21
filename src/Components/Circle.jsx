import React from 'react';
import Logo from './Assets/starbucks.png';
import Logo1 from './Assets/starbucks2.png';

export const Circle = () => {
  return (
    <div className='relative w-full h-full'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#f3f3f3]'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white'></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[300px] h-[300px] rounded-full bg-[#f3f3f3]">
        <img src={Logo} alt="Starbucks Logo" className="w-36 h-36" />
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -transalte-y-1/2 w-[200px] h-[200px] rounded-full bg-white flex items-center justify-center'>
        <div className='w-[150px] h-[150px] rounded-full bg-[#f3f3f3] flex items-center justify-center'>
          <img src={Logo1} alt='Java chip'></img>
        </div>
      </div>
    </div>
  );
};