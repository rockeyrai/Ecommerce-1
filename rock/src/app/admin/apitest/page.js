'use client'
import React from 'react';

const DeleteProductButton = () => {
  const deleteProduct = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products/2', {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Product deleted successfully');
      } else {
        console.log('Failed to delete the product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button onClick={deleteProduct}>
      Delete Product
    </button>
  );
};

export default DeleteProductButton;