import React, { Component } from 'react';
import './App.css';
import ListOption from './CountryDropDown/Dropdown'
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
      countryAbr: []
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
      console.log(this.state.countries);
      //   console.log(this.state.countryAbr);
    return (
      <div className="App">
        <select onChange={this.onChangeCountrySelect.bind(this)}>
          {this.state.countries.sort().map((place) => {
            return <ListOption
               country={place[0]}
               key={place[1]}
               code={place[1]}
             />
          })}
        </select>

      </div>
    );
  }
}

export default App;
