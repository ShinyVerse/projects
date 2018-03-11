function LetterSoup(str){
  var arr = str.toLowerCase().split("");
  arr.sort();
  return arr.join("");
}
