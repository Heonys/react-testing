import { screen } from '@testing-library/react';
import render from './render';
import TextField from '../components/TextField';

it('classname prop으로 설정한 css class가 적용된다 ', async () => {
  render(<TextField className="my-class" />);
  expect(screen.getByPlaceholderText('텍스트를 입력해 주세요.')).toHaveClass('my-class');
});

it('기본 placeholder는 "텍스트를 입력해 주세요."가 노출된다', async () => {
  render(<TextField />);

  expect(screen.getByPlaceholderText('텍스트를 입력해 주세요.')).toBeInTheDocument();
});

it('placeholder prop에 따라서 placeholder가 변경된다', async () => {
  render(<TextField placeholder="상품명을 입력해 주세요." />);

  expect(screen.getByPlaceholderText('상품명을 입력해 주세요.')).toBeInTheDocument();
});

it('텍스트를 입력하면 onChange prop으로 등록한 함수가 호출된다. ', async () => {
  const mock = vi.fn();
  const { user } = await render(<TextField onChange={mock} />);
  const textInput = await screen.findByPlaceholderText('텍스트를 입력해 주세요.');

  await user.type(textInput, 'hello vitest');
  expect(mock).toHaveBeenCalledWith('hello vitest');
});

it('엔터키를 입력하면 onEnter prop으로 등록한 함수가 호출된다', async () => {
  const mock = vi.fn();
  const { user } = await render(<TextField onEnter={mock} />);
  const textInput = await screen.findByPlaceholderText('텍스트를 입력해 주세요.');

  await user.type(textInput, 'hello{Enter}');
  expect(mock).toHaveBeenCalledWith('hello');
});

it('포커스가 활성화되면 onFocus prop으로 등록한 함수가 호출된다', async () => {
  const mock = vi.fn();
  const { user } = await render(<TextField onFocus={mock} />);
  const textInput = await screen.findByPlaceholderText('텍스트를 입력해 주세요.');

  await user.click(textInput);
  expect(mock).toHaveBeenCalled();
});

it('포커스가 활성화되면 border 스타일이 추가된다', async () => {
  const { user } = await render(<TextField />);
  const textInput = await screen.findByPlaceholderText('텍스트를 입력해 주세요.');

  await user.click(textInput);
  expect(textInput).toHaveStyle({ borderWidth: 2, borderColor: 'rgb(25, 118, 210)' });
});
