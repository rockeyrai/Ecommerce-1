"use client"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  'DSCN1806.jpg',
  'rockey-1.jpg',
  'rockey-2.jpg',
  'rockey-3.jpg',
  'rockey-4.jpg',
  'rockey-5.jpg',
  'rockey-6.jpg',
  'rockey-7.jpg',
]

export function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 10000)

    return () => clearInterval(interval);
  }, [])

  const changeImage = (direction) => {
    setCurrentImageIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % images.length
      } else {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1
      }
    })
  }

  return (
    (<div className="relative w-[600px]  h-[450px]">
      <div className="relative mx-auto w-[500px] h-[450px]">
        <img 
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="object-cover w-full h-full aspect-3/2 rounded-lg shadow-lg"
          style={{
            boxShadow: '0 0 30px rgba(0, 255, 255,1)',
            animation: 'glow 1.5s ease-in-out infinite alternate',
          }} />
      </div>
      <button
        onClick={() => changeImage('prev')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
        aria-label="Previous image">
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => changeImage('next')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
        aria-label="Next image">
        <ChevronRight size={24} />
      </button>
    </div>)
  );
}