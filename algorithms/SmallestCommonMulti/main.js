function smallestCommons(arr) {
//finds the max and min num for the range
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  //holder for number reached
  var multiple = max;

//loop: if the number saved in multiple doens't divide with 0 remaining
//Then the number saved in multiple goes up by max (going through multiplication table of max)
// i resets the max and process begins again until all numbers within range can be divided
//with no remainders
  for(var i = max; i >= min; i--){
    if(multiple % i !== 0){
      multiple += max; //this causes the number of comparison to grow.
      i = max;
    }
  }

  return multiple;
}
