function copy(text) {
  return navigator.clipboard.writeText(text);
}

export function handleCopy(node) {
  const text = document.querySelector(node).textContent;
  console.log();
  copy(text).then(() => {
    alert('복사 완료');
  });
}
