// var a = 2;
//
// (function IIFE(){
//   var a = 3;
//   console.log(a);
// })();
//
// console.log(a);
//
// var a = 2;
//
// (function IIFE(global){
//   var a = 3;
//   console.log(a);
//   console.log(global.a);
// })(window);
//
// console.log(a);

var foo = true;

if (foo){
  { // explicit code! let blocking.
  let bar = foo * 2;
  console.log(bar);
}
}
console.log(bar);
