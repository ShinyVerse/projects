var carrotPlus = document.getElementById("carrotPlus");
var chocoPlus = document.getElementById("chocoPlus");
var tomPlus = document.getElementById("tomPlus");

var carrotMinus = document.getElementById("carrotMinus");
var chocoMinus  = document.getElementById("chocoMinus");
var tomMinus  = document.getElementById("tomMinus");

var carrotCount = document.getElementById("carrotCount");
var chocoCount = document.getElementById("chocoCount");
var tomCount = document.getElementById("tomCount");

var addToCart = document.getElementById("addToCart");

var shoppingCart = {
  "carrots": 0,
  "chocolate": 0,
  "tomatoes": 0
}
carrotCount.innerHTML = shoppingCart["carrots"];
chocoCount.innerHTML = shoppingCart["chocolate"];
tomCount.innerHTML = shoppingCart["tomatoes"];

setInterval(function()
{
  carrotCount.innerHTML = shoppingCart["carrots"];
  chocoCount.innerHTML = shoppingCart["chocolate"];
  tomCount.innerHTML = shoppingCart["tomatoes"];
}, 500);


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
 shoppingCart["carrots"] = shoppingCart["carrots"] - 1;
});
chocoMinus.addEventListener( "click", function(){
  shoppingCart["chocolate"] = shoppingCart["chocolate"] - 1;
});
tomMinus.addEventListener( "click", function(){
  shoppingCart["tomatoes"] = shoppingCart["tomatoes"] - 1;
});


addToCart.addEventListener("click", function(){
  let total = shoppingCart["tomatoes"] + shoppingCart["chocolate"] + shoppingCart["carrots"];
  document.getElementById("cartBubble").innerHTML = total;
})
