$(document).ready(function () {
  //main
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  // $(window)
  //   .resize(function () {
  //     if ($(window).width() < 768) {
  //       console.log(swiper.activeIndex);
  //       swiper.on("slideChange", function (swiper) {
  //         console.log(swiper.activeIndex);
  //         if (swiper.activeIndex >= 2) {
  //           console.log(swiper.activeIndex);
  //           $("body > .container").css("background", " #ed5f73");
  //           $(".header").addClass("ver2");
  //           $(".menu_toggle").addClass("ver2");
  //         } else if (swiper.activeIndex < 2) {
  //           console.log(swiper.activeIndex);
  //           $("body > .container").css("background", " #fff");
  //           $(".header").removeClass("ver2");
  //           $(".menu_toggle").removeClass("ver2");
  //         }
  //       });
  //     }
  //   })
  //   .trigger("resize");

  //main_sect2
  var swiper = new Swiper(".miSwiper", {
    slidesPerView: 1,
    // spaceBetween: 100,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  //main_sect5
  var swiper = new Swiper(".maiSwiper", {
    slidesPerView: 1, // 767px~ 그 이하까지
    breakpoints: {
      499: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 0
      },
      1440: {
        slidesPerView: 4.5,
        spaceBetween: 0
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 0,
    grabCursor: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true},
    // autoplay: {
    //   delay: 1000,
    // },
    // loop: true,

    initialSlide: 0
  });
});
