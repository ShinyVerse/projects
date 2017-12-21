import React, {Component} from 'react';
import Display from './Display';
import DayChoice from './DayChoice';

import './App.css';

const PRODUCTS = {
  "dishList": [
    {
      "id": "6d272180-fac9-4dfe-a918-f94ae6beb2a6",
      "description": "Slow stewed chicken in coconut water, with fresh water chestnuts, coconut chunks, goji berry and Chinese date\nDelivered hot but can be consumed cold as well, a chicken dip is included for extra flavour to the chicken\n\nabsolutely no MSG\ndelivered in 375ml sealed container",
      "chefId": "59fc635b-9567-4bc0-916f-0bea6f234ff6",
      "dishType": "LUNCH",
      "name": "海南椰子鸡汤 Hainan Chicken Soup in Coconut water",
      "cuisine": "Chinese",
      "countOfReviews": 0,
      "price": {
        "currencyCode": "GBP",
        "value": 650
      },
      "images": ["http://assets-staging.yourcanteen.com/chef/e5eb1ccf-bd45-4d01-8e2a-0d10cc275f62/dish/6d272180-fac9-4dfe-a918-f94ae6beb2a6/1.jpeg"],
      "availability": {
        "2017-12-18": {
          "availableDateTime": "2017-12-18T23:59:18",
          "orderUntilDateTime": "2017-12-18T23:59:18",
          "totalCapacity": 20,
          "countOfRecentOrder": 20
        },
        "2017-12-17": {
          "availableDateTime": "2017-12-17T23:59:18",
          "orderUntilDateTime": "2017-12-17T22:17:18",
          "totalCapacity": 10,
          "countOfRecentOrder": 9
        }
      }
    }
  ]
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (!e.target.className) {
      this.setState(prevState => ({
        today: !prevState.today
      }));
    } else {
      e.preventDefault();
      console.log(e.target.className);
    }
  }
  render() {
    return (
      <div className="App">
        <DayChoice handleClick={this.handleClick} today={this.state.today}/>
        <Display products={PRODUCTS}/>
      </div>
    );
  }
}

export default App;
