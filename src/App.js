import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import { FaShoppingCart } from 'react-icons/fa'; // 아이콘을 사용하기 위한 라이브러리

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="App">
      <header>
        <div>
          <h1>신발 상품 목록</h1>
          <p>현재 {cartCount}개의 상품이 있습니다.</p>
        </div>
        <FaShoppingCart className="cart-icon" /> {/* 장바구니 아이콘 */}
      </header>
      <ProductList onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
