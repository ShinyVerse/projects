var nav = document.getElementById("navBar");
var navLine = document.getElementById("navLine");
var hamburger = document.getElementById("menuButton");

function toggleNav(){
  nav.classList.toggle("hidden");
  navLine.classList.toggle("hidden");
  hamburger.classList.toggle("is-active");
}

hamburger.addEventListener("click" , function(){
  toggleNav();
})
