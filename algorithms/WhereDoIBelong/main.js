
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var newArr = arr;
  newArr.push(num);
  newArr.sort(function(a,b){return a - b;});
  console.log(newArr);
  return newArr.indexOf(num);
}

getIndexToIns([5, 3, 20, 3], 5)
