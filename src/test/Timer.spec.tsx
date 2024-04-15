import { debounce } from '@/utils/common';

describe('debouce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('지정된 타이머 시간이 지난후 함수가 호출된다', async () => {
    const mock = vi.fn();

    const debouncedFn = debounce(mock, 500);
    debouncedFn();
    vi.advanceTimersByTime(500);

    expect(mock).toHaveBeenCalled();
  });

  it('연속적으로 호출해도 마지막 호출 기준으로 지정된 타이머가 지난 이후에 함수가 호출된다', async () => {
    const mock = vi.fn();

    const debouncedFn = debounce(mock, 500);

    debouncedFn();

    vi.advanceTimersByTime(200);
    debouncedFn();

    vi.advanceTimersByTime(100);
    debouncedFn();

    vi.advanceTimersByTime(300);
    debouncedFn();

    vi.advanceTimersByTime(500);
    debouncedFn();

    expect(mock).toHaveBeenCalledTimes(1);
  });
});
