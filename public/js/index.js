var typed = new Typed("#index_write", {
  stringsElement: "#index_h1",
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
  showCursor: false,
});
//En caso de hacer scroll y haber aceptado las cookies nos redirige a otra página
window.addEventListener("wheel", function () {
  if (localStorage.getItem("cookies-aceptadas")) {
    window.location.href = "http://127.0.0.1:1337/aboutMe";
  }
});
