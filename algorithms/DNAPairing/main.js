function pairElement(str) {
  var returnArr = [];
  var splitStr = str.split("");
  for (var i = 0; i < splitStr.length; i++) {
    returnArr.push(findMyPair(splitStr[i]));
  }
  return returnArr;
}

function findMyPair(letter) {
  switch (letter) {
    case "A":
      return ["A","T"];
    case "T":
      return ["T","A"];
    case "C":
      return ["C","G"];
    case "G":
      return ["G","C"];
  }
}
