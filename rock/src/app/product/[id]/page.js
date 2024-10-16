'use client';

import CoustomNavbar from '@/components/navbar/page';
import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaTruck, FaUndoAlt, FaShieldAlt } from 'react-icons/fa';
import { BsCashCoin } from 'react-icons/bs';
import ProductReviews from '@/components/itemrating/page';
import { Select, SelectItem } from "@nextui-org/react";
import { color } from '../data';
import { useParams } from 'next/navigation';

const Product = () => {
  const { id } = useParams(); // Use useParams to get the dynamic route parameter
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


useEffect(() => {
  const fetchProducts = async () => {
    try {
      let response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      let data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  if (id) {
    fetchProducts(); // Fetch only if id is defined
  }
}, [id]); // Run the effect when id changes


if (loading) return <div>Loading...</div>;
if (!product) return <div>No product found.</div>;
  return (
    <div>
      {/* Navbar */}
      <CoustomNavbar />

      {/* Main content container */}
      <div className='h-auto bg-gray-200 w-full px-20 py-10'>
        <div className='flex h-auto w-full'>
          {/* Left side - Product image and details */}
          <div className='h-auto w-full'>
            <div className='flex'>
              {/* Product Image */}
              <div className='w-96 h-[450px] bg-white'>
                <img className='cover h-80 bg-black' src={product.images[0]} alt={product.title} />
                <div className="flex gap-2 justify-center items-center mt-5">
                  {product.images.map((item, id) => (
                    <div key={id} className="w-12 h-12 flex items-center justify-center">
                      <img 
                        className='w-10 h-10 border-2 border-black hover:w-11 hover:h-11 rounded transition-all duration-200 aspect-3/2' 
                        src={item} 
                        alt={`multi-photo-${id}`} 
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product details */}
              <div className="bg-white w-[500px] h-auto px-2 space-y-4">
                <h1 className="text-xl font-semibold">{product.title}</h1>
                <span>Rating | Question Answer</span>
                <span>Brand: {product.category.name} | More Accessories from Rock</span>

                {/* Price section */}
                <p className="text-gray-900 text-2xl font-semibold">Rs. {product.price}</p>
                <span className="text-sm text-red-500 line-through mr-3">Rs. 4,000</span>
                <span className="text-sm font-semibold text-green-500">38% Off</span>

                <hr className='my-5'/>

                {/* Product attributes */}
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">Color Family:</span>
                  <Select items={color} placeholder="Select a color" className="max-w-40 max-h-10">
                    {(color) => <SelectItem key={color.label}>{color.label}</SelectItem>}
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-500">Capacity:</span>
                  <span className="text-gray-700">5000-10000mAh</span>
                </div>

                {/* Quantity selector */}
                <div className='flex items-center'>
                  <p className='text-gray-500'>Quantity</p>
                  <button onClick={() => numberOfProduct('-')} className='h-7 w-7 rounded mx-3 font-bold hover:bg-slate-400 hover:text-white bg-slate-300'>-</button>
                  <p className='text-xs'>{noItem}</p>
                  <button onClick={() => numberOfProduct('+')} className='h-7 w-7 rounded mx-3 font-bold hover:bg-slate-400 hover:text-white bg-slate-300'>+</button>
                  <p className='text-gray-500 text-[12px]'>Only 4 items left</p>
                </div>

                {/* Buy/Add to Cart buttons */}
                <div className='w-full h-14 flex items-center gap-2'>
                  <button className='h-10 w-1/2 rounded-md bg-blue-500 text-white'>Buy Now</button>
                  <button className='h-10 w-1/2 rounded-md bg-blue-500 text-white'>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Delivery options */}
          <div className="p-4 bg-white text-xs space-y-4">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold">Delivery Options</h3>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className='h-5 w-5' />
                <span>Bagmati, Kathmandu Metro 22 - Newroad Area, Newroad</span>
              </div>
              <div className="flex items-center space-x-3 justify-between">
                <div className='flex space-x-3'>
                  <FaTruck className='h-5 w-5' />
                  <span className='flex flex-col'>Standard Delivery <span className='text-xs text-gray-400'>Guaranteed by 2-6 Oct</span></span>
                </div>
                <span className="ml-auto font-semibold">Rs. 200</span>
              </div>
              <div className='flex items-center space-x-3'>
                <BsCashCoin className='h-5 w-5' />
                <span>Cash on Delivery Available</span>
              </div>
            </div>

            {/* Return & Warranty */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Return & Warranty</h3>
              <div className="flex items-center space-x-3">
                <FaUndoAlt className='w-5 h-5' />
                <span>14 Days Free Returns</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaShieldAlt className='h-5 w-5' />
                <span>1 Year Seller Warranty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className='h-full w-full'>
          <ProductReviews />
        </div>
      </div>
    </div>
  );
};

export default Product;

