// class getTemp {
//   constructor(tempGiven){
//     this.temp = tempGiven;
//   }
//   get Temp() {
//     let C = 5/9 * (this.temp - 32);
//     return C;
//   }
//   set Temp(val){
//     let F = val * 9.0 / 5 + 32;
//     this.temp = F;
//   }
// }


// class Thermostat {
//   constructor(tempGiven){
//     this.temp= tempGiven;
//   }
//   get temperature() {
//     let C = 5/9 * (this.temp - 32);
//     return C;
//   }
//   set temperature(val){
//     let F = val * 9.0 / 5 + 32;
//     this.temp = F;
//   }
// }
//   /* Alter code above this line */
//   return Thermostat;
// }
function makeClass() {
  "use strict";

  class Thermostat {
    constructor(value) {
      this._fahrenheit = value;
    }
    get temperature() {
      return (5 / 9 * (this._fahrenheit - 32));
    }
    set temperature(value) {
      this._fahrenheit = value;
    }
  }
  return Thermostat;
}
