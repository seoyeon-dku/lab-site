const slides = document.querySelector('.slides');
const total = document.querySelectorAll('.slide').length;
let idx = 0;

function showNext() {
  idx = (idx + 1) % total;
  slides.style.transform = `translateX(-${idx * 100}%)`;
}

// 3초마다 자동 전환
setInterval(showNext, 3000);

