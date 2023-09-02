import Swiper from "swiper";
import "swiper/css/bundle";

const swiperBlock = document.querySelector(".swiper");
function InitSlide() {
  const swiper = new Swiper(swiperBlock, {
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
InitSlide();
/* import mobileNav from './modules/mobile-nav.js';
mobileNav(); */
