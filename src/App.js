import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import { FaShoppingCart } from 'react-icons/fa'; // 장바구니 아이콘

function App() {
  const [cartCount, setCartCount] = useState(0); // 장바구니 상품 개수를 관리하는 상태

  const handleAddToCart = () => {
    setCartCount(cartCount + 1); // 상품을 추가할 때마다 개수를 증가
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
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>} {/* 상품 개수가 0보다 클 때만 숫자를 표시 */}
        </div>
      </header>
      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
