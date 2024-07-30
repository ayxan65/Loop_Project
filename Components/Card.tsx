
import React from 'react';
import { Data } from '../Db/Data';

const Card = () => {
  const head = Data.headphones;

 
  return (
    <div className='m-auto  grid grid-cols-1 md:gap-8 md:grid-cols-2 lg:gap-12 lg:grid-cols-5'>
      {head.map(({stock, name}, index) => (
        <div key={index} className='flex gap-2 h-[10em] shadow-lg w-[15em] my-2 lg:my-0 '>
          
          <p className='text-red text-xl font-semibold'>{name}</p>
          <p>{stock}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Card;
