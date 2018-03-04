function reverseString(str){
  //chain together possible.
  //split = breaks code apart and returns new array =
  //      ["s"."t","r"]
  //reverse reverses array.
  //join will join array back into a string =
  //      rts
  var newArr = str.split("").reverse().join("");
  return newArr;
}
