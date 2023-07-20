let swiper1 = new Swiper('.mvSlide',{
  slidesPerView: 1,
  pagination: {
    el: '.mvSlide .swiper-pagination',
    type: 'progressbar',
  },
})

let listClick = document.querySelectorAll(".proPageList li");

for (let i = 0; i < listClick.length; i++) {
  listClick[i].addEventListener("mouseenter", function () {
    let colorBtn = this.querySelectorAll(".colorWrap div");
    let imgChange = this.querySelectorAll(".imgWrap img");

    for (let j = 0; j < colorBtn.length; j++) {
      colorBtn[j].addEventListener("click", function () {
        for (let k = 0; k < colorBtn.length; k++) {
          colorBtn[k].classList.remove('selected');
        }
        this.classList.add('selected');

        let colorIdx = Array.from(colorBtn).indexOf(this);

        for (let k = 0; k < imgChange.length; k++) {
          imgChange[k].classList.remove('visible');
        }
        imgChange[colorIdx].classList.add('visible');
      });
    }
  });
}