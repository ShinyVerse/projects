var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var periods = ["The Big Bang","Jurassic", "Stone Age", "Iron Age", "Medieval Age", "Industrial", "Now"];

var timeSection = document.getElementById('placementTime');

//period statemnt
var displayInfo = document.getElementById("displayInfo");

var button = document.getElementById("timeButton");


function randomize(){
   return randonNum = Math.floor(Math.random() * periods.length);
}

function newOutPut() {
  timeSection.textContent = WhereAmI(periods[randomize()]);
}

 button.onclick = function(){
   newOutPut();
 }







function WhereAmI(randomPeriod){
  var WhereAmITimePeriod = "";
 switch(randomPeriod){
  case "The Big Bang":
      WhereAmITimePeriod = "14000 Million Years Ago";
      break;
  case "Jurassic":
      WhereAmITimePeriod = "250 Million Years Ago"
      break;
  case "Stone Age":
      WhereAmITimePeriod = "1029 BC"
      break;
  case "Iron Age":
      WhereAmITimePeriod = "742 BC"
      break;
  case "Medieval Age":
      WhereAmITimePeriod = "Year 560"
      break;
  case "Industrial":
      WhereAmITimePeriod = "Year 1800"
      break;
  case "Now":
      WhereAmITimePeriod = dateNow;
 }
 return WhereAmITimePeriod;
}

var today = new Date();
function dateNow() {
   var dIndex = today.getDay();
   var dates = today.getDate();;

   var mIndex = today.getMonth();
  switch(dates) {
      case 1:
      case 21:
      case 31:
          dates = dates + "st";
          break;
      case 2:
      case 22:
          dates = dates + "nd";
          break;
      case 3:
      case 23:
          dates = dates + "rd";
          break;
      default:
          dates = dates + "th";
  }
   return dateNow = days[dIndex] + " " + dates + " " + months[mIndex];
}

timeSection.textContent = dateNow();

//display period
