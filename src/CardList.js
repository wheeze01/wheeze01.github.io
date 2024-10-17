import React, { useState } from 'react';
import './CardList.css';
import CardForm from './CardForm'; // 카드 추가 폼 컴포넌트 가져오기

function CardList() {
  const [cards, setCards] = useState([]);
  const [showCardForm, setShowCardForm] = useState(false); // 카드 추가 폼 상태 관리

  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
    setShowCardForm(false); // 카드 추가 후 폼 닫기
  };

  const handleShowCardForm = () => {
    setShowCardForm(true); // 카드 추가 폼 보여주기
  };

  return (
    <div className="card-list-container">
      <header>
        <h2>보유카드</h2>
        <button className="close-btn">X</button> {/* 닫기 버튼 */}
      </header>

      {showCardForm ? (
        <CardForm onAddCard={handleAddCard} />  // 카드 추가 폼 보여줌
      ) : (
        <>
          {cards.length === 0 ? (
            <div className="no-card">
              <p>새로운 카드를 등록해주세요.</p>
              <div className="add-card-button" onClick={handleShowCardForm}>
                <span>+</span>
              </div>
            </div>
          ) : (
            <ul className="card-list">
              {cards.map((card, index) => (
                <li key={index} className="card-item">
                  <div className="card-image">
                    {/* 카드 이미지와 정보 표시 */}
                    <div className="card-number-display">
                      {card.cardNumber}
                    </div>
                    <div className="card-holder-display">
                      {card.cardHolder}
                    </div>
                    <div className="expiry-date-display">
                      {card.expiryDate}
                    </div>
                  </div>
                  {/* 결제 버튼 */}
                  <button className="pay-btn">이 카드로 결제하기</button>
                </li>
              ))}
              <div className="add-card-button" onClick={handleShowCardForm}>
                <span>+</span>
              </div>
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default CardList;
