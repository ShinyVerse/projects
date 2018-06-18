//////////////////////Mine:

function random(...params){
	var answers = {gender: arguments[0], time: arguments[1], place: arguments[2]};
	const {gender: a, time: b , place: c} = answers;


  return console.log( a + " was at " + c + " at " + b );
}

// Obj destructuring
r profileData = {name: "rachel", age:45, nat: "British", loc: "London"};
var data2 = {name: "bob", age:5, nat: "Scottish", loc: "Miami"};

const profile = (profileData) => {
  const {name, age, nat, loc} = profileData;

  console.log(profileData.name);
}

profile(profileData);
profile(data2);

/////////////////////////ORRRRR!!!!!

var profileData = {name: "rachel", age:45, nat: "British", loc: "London"};
var data2 = {name: "bob", age:5, nat: "Scottish", loc: "Miami"};

const profile = ({name, age, loc}) => {


  console.log(name + " is " + age );
}

profile(profileData);
profile(data2);

/////////////////////////////


//////mine: array & arguments

function func1(...params) {
const [a,, b] = [...arguments];
// const [a, b, ...rest] = [...arguments];
  console.log(a,b );
}

func1(1, 2, 3, 4, 5, 6 );

random("he", "9AM", "the park");
/////////////////////////////////////////////FCC:
function getLength(str) {
  "use strict";

  // change code below this line
  const {length : len} = str; // change this
  // change code above this line

  return len; // you must assign length to len in line

}

console.log(getLength('FreeCodeCamp'));
