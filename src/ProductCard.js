import React from 'react';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.brand} />
      <h3>{product.brand}</h3>
      <p>{product.description}</p>
      <p>{product.price.toLocaleString()}원</p>
      <button onClick={onAddToCart}>담기</button> {/* 담기 버튼 클릭 시 onAddToCart 호출 */}
    </div>
  );
}

export default ProductCard;
