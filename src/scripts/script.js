const goTopBtn = document.querySelector('.js-gotop');

// Hiện nút khi cuộn xuống
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    goTopBtn.classList.add('is-visible');
  } else {
    goTopBtn.classList.remove('is-visible');
  }
});

// Click để cuộn lên đầu
goTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


document.querySelector('.js-menu-expand').addEventListener('click', function () {
  document.getElementById('megaMenu').classList.toggle('active');
});


