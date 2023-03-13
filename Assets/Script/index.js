const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 2,
    //   spaceBetween: 20
    // },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
    //   spaceBetween: 30
    },
    // when window width is >= 640px
    1420: {
      slidesPerView: 3,
    }
  }
})