var nav = document.getElementById("navBar");
var navLine = document.getElementById("navLine");
var hamburger = document.getElementById("menuButton");
var calcCase = document.getElementById("calculatorCase");
var symbols = document.getElementsByClassName("symbol");
var calcScreen = document.getElementById("calcScreen1");
var calcScreen = document.getElementById("calcScreen2");

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


var fullArr = [];
var numArr = [];
var sym = "";
var num = null;
var mainResult = 0;
var fresh = true;
var mainRezFlag = false;
var expectingSymb = false;
var expectingNum = true;

calcCase.onclick = function() {
  // alert(event.target.innerHTML);
  check(event.target.innerHTML);
};

function check(keyed) {
  switch (keyed) {
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
    if (expectingSymb){
      Array.prototype.map.call(symbols, function(symbol) {
        symbol.classList.add("symbolError");
        setTimeout(function() {
          symbol.classList.remove("symbolError")
        }, 500);
      });
      break;
    }
    numArr.push(keyed);
    if(fresh){
      calcScreen2.innerHTML = numArr.join("");
      fresh = false;
      expectingNum = false;
    } else {
      let tempNum = numArr.join("");
      calcScreen2.innerHTML =  fullArr.join("") + tempNum;
      expectingNum = false;
    }
      break;
    case "÷":

    if (expectingSymb){
      expectingSymb = false;
    }
    if (!fresh){
      if (expectingNum){
        break;
      }
      num = numArr.join("");
      fullArr.push(num);
      fullArr.push("/");
      expectingNum = true;
      numArr = [];
      num = null;
      calcScreen2.innerHTML = fullArr.join("");
    }
      break;
    case "x":

    if (expectingSymb){
      expectingSymb = false;
    }
    if (!fresh){
      if (expectingNum){
        break;
      }
      num = numArr.join("");
      fullArr.push(num);
      fullArr.push("*");
      expectingNum = true;
      numArr = [];
      num = null;
      calcScreen2.innerHTML = fullArr.join("");
    }
      break;
    case "-":
    if (expectingSymb){
      expectingSymb = false;
    }
    if (!fresh){
      if (expectingNum){
        break;
      }
      num = numArr.join("");
      fullArr.push(num);
      fullArr.push("-");
      expectingNum = true;
      numArr = [];
      num = null;
      calcScreen2.innerHTML = fullArr.join("");
    }
      break;
    case "+":

    if (expectingSymb){
      expectingSymb = false;
    }
    if (!fresh){
      if (expectingNum){
        break;
      }
      num = numArr.join("");
      fullArr.push(num);

      fullArr.push("+");
      expectingNum = true;
      numArr = [];
      num = null;
      calcScreen2.innerHTML = fullArr.join("");
    }
      break;
    case "C":
     fullArr = [];
     numArr = [];
     sym = "";
     num = null;
   mainResult = 0;
    fresh = true;
    mainRezFlag = false;
    calcScreen2.innerHTML = " ";
    calcScreen1.innerHTML = " ";
    expectingSymb = false;
    console.log(fullArr);
      break;
    case "=":
    num = numArr.join("");
    fullArr.push(num);
    console.log("fullArr before = " +fullArr);
    numArr = [];
    num = null;
    if (!fresh && fullArr.length > 2){
      calcAll(fullArr, 0, false);
    }
    fullArr = [];
    num = null;
    numArr = [];
    numArr.push(mainResult);
    mainResult = 0;
    expectingSymb = true;
    calcScreen1.innerHTML = numArr.join("");
    calcScreen2.innerHTML = numArr.join("");
      break;
    default:
  }

}

function calcAll(arr, extra, flag){
  var main = 0;
  for (var i = 0; i < 2; i++){
    if (extra > 0){
      let pressed = arr[i];
      let a = extra;
      let b = parseFloat(arr[i+1]);
      let result = operatorChecker(a,b, pressed);
      let newArr = arr.slice(2);
      if (newArr.length > 1){
        calcAll(newArr, result, true);
      } else {
        console.log("rez" + result);
        return mainResult = result;
      }
    }
    if (extra === 0 && flag !== true){
      let pressed = arr[i+1];
      let a = parseFloat(arr[i]);
      let b = parseFloat(arr[i+2]);
      let result = operatorChecker(a,b, pressed);
      let newArr = arr.slice(3);
      if (newArr.length > 1){
        calcAll(newArr, result, true);
      }  else {
        calcScreen1.innerHTML = result;
        return mainResult = result;
      }
    }

  }
  return;
}

function operatorChecker(a, b, pressed){
    switch (pressed) {
      case "*":
      return a * b;
      case "+":
      return a + b;
      case "-":
      return a - b;
      case "/":
      return a / b;
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
