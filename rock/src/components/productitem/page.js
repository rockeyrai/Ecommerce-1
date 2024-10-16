'use client'
import { Card, CardBody, CardFooter } from '@nextui-org/card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import React from 'react'

const ProductList = () => {
    const [product, setProduct] = useState([]);
    const [more, setMore] = useState(8);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=${more}`);
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
        fetchProducts();
    }, [more]);

    const showmore = () => {
      setMore(more === 16 ? 8 : 16);
    };

    const handleCardClick = (id) => {
      console.log("Navigating to product with ID:", id); // Log the ID for debugging
      router.push(`/product/${id}`);
  };
  
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="px-10 gap-[30px] w-full mt-5 bg-fuchsia-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {product.map((item, index) => (
    <div key={index} onClick={() => handleCardClick(item.id)} className="cursor-pointer">
        <Card className='transition-all duration-600 transform hover:translate-y-[-10px] hover:shadow-lg' shadow="sm">
        <CardBody className="overflow-visible p-0">
        {console.log("Image URL:", item.images && item.images.length > 0 ? item.images[0] : "/placeholder.jpg")}
    <Image
        shadow="sm"
        radius="lg"
        width={500}
        height={250}
        alt={item.title}
        className="w-full object-cover h-[250px]"
        src={item.images && item.images.length > 0 ? item.images[0].replace(/[\[\]"]/g, '') : "/placeholder.jpg"} // Clean the URL
        />
</CardBody>

            <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">${item.price}</p>
            </CardFooter>
        </Card>
    </div>
))}

        </div>
        <div className='flex mx-auto justify-center items-center w-full h-14'>
          <button onClick={showmore} className='border text-xl px-4'>
            {more === 16 ? "Show Less" : "See More"}
          </button>
        </div>
      </div>
    );
}

export default ProductList;
