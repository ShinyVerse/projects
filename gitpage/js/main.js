var nav = document.getElementById("navBar");
var navLine = document.getElementById("navLine");
var hamburger = document.getElementById("menuButton");
var calcScreen = document.getElementById("calcScreen");
var calcCase = document.getElementById("calculatorCase");

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

//calculator function.
calcCase.onclick = function() {
  // alert(event.target.innerHTML);
  check(event.target.innerHTML);
};

var fresh = true;
  // calcScreen.innerHTML = calcSoFar action jointArr;
var secondNum = [];
var firstNum = [];
var buttonPressed = "";
var first = 0;
var second = 0;
var store = {

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
    if (fresh){
      firstNum.push(result);
      calcScreen.innerHTML = firstNum.join("");
      first = parseInt(firstNum.join(""));
    } else {
      secondNum.push(result);
      calcScreen.innerHTML = secondNum.join("");
      second = parseInt(secondNum.join(""));
      console.log(buttonPressed, first, second);
    }

      break;
    case "÷":
    fresh = false;
    buttonPressed = "divide";
    calcScreen.innerHTML = 0;
      break;
    case "x":
    fresh = false;
    buttonPressed = "times";
    calcScreen.innerHTML = 0;
      break;
    case "-":
    fresh = false;
    buttonPressed = "minus";
    calcScreen.innerHTML = 0;
      break;
    case "+":
    fresh = false;
    buttonPressed = "plus";
    calcScreen.innerHTML = 0;
      break;
    case "C":
    firstNum = [];
    secondNum = [];
    buttonPressed = "";
    fresh = true;
    first = 0;
    second = 0;
    calcScreen.innerHTML = 0;

      break;
    case "=":
     checkOperator(buttonPressed, first, second);
      break;
    default:
      alert("default");
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
      alert("default");
  }
}
