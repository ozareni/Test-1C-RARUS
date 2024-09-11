const burger = document.querySelector('.header__burger');
const closeMenu = document.querySelector('.header__close');
const mobailMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');
burger.addEventListener('click', () => {
    burger.classList.add('active');
    mobailMenu.classList.add('active');
    body.classList.add('lock');
});
closeMenu.addEventListener('click', () => {
    burger.classList.remove('active');
    mobailMenu.classList.remove('active');
    body.classList.remove('lock');
});

console.log(window.devicePixelRatio);


const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.header__categories');

const scrollStep = 150; // Шаг прокрутки

// Проверяем видимость кнопок при загрузке страницы
checkButtonsVisibility();

// Прокручиваем вправо
nextButton.addEventListener('click', () => {
  carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
});

// Прокручиваем влево
prevButton.addEventListener('click', () => {
  carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
});

// Проверяем видимость кнопок после прокрутки
carousel.addEventListener('scroll', checkButtonsVisibility);

// Функция для проверки видимости кнопок
function checkButtonsVisibility() {
  // Если прокрутка в начале, скрываем кнопку "prev"
  if (carousel.scrollLeft <= 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }

  // Если прокрутка в конце, скрываем кнопку "next"
  if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }
}
