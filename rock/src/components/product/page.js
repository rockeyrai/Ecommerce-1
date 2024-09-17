'use client'
import React from 'react'
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const CoustomProduct = () => {
  const list = [
    {
      title: "Asus ROG Zephyrus G16",
      img: "/rockey-1.jpg",
      price: "$50,000.50",
    },
    {
      title: " Gigabyte G6X ",
      img: "/rockey-2.jpg",
      price: "$30,000.00",
    },
    {
      title: " Razer Blade 15",
      img: "/rockey-3.jpg",
      price: "$100,000.00",
    },
    {
      title: "Asus ROG Zephyrus G14",
      img: "/rockey-4.jpg",
      price: "$50,000.30",
    },
    {
      title: " Gigabyte Aorus 17X",
      img: "/rockey-5.jpg",
      price: "$15,000.70",
    },
    {
      title: "Razer Blade 16 ",
      img: "/rockey-6.jpg",
      price: "$80,000.00",
    },
    {
      title: "MSI Katana 15",
      img: "/rockey-7.jpg",
      price: "$700,00.50",
    },
    {
      title: "Origin EON 16SL",
      img: "/rockey-8.jpg",
      price: "$12,000.20",
    },
  ];


  return (
    <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 p-5 bg-gray-600">
      {list.map((item, index) => (
        <Card shadow="sm" className='h-[17rem] hover:-translate-y-3' key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0 ">
            <Image
              shadow="md"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[190px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default CoustomProduct
