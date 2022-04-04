export const debounce = (func, delay) => {
  let timer = null;
  return function(func) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func();
    }, delay);
  };
};
