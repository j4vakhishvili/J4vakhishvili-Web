//swiper
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
    1100: {
      slidesPerView: 3,
    }
  }
})

//modal
let modal = document.querySelector('.modal');
let url = window.location.href;
console.log(window.location.href);
console.log(url+"/#about");
function openModal(){
  modal.style.transform = "translateY(0)";
  modal.style.background = "rgba(0, 0, 0, 0.3)";
  modal.style.opacity = "1";
}
function closeModal(){
  modal.style.transform = "translateY(100%)";
  modal.style.background = "rgba(0, 0, 0, 0.3)";
  modal.style.opacity = "0";
}

if (url == "https:/j4vakhishvili.tk/#about"){
  openModal();
} else{
  closeModal();
}