$( document ).ready( function() {
  $( '.gnb li' ).mouseenter( function() {
    $( this ).children('.subMenu').stop().slideDown();
  } );
  $( '.gnb li' ).mouseleave( function() {
    $( this ).children('.subMenu').stop().slideUp();
  } );
 const swiper1 = new Swiper('.mvSlide',{
    slidesPerView: 1,
    pagination: {
      el: '.mvSlide .swiper-pagination',
      type: 'progressbar',
    },
  })

  const swiper2 = new Swiper('.bestSlide',{
      slidesPerView: 4,
      spaceBetween: 18,
      loop: true,
    });
  const swiper3 = new Swiper('.proTxt',{
    loop: true,
    touchRatio: 0,
  });

  swiper2.controller.control = swiper3;
  swiper3.controller.control = swiper2;

  swiper2.on('slideChangeTransitionStart', (e) => {
    const activeWidth = document.querySelector('.bestSlide .swiper-slide').offsetWidth;
    const active = document.querySelector('.bestSlide .swiper-slide-active');
    const commonSlide = document.querySelectorAll('.bestSlide .swiper-slide');
    const idx = e.activeIndex;
    const slides = e.slides;
    slides.map((d,i) => {
        const ss = Math.abs(i - idx);
        const cui = ss % fixLoopHeight.length;
        d.style.height = fixLoopHeight[ss] + 'px'
    });
    for (let j = 0; j < commonSlide.length; j++) {
    commonSlide[j].style.marginRight = '18px';
    }
    active.style.marginRight = activeWidth + 18 + 'px';
  })


  const bestSlides = document.querySelectorAll('.bestSlide .swiper-slide');
  const fixLoopHeight = [470, 406, 460, 406];

  bestSlides.forEach((slide, i) => {
    const patternIndex = i % fixLoopHeight.length;
    slide.style.height = fixLoopHeight[patternIndex] + 'px';
  });

  const eventList = document.querySelectorAll('.eventList li');

  eventList.forEach((list) => {
    list.addEventListener("click", () => {
      eventList.forEach((e) => {
        e.classList.remove('active');
      });
      list.classList.add('active');
    });
  });
  setTimeout(() => {
    const proTxt = document.querySelector('.proTxt');
    const start = document.querySelector('.bestSlide .swiper-slide-active');
    const commonWidth = document.querySelector('.bestSlide .swiper-slide').offsetWidth;
    start.style.marginRight = document.querySelector('.bestSlide .swiper-slide').offsetWidth + 18 + 'px';
    proTxt.style.width = commonWidth +'px';
    proTxt.style.left = commonWidth + 18 + 'px';
  }, 500);
  const companyOffset = $('.company').offset();

  $( window ).scroll( function() {
    if ( $( document ).scrollTop() >  companyOffset.top - 600){
      $('.company .dim').addClass('dimOff')
      $('.company .dim h2').addClass('opac')
      $('.company .dim p').addClass('opac')
    }
  })
  new daum.roughmap.Lander({
		"timestamp" : "1686118424934",
		"key" : "2f2kb",
		"mapHeight" : "360"
	}).render();
} 
);

