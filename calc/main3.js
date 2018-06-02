var calcCase = document.getElementById("calculatorCase");
var symbols = document.getElementsByClassName("symbol");
var calcScreen = document.getElementById("calcScreen1");
var calcScreen = document.getElementById("calcScreen2");

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
      if (numArr[numArr.length - 1] === "0") {
        break;
      }
      if (expectingSymb) {
        Array.prototype.map.call(symbols, function(symbol) {
          symbol.classList.add("symbolError");
          setTimeout(function() {
            symbol.classList.remove("symbolError")
          }, 500);
        });
        break;
      }
      numArr.push(keyed);
      if (fresh) {
        calcScreen2.innerHTML = numArr.join("");
        fresh = false;
        expectingNum = false;
      } else {
        let tempNum = numArr.join("");
        calcScreen2.innerHTML = fullArr.join("") + tempNum;
        expectingNum = false;
      }
      break;
    case ".":

    if (numArr[numArr.length-2] === "."){
      break;
    }
    let num2test = parseInt(numArr[numArr.length-1]);
    let tester = new RegExp(/[0-9]/);;
    let result = tester.test(num2test);
      // let checkLastInput = parseInt(numArr[numArr.length-1]);
      if( result){
        numArr.push(".");
        expectingNum = true;
        if (fullArr.length < 1){
          calcScreen2.innerHTML = numArr.join("");
          break;
        }
        calcScreen2.innerHTML = fullArr.join("") + numArr.join("");
      }
      break;
    case "÷":
      if (expectingSymb) {
        expectingSymb = false;
      }
      if (!fresh) {
        if (expectingNum) {
          fullArr.pop();
          fullArr.push("/")
          calcScreen2.innerHTML = fullArr.join("");
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

      if (expectingSymb) {
        expectingSymb = false;
      }
      if (!fresh) {
        if (expectingNum) {
          fullArr.pop();
          fullArr.push("x");
          calcScreen2.innerHTML = fullArr.join("");
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
      if (expectingSymb) {
        expectingSymb = false;
      }
      if (!fresh) {
        if (expectingNum) {
          fullArr.pop();
          fullArr.push("-");
          calcScreen2.innerHTML = fullArr.join("");
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

      if (expectingSymb) {
        expectingSymb = false;
      }
      if (!fresh) {
        if (expectingNum) {
          fullArr.pop();
          fullArr.push("+");
          calcScreen2.innerHTML = fullArr.join("");
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
    if(expectingNum){
      break;
    }
      num = numArr.join("");
      fullArr.push(num);
      console.log("fullArr before = " + fullArr);
      numArr = [];
      num = null;
      if (!fresh && fullArr.length > 2) {
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

function calcAll(arr, extra, flag) {
  var main = 0;
  for (var i = 0; i < 2; i++) {
    if (extra > 0 || extra < 0 || extra === 0 && flag === true) {
      let pressed = arr[i];
      let a = extra;
      let b = parseFloat(arr[i + 1]);
      let result = operatorChecker(a, b, pressed);
      let newArr = arr.slice(2);
      if (newArr.length > 1) {
        calcAll(newArr, result, true);
      } else {
        if (result % 1 === 0){
          calcScreen1.innerHTML = result;
          return mainResult = result;
        } else {
          calcScreen1.innerHTML = result.toFixed(2);
          return mainResult = result.toFixed(2);
        }
      }
    }
    if (extra === 0 && flag !== true) {
      let pressed = arr[i + 1];
      let a = parseFloat(arr[i]);
      let b = parseFloat(arr[i + 2]);
      let result = operatorChecker(a, b, pressed);
      let newArr = arr.slice(3);
      if (newArr.length > 1) {
        calcAll(newArr, result, true);
      } else {
        if (result % 1 === 0){
          calcScreen1.innerHTML = result;
          return mainResult = result;
        } else {
          calcScreen1.innerHTML = result.toFixed(2);
          return mainResult = result.toFixed(2);
        }

      }
    }

  }
  return;
}

function operatorChecker(a, b, pressed) {
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
