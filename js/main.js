$( document ).ready( function() {
  // 메뉴
  if ($(window).width() > 1024) {
    $( '.gnb li' ).mouseenter( function() {
      $( this ).children('.subMenu').stop().slideDown();
    } );
    $( '.gnb li' ).mouseleave( function() {
      $( this ).children('.subMenu').stop().slideUp();
    } );
  } else{
    $('.hambuger').click(function(){
      $('nav').addClass('on')
    })
    $('.close').click(function(){
      $('nav').removeClass('on')
    })
  }

  // 메인비쥬얼 슬라이드

  let swiper1 = new Swiper('.mvSlide',{
    slidesPerView: 1,
    pagination: {
      el: '.mvSlide .swiper-pagination',
      type: 'progressbar',
    },
  })

  // 베스트상품 슬라이드 뼈대

  let swiper2 = new Swiper('.bestSlide',{
    slidesPerView: 4,
    spaceBetween: 18,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      769: {
        slidesPerView: 3,  
      },
      1025: {
        slidesPerView: 4,  
      },
    }
  });
  let swiper3 = new Swiper('.proTxt',{
    loop: true,
    touchRatio: 0,
  });
  
  swiper2.controller.control = swiper3;
  swiper3.controller.control = swiper2;

  // 제품 설명 공간 생성

  setTimeout(() => {
    if ($(window).width() > 768){
      let proTxt = document.querySelector('.proTxt');
      let start = document.querySelector('.bestSlide .swiper-slide-active');
      let commonWidth = document.querySelector('.bestSlide .swiper-slide').offsetWidth;
      start.style.marginRight = commonWidth + 18 + 'px';
      proTxt.style.width = commonWidth + 'px';
      proTxt.style.left = commonWidth + 18 + 'px';
    }
  }, 500);

  window.addEventListener('resize', function() {
    setTimeout(() => {
      if ($(window).width() > 768){
        let proTxt = document.querySelector('.proTxt');
        let start = document.querySelector('.bestSlide .swiper-slide-active');
        let commonWidth = document.querySelector('.bestSlide .swiper-slide').offsetWidth;
        start.style.marginRight = commonWidth + 18 + 'px';
        proTxt.style.width = commonWidth + 'px';
        proTxt.style.left = commonWidth + 18 + 'px';
      }
    }, 500);
  }, true);

  // 화면너비에따른 슬라이드 높이 변경

  let bestSlides = document.querySelectorAll('.bestSlide .swiper-slide');
  let fixLoopHeight;

  swiper2.on('slideChangeTransitionStart', (e) => {
    let activeWidth = document.querySelector('.bestSlide .swiper-slide').offsetWidth;
    let active = document.querySelector('.bestSlide .swiper-slide-active');
    let commonSlide = document.querySelectorAll('.bestSlide .swiper-slide');
    let idx = e.activeIndex;
    let slides = e.slides;
    slides.map((d, i) => {
      let ss = Math.abs(i - idx);
      d.style.height = fixLoopHeight[ss] + 'px';
    });
    if (window.innerWidth > 768) {
      slides.map((d, i) => {
        let ss = Math.abs(i - idx);
        d.style.height = fixLoopHeight[ss] + 'px';
      });
      for (let j = 0; j < commonSlide.length; j++) {
        commonSlide[j].style.marginRight = '18px';
      }
      active.style.marginRight = activeWidth + 18 + 'px';
    }
  });

  function setFixLoopHeight() {
    if ($(window).width()  <= 768) {
      fixLoopHeight = [320, 256, 300, 236];
    } else if ($(window).width()  <= 1024) {
      fixLoopHeight = [440, 376, 430, 356];
    } else {
      fixLoopHeight = [470, 406, 460, 386];
    }
  
    bestSlides.forEach((slide, i) => {
      let patternIndex = i % fixLoopHeight.length;
      slide.style.height = fixLoopHeight[patternIndex] + 'px';
    });
  }

  setFixLoopHeight();
  window.addEventListener('resize', setFixLoopHeight);

  // 이벤트 리스트 애니메이션

  let eventList = document.querySelectorAll('.eventList li');

  eventList.forEach((list) => {
    list.addEventListener("click", () => {
      eventList.forEach((e) => {
        e.classList.remove('active');
        e.querySelector('h3').classList.remove('head3');
        e.querySelector('h3').classList.add('head4');
      });
  
      list.classList.add('active');
      list.querySelector('h3').classList.add('head3');
      list.querySelector('h3').classList.remove('head4');
    });
  });
 
  // 회사가치 스크롤 이벤트

  let companyOffset = $('.company').offset();

  $( window ).scroll( function() {
    if ( $( document ).scrollTop() >  companyOffset.top - 600){
      $('.company .dim').addClass('dimOff')
      $('.company .dim h2').addClass('opac')
      $('.company .dim p').addClass('opac')
    }
  })

  // 지도 api

  new daum.roughmap.Lander({
		"timestamp" : "1686118424934",
		"key" : "2f2kb",
		"mapHeight" : "320"
	}).render();
} 
);