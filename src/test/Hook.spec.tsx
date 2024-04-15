import { renderHook, act } from '@testing-library/react';
import useDialog from '@/hooks/useDialog';

it('호출시 초기값을 지정하지 않으면 상태가 false로 설정된다', async () => {
  const { result } = renderHook(useDialog);
  expect(result.current.isOpen).toBe(false);
});

it('호출시 초기값을 boolean 값으로 지정하면 해당 값으로 상태가 결정된다', async () => {
  const { result } = renderHook(() => useDialog(true));
  expect(result.current.isOpen).toBe(true);
});

it('훅의 onToggle함수를 호출하면 토글 상태가 반전된다', async () => {
  const { result } = renderHook(useDialog);
  act(() => {
    result.current.onToggle();
  });
  expect(result.current.isOpen).toBe(true);
});
