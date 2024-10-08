// 비동기 테스트
import { render, screen, waitFor } from '@testing-library/react';
import ProductList from './ProductList';

test('상품 목록이 렌더링되는지 확인', async () => {
  render(<ProductList />);

  const productItems = await waitFor(() => screen.getAllByRole('listitem'));
  expect(productItems).toHaveLength(6);  // 목록의 상품 개수 확인
});
