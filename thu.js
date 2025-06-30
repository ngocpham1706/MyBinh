document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('openFormBtn');
  const closeBtn = document.getElementById('closeFormBtn');
  const formWrapper = document.getElementById('formWrapper');

  openBtn.addEventListener('click', () => {
    formWrapper.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    formWrapper.style.display = 'none';
  });
});
