
function addTogether() {
  var flag = false;
  var b;
  if (arguments.length === 2){
    b = arguments[1];
    flag = true;
  }
  var a = arguments[0];

  if (flag){
    if ( isNumber(b) && isNumber(a)){
      return a + b;
    }
      return undefined;
  }
  if (arguments.length === 1){
    if (!isNumber(a)){
      return undefined;
    }
    var c = a;
    return function(b){
      if (!isNumber(b)){
        return undefined;
      }
        return c + b;
    };
  }

  if (arguments === 0){
    return undefined;
  }

  function isNumber(x) {
    if(Number.isInteger(x) && typeof x === 'number'){
        return true;
    } else {
      return false;
    }
  }

}

addTogether("rabbit");


// CLOSURE
//
function close(){
  var a = arguments[0];
  return function(b){
    return a + b;
  }
}
//

function close(){
  var password = "bob";
  return function(b){
    if (b === password){
      console.log("You're signed in");
    } else {
      console.log("incorrect password");
    }
  }
}



var b;

function thisThat(a){
console.log(a);
}
thisThat(a);
 var a = 9;


//
// if (arguments <= 0 || isNaN(arguments[0]) || isNaN(arguments[1])) {
//   return undefined;
// }
