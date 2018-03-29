// var arr = [7, "ate", "", false, 9];
// var regex = /[0-9]\w+/;
// var regex2 = /\w+/;
// expected output: Array ["exuberant", "destruction", "present"]
// for (var i = 0; i < arr.length; i++){
//     if (regex2.test(arr[i])){
//       console.log(arr[i] + " is a num");
//     }
// }



var falseValues = ["undefined", null, NaN, 0, "", false];

function bouncer(arr){
  var results = arr.filter(function(item){
    if (item){
      return item;
    }
  });
  return results;
}
