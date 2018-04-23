
function convertToRoman(num) {

var romanTotal = [];

var len = num.toString().length;
var numStr = num.toString();


if (len === 1){
   romanTotal.push(returnDigit(parseInt(numStr.charAt(0))));
}
if (len === 2){
  romanTotal.push(returnTens(parseInt(numStr.charAt(0))));
  romanTotal.push(returnDigit(parseInt(numStr.charAt(1))));
}

if (len === 3 ){
  romanTotal.push(returnHundreds(parseInt(numStr.charAt(0))));
  romanTotal.push(returnTens(parseInt(numStr.charAt(1))));
  romanTotal.push(returnDigit(parseInt(numStr.charAt(2))));
}

if (len === 4){
  romanTotal.push(returnThousands(parseInt(numStr.charAt(0))));
  romanTotal.push(returnHundreds(parseInt(numStr.charAt(1))));
  romanTotal.push(returnTens(parseInt(numStr.charAt(2))));
  romanTotal.push(returnDigit(parseInt(numStr.charAt(3))));
}


function returnThousands(digit){
  var mAmount = "M";
  for (var i = 1; i < digit; i++){
    mAmount+= "M";
  }
  return mAmount;
}


function returnHundreds(digit){
  switch (digit){
    case 1:
    return "C";
    break;
    case 2:
    return "CC";
    break;
    case 3:
    return "CCC";
    break;
    case 4:
    return "CD";
    break;
    case 5:
    return "D";
    break;
    case 6:
    return "DC";
    break;
    case 7:
    return "DCC";
    break;
    case 8:
    return "DCCC";
    break;
    case 9:
    return "CM";
    break;
  }
}

function returnTens(digit){
  switch (digit){
    case 1:
    return "X";
    break;
    case 2:
    return "XX";
    break;
    case 3:
    return "XXX";
    break;
    case 4:
    return "XL";
    break;
    case 5:
    return "L";
    break;
    case 6:
    return "LX";
    break;
    case 7:
    return "LXX";
    break;
    case 8:
    return "LXXX";
    break;
    case 9:
    return "XC";
    break;
  }
}
function returnDigit(digit){
  switch (digit){
    case 1:
    return "I";
    break;
    case 2:
    return "II";
    break;
    case 3:
    return "III";
    break;
    case 4:
    return "IV";
    break;
    case 5:
    return "V";
    break;
    case 6:
    return "VI";
    break;
    case 7:
    return "VII";
    break;
    case 8:
    return "VIII";
    break;
    case 9:
    return "IX";
    break;
  }
}


return romanTotal.join("");

}
