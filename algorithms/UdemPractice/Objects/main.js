var person = {
  firstName: 'Default',
  lastName: 'Default',
  getFullName: function(){
    return this.firstName + " " + this.lastName;
  }
}

var john = {
  firstName: 'John',
  lastName: 'Doe'
}

//don't EVER do this. Just for understanding what is going on.
// john.__proto__= person; john now inhierits from person.

var jane = {
  firstName: 'Jane'
}

var mary = {
  address: '111 Main St.',
  getFormalFullName: function() {
    return this.lastName + ", " + firstName;
  }
}

var jim = {
  getFirstName: function(){
    return firstName;
  }
}

//using underscore to extend all properties and methods to different objects:
_.extend(john, mary, jim);
