export const debounce = (fn: (...args: any[]) => void, wait: number) => {
  let timeout: number | null = null;

  return (...args: any[]) => {
    const later = () => {
      timeout = -1;
      fn(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = window.setTimeout(later, wait);
  };
};
