function longestWord(sen) {
  var senArr = sen.split(" ");
  var arrLength = senArr.length;

  var longest = "";

  for (var i = 0; i < arrLength; i++) {
    var newNum = counting(senArr[i]);
    if (newNum > counting(longest) ) {
      longest = senArr[i];
    }
  }
  return longest;
}

function counting(word) {
  var newWord = word.replace(/[^A-Za-z0-9]/g, '');
  // var noNums = newWord.replace(/[0-9]/g, '');
  var arr = newWord.split("");
  return arr.length;
}
