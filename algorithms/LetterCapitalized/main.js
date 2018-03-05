function LetterCapitalize(str) {

  var newArray = [];
  //split the given sentence into an array of words
  var sentenceArr = str.split(" ");
  for (var i = 0; i < sentenceArr.length; i++){
    //split each words into an array of it's letters
    var word = sentenceArr[i].split("");
    //grab the first letter of the split word and change that to an uppercase letter
    var capital = word[0].toUpperCase();
    //delete the first letter from the array of letters
    word.shift();
    //put the capitalized letter at the start of the array of letters
    word.unshift(capital);
    //push that word, with it's capital to newArray, while joining to make string again
    newArray.push(word.join(""));
  }
  //join the array to remove commas and make into a string
  return newArray.join(" ");
}
