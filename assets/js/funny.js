const elemento = document.getElementById('elemento');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX - elemento.offsetWidth / 2;
  const y = event.clientY - elemento.offsetHeight / 2;

  elemento.style.left = x + 'px';
  elemento.style.top = y + 'px';
});
