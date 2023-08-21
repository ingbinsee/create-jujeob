export function debounce(callback, timeout = 300) {
  let cleanup = null;
  return (e) => {
    clearTimeout(cleanup);
    cleanup = setTimeout(callback.bind(null, e), timeout);
  }
}