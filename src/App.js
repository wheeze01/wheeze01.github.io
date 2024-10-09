import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import { FaShoppingCart } from 'react-icons/fa'; // 장바구니 아이콘

function App() {
  const [cartCount, setCartCount] = useState(0); // 장바구니 상품 개수 관리

  const handleAddToCart = () => {
    setCartCount(cartCount + 1); // 상품 추가 시 개수 증가
  };

  const handleRemoveFromCart = () => {
    setCartCount(cartCount > 0 ? cartCount - 1 : 0); // 상품 제거 시 개수 감소, 0 이하로는 감소하지 않음
  };

  return (
    <div className="App">
      <header>
        <div>
          <h1>신발 상품 목록</h1>
          <p>현재 {cartCount}개의 상품이 있습니다.</p>
        </div>
        <div className="cart-icon-container">
          <FaShoppingCart className="cart-icon" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>} {/* 개수가 0보다 클 때만 숫자를 표시 */}
        </div>
      </header>
      <ProductList 
        onAddToCart={handleAddToCart} 
        onRemoveFromCart={handleRemoveFromCart} 
      />
    </div>
  );
}

export default App;
