
function convertHTML(str) {
  var returnedStr = str;
  var regAnd = new RegExp(/[&]/g);
  var regLArrow = new RegExp(/[<]/g);
  var regRArrow = new RegExp(/[>]/g);
  var regSingleQ = new RegExp(/[']/g);
  var regDoubleQ = new RegExp(/["]/g);
if (regAnd.test(returnedStr)){
  let newStr = returnedStr.replace(/[&]/g, '&amp;');
  returnedStr = newStr;
}
if (regLArrow.test(returnedStr)){
  let newStr = returnedStr.replace(/[<]/g, '&lt;');
  returnedStr = newStr;
}
if (regRArrow.test(returnedStr)){
  let newStr = returnedStr.replace(/[>]/g, '&gt;');
  returnedStr = newStr;
}
if (regSingleQ.test(returnedStr)){
  let newStr = returnedStr.replace(/[']/g, '&apos;');
  returnedStr = newStr;
}
if (regDoubleQ.test(returnedStr)){
  let newStr = returnedStr.replace(/["]/g, '&quot;');
  returnedStr = newStr;
}




return returnedStr;
}
convertHTML("Dolce & & Gabbana");
