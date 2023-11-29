//Cambiar clases dependiendo del width
$(window).resize(function () {
  if ($(window).width() <= 900) {
    showMenuP();
    hideMenuNav();
    showMenuImg();
    showBtnM();
    hideBtnC();

    changeCSS(".footer", "justify-content", "center");
    changeCSS(".footer", "height", "15vh");
    changeCSS("#footer_menu", "display", "none");
    changeCSS(".projects_project", "margin-top", "10vh");
    changeCSS(".projects_project", "background-color", "transparent");
    changeCSS(".projects_project", "backdrop-filter", "none");
    changeCSS(".projects_project", "box-shadow", "none");
    changeCSS(".projects_project", "border", "none");
  } else {
    changeCSS(".footer", "justify-content", "space-between");
    changeCSS(".footer", "height", "10%");
    changeCSS("#footer_menu", "display", "inline");
    changeCSS(".projects_project", "margin-top", "26vh");
    changeCSS(".projects_project", "background-color", "rgba(0, 0, 0, 0.6)");
    changeCSS(".projects_project", "backdrop-filter", "blur(5px)");
    changeCSS(
      ".projects_project",
      "box-shadow",
      "0 0 40px rgba(8, 7, 16, 0.6)"
    );
    changeCSS(".projects_project", "2px solid rgba(255, 255, 255, 0.1)");

    hideMenuP();
    showMenuNav();
    hideMenuImg();
    hideBtnM();
    checkWidth();
    hideBtnC();
  }
});

//Mustra u oculta el menú desplegable
let displayX = document.getElementById("menuNav2");
let btnM = document.getElementById("btnM");
let btnC = document.getElementById("btnC");
btnM.addEventListener("click", () => {
  hideMenuP();
  showMenuNav();
  hideBtnM();
  showBtnC();
  showMenuImgC();

  if ($(window).width() <= 900) {
    changeCSS("#head_menu", "height", "100%");
    changeCSS("#menuNavv2", "margin-top", "10rem");
  }
});

btnC.addEventListener("click", () => {
  showMenuP();
  hideMenuNav();
  showBtnM();
  hideBtnC();
  hideMenuImgC();

  if ($(window).width() <= 900) {
    changeCSS("#head_menu", "height", "10vh");
    changeCSS("#menuNavv2", "margin-top", "0");
  }
});

//Cambiar menú al scrollear
window.addEventListener("scroll", () => {
  if ($(window).width() > 900) {
    if ($(window).scrollTop() === 0) {
      hideMenuP();
      hideMenuImg();
      hideBtnM();
      showMenuP2();
      showMenuNav();
      hideMenuImgC();
      hideBtnC();
      changeCSS("#head_menu", "height", "23vh");
    } else {
      showMenuP();
      showMenuImg();
      showBtnM();
      hideMenuP2();
      hideMenuNav();
      hideMenuImgC();
      hideBtnC();
      changeCSS("#head_menu", "height", "10vh");
    }
  }
});

function checkWidth() {
  if ($(window).width() <= 900) {
    hideMenuNav();
    showMenuImg();
    showMenuP();
    showBtnM();

    changeCSS("#head_menu", "height", "10vh");
    changeCSS(".projects_project", "margin-top", "10vh");
    changeCSS(".projects_project", "background-color", "transparent");
    changeCSS(".projects_project", "backdrop-filter", "none");
    changeCSS(".projects_project", "box-shadow", "none");
    changeCSS(".projects_project", "border", "none");
    changeCSS("#footer_menu", "display", "none");
    changeCSS(".footer", "justify-content", "center");
    changeCSS(".footer", "height", "15vh");
  } else {
    if ($(window).scrollTop() !== 0) {
      hideMenuNav();
      showMenuImg();
      showBtnM();
      showMenuP();
      hideMenuP2();

      changeCSS("#head_menu", "height", "10vh");
      changeCSS(".projects_project", "margin-top", "26vh");
      changeCSS("#footer_menu", "display", "visible");
      changeCSS(".footer", "height", "10%");
      changeCSS(".footer", "justify-content", "space-between");
    }
  }
}
