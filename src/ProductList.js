import React from 'react';
import ProductCard from './ProductCard';  // ProductCard 컴포넌트 불러오기
import './ProductList.css';  // 리스트 스타일링

const products = [
  { id: 1, brand: '브랜드A', description: '편안하고 착용감이 좋은 신발', price: 35000, imageUrl: 'image1.jpg' },
  { id: 2, brand: '브랜드A', description: '힙한 컬러가 매력적인 신발', price: 25000, imageUrl: 'image2.jpg' },
  { id: 3, brand: '브랜드B', description: '편안하고 착용감이 좋은 신발', price: 35000, imageUrl: 'image3.jpg' },
  { id: 4, brand: '브랜드B', description: '힙한 컬러가 매력적인 신발', price: 35000, imageUrl: 'image4.jpg' },
  { id: 5, brand: '브랜드C', description: '편안하고 착용감이 좋은 신발', price: 35000, imageUrl: 'image5.jpg' },
  { id: 6, brand: '브랜드C', description: '힙한 컬러가 매력적인 신발', price: 35000, imageUrl: 'image6.jpg' },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
