import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard({ product, onAddToCart, onRemoveFromCart }) {
  const [isAdded, setIsAdded] = useState(false); // 담김 여부 관리

  const handleButtonClick = () => {
    if (isAdded) {
      onRemoveFromCart(); // 이미 담김 상태라면 장바구니에서 제거
    } else {
      onAddToCart(); // 담기 상태라면 장바구니에 추가
    }
    setIsAdded(!isAdded); // 상태 반전
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.brand} />
      <h3>{product.brand}</h3>
      <p>{product.description}</p>
      <p>{product.price.toLocaleString()}원</p>
      <button 
        className={isAdded ? 'added' : ''} // 상태에 따라 클래스 적용
        onClick={handleButtonClick}
      >
        {isAdded ? '담김!' : '담기'}
      </button>
    </div>
  );
}

export default ProductCard;
