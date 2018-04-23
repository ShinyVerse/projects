// function doSomething(a){
//   b = a + doSomethingElse( a * 2 );
//
//   console.log( b * 3 );
//
// }
//
// function doSomethingElse(a){
//   return a - 1;
// }
//
// var b;
// doSomething(2);


 // Better: as it hides the function doSomethingElse and var b.

 function doSomething(a){
   function doSomethingElse(a){
     return a - 1;
   }

   var b;

   b = a + doSomethingElse(a * 2);
   console.log(b);
   console.log(b*3);
 }

 doSomething(2);
