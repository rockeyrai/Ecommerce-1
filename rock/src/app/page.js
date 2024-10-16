'use client'
import CoustomNavbar from '@/components/navbar/page'
import React from 'react'
import CustomProduct from '@/components/productitem/page';
import { ImageSlider } from '@/components/image-slider';
import Link from 'next/link';
import Image from 'next/image';


const main = () => {
  return (
    <div>
      <CoustomNavbar />
      <div className='w-full h-[550px] bg-gradient-to-r from-slate-900 to-slate-700 flex'>
        <div className='w-1/2 p-10'> 
          <h1 className='bg-gradient-to-r from-slate-100 to-slate-500inline-block text-transparent bg-clip-text'><span className='flex flex-col mb-5 leading-tight text-8xl font-extrabold' > <span className='text-7xl ' >Stay Cool, </span><span>
          Play Hard </span></span><span className='text-2xl font-bold'>- Unstoppable Performance Without the Heat!</span></h1>
          <h1 className=' text-white m-5 text-xl '>
          Unlock peak performance with our gaming computers. Built for speed, power, and seamless gameplay, you can game longer without overheating. Dominate every match with top-tier visuals and lightning-fast response times. Rise above the rest with unstoppable performance.
          </h1>
        </div>

     
        <div className='w-1/2 h-[500px] m-10 '>
          <ImageSlider/>
        </div>  
      </div>  {/* hero section end */}
      {/* news and latest product */}
     

    <CustomProduct/>
    {/* last footer section */}

    <div className='w-full h-96'>
      <div className='grid grid-cols-4 p-5 text-[15px] text-gray-500 bg-gray-800'>
        <div className='flex flex-col'>
          <Link href="/" className='text-sm mb-2 font-semibold text-white'>
            Customer Care
          </Link>
          <Link href="/">Help Center</Link>
          <Link href="/">How to Buy</Link>
          <Link href="/">Returns & Refunds</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <div className='flex flex-col'>
          <Link href="/" className='text-sm mb-2 font-semibold text-white'>
            FrozeUP
          </Link>
          <Link href="/">About FrozeUP</Link>
          <Link href="/">Careers</Link>
          <Link href="/">Terms & Conditions</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">FrozeUP Affiliate Program</Link>
          <Link href="/">Code of Conduct</Link>
        </div>
        <div className='flex flex-col'>
          <Link href="/" className='text-sm mb-2 font-semibold text-white'>
            Top Brand & Categories
          </Link>
          <Link href="/">Razer</Link>
          <Link href="/">ASUS</Link>
          <Link href="/">Alienware</Link>
          <Link href="/">Lenovo</Link>
          <Link href="/">MSI</Link>
          <Link href="/">Legion</Link>
          <Link href="/">Nvidia</Link>
          <Link href="/">AMD</Link>
        </div>
        <div className='flex flex-col w-40'>
          <Link href="/" className='text-sm mb-2 font-semibold text-white'>
            Computer Components
          </Link>
          <Link href="/">
            Ram, Motherboards, Processors, Desktop Casings, CPU Cooling Fans,
            Gaming Graphic Cards, Mouse, PSU, GPU, Hard Drive
          </Link>
        </div>
      </div>
      <div className='flex px-5 gap-28 mt-5'>
        <div>
          <Link href="/" className='text-sm mb-2 font-semibold'>
            Payment Methods
          </Link>
          <div className='flex gap-x-1 aspect-3/2 contain'>
      <Image className='w-17 h-10' src='/Esewa_logo.webp' alt='Esewa' width={60} height={40} />
      <Image className='w-17 h-10' src='/Khalti_Digital_Wallet_Logo.png.jpg' alt='Khalti' width={60} height={40} />
      <Image className='w-17 h-10' src='/pngwing.png' alt='Payment Method' width={60} height={40} />
      <Image className='w-15 ml-3 h-10' src='/images.png' alt='Payment Method' width={60} height={40} />
    </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Link href="/" className='text-xs mb-2 font-bold'>
            Verified by
          </Link>
          <Image className='w-12 h-10' src='/pcidss.png' alt='Verified' width={50} height={40} />
          </div>
        <div>
          <Link href="/" className='text-xs mb-2 font-bold'>
            Follow Us
          </Link>
          <div className='flex gap-3 items-center'>
      <Image className='w-7 h-7' src='/facebook-circular-logo.png' alt='Facebook' width={30} height={30} />
      <Image className='w-7 h-7' src='/instagram-logo.png' alt='Instagram' width={30} height={30} />
      <Image className='w-9 h-9' src='/youtube.png' alt='YouTube' width={40} height={40} />
    </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default main
