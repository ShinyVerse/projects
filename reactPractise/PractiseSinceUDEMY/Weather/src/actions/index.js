import axios from 'axios';

const API_KEY = 'bc3ecbf71f51b80fdba8151ba1a2a24a';
//ES6 injecting the apikey into the string. Below is fine. Use whatever
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  //build up the payload here
  const url = `${ROOT_URL}&q=${city},gbr`; //craft a url
  const request = axios.get(url); //axios behaves exactly like the ajax request method

  // console.log('Request', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
