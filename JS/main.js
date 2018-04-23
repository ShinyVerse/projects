// BY ELEMENT GRAB: allows js to have quick access to the id of a button
//adds
var carrotPlus = document.getElementById("carrotPlus");
var chocoPlus = document.getElementById("chocoPlus");
var tomPlus = document.getElementById("tomPlus");
//same for minus
var carrotMinus = document.getElementById("carrotMinus");
var chocoMinus  = document.getElementById("chocoMinus");
var tomMinus  = document.getElementById("tomMinus");
//count bubbles to show current amount chosen.
var carrotCount = document.getElementById("carrotCount");
var chocoCount = document.getElementById("chocoCount");
var tomCount = document.getElementById("tomCount");
// add to cart total button
var addToCart = document.getElementById("addToCart");

//shopping cart dictionary. Will overwrite number, but not add a new selection if name
//already taken here.
var shoppingCart = {
  "carrots": 0,
  "chocolate": 0,
  "tomatoes": 0
}

carrotCount.innerHTML = shoppingCart["carrots"];
chocoCount.innerHTML = shoppingCart["chocolate"];
tomCount.innerHTML = shoppingCart["tomatoes"];

//Must search for better way to refresh page allowing accurate tellings of bubble counts. {react will do this.}
setInterval(function()
{
  carrotCount.innerHTML = shoppingCart["carrots"];
  chocoCount.innerHTML = shoppingCart["chocolate"];
  tomCount.innerHTML = shoppingCart["tomatoes"];
}, 500);

//need to find out how to refactor into one function.
carrotPlus.addEventListener( "click", function(){
  shoppingCart["carrots"] = shoppingCart["carrots"] + 1;
});
chocoPlus.addEventListener( "click", function(){
  shoppingCart["chocolate"] = shoppingCart["chocolate"] + 1;
});
tomPlus.addEventListener( "click", function(){
  shoppingCart["tomatoes"] = shoppingCart["tomatoes"] + 1;
});
carrotMinus.addEventListener( "click", function(){
  testForMinus(shoppingCart["carrots"]) ? shoppingCart["carrots"] = 0 : shoppingCart["carrots"] = shoppingCart["carrots"] - 1;
});
chocoMinus.addEventListener( "click", function(){
  testForMinus(shoppingCart["chocolate"]) ? shoppingCart["chocolate"] = 0 : shoppingCart["chocolate"] = shoppingCart["chocolate"] - 1;
});
tomMinus.addEventListener( "click", function(){
  testForMinus(shoppingCart["tomatoes"]) ? shoppingCart["tomatoes"] = 0 : shoppingCart["tomatoes"] = shoppingCart["tomatoes"] - 1;
});

//function to make sure item doesn't go below 0 ever.
function testForMinus(itemVal){
  if (itemVal <= 0){
    return true;
  }
}
addToCart.addEventListener("click", function(){
  let total = shoppingCart["tomatoes"] + shoppingCart["chocolate"] + shoppingCart["carrots"];
  document.getElementById("cartBubble").innerHTML = total;
})
