var myInfoSite = document.querySelector(".myInfo-site");

if (myInfoSite) {
  var button = myInfoSite.querySelector("button");
  var srOnly = button.querySelector(".sr-only");

  var callBack = function callBack() {
    EventHandler.trigger(button, "click");
  };

  var bodyClick = function bodyClick(e) {
    if (!SelectorEngine.parents(e.target, ".myInfo-site")[0]) {
      // callBack();
      myInfoSite.classList.remove("is-active");
      srOnly.textContent = "열기";
    }
  };

  button.addEventListener("click", function () {
    if (myInfoSite.classList.contains("is-active")) {
      myInfoSite.classList.remove("is-active");
      srOnly.textContent = "열기";
    } else {
      myInfoSite.classList.add("is-active");
      srOnly.textContent = "닫기";
      myInfoSite.addEventListener("keydown", function (e) {
        moveFocus(e, myInfoSite, callBack);
      });
      document.addEventListener("click", bodyClick);
    }
  });
}
$("html").click(function (e) {
  if ($(e.target).parents(".myInfo").length < 1) {
    $(".myInfo-site").removeClass("is-active");
  }
});
$(function () {
  $("#trxIdx04 > ul > li > a").each(function (echIdx) {
    $(this).click(function () {
      $("#trxIdx04 > ul > li > a.on").removeClass("on");
      $(this).addClass("on");
      $(".trxIdx04Cnt").hide();
      $(".trxIdx04Cnt").eq(echIdx).show();
    });
  });

  var aniPer = 0.6;
  $(window).scroll(function () {
    if ($(window).outerWidth() <= 767) {
      aniPer = 0.95;
    } else {
      aniPer = 0.7;
    }
    $(".trxAnm").each(function () {
      if (
        $(window).scrollTop() + $(window).outerHeight() * aniPer >=
        $(this).offset().top
      ) {
        $(this).addClass("on");
      } else {
        $(this).removeClass("on");
      }
    });

    if ($(window).scrollTop() > $(window).outerHeight() * 0.1) {
      $(".trxHdr").addClass("hvr");
      $(".tkita_note > .trxHdr").removeClass("hvr");
      $(".trxHdr").css({ "line-height": "68px" });
      // $(".trxHdrLgo img").attr("src","/assets/img/img_logoHvr.png");
    } else {
      $(".trxHdr").removeClass("hvr");
      $(".trxHdr").css({ "line-height": "106px" });
      $(".tkita_note > .trxHdr").css({ "line-height": "68px" });
      // $(".trxHdrLgo img").attr("src","/assets/img/img_logo.png");
    }
  });

  var textSlider = new Swiper(".text-slider", {
    // autoplay: {
    //   delay: 6000,
    //   disableOnInteraction: false
    // },
    // slidesPerView: '688px',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

$(".sub-menu-down").on("click", function () {
  $(this).siblings(".sub-menu").toggle();
  $(this).toggleClass("active");
});

$("input, textarea").keyup(function () {
  if ($(this).val() != "") {
    $(this).addClass("notEmpty");
  } else {
    $(this).removeClass("notEmpty");
  }
});

var coll = document.getElementsByClassName("folder");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var arrow = this.firstChild;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// input x 버튼
var $ipt = $(".inputClear"),
  $clearIpt = $(".btnClear");

$ipt.keyup(function () {
  $(this)
    .siblings(".btnClear")
    .toggle(Boolean($(this).val()));
});

$clearIpt.toggle(Boolean($ipt.val()));
$clearIpt.click(function () {
  $(this).siblings(".inputClear").val("").focus();
  $(this).hide();
});

$(".inputClear").keyup(function () {
  if (".inputClear".val == "") {
    $(".confirm").attr("disabled", "true");
  } else {
    $(".confirm").attr("disabled", "false");
  }
});

// let input = document.querySelector(".inputClear");
// let button = document.querySelector(".btnClear");
// button.disabled = true;
// input.addEventListener("change", stateHandle);
// function stateHandle() {
//   if (input.value === "") {
//     button.disabled = true;
//   } else {
//     button.disabled = false;
//   }
// }
