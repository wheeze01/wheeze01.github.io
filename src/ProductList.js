import React from 'react';
import ProductCard from './ProductCard';

// 이미지 파일을 모듈로 가져오기
import shoe1 from './images/shoe1.jpg';
import shoe2 from './images/shoe2.jpg';
import shoe3 from './images/shoe3.jpg';
import shoe4 from './images/shoe4.jpg';
import shoe5 from './images/shoe5.jpg';
import shoe6 from './images/shoe6.jpg';

function ProductList({ onAddToCart, onRemoveFromCart }) {
  const products = [
    { id: 1, brand: '브랜드A', description: '편안하고 착용감이 좋은 신발', price: 35000, imageUrl: shoe1 },
    { id: 2, brand: '브랜드A', description: '힙한 컬러가 매력적인 신발', price: 25000, imageUrl: shoe2 },
    { id: 3, brand: '브랜드B', description: '편안하고 착용감이 좋은 신발', price: 35000, imageUrl: shoe3 },
    { id: 4, brand: '브랜드B', description: '힙한 컬러가 매력적인 신발', price: 35000, imageUrl: shoe4 },
    { id: 5, brand: '브랜드C', description: '편안하고 착용감이 좋은 신발', price: 35000, imageUrl: shoe5 },
    { id: 6, brand: '브랜드C', description: '힙한 컬러가 매력적인 신발', price: 35000, imageUrl: shoe6 }
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart} 
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
