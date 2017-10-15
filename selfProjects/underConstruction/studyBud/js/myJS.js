$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1000,
    outDuration: 500,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});

var $navButton = $("#navButton");
var userBoxArrayColors = ["#81ffb7", "#00ff6d", "#3bf796", "#79ff87", "#2bd53c", "#7cffa8", "#24ff8f", "#55ffa9", "#74ff8a", "#0eff84"];

function randomNumber(item){
  return Math.floor(Math.random()*item.length);
}


$(".userBox").each(function(index){
  $(this).css("background-color", userBoxArrayColors[randomNumber(userBoxArrayColors)] );
});

$navButton.on("click", function(){
  if ($("#navBar").hasClass("closedTab")) {
    $("#navBar").removeClass("closedTab").addClass("openedTab");
    $navButton.val("/"+"\\");
  } else {
    $("#navBar").removeClass("openedTab").addClass("closedTab");
    $navButton.val("\\/");
  }
});
