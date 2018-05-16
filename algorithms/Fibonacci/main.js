
function sumFibs(num) {
  var first = 0;
  var second = 1;
  var total = 0;
  //while second doesn't equal more or the same as num keep looping.
  while (second <= num){
    //if when second is shared between 2 and it is true that the remainder is not 0
    //ie. if it is an odd number.
    if (second % 2 !== 0){
      //add second to total sum
      total = total + second;
    }
    //second becomes sum of second and first
    second = second + first;
    //first becomes second minus first
    first = second - first;
  }
  return total;
}
