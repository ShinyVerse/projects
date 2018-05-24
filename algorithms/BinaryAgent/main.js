
function binaryAgent(str) {
  var binArr = str.split(" ");
  var charArr = [];
  var newStr = [];
   for (var j = 0; j< binArr.length; j++){
     var given = binArr[j].split("");
     charArr.push(taken(given));
   }
   function taken(given){
     var binNum = 128;
     var total = 0;
     function takeBin(){
       return binNum =  binNum / 2;
     }
     for (var i = 0; i < given.length; i++){

       if (given[i] == 1){
         total = total + binNum;
         takeBin();
       } else {
         takeBin();
       }
     }
     return total;
   }

   console.log(charArr);

   for (var g = 0; g < charArr.length; g++){
     newStr.push(String.fromCharCode(charArr[g]));
   }
   return newStr.join("");
}




// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
