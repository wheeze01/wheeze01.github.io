import React, { useState } from 'react';
import './CartPage.css';

const CartPage = ({ cartItems, onBack }) => {
  const [items, setItems] = useState(cartItems);

  // 상품 수량 증가
  const handleIncrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity += 1;
    setItems(newItems);
  };

  // 상품 수량 감소
  const handleDecrease = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 1) {
      newItems[index].quantity -= 1;
      setItems(newItems);
    }
  };

  // 상품 총액 계산
  const calculateTotalAmount = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalAmount = calculateTotalAmount();
  const shippingFee = totalAmount >= 100000 ? 0 : 3000; // 10만원 이상 무료 배송
  const finalAmount = totalAmount + shippingFee;

  return (
    <div className="cart-page">
      <header className="cart-header">
        <button className="back-btn" onClick={onBack}>←</button>
        <h1>장바구니</h1>
        <p>현재 {items.length}개의 상품이 담겨있습니다.</p>
      </header>

      <div className="cart-items">
        {items.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.imageUrl} alt={item.brand} className="cart-item-image" />
            <div className="cart-item-info">
              <h2>{item.brand}</h2>
              <p>{item.price.toLocaleString()}원</p>
              <div className="quantity-control">
                <button onClick={() => handleDecrease(index)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(index)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-item">
          <span>상품 금액</span>
          <span>{totalAmount.toLocaleString()}원</span>
        </div>
        <div className="summary-item">
          <span>배송비</span>
          <span>{shippingFee.toLocaleString()}원</span>
        </div>
        <div className="summary-total">
          <span>총 금액</span>
          <span>{finalAmount.toLocaleString()}원</span>
        </div>
      </div>

      <button className="checkout-btn">결제하기</button>
    </div>
  );
};

export default CartPage;
