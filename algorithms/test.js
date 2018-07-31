;(function() {
  var DateDisplay = (function() {
    function dayofTheWeek(day) {
      return [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ][day]
    }

    function monthName(month) {
      return [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ][month]
    }

    function toOridinal(number) {
      switch (String(number).slice(-1)) {
        case '1':
          return number + 'st'
        case '2':
          return number + 'nd'
        case '3':
          return number + 'rd'
        default:
          return number + 'th'
      }
    }

    function toCalendarDate() {
      var today = new Date()
      var dayName = dayofTheWeek(today.getDay())
      var dayDate = toOridinal(today.getDate())
      var month = monthName(today.getMonth())

      return dayName + ' ' + dayDate + ' ' + month
    }

    return {
      dayofTheWeek: dayofTheWeek,
      toOridinal: toOridinal,
      toCalendarDate: toCalendarDate
    }
  })()



/////////////////////
var genStr = document.getElementById("generatedString");
var genBtn = document.getElementById("invokeNewGen");
var randomNum = Math.random();


function randomNumGenerator(length){
   return Math.floor(Math.random() * length);
}

(function makeNewString(){
  let returnStr = "The boy's name is " + boyNameGenerator() + " and his favorite animal is a " + getAnimal();
  function boyNameGenerator(name){

    let names = [
      "Harry",
      "Patrick",
      "Kyle",
      "Kenny",
      "Stan"
    ]
    let index = randomNumGenerator(names.length);
    return names[index];
  }

  function getAnimal(){

    let animals = [
      "rabbit",
      "chicken",
      "pig",
      "moose"
    ]
    let index = randomNumGenerator(animals.length);
    return animals[index];
  }
return {
     Str: returnStr
    }
})()

genBtn.onclick = function(){ genStr.innerHTML = makeNewString()};
