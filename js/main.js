$(document).ready(function() {
  $('.gnb li').mouseenter(function() {
    $(this).children('.subMenu').stop().slideDown();
  });
  $('.gnb li').mouseleave(function() {
    $(this).children('.subMenu').stop().slideUp();
  });

  const swiper1 = new Swiper('.mvSlide', {
    slidesPerView: 1,
    pagination: {
      el: '.mvSlide .swiper-pagination',
      type: 'progressbar',
    },
  });

  const swiper2 = new Swiper('.bestSlide', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    on: {
      slideChangeTransitionStart: function() {
        setMarginRight();
      },
    },
  });

  const setMarginRight = () => {
    const activeWidth = document.querySelector('.bestSlide .swiper-slide').offsetWidth;
    const active = document.querySelector('.bestSlide .swiper-slide-active');
    const commonSlide = document.querySelectorAll('.bestSlide .swiper-slide');
    for (let j = 0; j < commonSlide.length; j++) {
      commonSlide[j].style.marginRight = '30px';
    }
    active.style.marginRight = activeWidth + 30 + 'px';
  };

  const bestSlides = document.querySelectorAll('.bestSlide .swiper-slide');
  const fixLoopHeight = [470, 406, 460, 406];

  bestSlides.forEach((slide, i) => {
    const patternIndex = i % fixLoopHeight.length;
    slide.style.height = fixLoopHeight[patternIndex] + 'px';
  });

  const eventList = document.querySelectorAll('.eventList li');

  eventList.forEach((list) => {
    list.addEventListener('click', () => {
      eventList.forEach((e) => {
        e.classList.remove('active');
      });
      list.classList.add('active');
    });
  });

  // Call the function initially and on window load
  window.addEventListener('load', setMarginRight);
  setMarginRight(); // Call immediately after defining the function
});
