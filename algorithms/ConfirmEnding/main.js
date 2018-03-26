
function confirmEnding(str, target) {
  if ( str.substring(str.length-target.length, str.length) === target){
    return true;
  } else {
    return false;
  }
}

// confirmEnding("Bastian", "n");

function confirmEnding2(str, target){
  if (str.endsWith(target)){
    return true;
  } else {
    return false;
  }
}
