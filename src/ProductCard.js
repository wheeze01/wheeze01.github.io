import React from 'react';
import './ProductCard.css';  // 개별 카드 스타일링

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.brand} />
      <h3>{product.brand}</h3>
      <p>{product.description}</p>
      <p>{product.price.toLocaleString()}원</p>
      <button>담기</button>
    </div>
  );
}

export default ProductCard;
