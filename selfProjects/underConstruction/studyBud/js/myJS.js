$('.singleItem').slick();

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

// Action when mainBody buttons pressed
var prevCurrent;
var current = 2;
var sectionLength = $(".section").length;

$("#mainLeftButton").on("click", function(){
 if (current < 2){
   prevCurrent = current;
    current = sectionLength;
    $("#section" + prevCurrent).css("z-index", "-10");
    $("#section" + current).css("z-index", "40");
  } else {
  prevCurrent = current;
  current--;
  $("#section" + prevCurrent).css("z-index", "-10");
  $("#section" + current).css("z-index", "40");
}
});

$("#mainRightButton").on("click", function(){
  if (current > sectionLength - 1 ){
  prevCurrent = current;
  current = 1;
  $("#section" + prevCurrent).css("z-index", "-10");
  $("#section" + current).css("z-index", "40");
} else {
  prevCurrent = current;
  current++;
  $("#section" + prevCurrent).css("z-index", "-10");
  $("#section" + current).css("z-index", "40");
}
});
