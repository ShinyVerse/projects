function deleteNth(arr,n){
  var dict = {};
  console.log(arr);
  console.log(arr[1]);

  for (var i = 0; i < arr.length; i++){
    
    dict[arr[i]] = dict[arr[i]] + 1 || 1;
  }
  return dict;
}
