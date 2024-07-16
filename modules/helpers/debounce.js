export default function debounce(callback, delay = 100) {
  let timer;
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback(...args)
      timer = null
    }, delay)
  }
}