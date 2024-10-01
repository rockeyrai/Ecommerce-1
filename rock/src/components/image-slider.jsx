"use client"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  'DSCN1806.jpg',
  '382957542_2939064836223837_5219535670689812404_n.jpg',
  '382991992_718261946813300_2333369520472263274_n.jpg',
  '382944501_835650344713839_6778581477853323971_n.jpg',
  '346102857_1492293934511372_6481161323964863415_n.jpg',
  '346113153_691800719417856_8800621009530545822_n.jpg',
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
    (<div className="relative w-[400PX] h-[400PX]">
      <div className="relative w-[400PX] h-[400PX]">
        <img 
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="object-cover w-full h-full aspect-3/2 rounded-lg shadow-lg"
          style={{
            boxShadow: '0 0 50px rgba(0, 255, 255, 0.7)',
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
      <style jsx>{`
        @keyframes glow {
          from {
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
          }
          to {
            box-shadow: 0 0 50px rgba(0, 255, 255, 0.9), 0 0 30px rgba(0, 255, 255, 0.9);
          }
        }
      `}</style>
    </div>)
  );
}