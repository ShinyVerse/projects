var passwordButton = document.getElementById('passwordButton');
var passwordDivBox = document.getElementById('emptyOne');

passwordButton.onclick = function() {
  passwordDivBox.setAttribute('id', 'guessBox');
}
