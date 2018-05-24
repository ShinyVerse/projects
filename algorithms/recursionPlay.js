function fib( n){
 if (n==0) {return 0;}
 if(n==1) {return 1;}
 return (n-1 ) + fib(n-2);
}

function x(num){
 'use strict';
 if (num == 0 ){
   console.log("stack not dead");
 } else {
   return x(num-1);
 }
}

var arr = ["lamb","goat","dog","sheep"];

function animalSays(arr){
 var savedArr = arr;
 var counter = 0;
 if (arr[counter] == "dog"){
   console.log("woof");
 } else {
   console.log("no such animal here");
   savedArr.shift(arr[counter]);
   counter++;
   animalSays(savedArr);
 }
}

function findRemainder(num, divNum, count){
 let counter = count || 0;
 if (num % divNum === 0) {
   console.log("this number can be divided between 3 with " + counter + "remainder");
 } else {
   counter++
   findRemainder(num - 1, divNum, counter );
 }

}
