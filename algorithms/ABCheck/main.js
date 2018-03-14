// AB Check
// Using the JavaScript language, have the function ABCheck(str) take the str
//  parameter being passed and return the string true if the characters a and b are
// separated by exactly 3 places anywhere in the string at least once
// (ie. "lane borrowed" would result in true because there is exactly three characters
//  between a and b). Otherwise return the string false.
//
function ABCheck(str) {
  //start off as false unless changes this will be returned.
  var result = false;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      if (str[i + 4] === "b") {
        result = true;
      }
      // console.log("index: " + i + " is an a.");
      // console.log("3 away from a is " + str[i + 4]);
    }
  }
  return result;
}
