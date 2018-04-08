function destroyer(arr) {
  // Remove all the values
  var toBeChecked = [];
  for (var i = 1; i < arguments.length; i++){
    toBeChecked.push(arguments[i]);
  }
  // console.log(arguments[i].filter(num => num.indexOf(toBeChecked) > 0));
  var results = arguments[0].filter(function(e){ console.log(e); return this.indexOf(e) < 0;}, toBeChecked);
  return(results);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)
