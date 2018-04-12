// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str){
  var newArr = [];
  for (var i = 0; i < str.length; i++){
    if ( str.charCodeAt(i) < 65 ||  str.charCodeAt(i) > 90){
      newArr.push( str.charCodeAt(i));
    } else {
      var newCode = str.charCodeAt(i) +  13;
      if( newCode > 90){
        var sum = (newCode - 90) + 64;
        newArr.push(sum);
      } else {
        newArr.push(str.charCodeAt(i)+ 13);
      }
    }
  }
  var finalArr = [];
  for (var j = 0; j < newArr.length; j++){
    var x = newArr[j];
    var y = String.fromCharCode(x);
    finalArr.push(y);
    //finalArr.push(String.fromCharCode(newArr[i]));
  }
  return finalArr.join("");
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");
