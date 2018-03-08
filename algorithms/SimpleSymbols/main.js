//take the String

function SimpleSymbols(str){
  //split the String
  var arr = str.toLowerCase().split("");

  //if start or end of string is letter then false
    if (arr[0] >= 'a' || arr[arr.length-1] >= 'a'){
      return false;
    }

  //loop through the string
  for (var i = 1; i < arr.length - 1; i++){
  //test for letters
  var letter = arr[i];
  var testLetter = new RegExp("[a-z]");
  var resultLetter = testLetter.test(letter);
    //check if the loop is a letter
    if (resultLetter){
        //if i-1 and i+ is not a symbol return false
        var before = arr[i-1];
        var after = arr[i+1];
        var testSymbols = new RegExp("[+]");
        if (!testSymbols.test(before) || !testSymbols.test(after)){
          return false
        }
    }
  }
    return true;
}
