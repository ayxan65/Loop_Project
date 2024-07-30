
import React from 'react';
import { Data } from '../Db/Data';

const Card = () => {
  const head = Data.headphones;

 
  return (
    <div className='flex flex-wrap gap-12'>
      {head.map(({stock, name}, index) => (
        <div key={index} className='flex gap-2 h-[10em] border rounded-sm w-[15em]'>
          
          <p className='text-red text-xl font-semibold'>{name}</p>
          <p>{stock}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Card;
