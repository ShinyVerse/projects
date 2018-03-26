
function largestOfFour(arr) {
  // You can do this!
  var newArr = [];
  var highestInEach = arr.map(function(array){
    array.sort(function(a,b){
    return  a - b;
    });
    console.log(array);
    newArr.push(array[3]);
  });
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
