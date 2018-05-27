
function truthCheck(collection, pre) {
  var flag = true;

  var arr = [];
  for (var i = 0; i < collection.length; i++){
    arr.push(check(collection[i][pre]));
  }
 var truth = "foo";

 function check(value){
   if (value){
     return true;
   }
   return false;
 }
 if (arr.includes(false)){
   flag = false;
 }
return flag;
}

truthCheck([{"user": "Tinky-Winky", "sex": 0}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
