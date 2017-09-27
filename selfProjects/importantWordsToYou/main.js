const words = ["love", "family","money","fame","flowers","respect","fun","music","food","animals","movies",
                "Friends","tv","games","stories","writing","deserts","holidays","photographs","dancing","cartoons",
                "drawing","walking","singing","books","space","nature","dreams","learning","jokes","acknowledgement"];

var $ul = "<ul></ul>";

//Aim: For user to be able to click on keywords and have that target change to a selected item.

  //add an li for each item in the 'words' array
$.each( words, function(index, value){
  $("#mainContainer").append("<li>" + value + "</li>");
})
//when user clicks on an li within the ul
$("#mainContainer li").on("click", function(){
  $(this).toggleClass("important");
});
  //target word adds a class to toggle appearance
