export default function debounce(func: (...args: any[]) => any, timeout = 300) {
  let timer: any = 0;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
    timer;
  };
}
