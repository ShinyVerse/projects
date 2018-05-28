var calcScreen = document.getElementById("calcScreen");
var calcCase = document.getElementById("calculatorCase");
var symbols = document.getElementsByClassName("symbol");


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
        if (!fresh){
        buttonPressed = "divide";
        first = first / second;
        secondNum = [];
        second = 0;
      }
         if (fresh){
        fresh = false;
      }
      buttonPressed = "divide";
      calcScreen.innerHTML = first;
      break;
    case "x":
        if (!fresh){
        buttonPressed = "times";
        first = first * second;
        secondNum = [];
        second = 0;
      }
         if (fresh){
        fresh = false;
      };
      buttonPressed = "times";
      calcScreen.innerHTML = first;
      break;
    case "-":
          if (!fresh){
        buttonPressed = "minus";
        first = first - second;
        secondNum = [];
        second = 0;
      }
      if (fresh){
        fresh = false;
      }
      buttonPressed = "minus";
      calcScreen.innerHTML = first;
      break;
    case "+":
      if (!fresh){
        buttonPressed = "plus";
        first = first + second;
        secondNum = [];
        second = 0;
      }
         if (fresh){
        fresh = false;
      }
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
