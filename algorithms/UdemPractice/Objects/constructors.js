function Person(firstName, lastName, nickName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.nickName = nickName
}
//storing to the prototype the methods means that it takes up one memory space, but thousands of
//objects could potentially use it. Rather than creating directly onto the Person Object,
//which would create it anytime a new version of that object was created.
Person.prototype.getFullName = function(){
  return this.firstName + " " + this.lastName;
}


var jane = new Person("Jane", "Mixin", "Janey");
console.log(jane);

var john = new Person("John", "Doe", "Beast");
  console.log(john);

console.log(john.getFullName());


Person.prototype.getNickName = function(){
  return this.firstName + " likes to be referred to as " + this.nickName;
}
String.prototype.isLengthGreaterThan = function(limit){
  return this.length > limit;
}
