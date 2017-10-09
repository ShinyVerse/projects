var myData = JSON.parse(chickenData);
var hasBeenClicked = false;
// alert(myData.chickens[0].name);
// alert(myData.chickens[1].name);
// alert(myData.chickens[2].name);
//
// var chicken1 = myData.chickens[0].name;
// var chicken2 = myData.chickens[1].name;
// var chicken3 = myData.chickens[2].name;
//
var dataLength = myData.chickens.length;
//
// var $newChicken = $("<div class='availableChicken'></div>");



//1.0 take the length of chickens
    //1.1 inserts as many availableChicken divs to the dom depending on the length
  var $chickenDivs = "<div class='availableChicken'></div>".repeat(dataLength);
  $("#chickenShow").append($chickenDivs);
  //2.0 loop through the chickens and add to each availableChicken di





function displayInformation(){
  $('.availableChicken').each(function(index){
    $(this).append("Name: " + myData.chickens[index].name + "</br>");
    $(this).append("age: " + myData.chickens[index].age + "</br>");
    $(this).append("Price £" + myData.chickens[index].price + "</br>");
    hasBeenClicked = true;
  });
}

$(".availableChicken").on("click", function(){
  if (hasBeenClicked){
    $(this).empty()
    $(this).removeClass("dropDown");
    hasBeenClicked = false;
  } else {
  $(this).addClass("dropDown");
  var listItem = $(this);
  var index =  $( "div .availableChicken" ).index( listItem );
  $(this).append("Name: " + myData.chickens[index].name + "</br>");
  $(this).append("age: " + myData.chickens[index].age + "</br>");
  $(this).append("Price £" + myData.chickens[index].price + "</br>");
  hasBeenClicked = true;
}
});






//3 create an overlay
var $overlay = $('<div class="dropDown"></div>');

//add overlay


  //3.1 hide overlay

  // 3.2 When chicken hovered over overlay appears

  //3.3 When not hovered over it disappears


/*$(".availableChicken").on("click", function(){
  if (hasBeenClicked){
    $(this).empty()
    hasBeenClicked = false;
  } else {
  var listItem = $(this);
  var index =  $( "div .availableChicken" ).index( listItem );
  $(this).append("Name: " + myData.chickens[index].name + "</br>");
  $(this).append("age: " + myData.chickens[index].age + "</br>");
  $(this).append("Price £" + myData.chickens[index].price + "</br>");
  hasBeenClicked = true;
}
});*/
