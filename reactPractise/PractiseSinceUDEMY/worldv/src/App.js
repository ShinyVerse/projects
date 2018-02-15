import React, { Component } from 'react';
import CountryCard from './components/country_card.js';


import './App.css';

class App extends Component {
  state = {
    list : [
      {
        id: 'fshffhafdf1312',
        country: 'America',
        holidays: [
          {what:'4th July',
           how: 'Fireworks and big parties'},
           {what:'Thanksgiving',
            how: 'Family round and have a big dinner, usually with turkey.'}
          ],
          img: require('./img/america.jpg')
      },
      {
        id: 'fedafdf1ddsfds12',
        country: 'China',
        holidays: [
          {what:'Chinese New Year',
           how: 'A big festival, money given in red envelopes to children.'},
           {what:'Qingming Festival',
            how: 'Showing respect to their ancestors' }
          ],
          img: require('./img/china.jpg')
      },
      {
        id: 'fedafdf1312',
        country: 'Japan',
        holidays: [
          {what:'Valentine\'s Day',
           how: 'Woman give homemade chocolates to their crushes, boyfriends or husbands.'},
           {what:'Coming of Age Day.',
            how: 'Everyone honours people who have turned 20 that year, 20 being the age of becoming an adult.' }
          ],
          img: require('./img/japan.jpg')
      }
    ]
  }



  render() {

    const listOfCountries = this.state.list.map(entry => {
      return (
      <CountryCard
        country={entry.country}
        key={entry.id}
        day={entry.holidays[0].what}
        celebration={entry.holidays[0].how}
        img= {entry.img}
      /> )});

    return (
      <div className="App">
        <ol>
          <li>Make country state.
          Make static version of country card</li>
          <li>Map through those countries, giving each it's own placecard</li>
          <li>style it.</li>
        </ol>
        <div className="main">{listOfCountries}</div>

      </div>
    );
  }
}

export default App;
