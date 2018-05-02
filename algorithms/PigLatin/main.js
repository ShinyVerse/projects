function translatePigLatin(str) {
  var newArr = [];
  var strArr = str.split("");
    if(/[aeiou]/.test(str.charAt(0))){
      return str + "way";
    }
    for (var i = 0; i < str.length; i++){
      if(! /[aeiou]/.test(str.charAt(i))){
        newArr.push(str.charAt(i));
      } else {
      break;
      }
    }
var slicedArr = strArr.slice(newArr.length);
var result = slicedArr.concat(newArr).join("") + "ay";



return result;
}

// translatePigLatin("consonant");
