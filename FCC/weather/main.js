var weatherAPI = "&APPID=bc3ecbf71f51b80fdba8151ba1a2a24a";
//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=bc3ecbf71f51b80fdba8151ba1a2a24a
var APIQ ="api.openweathermap.org/data/2.5/weather?q=";
var JSONdata;
var userInput = document.getElementById("userInput");
var goBut = document.getElementById("goBut");
var weatherPic = document.getElementById('weatherPic');
var place = document.getElementById('place');
var temp = document.getElementById('temp');
var typeForm = document.getElementById('typeForm');

goBut.onclick = function clicker(){
  checker(userInput.value);
}


function checker(id){
  if(id.match(/^[0-9a-zA-Z,]{1,16}$/)){
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q='+ id + weatherAPI, function(data) {
      JSONdata = data;
      // console.log(data.weather[0].icon);
      weatherPic.src='./img/'+ JSONdata.weather[0].icon +'.png';
      place.innerHTML = JSONdata.name;
      temp.innerHTML = checkRadio(JSONdata.main.temp_min);
    });

}
else{
    alert("invalid entry!");
}
}
//
function checkRadio(kel){
  if(document.getElementById('celsius').checked) {
      return kelToC(kel);
}else if(document.getElementById('fahrenheit').checked) {
    return kelToF(kel);
}
}

function kelToC(kel){
  return Math.floor(kel - 273.15);
}

function kelToF(kel){
  sum = 1.8 * (kel - 273) + 32;
  return Math.floor(sum);
}
