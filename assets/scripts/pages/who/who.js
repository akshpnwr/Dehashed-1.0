var swiper = new Swiper('.mySwiper', {
  slidesPerView: 5,
  spaceBetween: -300,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWithBlank: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
