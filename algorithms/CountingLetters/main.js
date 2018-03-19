// *  Letter Count I                                                                      *
// *  Have the function LetterCountI(str) take the str parameter being passed and return  *
// *  the first word with the greatest number of repeated letters. For example:           *
// *  "Today, is the greatest day ever!" should return greatest because it has 2 e's      *
// *  (and 2 t's) and it comes before ever which also has 2 e's. If there are no words    *
// *  with repeating letters return <b>-1</b>. Words will be separated by spaces.

function LetterCountI(str){
  // var wordArr = str.toLowerCase().split(" ");
  // for (var i = 0; i < wordArr.length; i++){
  //   var letterArr = wordArr[i].split("");
  //   console.log(letterArr);
  // }
  //brings in one word, must count the nums of times each letter:

  // var letCount = {};
  //
  // str.split("").map(letter => {
  //   console.log(letter);
  //   letCount[letter] = ++letCount[letter];
  //   console.log(letCount);
  // });
}

function repCount (word) {
  var orig = word,
  //setting length
      len = word.length,
      //obj literal to store in letters with their counts.
      memory = {},
      //setting maximum number reached var.
      max = 0,
      //setting empty character and i vars.
      char, i;
//change the word to lowercase so can count the letters easily.
  word = word.toLowerCase();
//loop through words.
  for (i = 0; i < len; i++) {
    //char is set to the current letter word[i] is selecting.
    char = word[i];
    console.log("char is : " + word[i])
    console.log("before adding : " + memory[char]);
    memory[char] = memory[char] + 1 || 1;
    console.log("after adding : " + memory[char]);
    //if memory character is bigger than current max then max becomes that obj amount
    if (memory[char] > max) {
      max = memory[char];
    }
  }

  return [orig, max];
}
