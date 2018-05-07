
function fearNotLetter(str) {
  var missing;
  var arr = [];
  for (var j = 0; j < str.length; j++){
    arr.push(str.charCodeAt(j));
  }

  for (var i = 1; i < arr.length; i++){
    var first = arr[i-1];
    var second = arr[i];
    if(first - second !== -1){
      console.log(first);
      console.log(second);
      missing = first + 1;
      return String.fromCharCode(missing);
    }
  }
  return undefined;
}
fearNotLetter("abce");
