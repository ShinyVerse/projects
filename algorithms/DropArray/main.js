function dropElements(arr, func) {
  var found = arr.find(func);
  if (found === undefined){
    return [];
  }
  var num;
  var newArr = [];
  console.log(found);
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === found){
      num = i;
      break;
    }
  }
  newArr = arr.slice(num, arr.length);
  return newArr;
}
dropElements([0, 1, 0, 1], function(n) {return n === 1; });
