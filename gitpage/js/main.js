var nav = document.getElementById("navBar");
var navLine = document.getElementById("navLine");
var hamburger = document.getElementById("menuButton");
var calcScreen = document.getElementById("calcScreen");
var calcCase = document.getElementById("calculatorCase");
var symbols = document.getElementsByClassName("symbol");

//called when hamburger is clicked on
function toggleNav() {
  nav.classList.toggle("hidden");
  navLine.classList.toggle("hidden");
  hamburger.classList.toggle("is-active");
}
//toggle the hamburger menu to reveal navbar in mobile mode.
hamburger.addEventListener("click", function() {
  toggleNav();
});

//calculator function: bubbling/capturing effect
calcCase.onclick = function() {
  // alert(event.target.innerHTML);
  check(event.target.innerHTML);
};

//fresh is set to false when calculator in process of a sum.
//below is calculators initial state.
var fresh = true;
// calcScreen.innerHTML = calcSoFar action jointArr;
var secondNum = [];
var firstNum = [];
var buttonPressed = "";
var first = 0;
var second = 0;

//returns calculator when pressing C or when pressing = if no number selected first.
function clearCalcAll() {
  firstNum = [];
  secondNum = [];
  //saves the operator to be used on both numbers
  buttonPressed = "";
  fresh = true;
  first = 0;
  second = 0;
  calcScreen.innerHTML = 0;
}

//depending on button on calcCase clicked.
function check(result) {
  switch (result) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    //pushes first number.
      if (fresh) {
        firstNum.push(result);
        calcScreen.innerHTML = firstNum.join("");
        first = parseInt(firstNum.join(""));
      } else {
        if (buttonPressed === "") {
          setTimeout(function() {
            calcScreen.innerHTML = first;
          }, 50);
          //highlights the symbols as red if the user trys to enter number without first an operator(x,/,+ etc)
          Array.prototype.map.call(symbols, function(symbol) {
            symbol.classList.add("symbolError");
            setTimeout(function() {
              symbol.classList.remove("symbolError")
            }, 500);
          });
          calcScreen.innerHTML = secondNum.join("");
          return calcScreen.innerHTML = secondNum.join("");
        }
        secondNum.push(result);
        calcScreen.innerHTML = secondNum.join("");
        second = parseInt(secondNum.join(""));
        // console.log(buttonPressed, first, second);
      }

      break;
    case "÷":
      fresh = false;
      buttonPressed = "divide";
      calcScreen.innerHTML = first;
      break;
    case "x":
      fresh = false;
      buttonPressed = "times";
      calcScreen.innerHTML = first;
      break;
    case "-":
      fresh = false;
      buttonPressed = "minus";
      calcScreen.innerHTML = first;
      break;
    case "+":
      fresh = false;
      buttonPressed = "plus";
      calcScreen.innerHTML = first;
      break;
    case "C":
      clearCalcAll();

      break;
    case "=":
      checkOperator(buttonPressed, first, second);
      buttonPressed = "";
      break;
    default:

  }
}
function checkOperator(operator, a, b) {
  switch (operator) {
    case "divide":
      calcScreen.innerHTML = a / b;
      first = calcScreen.innerHTML = a / b;
      secondNum = [];
      buttonPressed = "";
      //  function divide(a, b){
      // return calcScreen.innerHTML = a / b;
      // }
      break;
    case "times":
      calcScreen.innerHTML = a * b;
      first = calcScreen.innerHTML = a * b;
      secondNum = [];
      buttonPressed = "";
      break;
    case "minus":
      calcScreen.innerHTML = a - b;
      first = calcScreen.innerHTML = a - b;
      secondNum = [];
      buttonPressed = "";
      break;
    case "plus":
      calcScreen.innerHTML = a + b;
      first = calcScreen.innerHTML = a + b;
      secondNum = [];
      buttonPressed = "";
      break;
    default:
      clearCalcAll();
  }
}

///////////////////////// CAKE SELECTOR JAVASCRIPT////////////////////////////
// BY ELEMENT GRAB: allows js to have quick access to the id of a button
//adds
var cakePlus = document.getElementById("cakePlus");
var jamPlus = document.getElementById("jamPlus");
var creamPlus = document.getElementById("creamPlus");
//same for minus
var cakeMinus = document.getElementById("cakeMinus");
var jamMinus  = document.getElementById("jamMinus");
var creamMinus  = document.getElementById("creamMinus");
//count bubbles to show current amount chosen.
var cakeCount = document.getElementById("cakeCount");
var jamCount = document.getElementById("jamCount");
var creamCount = document.getElementById("creamCount");
// add to cart total button
var addToCart = document.getElementById("addToCart");

//shopping cart dictionary. Will overwrite number, but not add a new selection if name
//already taken here.
var shoppingCart = {
  "carrots": 0,
  "chocolate": 0,
  "tomatoes": 0
}

cakeCount.innerHTML = shoppingCart["carrots"];
jamCount.innerHTML = shoppingCart["chocolate"];
creamCount.innerHTML = shoppingCart["tomatoes"];

//Must search for better way to refresh page allowing accurate tellings of bubble counts. {react will do this.}
setInterval(function()
{
  cakeCount.innerHTML = shoppingCart["carrots"];
  jamCount.innerHTML = shoppingCart["chocolate"];
  creamCount.innerHTML = shoppingCart["tomatoes"];
}, 500);

//need to find out how to refactor into one function.
cakePlus.addEventListener( "click", function(){
  shoppingCart["carrots"] = shoppingCart["carrots"] + 1;
});
jamPlus.addEventListener( "click", function(){
  shoppingCart["chocolate"] = shoppingCart["chocolate"] + 1;
});
creamPlus.addEventListener( "click", function(){
  shoppingCart["tomatoes"] = shoppingCart["tomatoes"] + 1;
});
cakeMinus.addEventListener( "click", function(){
  testForMinus(shoppingCart["carrots"]) ? shoppingCart["carrots"] = 0 : shoppingCart["carrots"] = shoppingCart["carrots"] - 1;
});
jamMinus.addEventListener( "click", function(){
  testForMinus(shoppingCart["chocolate"]) ? shoppingCart["chocolate"] = 0 : shoppingCart["chocolate"] = shoppingCart["chocolate"] - 1;
});
creamMinus.addEventListener( "click", function(){
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
