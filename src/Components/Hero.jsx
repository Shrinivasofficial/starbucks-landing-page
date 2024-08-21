import React from 'react';
import { Circle } from './Circle';

export const Hero = () => {
  return (
    <div className="pt-32 mt-16 px-16 flex justify-between items-center">
      <div>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          <div>Art & Science of</div>
          <div className="text-green-700 leading-[6rem]">Perfect Coffee Brewing</div>
        </h1>
        <p className="mb-4">Master the perfect brew with Starbucks! Learn the art and science of coffee brewing.</p>
        <div className="mt-6 flex flex-row space-x-6">
          <button className="px-6 py-4 bg-green-700 rounded-lg text-white text-sm">Brew Now!</button>
          <button className="px-6 py-4 rounded-lg text-green-700 border border-green-700 text-sm">Order Now!</button>
        </div>
      </div>
      <div className="w-1/2">
        <Circle />
      </div>
    </div>
  );
};