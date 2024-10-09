import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ onAddToCart }) {
  const products = [
    { id: 1, brand: '브랜드A', description: '편안하고 착용감이 좋은 신발', price: 35000, imageUrl: '/images/shoe1.jpg' },
    { id: 2, brand: '브랜드A', description: '힙한 컬러가 매력적인 신발', price: 25000, imageUrl: '/images/shoe2.jpg' },
    { id: 3, brand: '브랜드B', description: '편안하고 착용감이 좋은 신발', price: 35000, imageUrl: '/images/shoe3.jpg' },
    { id: 4, brand: '브랜드B', description: '힙한 컬러가 매력적인 신발', price: 35000, imageUrl: '/images/shoe4.jpg' },
    { id: 5, brand: '브랜드C', description: '편안하고 착용감이 좋은 신발', price: 35000, imageUrl: '/images/shoe5.jpg' },
    { id: 6, brand: '브랜드C', description: '힙한 컬러가 매력적인 신발', price: 35000, imageUrl: '/images/shoe6.jpg' }
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;
