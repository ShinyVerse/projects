import React, { Component } from 'react';
import './App.css';
import Selector from './Components/OptionDropDown/Selector';


const API_COUNTRIES = "http://country.io/names.json";

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
    };
  }

  onChangeCountrySelect = (event) =>{
    console.log(event.target.value);

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
          countries={this.state.countries}/>
      </div>
    );
  }
}

export default App;
