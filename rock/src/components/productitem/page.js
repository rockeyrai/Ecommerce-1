'use client';
import React from 'react';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const CustomProduct = () => {
  
  const list = [
    {
      title: "Orange",
      img: "/rockey-1.jpg",
      price: "5.50",
      sold: 12,
      rate: '5 star'
    },
    {
      title: "Tangerine",
      img: "/rockey-2.jpg",
      price: "3.00",
      sold: 12,
      rate: '5 star'
    },
    {
      title: "Raspberry",
      img: "/rockey-3.jpg",
      price: "10.00",
      sold: 12,
      rate: '5 star'
    },
    {
      title: "Lemon",
      img: "/rockey-4.jpg",
      price: "5.30",
      sold: 12,
      rate: '5 star'
    },
    {
      title: "Avocado",
      img: "/rockey-5.jpg",
      price: "15.70",
      sold: 12,
      rate: '5 star'
    },
    {
      title: "Lemon 2",
      img: "/rockey-6.jpg",
      price: "8.00",
      sold: 12,
      rate: '5 star'
    },
    {
      title: "Banana",
      img: "/rockey-7.jpg",
      price: "7.50",
      sold: 12,
      rate: '5 star'
    },
    {
      title: "Watermelon",
      img: "/rockey-8.jpg",
      price: "12.20",
      sold: 12,
      rate: '5 star'
    },
  ];
  
  return (
    <div>
      <div  className="gap-2 grid grid-cols-2 sm:grid-cols-4 p-5">
        {list.map((item, index) => (
          <Card 
            shadow="sm" 
            key={index} 
            isPressable 
            onPress={() => {
              console.log(`${item.title} pressed`);
            }}
          >
            <CardBody className="overflow-visible p-5 h-72">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                height="250px"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small items-start flex flex-col">
              <b>{item.title}</b>
              <p>Rs. {item.price}</p>
              <p>Sold: {item.sold}</p>
              <p>{item.rate}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CustomProduct;