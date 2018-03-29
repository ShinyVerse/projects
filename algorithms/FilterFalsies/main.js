function returnTruthys(arr){
  var results = arr.filter(function(item){
    if (item){
      return item;
    }
  });
  return results;
}

returnTruthys(([7, "ate", "", false, 9]);
