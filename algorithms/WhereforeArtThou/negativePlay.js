//easy to start off.
//Return all numbers from list that are above 60 and dividable by 5.

//first remove any from list which could aren't a number.

var list = [1,4,80,62, "rabbit",65,43,32,215, "turkey", "fish",77,76,90,1200];


function findMyList(list){

  return list.filter(function(num){
    // console.log(!parseInt(num));
    if (num !== parseInt(num) || num < 60 || (num % 5)){
      return false;
    }
    return true;
  });
}

//second practise
//loop through two lists and check if they are identical. Arrays

var exList1 = [1,2,3,4];
var exList2 = [1,2,3,4];
var exList3 = [1,2,33,44];

function twoAgainstTwo(list1,list2){
  if (list1.length !== list2.length){
    return "They aren't even the same length!";
  }

  for (var i = 0; i < list1.length; i++ ){
    if (list1[i] !== list2[i]){
      return "Not identical, sorry.";
    }
  }
  return "These lists are identical!"
}


//third.
//if something doesn't have something.

function isItAMatch(person1, person2){
//two lists are given of peoples opinions about dates,
//return what is not agreed on.
}
