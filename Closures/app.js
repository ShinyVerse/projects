function buildFunctions() {
  var arr = [];

  for (var i = 0; i < 3; i++){
    let j = i;
    arr.push(
      function(){
        console.log(j);
      }
    )
  }
  return arr;
}

var anyName = buildFunctions();

anyName[0]();
anyName[1]();
anyName[2]();

//

function buildFunctions2() {
  var arr = [];

  for (var i = 0; i < 3; i++){
    arr.push(
    (function(j){
      return function(){
        console.log(j);
      }
    }(i))
    )
  }
  return arr;
}

var anyName2 = buildFunctions2();

anyName2[0]();
anyName2[1]();
anyName2[2]();


////

function zoo(whichAnimal){
  return function(sound){
    console.log(whichAnimal + ' this animal says ' + sound);
  }

}

zoo('Ape')('oo ooo');
var pig = zoo('Pig');
pig('oink oink');

function item(price){
  return function(discount){
    console.log( price - price / discount );
  }
}

var tshirts = item(12.00);
var skirts = item(16.00);
var suits = item(200.00);

tshirts(2);
skirts(4);
suits(5);
