  // 메뉴
  let gnb = document.querySelectorAll(".gnb li");
  let hambugerMenu = document.querySelector(".hambuger");
  let closeBtn = document.querySelector('.close');
  let nav = document.querySelector("nav");

  if (window.innerWidth > 1024) {
    for(let i = 0; i < gnb.length; i++){
      gnb[i].addEventListener("mouseenter", function(){
        this.children[1].classList.add("slideDown")
      })
      for(let j = 0; j < gnb.length; j++){
        gnb[j].addEventListener("mouseleave", function(){
          this.children[1].classList.remove("slideDown")
        })
      }
    }
  }else{
    hambugerMenu.addEventListener('click', function(){
      nav.classList.add('on')
    })
    closeBtn.addEventListener('click', function(){
      nav.classList.remove('on')
    })
  }
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
      for(let i = 0; i < gnb.length; i++){
        gnb[i].addEventListener("mouseenter", function(){
          this.children[1].classList.add("slideDown")
        })
        for(let j = 0; j < gnb.length; j++){
          gnb[j].addEventListener("mouseleave", function(){
            this.children[1].classList.remove("slideDown")
          })
        }
      }
    }else{
      hambugerMenu.addEventListener('click', function(){
        nav.classList.add('on')
      })
      closeBtn.addEventListener('click', function(){
        nav.classList.remove('on')
      })
    }
  },true)