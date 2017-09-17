var myData = JSON.parse(chickenData);
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

function addDiv(number){
    //1.1 inserts as many availableChicken divs to the dom depending on the length
  var chickenDivs = "<div class='availableChicken'></div>".repeat(number);
  $("#chickenShow").append(chickenDivs);
  //2.0 loop through the chickens and add to each availableChicken div
  $('.availableChicken').each(function(index){
    $(this).append("Name: " + myData.chickens[index].name + "</br>");
    $(this).append("age: " + myData.chickens[index].age + "</br>");
    $(this).append("Price £" + myData.chickens[index].price + "</br>");
  });
};

addDiv(dataLength);
