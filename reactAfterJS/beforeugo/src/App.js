import React, { Component } from 'react';
import './App.css';
import Selector from './Components/OptionDropDown/Selector';
import Flag from './Components/Flag/flag'


const API_COUNTRIES = "http://country.io/names.json";
const API_FLAGS = "http://www.countryflags.io/";
const API_FLAGS2 = "/shiny/64.png";
//interpolation
// async function countryList(){
//   const countries = await fetch(API_COUNTRIES);
//   let json1 = await countries.json();
//   return{
//     countries: json1
//   }
// };
// const api_countries = countryList();

class App extends Component {
  constructor(){
    super();
    this.state = {
      countries: [],
      currFlag : "blank"
    };
  }

  onChangeCountrySelect = (event) =>{
    console.log(event.target.value);
    let lcCountry =  event.target.value.toLowerCase();
    this.setState({
      currFlag : API_FLAGS+lcCountry+API_FLAGS2
    })
  }

  componentDidMount(){
      fetch(API_COUNTRIES)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let dataArr = [];
        var tempcon = Object.values(data);
        var tempabr = Object.keys(data);
        for (var i = 0; i < tempcon.length; i++){
          let arr = [];
          arr.push(tempcon[i], tempabr[i]);
          dataArr.push(arr);
        }
        this.setState({
          countries: dataArr
        })
      });
  }
//!!FSAFASFSDFGDSGDSAGAFG!¬"!¬£!"£!"£"!£
  render() {
      // console.log(this.state.countries);
    return (
      <div className="App">

        <Selector
          onChangeSelect={this.onChangeCountrySelect.bind(this)}
          countries={this.state.countries}/><br/>
          <Flag flagImg={this.state.currFlag} />
      </div>
    );
  }
}

export default App;
