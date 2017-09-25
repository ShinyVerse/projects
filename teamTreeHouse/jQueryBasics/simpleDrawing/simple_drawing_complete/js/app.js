//No interaction, no changes.
//Solution: Add interactions; ability to change color to the selected, ability to draw on canvas only, ability to add new color.
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var $context = $canvas[0].getContext("2d");
var lastEvent;
var mousedown = false;

//When clicking on control list item
$(".controls").on("click", "li", function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //select clicked element
  $(this).addClass("selected");
  //cache current color here
  color = $(this).css("background-color");

});


//When addColor is pressed
$("#revealColorSelect").on("click", function(){
    changeColor();
    //show or hide color selector
    $("#colorSelect").toggle();
});


function changeColor(){
  //newColor span displays updated color
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb("+ r + "," + g + "," + b +")");
}

//When color sliders changes
$("input[type=range]").change(changeColor);/*This method is a shortcut for .on( "change", handler )
in the first two variations, and .trigger( "change" ) in the third.*/



//When addNewColor is pressed
$("#addNewColor").on("click", function(){
  var $newColor = $("<li></li>");
  //adding the current range selected color as background to the new li element
  $newColor.css("background-color" , $("#newColor").css("background-color"));
  //append color to the controls
  $(".controls ul").append($newColor);
  //select the new color
  $newColor.click();

});


//On mouse event on canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mousedown = true;
}).mousemove(function(e){
  if(mousedown){
    $context.beginPath();
    $context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    $context.lineTo(e.offsetX, e.offsetY);
    $context.strokeStyle = color;
    $context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mousedown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});
  //draw lines


  //drawing a box:
  // $context.beginPath();
  // $context.moveTo(10,10);
  // $context.lineTo(20,10);
  // $context.lineTo(20,20);
  // $context.lineTo(10,20);
  // $context.lineTo(10,10);
  // $context.stroke();
