var passwordButton = document.getElementById('passwordButton');
var passwordDivBox = document.getElementById('emptyOne');

var codeGuessButton = document.getElementById('codeGuessButton');

var returnButton = document.getElementById('returnButton')

var userFirstLetter = document.getElementById('firstLetter');
var userSecondLetter = document.getElementById('secondLetter');
var userThirdLetter = document.getElementById('thirdLetter');

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
  console.log(userFirstLetter.value);
  console.log(userSecondLetter.value);
  console.log(userThirdLetter.value);
}
