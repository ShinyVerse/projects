function FirstFactorial(num) {
var total = 1 ;
  for ( var i = 1; i <= num; i++){
    console.log("The value of i is: " + i)
    console.log("The value of total before multiplication is: " + total)
    total =  total * i;
    console.log("The value of total after multiplication is: " + total)
    console.log("End of iteration: " + i)
  }
  return total;
}


FirstFactorial(4);

// keep this function call here
//FirstFactorial(readline());


function simpleAdd(num) {
var total = 0 ;
  for ( var i = 1; i <= num; i++){
    console.log("The value of i is: " + i)
    console.log("The value of total before addition is: " + total)
    total =  total + i;
    console.log("The value of total after addition is: " + total)
    console.log("End of iteration: " + i)
  }
  return total;
}


FirstFactorial(4);
