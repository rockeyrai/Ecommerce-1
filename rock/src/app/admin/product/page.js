'use client'
import React, { useEffect, useState } from 'react'

const AdminProduct = () => {

  const [productlist, setProductlist] = useState([]);
  const [totalItems, setTotalItems] = useState(0)
  useEffect(() => {
    fetchCatagories();
  }, []);

  // const fetchProduct = async () => {
  //   const data = await fetch("https://api.escuelajs.co/api/v1/categories/1/products");
  //   let product = await data.json();
  //   setTotalItems(product.length)
  //   setProductlist(product);
  // };
  const fetchCatagories= async () => {
    const data = await fetch("https://api.escuelajs.co/api/v1/products");
    let product = await data.json();
    setTotalItems(product.length)
    setProductlist(product);
  };

  return (
    // <div>
    //   {totalItems}
    //   {productlist.map((name,id)=>{
    //     <p>{name},{id}</p>
    //   })}
    // </div>
    <div className='ml-12'>
    <h1>Total Items: {totalItems}</h1>
    {productlist.map((category, index) => (
      <p key={category.id}>name:{category.name},title:{category.title},id {category.id}, index{index} </p> // Access the 'name' of each category
    ))}
  </div>
  )
}

export default AdminProduct
