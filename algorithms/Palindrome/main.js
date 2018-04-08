// *  Palindrome                                                                          *
// *  Using the JavaScript language, have the function Palindrome(str) take the str       *
// *  parameter being passed and return the string true if the parameter is a palindrome, *
// *  (the string is the same forward as it is backward) otherwise return the string      *
// *  false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers  *
// *  will not be part of the string.

function Palindrome(str){
  var array = str.toLowerCase().split("");
  var newStr = array.filter(function(str){
    return /\S/.test(str);
  });
  console.log(newStr);
  for (var i = 0; i < newStr.length; i++){
    if (newStr[i] === newStr[newStr.length - (i+1)]){
    } else {
      return false;
    }
    // console.log(str[i]);
    // console.log("last in is: " + str[str.length-(i+1)]);
  }
  return true;
}
