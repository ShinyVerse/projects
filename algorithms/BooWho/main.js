
function booWho(bool) {
var booleanArr = [null, 0, -0, false, undefined, "", true];

if (booleanArr.includes(bool)){
  return true;
} else {
  return false;
}
}
//
// Can be performed using the builtin Boolean Function - only primitives remain equal to themselves with all other values converted to a booleans.
//
// function booWho(bool) {
//
//   return Boolean(bool)===bool;
// }
booWho(null);
