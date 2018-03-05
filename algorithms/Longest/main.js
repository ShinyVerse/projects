function longestWord(sen) {
  //splitting apart given sentence returning new array of words
  var senArr = sen.split(" ");
  //checking length and saving to new var
  var arrLength = senArr.length;
  //setting a base value for longest, which we want to receive a string
  var longest = "";
  //for loop, i from 0 as it will need to start from arr index 0
  //newNum calls counting and passes it the current arr item i is on.
  //if statement checks whether newNum is bigger than length of longest (which has counting called on it.)#
  //if if is true then longest gets replaced by that array item. eg. senArr[4]
  for (var i = 0; i < arrLength; i++) {
    var newNum = counting(senArr[i]);
    if (newNum > counting(longest) ) {
      longest = senArr[i];
    }
  }
  //once loop is complete, longest is returned
  return longest;
}

//function to be called which takes in a word as param.
//replace is called to take out any numbers or symbols, as we only want the word.
//split the word into letters which returns an array
//return the length of word, which will be used for the if comparison.
function counting(word) {
  var newWord = word.replace(/[^A-Za-z0-9]/g, '');
  // var noNums = newWord.replace(/[0-9]/g, '');
  var arr = newWord.split("");
  return arr.length;
}
