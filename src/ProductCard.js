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

  const handleBuyClick = () => {
    // 결제 페이지로 이동
    window.location.href = '/card-list';
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.brand} />
      <h3>{product.brand}</h3>
      <p>{product.description}</p>
      <p>{product.price.toLocaleString()}원</p>
      <div className="button-group"> {/* 버튼 그룹 */}
        <button 
          className={isAdded ? 'added' : 'cart-button'} 
          onClick={handleButtonClick}
        >
          {isAdded ? '담김!' : '담기'}
        </button>
        <button 
          className="buy-button"  // 노란색 배경의 구매 버튼
          onClick={handleBuyClick}
        >
          구매
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
