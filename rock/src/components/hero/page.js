import { Button } from '@nextui-org/react';
import React from 'react';
import { IoArrowBackCircleOutline } from "react-icons/io5";


const CustomHero = () => {
  return (
    <div className='h-[calc(100vh-70px)] bg-black flex items-center justify-between p-2'>
      <div  className='text-white  flex flex-col  w-[50%] ml-5 justify-start h-[90%]' >
        <h1 className=' text-8xl font-extrabold'>Best Game Play Experience</h1>
        <div className='mt-9'>
          <h3 className=' text-lg font-bold'>Lenovo Legion Pro 7i Gen 9</h3>
          <div className='text-xs'>
            <p>
            CPU: Intel Core i9-14900HX</p>
            <p>GPU: RTX 4080 | RTX 4090</p>
            <p> RAM: 16GB | 32GB</p>
            <p>Storage: 1TB SSD | 2TB SSD</p>
            <p>Display: 16-inch QHD+, 240Hz</p>
          </div>
        </div>  
      </div>
      <div className='w-[50%] bg-cover'>
        <img src='/kisspng-laptop-graphics-cards-video-adapters-intel-core-memory-card-5add4d98c73ec9.1498829615244527608161.png' className='object-fill' />
      </div>
    </div>
  );
}

export default CustomHero;
