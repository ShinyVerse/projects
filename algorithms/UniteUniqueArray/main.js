
function uniteUnique(arr) {
  var myConcat = [];
  for (var i = 0; i < arguments.length; i++){
  myConcat =  myConcat.concat(arguments[i]);
  }
  var flatArr = [];
  for (var j = 0; j < myConcat.length; j++){
    if (!flatArr.includes(myConcat[j])){
      flatArr.push(myConcat[j]);
    }
  }
  // console.log(myConcat);
  // console.log(flatArr);

  return flatArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
