function mapForEach(arr, fn){
  var newArr = [];
  for (var i =0; i < arr.length; i++){
    newArr.push(
      fn(arr[i])
    );
  };
  return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1, function(item){
  return item * 2;
});

var arr3 = mapForEach(arr2, function(item){
  return item = item % 3;
});

var arr4 = mapForEach(arr3, function(item){
    return item >= 1;
})
console.log(arr2);
console.log("numbers divided by 3, these are the remainders: " + arr3);
console.log(arr4);


//give arr to mapForEach
//looping through each array item is pushed to new array
//each item will be processed by some function //take some action against each item.


var checkPastLimit = function(limiter, item){
  return item > limiter;
}
//putting params on the bind will default that param.
//as the function within mapForEach being used only accepts one param spot.
// var arr5 = mapForEach(arr1, checkPastLimit.bind(this, 1));
// console.log(arr5);

//only pass in a limiter rather than call bind manually always:
var checkPastLimitSimplified = function(limiter){
  return function(limiter, item){
    return item > limiter;
  }.bind(this, limiter);
};

//this is calling a function, which returns a function
//which has it's first param preset to number passed.
//the returned function object gets passed to mapForEach
var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5);
