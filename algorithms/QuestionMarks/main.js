
var myFunctions = {};

myFunctions.questionMarks = function (str){
  var firstNumI = null;
  var secondNumI = null;
  var noPairsSum10Flag = true;

  var arr = str.split("");

for (var i = 0; i < arr.length; i++){
  var num = arr[i];
  var testNum = new RegExp("[0-9]");
  var resultNum = testNum.test(num);

  if (resultNum){
    if (firstNumI === null){
      firstNumI = i;
      console.log(firstNumI);
    } else {
      secondNumI = i;
      console.log(secondNumI);
    }
    if (firstNumI !== null && secondNumI !== null){
       console.log(arr[firstNumI]);
       console.log(arr[secondNumI]);
       var sum =  Number(arr[firstNumI]) + Number(arr[secondNumI]);
       console.log(sum);
      if ( sum === 10){
        noPairsSum10Flag = false;
        var cutArr = arr.slice(firstNumI, secondNumI + 1);
        var amount = countCharacters(cutArr, "?");
        if (amount !== 3){
          console.log(" doesn't equal 3");
          return false;
        }
        firstNumI = null;
        secondNumI = null;
      }
    }
    }

}
if (noPairsSum10Flag === true){
  return false;
}
 return true;

}

function countCharacters(arr, character){
  var count = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === character){
      count++;
    }
  }
  return count;
}



module.exports = myFunctions


//split the String

// run through split with for
  //test to see if letter

  //if first instance of match then continue,
  // else check to see if number has a ? before.


  //if test passes then check to see if following 3 or more are ?
