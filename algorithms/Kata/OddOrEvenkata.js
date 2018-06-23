function evenOrOdd(str) {
  let even = 0;
  let odd = 0;
  let splitStr = str.split("");
  for (let i = 0; i < splitStr.length; i++){
    let num = splitStr[i];
    if (num % 2 !== 0){
      odd += parseInt(num);
    } else {
      even += parseInt(num);
    }
  }
  return (odd < even ? "Even is greater than Odd" : odd > even ? "Odd is greater than Even" : "Even and Odd are the same" );
}

evenOrOdd('12');
