import React from 'react';

const ProductCard = ({ imgSrc, title, description }) => (
  <div className='px-4 py-6 border border-gray-200 rounded-lg shadow-md'>
    <div className='flex items-center space-x-4'>
      <img 
        src={imgSrc} 
        alt={title} 
        className='h-32 w-32 object-cover' 
      />
      <div className='flex flex-col justify-center'>
        <h3 className='text-xl font-semibold'>{title}</h3> 
        <p className='text-sm text-gray-600 mt-2'> 
          {description}
        </p>
        <button className='mt-4 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors'>
          Order Now
        </button>
      </div>
    </div>
  </div>
);

export const Product = () => {
  return (
    <div className='mt-16 pt-24 px-16'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        <ProductCard 
          imgSrc='https://i.pinimg.com/736x/43/91/ec/4391eca8d1f1b0c07f8b3c708d747aae.jpg' 
          title='Java Chip' 
          description='Order the perfectly brewed java chip.' 
        />
        <ProductCard 
          imgSrc='https://i.pinimg.com/736x/43/91/ec/4391eca8d1f1b0c07f8b3c708d747aae.jpg' 
          title='Vanilla Latte' 
          description='Enjoy a rich vanilla latte made to perfection.' 
        />
        <ProductCard 
          imgSrc='https://i.pinimg.com/736x/43/91/ec/4391eca8d1f1b0c07f8b3c708d747aae.jpg' 
          title='Caramel Macchiato' 
          description='Taste the delicious caramel macchiato.' 
        />
      </div>
    </div>
  );
};
