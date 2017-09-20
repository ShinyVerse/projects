//prevent spoilerphobes from seeing spoilerphobes
//Solution: Hide them and reveal through user interaction

//1. Hide spoiler
$(".spoiler span").hide();
//2. Add a button
$(".spoiler").append("<button>Reveal Spoiler</button>");
//3.When button pressed:
$(".spoiler button").click(function(){
  //3.1 Show the spoiler
  //this shows the previous span before the button (as it is appended to the end.)
  $(this).prev(".spoiler span").show();
  //3.2 Get rid of button
  $(this).remove();
});
