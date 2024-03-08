const slides = document.querySelectorAll('.carusel-nuevo');

let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].style.animation = 'none';
  setTimeout(() => {
    slides[currentSlide].style.display = 'none';
    slides[currentSlide].style.animation = '';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
    slides[currentSlide].style.animation = 'carouselAnimation 1s ease forwards';
  }, 100);
}

setInterval(nextSlide, 3000);