import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

// 렌더링 테스트
test('상품 카드가 제대로 렌더링되는지 확인', () => {
  const product = { id: 1, brand: '브랜드A', description: '편안한 신발', price: 35000, imageUrl: 'image1.jpg' };
  render(<ProductCard product={product} />);
  
  const brandElement = screen.getByText(/브랜드A/i);
  const priceElement = screen.getByText(/35,000원/i);
  
  expect(brandElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
});
