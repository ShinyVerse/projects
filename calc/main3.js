var calcScreen = document.getElementById("calcScreen");
var calcCase = document.getElementById("calculatorCase");
var symbols = document.getElementsByClassName("symbol");

var fullArr = [];
var numArr = [];
var sym = "";
var num = null;
var mainResult = 0;
var fresh = true;
var mainRezFlag = false;

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

    numArr.push(keyed);
    if(fresh){
      calcScreen.innerHTML = numArr.join("");
      fresh = false;
    } else {
      let tempNum = numArr.join("");
      calcScreen.innerHTML =  fullArr.join("") + tempNum;
    }
      break;
    case "÷":
    if (!fresh){
      num = numArr.join("");
      fullArr.push(num);
      fullArr.push("/")
      numArr = [];
      num = null;
      calcScreen.innerHTML = fullArr.join("");
    }
      break;
    case "x":
    if (!fresh){
      num = numArr.join("");
      fullArr.push(num);
      fullArr.push("*")
      numArr = [];
      num = null;
      calcScreen.innerHTML = fullArr.join("");
    }
      break;
    case "-":
    if (!fresh){
      num = numArr.join("");
      fullArr.push(num);
      fullArr.push("-")
      numArr = [];
      num = null;
      calcScreen.innerHTML = fullArr.join("");
    }
      break;
    case "+":
    if (!fresh){
      num = numArr.join("");
      fullArr.push(num);
      fullArr.push("+")
      numArr = [];
      num = null;
      calcScreen.innerHTML = fullArr.join("");
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
    calcScreen.innerHTML = " ";
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
    calcScreen.innerHTML = numArr.join("");
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
