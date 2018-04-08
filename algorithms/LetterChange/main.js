function LetterChanges(str) {
  //splits the str apart into letters and returns a new array of those letters
  var arr = str.split("");
  //create a new array literal to push items to.
  var newArray = [];


//i = 0 because we will need to start from index 0 of the array


  for (var i = 0; i < arr.length; i++) {
    //convert all i to begin with into lowercase incase of string starting with capital
    var changedToLower = arr[i].toLowerCase();
    //if: the letter of the array at index i is a letter, small or cap, then:
    if (changedToLower.match(/[A-Za-z]/i)) {
      //we find the ascii code of that letter
      var charAt = changedToLower.charCodeAt(0);
      //plus one to make it following letter. eg h becomes i
      var charPlusOne = String.fromCharCode(charAt + 1);
      //perform another check to see if the new +1 letter is a vowel.
      if (charPlusOne.match(/^[aeiou]$/i)) {
        //if true then we change letter to upper case.
        var capitalLetter = charPlusOne.toUpperCase();
        //push to array literal
        newArray.push(capitalLetter);
      } else {
        //if doesn't match a vowel, just push to array literal
        newArray.push(charPlusOne);
      }
    } else {
      //if not a letter, then push as it is to array literal.
      newArray.push(arr[i]);
    }

  }
  //return array literal back from function with the join method on to convert
  //back into string and remove the commas.
  return newArray.join("");
}
