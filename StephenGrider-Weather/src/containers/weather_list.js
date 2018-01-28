import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Chart from '../components/chart';


class WeatherList extends Component {
renderWeather(cityData){
  const name = cityData.city.name;
  const temps = cityData.list.map(weather => weather.main.temp);
  // const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (temp - 273));
  console.log(temps);
  const pressures = cityData.list.map(weather => weather.main.pressure);
  const humidities = cityData.list.map(weather => weather.main.humidity);



return (
  <tr key={name}>
    <td>
      {name}
    </td>
    <td>
      <Chart data={temps} color="orange" units="K" />
    </td>
    <td>
      <Chart data={pressures} color="blue" units="hPa" />
    </td>
    <td>
      <Chart data={humidities} color="black" units="%" />
    </td>
  </tr>
)
}

  render(){
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th width={200}>City</th>
            <th  width={200}>Temperature (K)</th>
            <th  width={200}>Pressure (hPa)</th>
            <th  width={200}>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}){
  //const weather = state.weater ES6formatting
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
