// Compare two arrays and return a new array with any items only found
//  in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {
 var first = filterThis(arr1, arr2);
 var second = filterThis(arr2, arr1);

  return first.concat(second);
}

function filterThis(selection1, selection2){
  return selection1.filter(item => !selection2.includes(item));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
