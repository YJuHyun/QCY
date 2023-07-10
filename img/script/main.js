$(document).ready(function () {
  // nav
  $(".main_menu > li").mouseenter(function () {
    $(".sub_menu").stop().slideDown();
    $(".header_bg").stop().slideDown();
  });

  $(".main_menu > li").mouseleave(function () {
    $(".sub_menu").stop().slideUp();
    $(".header_bg").stop().slideUp();
  });

  //sect3 icon
  $(".sale_name").each(function () {
    var firstImage = $(this).find("img:eq(0)");
    var secondImage = $(this).find("img:eq(1)");

    secondImage.hide(); // 초기에 두 번째 이미지 숨기기

    $(this)
      .on("mouseenter", function () {
        firstImage.hide(); // 첫 번째 이미지 숨기기
        secondImage.show(); // 두 번째 이미지 표시
      })
      .on("mouseleave", function () {
        firstImage.show(); // 첫 번째 이미지 표시
        secondImage.hide(); // 두 번째 이미지 숨기기
      });
  });

  //more_btn
  $(".more_btn").each(function () {
    var firstImage = $(this).find("img:eq(0)");
    var secondImage = $(this).find("img:eq(1)");

    secondImage.hide(); // 초기에 두 번째 이미지 숨기기

    $(this)
      .on("mouseenter", function () {
        firstImage.hide(); // 첫 번째 이미지 숨기기
        secondImage.show(); // 두 번째 이미지 표시
      })
      .on("mouseleave", function () {
        firstImage.show(); // 첫 번째 이미지 표시
        secondImage.hide(); // 두 번째 이미지 숨기기
      });
  });

  // /main_section6
  $(".slide6_img:gt(0)").hide();

  setInterval(function () {
    $(".slide6_img:first").fadeOut(2000).next().fadeIn(2000);
    $(".slide6_img:first").appendTo(".slide6");
  }, 5000);

  //main_section6 bg
  let slide6Imgs = document.querySelectorAll(".slide6_img img");

  let deemHeight;
  let deem = $(".background6 .deem_6");

  $(window)
    .resize(function () {
      if ($(window).width() <= 768) {
        slide6Imgs.forEach(function (elem, index) {
          var imgSrc = elem.getAttribute("src");
          imgSrc = imgSrc.replace(
            "_bg" + (index + 1) + ".jpg",
            "_bg" + +(index + 1) + "_tb.jpg"
          );
          elem.setAttribute("src", imgSrc);
          // deemHeight = $(".slide6 > li > img").height();
          // deem.height(deemHeight);
        });
      } else {
        slide6Imgs.forEach(function (elem, index) {
          var imgSrc = elem.getAttribute("src");
          imgSrc = imgSrc.replace(
            "_bg" + +(index + 1) + "_tb.jpg",
            "_bg" + (index + 1) + ".jpg"
          );
          elem.setAttribute("src", imgSrc);
          // deemHeight = $(".slide6 > li > img").height();
          // deem.height(deemHeight);
        });
      }
    })
    .trigger("resize");

  //send_btn
  $(".send_btn").each(function () {
    var firstImage = $(this).find("img:eq(0)");
    var secondImage = $(this).find("img:eq(1)");

    secondImage.hide(); // 초기에 두 번째 이미지 숨기기

    $(this)
      .on("mouseenter", function () {
        firstImage.hide(); // 첫 번째 이미지 숨기기
        secondImage.show(); // 두 번째 이미지 표시
      })
      .on("mouseleave", function () {
        firstImage.show(); // 첫 번째 이미지 표시
        secondImage.hide(); // 두 번째 이미지 숨기기
      });
  });

  //partners_logo
  var leftMoveSpeed = 3000;
  var rightMoveSpeed = 3000;

  function imgMoveLeft() {
    var ListLeft = $(".partners_logo_list_01");
    var firstList = ListLeft.children(".partners_logo_list_01 > li:first");
    var firstListWidth = firstList.width();
    ListLeft.append("<li>" + firstList.html() + "</li>");
    firstList.animate(
      {
        marginLeft: -firstListWidth
      },
      leftMoveSpeed,
      "linear",
      function () {
        $(this).remove();
        imgMoveLeft();
      }
    );
  }

  function imgMoveRight() {
    var ListRight = $(".partners_logo_list_02");
    var firstList = ListRight.children(".partners_logo_list_02 > li:first");
    var lastList = ListRight.children(".partners_logo_list_02 > li:last");
    var lastListWidth = lastList.width();
    ListRight.prepend(
      '<li style="margin-left:-' +
        lastListWidth +
        'px">' +
        lastList.html() +
        "</li>"
    );
    firstList.animate(
      {
        marginLeft: 0
      },
      rightMoveSpeed,
      "linear",
      function () {
        lastList.remove();
        imgMoveRight();
      }
    );
  }

  setTimeout(imgMoveLeft, 3000);
  imgMoveRight();

  // *********tablet
  $(".toggle_btn").click(function () {
    $(".menu_toggle").toggle();
  });
});

// JavaScript 코드
function lockScreenOrientation() {
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock("portrait");
  } else if (screen.lockOrientation) {
    screen.lockOrientation("portrait");
  } else if (screen.mozLockOrientation) {
    screen.mozLockOrientation("portrait");
  } else if (screen.msLockOrientation) {
    screen.msLockOrientation("portrait");
  }
}

// 초기 로드 시에 화면 고정
window.addEventListener("DOMContentLoaded", lockScreenOrientation);
