import React, { useState } from 'react';
import CardForm from './CardForm';
import CardList from './CardList';

function CardManager() {
  const [cards, setCards] = useState([]); // 카드 목록 상태

  // 새로운 카드를 추가하는 함수
  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  return (
    <div>
      <CardForm onAddCard={handleAddCard} />
      <CardList cards={cards} />
    </div>
  );
}

export default CardManager;