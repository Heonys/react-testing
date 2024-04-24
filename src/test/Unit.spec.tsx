import { screen } from '@testing-library/react';
import render from './render';
import { NotFoundPage, ErrorPage } from '@/pages';

const navigateMockFn = vi.fn();

vi.mock('react-router-dom', async () => {
  const origin = await vi.importActual('react-router-dom');
  return { ...origin, useNavigate: () => navigateMockFn };
});

it('"홈으로 가기" 링크를 클릭할 경우 "/"경로로 navigate 함수가 호출된다', async () => {
  const { user } = await render(<NotFoundPage />);

  await user.click(await screen.findByText('홈으로 가기'));
  expect(navigateMockFn).toHaveBeenNthCalledWith(1, '/', { replace: true });
});

it('"뒤로 가기" 링크를 클릭할 경우 -1을 인자로 navigate 함수가 호출된다', async () => {
  const { user } = await render(<ErrorPage />);

  await user.click(await screen.findByRole('button', { name: '뒤로 가기' }));
  expect(navigateMockFn).toHaveBeenNthCalledWith(1, -1);
});
