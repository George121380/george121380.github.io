/* The complete portfolio remains readable without JavaScript. */
const dialog = document.querySelector('#figure-dialog');
if (dialog && typeof dialog.showModal === 'function') {
  const figure = document.querySelector('#figure-image');
  const caption = document.querySelector('#figure-caption');
  document.querySelectorAll('[data-figure]').forEach(button => {
    button.addEventListener('click', () => {
      figure.src = button.dataset.figure;
      figure.alt = button.querySelector('img').alt;
      caption.textContent = button.dataset.caption;
      dialog.showModal();
    });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
}
