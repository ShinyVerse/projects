var calcScreen = document.getElementById("calcScreen");
var calcCase = document.getElementById("calculatorCase");
var symbols = document.getElementsByClassName("symbol");
var calcScreen = document.getElementById("calcScreen1");
var calcScreen = document.getElementById("calcScreen2");

var firstNum = [];
var secondNum = [];

var freshCalc = true;
var first = null;
var second = null;
var buttonPressed = "";

calcCase.onclick = function() {
  // alert(event.target.innerHTML);
  check(event.target.innerHTML);
};


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
    if(freshCalc){
      firstNum.push(result);
      first = firstNum.join("");
    }
    else {
      secondNum.push(result);
      second = secondNum.join("");
    }
      break;
    case "÷":
    buttonPressed = "divide";
      break;
    case "x":
    buttonPressed = "times";
      break;
    case "-":
    buttonPressed = "minus";
      break;
    case "+":
    buttonPressed = "plus";
      break;
    case "C":
    console.log(result);

      break;
    case "=":
  console.log(result);
      break;
    default:
  }

}



function operatorChecker(a, b, pressed){
    switch (pressed) {
      case "times":
      return a * b;
      case "plus":
      return a + b;
      case "minus":
      return a - b;
      case "divide":
      return a / b;
  }
}
