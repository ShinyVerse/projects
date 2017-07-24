var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var periods = ["The Big Bang","Jurassic", "Stone Age", "Iron Age", "Medieval Age", "Industrial", "Now"];

var timeSection = document.getElementById('placementTime');

//period statemnt
var displayInfo = document.getElementById("displayInfo");

var button = document.getElementById("timeButton");

var myScreen = document.getElementById("screen1");


function randomize(){
   return randonNum = Math.floor(Math.random() * periods.length);
}

function newOutPut() {
  timeSection.textContent = WhereAmI(periods[randomize()]);
}

 button.onclick = function(){
   newOutPut();
 }

 // function imagePass(num) {
 //   link = "url('img/time";
 //   link += num;
 //   link += ".jpg');";
 //   console.log(link);
 //   myScreen = screen1.style.backgroundImage = '\\"' + link + '\\";';
 //   return myScreen;
 // }


function WhereAmI(randomPeriod){
  var WhereAmITimePeriod = "";
 switch(randomPeriod){
  case "The Big Bang":
      WhereAmITimePeriod = "14000 Million Years Ago";
        if (WhereAmITimePeriod === "14000 Million Years Ago") {
          myScreen = screen1.style.backgroundImage = "url('img/time0.jpg')";
        }
      break;
  case "Jurassic":
      WhereAmITimePeriod = "250 Million Years Ago"
      if (WhereAmITimePeriod === "250 Million Years Ago"){
        myScreen = screen1.style.backgroundImage = "url('img/Dinosaur.jpg')";
      }
      break;
  case "Stone Age":
      WhereAmITimePeriod = "1029 BC"
        if (WhereAmITimePeriod === "1029 BC"){
          myScreen = screen1.style.backgroundImage = "url('img/stoneAge.jpg')";
        }
      break;
  case "Iron Age":
      WhereAmITimePeriod = "742 BC"
        if (WhereAmITimePeriod === "742 BC"){
          myScreen = screen1.style.backgroundImage = "url('img/ironAge.jpg')";
        }
      break;
  case "Medieval Age":
      WhereAmITimePeriod = "Year 560"
        if (WhereAmITimePeriod === "Year 560"){
          myScreen = screen1.style.backgroundImage = "url('img/mediAge.jpg')";
        }
      break;
  case "Industrial":
      WhereAmITimePeriod = "Year 1800"
        if (WhereAmITimePeriod === "Year 1800"){
          myScreen = screen1.style.backgroundImage = "url('img/industAge.jpg')";
        }
      break;
  case "Now":
      WhereAmITimePeriod = dateNow;
        if (WhereAmITimePeriod === dateNow){
          myScreen = screen1.style.backgroundImage = "url('img/modLife.jpg')";
        }
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
  if (timeSection.textContent === dateNow) {
    myScreen = screen1.style.backgroundImage = "url('img/modLife.jpg')"
  }

//display period
