import React from 'react';

export const Navbar = () => {
  return (
    <nav className='bg-white fixed w-full top-0 left-0 border-b border-gray-200 z-10'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4'>
        <a href="https://www.starbucks.in/dashboard" className='flex items-center space-x-3 rtl:space-x-reverse'>
          <img src='https://www.starbucks.in/assets/icon/logo.png' alt='Starbucks Logo' className='h-8' />
          <span className='font-semibold'>Starbucks</span>
        </a>
        <div className='items-center justify-between hidden md:flex md:w-auto md:order-1' id='navbar-sticky'>
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:bg-white'>
            <li><a href="/" className='block py-2 px-3 text-green-700 md:bg-transparent md:text-green-700 md:p-0'>Home</a></li>
            <li><a href="/" className='block py-2 px-3 text-green-700 md:bg-transparent md:text-black md:p-0'>Menu</a></li>
            <li><a href="/" className='block py-2 px-3 text-green-700 md:bg-transparent md:text-black md:p-0'>Locations</a></li>
            <li><a href="/" className='block py-2 px-3 text-green-700 md:bg-transparent md:text-black md:p-0'>About</a></li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};
