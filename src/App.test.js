import { render, screen } from '@testing-library/react';
import App from './App';

test('App 컴포넌트가 렌더링되는지 확인', () => {
  render(<App />);
  const headingElement = screen.getByText(/신발 상품 목록/i);
  expect(headingElement).toBeInTheDocument();
});
