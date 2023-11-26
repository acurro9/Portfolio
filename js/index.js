//Cambiar clases dependiendo del width
$(window).resize(function () {
  if ($(window).width() <= 900) {
    $("#menuNav").removeClass("visible");
    $("#menuNav").addClass("hidden");
    $("#menuImg").removeClass("hidden");
    $("#menuImg").addClass("visible");
    $("#btnM").removeClass("hidden");
    $("#btnM").addClass("visible");
    $(".projects_project").css("margin-top", "10vh");
    $("#footer_menu").css("display", "none");
    $(".footer").height("20vh");
    $(".footer").css("justify-content", "center");
    $(".projects_project").css("background-color", "transparent");
    $(".projects_project").css("backdrop-filter", "none");
    $(".projects_project").css("box-shadow", "none");
    $(".projects_project").css("border", "none");

    $("#menuP").addClass("visible");
    $("#menuP").removeClass("hidden");
  } else {
    $("#menuNav").addClass("visible");
    $("#menuNav").removeClass("hidden");
    $("#menuImg").addClass("hidden");
    $("#menuImg").removeClass("visible");
    $("#btnM").addClass("hidden");
    $("#btnM").removeClass("visible");
    $(".projects_project").css("margin-top", "26vh");
    $("#footer_menu").css("display", "inline");
    $(".footer").height("10%");
    $(".footer").css("justify-content", "space-between");
    $(".projects_project").css("background-color", "rgba(0, 0, 0, 0.6)");
    $(".projects_project").css("backdrop-filter", "blur(5px)");
    $(".projects_project").css("box-shadow", "0 0 40px rgba(8, 7, 16, 0.6)");
    $(".projects_project").css("border", "2px solid rgba(255, 255, 255, 0.1)");

    $("#menuP").removeClass("visible");
    $("#menuP").addClass("hidden");
  }
});

//Mustra u oculta el menú desplegable
let displayX = document.getElementById("menuNav2");
let btnM = document.getElementById("btnM");
let btnC = document.getElementById("btnC");
btnM.addEventListener("click", () => {
  $("#menuP").addClass("hidden");
  $("#menuP").removeClass("visible");

  $("#menuNav").addClass("visible");
  $("#menuNav").removeClass("hidden");

  $("#btnM").addClass("hidden");
  $("#btnM").removeClass("visible");

  $("#btnC").addClass("visible");
  $("#btnC").removeClass("hidden");

  $("#menuImgC").addClass("visible");
  $("#menuImgC").removeClass("hidden");
  if ($(window).width() <= 900) {
    $("#head_menu").height("100%");
    $("#menuNav2").css("margin-top", "10rem");
  }
});

btnC.addEventListener("click", () => {
  $("#menuP").removeClass("hidden");
  $("#menuP").addClass("visible");

  $("#menuNav").removeClass("visible");
  $("#menuNav").addClass("hidden");

  $("#btnM").removeClass("hidden");
  $("#btnM").addClass("visible");

  $("#btnC").removeClass("visible");
  $("#btnC").addClass("hidden");

  $("#menuImgC").removeClass("visible");
  $("#menuImgC").addClass("hidden");

  if ($(window).width() <= 900) {
    $("#head_menu").height("10vh");
    $("#menuNav2").css("margin-top", "0");
  }
});

//Cambiar menú al scrollear
window.addEventListener("scroll", function () {
  if ($(window).width() > 900) {
    if ($(window).scrollTop() === 0) {
      $("#menuP").addClass("hidden");
      $("#menuP").removeClass("visible");

      $("#menuImg").addClass("hidden");
      $("#menuImg").removeClass("visible");

      $("#btnM").addClass("hidden");
      $("#btnM").removeClass("visible");

      $("#menuP2").addClass("visible");
      $("#menuP2").removeClass("hidden");

      $("#menuNav").addClass("visible");
      $("#menuNav").removeClass("hidden");

      $("#menuImgC").removeClass("visible");
      $("#menuImgC").addClass("hidden");

      $("#btnC").removeClass("visible");
      $("#btnC").addClass("hidden");
    } else {
      $("#menuP").removeClass("hidden");
      $("#menuP").addClass("visible");

      $("#menuImg").removeClass("hidden");
      $("#menuImg").addClass("visible");

      $("#btnM").removeClass("hidden");
      $("#btnM").addClass("visible");

      $("#menuP2").removeClass("visible");
      $("#menuP2").addClass("hidden");

      $("#menuNav").removeClass("visible");
      $("#menuNav").addClass("hidden");

      $("#menuImgC").removeClass("visible");
      $("#menuImgC").addClass("hidden");

      $("#btnC").removeClass("visible");
      $("#btnC").addClass("hidden");
    }
  }
});

function checkWidth() {
  if ($(window).width() <= 900) {
    $("#menuNav").removeClass("visible");
    $("#menuNav").addClass("hidden");
    $("#menuImg").removeClass("hidden");
    $("#menuImg").addClass("visible");
    $("#menuP").addClass("visible");
    $("#menuP").removeClass("hidden");
    $("#btnM").removeClass("hidden");
    $("#btnM").addClass("visible");
    $("#head_menu").height("7vh");
    $(".projects_project").css("margin-top", "10vh");
    $(".projects_project").css("background-color", "transparent");
    $(".projects_project").css("backdrop-filter", "none");
    $(".projects_project").css("box-shadow", "none");
    $(".projects_project").css("border", "none");
    $("#footer_menu").css("display", "none");
    $(".footer").height("20vh");
    $(".footer").css("justify-content", "center");
  } else {
    $("#menuNav").addClass("visible");
    $("#menuNav").removeClass("hidden");
    $("#menuImg").addClass("hidden");
    $("#menuImg").removeClass("visible");
    $("#btnM").addClass("hidden");
    $("#btnM").removeClass("visible");
    $("#head_menu").height("7vh");
    $(".projects_project").css("margin-top", "26vh");
    $("#footer_menu").css("display", "visible");
    $(".footer").height("10%");
    $(".footer").css("justify-content", "space-between");
  }
}
