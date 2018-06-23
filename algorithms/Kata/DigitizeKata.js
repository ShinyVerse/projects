function digitize(n) {
  let newNums = (""+n).split("").map(strNum => parseInt(strNum));
  return newNums.reverse()
}
digitize(35231);


// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }
