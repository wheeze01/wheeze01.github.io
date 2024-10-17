import React, { useState } from 'react';
import InputMask from 'react-input-mask'; // InputMask 임포트
import './CardForm.css';
import cardImage from './images/CardImage.png';

function CardForm({ onAddCard }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [cvc, setCvc] = useState('');
  const [password, setPassword] = useState('');
  const [expiryDateError, setExpiryDateError] = useState('');

  // 카드 번호 입력 처리
  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').substring(0, 16);
    setCardNumber(value);
  };

  // 만료일 입력 처리
  const handleExpiryDateChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').substring(0, 4);
    let month = value.substring(0, 2);
    let year = value.substring(2, 4);

    if (month.length === 2) {
      const monthNum = parseInt(month, 10);
      if (monthNum < 1 || monthNum > 12) {
        setExpiryDateError('유효한 월을 입력하세요 (01 - 12)');
      } else {
        setExpiryDateError('');
      }
    } else {
      setExpiryDateError('');
    }

    setExpiryDate(value);
  };

  // CVC 입력 처리
  const handleCvcChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').substring(0, 3);
    setCvc(value);
  };

  // 비밀번호 입력 처리
  const handlePasswordChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').substring(0, 2);
    setPassword(value);
  };

  // 폼 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault();

    // 만료일 유효성 검사
    const today = new Date();
    let expiry = expiryDate;
    let month = expiry.substring(0, 2);
    let year = expiry.substring(2, 4);

    if (month && year) {
      month = parseInt(month, 10);
      year = parseInt('20' + year, 10);

      const expiryDateObj = new Date(year, month, 0);

      const todayDateOnly = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
      if (expiryDateObj < todayDateOnly) {
        alert('만료일이 유효하지 않습니다. 현재 날짜 이후여야 합니다.');
        return;
      }
    } else {
      alert('만료일을 정확히 입력해주세요.');
      return;
    }

    const newCard = {
      cardNumber,
      expiryDate,
      cardHolder,
      cvc,
      password,
    };
    onAddCard(newCard);

    // 폼 필드 초기화
    setCardNumber('');
    setExpiryDate('');
    setExpiryDateError('');
    setCardHolder('');
    setCvc('');
    setPassword('');
  };

  // 카드 번호 표시용 포맷
  const formatCardNumberDisplay = (number) => {
    let formatted = '';
    for (let i = 0; i < number.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += ' - ';
      }
      if (i < 8) {
        formatted += number[i];
      } else {
        formatted += '•';
      }
    }
    return formatted;
  };

  // 만료일 표시용 포맷
  const formatExpiryDateDisplay = (date) => {
    const value = date.replace(/\D/g, '');
    const formatted = value.match(/.{1,2}/g)?.join(' / ') || '';
    return formatted;
  };

  return (
    <div className="card-form-container">
      <header>
        <h2>카드 추가</h2>
        <button className="close-btn">X</button>
      </header>
      <form onSubmit={handleSubmit} className="card-form">
        <div className="card-image">
          <img src={cardImage} alt="Card Sample" className="sample-card-image" />
          <div className="card-number-display">
            {formatCardNumberDisplay(cardNumber) || '•••• •••• •••• ••••'}
          </div>
          <div className="card-holder-display">
            {cardHolder || 'NAME'}
          </div>
          <div className="expiry-date-display">
            {formatExpiryDateDisplay(expiryDate) || 'MM / YY'}
          </div>
        </div>
        <div className="form-group">
          <label>카드 번호</label>
          <InputMask
            mask="9999 - 9999 - 9999 - 9999"
            maskChar="•"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="카드 번호를 입력하세요"
          >
            {(inputProps) => (
              <input
                {...inputProps}
                type="text"
                required
              />
            )}
          </InputMask>
        </div>
        <div className="form-group">
          <label>만료일</label>
          <InputMask
            mask="99 / 99"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            placeholder="MM / YY"
          >
            {(inputProps) => (
              <input
                {...inputProps}
                type="text"
                required
              />
            )}
          </InputMask>
          {expiryDateError && <p className="error">{expiryDateError}</p>}
        </div>
        <div className="form-group">
          <label>카드 소유자 이름</label>
          <input
            type="text"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            placeholder="카드에 표시된 이름을 입력하세요"
            maxLength="30"
            required
          />
        </div>
        <div className="form-group">
          <label>보안 코드(CVC/CVV)</label>
          <InputMask
            mask="999"
            maskChar=""
            value={cvc}
            onChange={handleCvcChange}
            placeholder="CVC/CVV"
          >
            {(inputProps) => (
              <input
                {...inputProps}
                type="password"
                required
              />
            )}
          </InputMask>
        </div>
        <div className="form-group">
          <label>카드 비밀번호</label>
          <InputMask
            mask="99"
            maskChar=""
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호"
          >
            {(inputProps) => (
              <input
                {...inputProps}
                type="password"
                required
              />
            )}
          </InputMask>
        </div>
        <button type="submit" className="submit-btn">카드 추가</button>
      </form>
    </div>
  );
}

export default CardForm;
