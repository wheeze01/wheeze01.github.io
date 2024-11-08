// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ProductList from './ProductList'; // 상품 목록 컴포넌트
import CardList from './CardList'; // 카드 목록 컴포넌트
import CartPage from './CartPage'; // 장바구니 페이지 컴포넌트
import './App.css';
import { FaShoppingCart } from 'react-icons/fa'; // 장바구니 아이콘

function App() {
  // 장바구니에 담긴 상품 개수를 관리하는 상태
  const [cartCount, setCartCount] = useState(0);
  // 현재 표시된 상품 개수를 관리하는 상태
  const [productCount, setProductCount] = useState(0);
  // 장바구니에 담긴 상품 목록을 관리하는 상태
  const [cartItems, setCartItems] = useState([]);

  // 장바구니에 상품을 추가하는 함수
  const handleAddToCart = (product) => {
    // 기존 장바구니 항목을 복사하고, 해당 상품이 이미 장바구니에 있는지 확인
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        // 이미 있는 상품이면 수량을 1 증가
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // 새로운 상품이면 수량을 1로 설정하여 추가
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    // 장바구니에 추가되면 cartCount를 1 증가
    setCartCount(cartCount + 1);
  };

  // 장바구니에서 상품을 제거하는 함수
  const handleRemoveFromCart = (product) => {
    // 기존 장바구니 항목을 복사하고, 해당 상품의 수량을 감소
    setCartItems((prevItems) =>
      prevItems.reduce((acc, item) => {
        if (item.id === product.id) {
          // 수량이 1 이상인 경우, 수량만 1 감소
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          // 해당 상품이 아니라면 그대로 유지
          acc.push(item);
        }
        return acc;
      }, [])
    );
    // cartCount가 0보다 큰 경우에만 1 감소
    setCartCount(cartCount > 0 ? cartCount - 1 : 0);
  };

  // ProductList 컴포넌트로부터 전달받은 상품 수를 설정하는 함수
  const handleProductCount = (count) => {
    setProductCount(count);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <div>
            {/* 페이지 제목과 현재 상품 개수 표시 */}
            <h1>신발 상품 목록</h1>
            <p>현재 {productCount}개의 상품이 있습니다.</p>
          </div>
          {/* 장바구니 아이콘 */}
          <CartIcon cartCount={cartCount} />
        </header>

        {/* 페이지 라우팅 설정 */}
        <Routes>
          {/* 메인 페이지 - 상품 목록을 보여주는 ProductList 컴포넌트 */}
          <Route path="/" element={
            <ProductList
              onAddToCart={handleAddToCart} // 상품을 장바구니에 추가하는 함수 전달
              onRemoveFromCart={handleRemoveFromCart} // 상품을 장바구니에서 제거하는 함수 전달
              onProductCount={handleProductCount} // 상품 개수를 설정하는 함수 전달
            />
          } />
          {/* 카드 목록 페이지 */}
          <Route path="/card-list" element={<CardList />} />
          {/* 장바구니 페이지 - 장바구니에 담긴 상품 정보를 보여주는 CartPage 컴포넌트 */}
          <Route path="/cart" element={<CartPage cartItems={cartItems} onBack={() => window.history.back()} />} />
        </Routes>
      </div>
    </Router>
  );
}

// CartIcon 컴포넌트 - 장바구니 아이콘과 장바구니 개수를 표시
const CartIcon = ({ cartCount }) => {
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수 사용

  return (
    <div className="cart-icon-container" onClick={() => navigate('/cart')}> {/* 장바구니 페이지로 이동 */}
      <FaShoppingCart className="cart-icon" /> {/* 장바구니 아이콘 */}
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>} {/* 장바구니에 상품이 있을 때만 개수 표시 */}
    </div>
  );
};

export default App;
