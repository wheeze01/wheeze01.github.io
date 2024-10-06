import React from 'react';
import ProductList from './ProductList';  // ProductList 컴포넌트 불러오기
import './App.css';  // 스타일 불러오기

function App() {
  return (
    <div className="App">
      <header>
        <h1>신발 상품 목록</h1>
        <p>현재 6개의 상품이 있습니다.</p>
      </header>
      <ProductList />  {/* ProductList 렌더링 */}
    </div>
  );
}

export default App;
