function LetterChanges(str) {
  var arr = str.split("");
  var newArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].match(/[A-Za-z]/i)) {
      var j = arr[i].charCodeAt(0);
      var k = String.fromCharCode(j + 1);
      if (k.match(/^[aeiou]$/i)) {
        var capLet = k.toUpperCase();
        newArray.push(capLet);
      } else {
        newArray.push(k);
      }
    } else {
      newArray.push(arr[i]);
    }

  }

  return newArray.join("");
}
