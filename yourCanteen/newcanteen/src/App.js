import React, {Component} from 'react';
import Display from './Display';

import DayChoice from './DayChoice';

import './App.css';

const PRODUCTS = {
  "dishList":[
     {
        "id":"8155a8df-dac3-4089-91c7-e31190628280",
        "description":"香菇小白菜烧豆腐",
        "chefId":"59fc635b-9567-4bc0-916f-0bea6f234ff6",
        "dishType":"LUNCH",
        "name":"Chinese Mushroom with Pak Choi and Tofu",
        "cuisine":"Chinese",
        "countOfReviews":0,
        "originalPrice":{
           "currencyCode":"GBP",
           "value":780
        },
        "price":{
           "currencyCode":"GBP",
           "value":700
        },
        "images":[
           "http://assets-staging.yourcanteen.com/chef/e5eb1ccf-bd45-4d01-8e2a-0d10cc275f62/dish/10.jpg"
        ]
     },
     {
        "id":"8155a8df-dac3-4089-91c7-e31190628281",
        "description":"Tasty for you",
        "chefId":"59fc635b-9567-4bc0-916f-0bea6f234ff7",
        "dishType":"LUNCH",
        "name":"Thai Tofu",
        "cuisine":"Thai",
        "countOfReviews":0,
        "originalPrice":{
           "currencyCode":"GBP",
           "value":800
        },
        "price":{
           "currencyCode":"GBP",
           "value":750
        },
        "images":[
           "http://assets-staging.yourcanteen.com/chef/e5eb1ccf-bd45-4d01-8e2a-0d10cc275f62/dish/10.jpg"
        ]
     },
     {
        "id":"8155a8df-dac3-4089-91c7-e31190628282",
        "description":"Pasta, done like mama used to done.",
        "chefId":"59fc635b-9567-4bc0-916f-0bea6f234ff8",
        "dishType":"DINNER",
        "name":"Pasta",
        "cuisine":"Italian",
        "countOfReviews":0,
        "originalPrice":{
           "currencyCode":"GBP",
           "value":600
        },
        "price":{
           "currencyCode":"GBP",
           "value":500
        },
        "images":[
           "http://assets-staging.yourcanteen.com/chef/e5eb1ccf-bd45-4d01-8e2a-0d10cc275f62/dish/10.jpg"
        ]
     },
     {
        "id":"8155a8df-dac3-4089-91c7-e31190628283",
        "description":"Start your day with spicy.",
        "chefId":"59fc635b-9567-4bc0-916f-0bea6f234ff9",
        "dishType":"BREAKFAST",
        "name":"Spicy Tandoori Vegetables With Rice",
        "cuisine":"Indian",
        "countOfReviews":0,
        "originalPrice":{
           "currencyCode":"GBP",
           "value":400
        },
        "price":{
           "currencyCode":"GBP",
           "value":350
        },
        "images":[
           "http://assets-staging.yourcanteen.com/chef/e5eb1ccf-bd45-4d01-8e2a-0d10cc275f62/dish/10.jpg"
        ]
     }
  ],
  "chefIdToChefInfo":{
     "59fc635b-9567-4bc0-916f-0bea6f234ff6":{
        "id":"59fc635b-9567-4bc0-916f-0bea6f234ff6",
        "profileImage":"http://assets-staging.yourcanteen.com/chef/e5eb1ccf-bd45-4d01-8e2a-0d10cc275f62/profile/logo.jpg",
        "images":[
           "http://assets-staging.yourcanteen.com/chef/e5eb1ccf-bd45-4d01-8e2a-0d10cc275f62/profile/5.jpeg"
        ],
        "name":"Eat Fan",
        "phoneNumber":"+447887525658",
        "synopsis":"We are an independent lunch provider serving workers at Canary Wharf area\nWe own a 5-star food hygiene rated kitchen nearby\nWe only cook food that we love\nWe guarantee quality, tasty and healthy in every box",
        "kitchenName":"Eat Fan",
        "deliveryTypes":[
           "COLLECT"
        ],
        "rating":5.0,
        "countOfReviews":1
     },
     "59fc635b-9567-4bc0-916f-0bea6f234ff7":{
        "id":"59fc635b-9567-4bc0-916f-0bea6f234ff7",
        "profileImage":"http://assets-staging.yourcanteen.com/chef/e5eb1ccf-bd45-4d01-8e2a-0d10cc275f62/profile/logo.jpg",
        "images":[
           "http://assets-staging.yourcanteen.com/chef/e5eb1ccf-bd45-4d01-8e2a-0d10cc275f62/profile/5.jpeg"
        ],
        "name":"Gorm Nosh",
        "phoneNumber":"+447887525658",
        "synopsis":"We are an independent lunch provider",
        "kitchenName":"Gorm Nosh",
        "deliveryTypes":[
           "COLLECT"
        ],
        "rating":4.5,
        "countOfReviews":1
     },
     "59fc635b-9567-4bc0-916f-0bea6f234ff9":{
        "id":"59fc635b-9567-4bc0-916f-0bea6f234ff9",
        "profileImage":"http://assets-staging.yourcanteen.com/chef/e5eb1ccf-bd45-4d01-8e2a-0d10cc275f62/profile/logo.jpg",
        "images":[
           "http://assets-staging.yourcanteen.com/chef/e5eb1ccf-bd45-4d01-8e2a-0d10cc275f62/profile/5.jpeg"
        ],
        "name":"IndianCow",
        "phoneNumber":"+447887525658",
        "synopsis":"We make good spice, no bad time toilet after you eat.",
        "kitchenName":"IndianCow",
        "deliveryTypes":[
           "COLLECT"
        ],
        "rating":4.9,
        "countOfReviews":1
     },
     "59fc635b-9567-4bc0-916f-0bea6f234ff8":{
        "id":"59fc635b-9567-4bc0-916f-0bea6f234ff8",
        "profileImage":"http://assets-staging.yourcanteen.com/chef/e5eb1ccf-bd45-4d01-8e2a-0d10cc275f62/profile/logo.jpg",
        "images":[
           "http://assets-staging.yourcanteen.com/chef/e5eb1ccf-bd45-4d01-8e2a-0d10cc275f62/profile/5.jpeg"
        ],
        "name":"ItaliLion",
        "phoneNumber":"+447887525658",
        "synopsis":"Pasta, mmm, delicious pasta.",
        "kitchenName":"ItaliLion",
        "deliveryTypes":[
           "COLLECT"
        ],
        "rating":3.2,
        "countOfReviews":1
     }

  },

  "pageInfo":{
     "countOfResults":1,
     "limit":10,
     "offset":0
  }
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
