let swiper = new Swiper(".thumbSlide", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
let swiper2 = new Swiper(".bigSlide", {
  loop: true,
  spaceBetween: 16,
  thumbs: {
    swiper: swiper,
  },
});

let swiper3 = new Swiper(".thumbSlide2", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
let swiper4 = new Swiper(".bigSlide2", {
  loop: true,

  thumbs: {
    swiper: swiper3,
  },
});

let colorClick = document.querySelectorAll(".naming div > div");
let colorImg = document.querySelectorAll(".proImgArea");


for (let i = 0; i < colorClick.length; i++) {
  colorClick[i].addEventListener("click", function () {
      for (let j = 0; j < colorClick.length; j++) {
        colorClick[j].classList.remove('selected');
      }
      this.classList.add('selected');

      let colorIdx = Array.from(colorClick).indexOf(this);

      for (let k = 0; k < colorImg.length; k++) {
        colorImg[k].classList.remove('visible');
      }
      colorImg[colorIdx].classList.add("visible")
  });
}


let proH1 = document.querySelectorAll(".he1");
let proH2 = document.querySelectorAll(".he2");
let proW1;
let proW2;


let heightChange = () => {
  proW1 = document.querySelector(".wi1").offsetWidth;
  proW2 = document.querySelector(".wi2").offsetWidth;
  for (let i = 0; i < proH1.length; i++) {
    proH1[i].style.height = proW1 + "px";
  }
  for (let j = 0; j < proH2.length; j++) {
    proH2[j].style.height = proW2 + "px";
  }
};

heightChange();

window.addEventListener('resize', () => {
  proW1 = document.querySelector(".wi1").offsetWidth;
  proW2 = document.querySelector(".wi2").offsetWidth;

  heightChange(); 
});

let detailOn = document.querySelectorAll(".prodTech .cont > div")

window.addEventListener("scroll", () => {
  for (let i = 0; i < detailOn.length; i++) {
    if (window.pageYOffset > detailOn[i].offsetTop - 400) {
      detailOn[i].classList.remove("leftOn", "rightOn");
    }
  }
});