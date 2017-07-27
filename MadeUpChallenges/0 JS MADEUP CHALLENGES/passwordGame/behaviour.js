var passwordButton = document.getElementById('passwordButton');
var passwordDivBox = document.getElementById('emptyOne');

var codeGuessButton = document.getElementById('codeGuessButton');

var returnButton = document.getElementById('returnButton')

var userFirstLetter = document.getElementById('firstLetter');
var userSecondLetter = document.getElementById('secondLetter');
var userThirdLetter = document.getElementById('thirdLetter');

var answerInfo = document.getElementById('answerInfo');

var ans1 = "A";
var ans2 = "R";
var ans3 = "T";

passwordButton.onclick = function() {
  passwordDivBox.setAttribute('id', 'guessBox');
}

returnButton.onclick = function() {
  passwordDivBox.setAttribute('id', 'emptyOne')
}

codeGuessButton.onclick = function() {
  var correctAns = 0;
  var incorrect = 0;
    if (userFirstLetter.value.toUpperCase() === ans1){
      correctAns++;
    } else {
      incorrect++;
    }
    if (userSecondLetter.value.toUpperCase() === ans2){
      correctAns++;
    } else {
      incorrect++;
    }
    if (userThirdLetter.value.toUpperCase() === ans3){
      correctAns++;
    } else {
      incorrect++;
    }
    if (correctAns === 3) {
      answerInfo.textContent = "You cracked the code!";
      var myDiv = document.getElementById('guessContainer');
      myDiv.innerHTML = myDiv.innerHTML + "<button type='button' id='finalButton'>Take me to my Prize!</button><br>";
      var finalButton = document.getElementById('finalButton');
      finalButton.onclick = function(){
        location.href = "secret.html";
      }
    } else {
      answerInfo.textContent = "Access Denied. You got " + incorrect + " incorrect. Please try again!";
      correctAns = 0;
      incorrect = 0;
      userFirstLetter.value = "";
      userSecondLetter.value  = "";
      userThirdLetter.value  = "";
    }
  }
