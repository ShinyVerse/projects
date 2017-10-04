var myData = JSON.parse(chickenData);
var $newDiv = $('<li class="availableChicken"></li>');
var dataLength = myData.chickens.length;






  function Chicken(name, age, price){
    this.name = name,
    this.age = age,
    this.price = price
  }


 $.each(function(i, myData){
   for (var i in myData.chickens){
     $("#chickenShow").append($newDiv);
   }
 })
