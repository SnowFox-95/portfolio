"use strict";

$(function () {
  $(".project-slider").slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<img src="image/UI/strelka-l.svg" alt="">',
    nextArrow: '<img src="images/UI/strelka-r.svg" alt="">',
    autoplay: true,
    autoplaySpeed: 2000,
    response: [{
      breakpoint: 361,
      settings: {
        variableWidth: false,
        slidesToShow: 1
      }
    }]
  });
});
//# sourceMappingURL=slick_main.dev.js.map
