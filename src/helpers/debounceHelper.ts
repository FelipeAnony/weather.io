let timer: any;

export const debounceHelper = (callback: any, time: number) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    callback();
  }, time);
};
