

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

$("#mainLeftButton").on("click", function(){
  alert("left clicked!");
});

$("#mainRightButton").on("click", function(){
  alert("right clicked!");
});
