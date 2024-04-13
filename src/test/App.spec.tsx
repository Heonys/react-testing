import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextField from '../components/TextField';

it('classname prop으로 설정한 css class가 적용된다 ', async () => {
  render(<TextField className="my-class" />);
  expect(screen.getByPlaceholderText('텍스트를 입력해 주세요.')).toHaveClass('my-class');
});

it('기본 placeholder는 "텍스트를 입력해 주세요."가 노출된다', async () => {
  render(<TextField />);

  expect(
    screen.getByPlaceholderText('텍스트를 입력해 주세요.'),
  ).toBeInTheDocument();
});

it('placeholder prop에 따라서 placeholder가 변경된다', async () => {
  render(<TextField placeholder="상품명을 입력해 주세요." />);

  expect(
    screen.getByPlaceholderText('상품명을 입력해 주세요.'),
  ).toBeInTheDocument();
});
