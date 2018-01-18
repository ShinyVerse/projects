export default function() {
  return [
    {name: 'Sheep' , img: '../../img/sheep.jpg', sound: '../../sounds/sheep.wav'},
    {name: 'chicken', img: '../../img/chicken.jpg', sound: '../../sounds/chicken.wav' },
    {name: 'Cat', img: '../../img/cat.jpg', sound: '../../sounds/cat.wav'  },
    {name: 'Dog', img: '../../img/dog.jpg', sound: '../../sounds/dog.wav' },
  ]
}

//Any other file can import this file. And it will automatically recieve the books reducer.

//Step 1: create the reducer.
//Step 2: wire it into our application. -> wire into index.js (same folder)
