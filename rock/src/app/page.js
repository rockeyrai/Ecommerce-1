'use client'
import CoustomNavbar from '@/components/navbar/page'
import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import CustomProduct from '@/components/productitem/page';
import { useRouter } from 'next/router';
import { ImageSlider } from '@/components/image-slider';

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
      <div className='flex my-4 h-[700px]'>
          <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
              <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-4.jpeg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
              <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-3.jpeg"
            />
          </Card>
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
              <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-2.jpeg"
            />
          </Card>
          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Acme camera</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://nextui.org/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm">
                Notify Me
              </Button>
            </CardFooter>
          </Card>
          <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
              <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src="https://nextui.org/images/card-example-5.jpeg"
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
              <div className="flex flex-grow gap-2 items-center">
                <Image
                  alt="Breathing app icon"
                  className="rounded-full w-10 h-11 bg-black"
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-tiny text-white/60">Breathing App</p>
                  <p className="text-tiny text-white/60">Get a good night's sleep.</p>
                </div>
              </div>
              <Button radius="full" size="sm">Get App</Button>
            </CardFooter>
          </Card>
        </div>
        <img src='raockproj.jpg'/>
      </div>
    <CustomProduct/>
    {/* last footer section */}
    <div className='flex justify-center items-center w-full h-14 '> <button             className='border  text-xl px-4'>See More</button>
    </div>
      <div className='w-full h-96 MT-5' >
        <div  className='grid grid-cols-4 p-5 text-[15px] text-gray-500 bg-gray-800 '>
         <div>
            <h1 className='text-sm mb-2  font-semibold text-white'>Customer Care</h1>
            <p> Help Center</p>
            <p> How to Buy</p>
            <p> Returns & Refunds</p>
            <p> Contact Us</p>
         </div>
         <div>
            <h1 className='text-sm mb-2  font-semibold text-white'>FrozeUP </h1>
            <p>About FrozeUP </p>
            <p>Careers </p>
            <p>Terms & Conditions </p>
            <p>Privacy Policy </p>
            <p>FrozeUP Affiliate Program</p>
            <p>Code of Conduct </p>
         </div>
         <div>
            <h1 className='text-sm mb-2  font-semibold text-white'>Top Brand & Categories</h1>
            <p>Razer</p>
            <p>ASUS</p>
            <p>Alienware</p>
            <p>Lenovo</p>
            <p>MSI</p>
            <p>Legion</p>
            <p> Nvidia</p>
            <p>AMD </p>
         </div>
         <div className='w-40'>
          <h1 className='text-sm mb-2  font-semibold text-white'>Computer Components</h1>
          <p>Ram , Motherboards , Processors , Desktop Casings , CPU Cooling Fans , Gaming Graphic Cards , Mouse , PSU , GPU , Hard Drive </p>
         </div>
        </div>
        <div className='flex px-5 gap-20 mt-5'>
          <div>
            <h1 className='text-sm mb-2  font-semibold'>Payment Methods</h1>
            <div className='flex gap-x-1 aspect-3/2 contain '>
              <img className='w-17 h-10' src='Esewa_logo.webp'/>
              <img className='w-17 h-10'  src='Khalti_Digital_Wallet_Logo.png.jpg'/>
              <img className='w-17 h-10'  src='pngwing.png'/>
              <img className='w-15 ml-3 h-10'  src='images.png'/>
            </div>    
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-xs mb-2 font-bold'>Varified by</h1>
            <img className='w-12 h-10' src='pcidss.png'/>
          </div>
          <div>
            <h1 className='text-xs mb-2 font-bold'>Follow Us</h1>
            <div className='flex gap-3 items-center'>
              <img className='w-7 h-7'  src='facebook-circular-logo.png'/>
              <img className='w-7 h-7'  src='instagram-logo.png'/>
              <img className='w-9 h-9'  src='youtube.png'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default main
