const swiper = new Swiper('.swiper-container', {

  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: '.pagination',
    bullerClass: 'pagination__button',
  },

  navigation: {
    nextEl: '.carousel-button.next',
    prevEl: '.carousel-button.prev',
  },
});