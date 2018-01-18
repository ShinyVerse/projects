export default function() {
  return [
    {name: 'Rhino' , domestic: false },
    {name: 'Leopard', domestic: false},
    {name: 'Cat', domestic: true },
    {name: 'Dog', domestic: true},
  ]
}

//Any other file can import this file. And it will automatically recieve the books reducer.

//Step 1: create the reducer.
//Step 2: wire it into our application. -> wire into index.js (same folder)
