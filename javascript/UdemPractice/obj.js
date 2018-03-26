
//polyfill:
// if (!Object.create) {
//   Object.create = function(obj) {
//   if (arguments.length > 1) {
//     throw new Error("Object.create implementation "
//      + "only accepts the first parameter");
//   }
//   function F() {}
//   F.prototype = obj;
//   return new F();
//   };
// }
//
// person = {
//   firstName: 'Default',
//   lastName: 'Default',
//   greet: function() {
//     return 'Hi ' + this.firstName;
//   }
// }
//
// var john = Object.create(person);
// john.firstName = "Johnr";

//using ES6 and classes
class Person {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    return "Hi " + this.firstName;
  }
}

var jane = new Person("Jane","Smith");

class InformalPerson extends Person {
  constructor(firstName, lastName){
    super(firstName, lastName);
  }
  greet() {
    return "Yo " + this.firstName;
  }
}
var mickey = new InformalPerson("Mickey", "Dobbs");
