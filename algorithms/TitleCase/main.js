
function titleCase(str) {
//turn all to lower case.
var arr = str.toLowerCase().split(" ");
//use a function on each word in the array to find letter at index 0 and capitalize it.
var result = arr.map(function(word) {
  return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
});
return result.join(" ");
}
